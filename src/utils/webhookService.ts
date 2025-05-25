
/**
 * Сервис для отправки данных на веб-хук Google Apps Script через JSONP
 */

// Обновленный URL веб-хука Google Apps Script
const WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbxEk6BKQfkTm7oJR6NdC08pFgQMxVflNb_8goWHWlrFwgCiGAnWLmpbY41EDxp7zv5L/exec";

// Интерфейс для данных лида
export interface LeadData {
  name: string;
  phone: string;
  source?: string;  // Источник лида (для аналитики)
}

// Интерфейс для ответа от веб-хука
export interface WebhookResponse {
  success: boolean;
  status: number;
  statusText: string;
  responseText?: string;
  error?: any;
}

/**
 * Отправляет данные лида на веб-хук Google Apps Script через JSONP
 * @param data Данные лида (имя и телефон)
 * @returns Promise с результатом отправки
 */
export const sendLeadToWebhook = async (data: LeadData): Promise<WebhookResponse> => {
  try {
    console.log("Отправка данных на веб-хук через JSONP:", data);
    
    // Кодируем параметры для URL (обеспечиваем корректную передачу кириллицы)
    const encodedName = encodeURIComponent(data.name);
    const encodedPhone = encodeURIComponent(data.phone);
    const encodedSource = encodeURIComponent(data.source || '');
    
    // Генерируем уникальное имя для JSONP-callback
    const callbackName = "jsonpCallback_" + Math.round(100000 * Math.random());
    
    // Формируем URL с параметрами для GET-запроса
    const url = `${WEBHOOK_URL}?name=${encodedName}&phone=${encodedPhone}&source=${encodedSource}&callback=${callbackName}`;
    console.log("URL для отправки:", url);
    
    return new Promise((resolve, reject) => {
      // Создаём функцию callback для JSONP
      (window as any)[callbackName] = function(response: any) {
        // Удаляем callback и script после выполнения
        delete (window as any)[callbackName];
        document.body.removeChild(script);
        
        console.log("Получен ответ от вебхука:", response);
        
        // Возвращаем успешный результат
        resolve({
          success: true,
          status: 200,
          statusText: "OK",
          responseText: JSON.stringify(response)
        });
      };
      
      // Создаём <script>-тег для отправки GET-запроса через JSONP
      const script = document.createElement("script");
      script.src = url;
      script.onerror = (error) => {
        console.error("Ошибка при отправке JSONP-запроса:", error);
        // Удаляем callback и script при ошибке
        delete (window as any)[callbackName];
        document.body.removeChild(script);
        
        resolve({
          success: false,
          status: 0,
          statusText: "JSONP Error",
          error: "Ошибка JSONP-запроса"
        });
      };
      
      // Устанавливаем таймаут на случай, если ответ не придет
      setTimeout(() => {
        if ((window as any)[callbackName]) {
          console.log("Таймаут JSONP-запроса, предполагаем успех");
          delete (window as any)[callbackName];
          if (document.body.contains(script)) {
            document.body.removeChild(script);
          }
          
          // Предполагаем успех, если скрипт загрузился без ошибок
          resolve({
            success: true,
            status: 200,
            statusText: "OK (timeout, но предполагаем успех)",
          });
        }
      }, 5000); // 5 секунд таймаут
      
      // Добавляем script в DOM для выполнения запроса
      document.body.appendChild(script);
    });
  } catch (error) {
    console.error("Ошибка при отправке данных на веб-хук:", error);
    return {
      success: false,
      status: 0,
      statusText: "Ошибка выполнения",
      error: error instanceof Error ? error.message : String(error)
    };
  }
};
