
/**
 * Сервис для отправки данных на веб-хук Google Apps Script
 */

// URL веб-хука Google Apps Script
const WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbwRQD65zXOO7LZ9aJ-QL6kL4Fu1VQ972X_46V05k-gcgRS3TlUJuhXUEfx99BZ9Rvxm/exec";

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
 * Отправляет данные лида на веб-хук Google Apps Script
 * @param data Данные лида (имя и телефон)
 * @returns Promise с результатом отправки и дополнительной информацией
 */
export const sendLeadToWebhook = async (data: LeadData): Promise<WebhookResponse> => {
  try {
    console.log("Отправка данных на веб-хук:", data);
    
    // Формируем параметры для GET запроса (формат, ожидаемый Google Apps Script)
    const params = new URLSearchParams();
    params.append('name', data.name);
    params.append('phone', data.phone);
    params.append('source', data.source || '');
    
    // Создаем URL с параметрами для GET запроса
    const url = `${WEBHOOK_URL}?${params.toString()}`;
    console.log("URL для отправки:", url);
    
    // Отправляем GET запрос (этот метод точно работает с Google Apps Script)
    const response = await fetch(url, {
      method: "GET",
      mode: "no-cors" // Режим no-cors для обхода CORS-ограничений
    });

    // Из-за режима no-cors мы не можем прочитать ответ напрямую
    // Предполагаем, что запрос успешен, если не произошло исключения
    return {
      success: true,
      status: 200,
      statusText: "OK (предполагаемый статус - режим no-cors)"
    };
  } catch (error) {
    console.error("Ошибка при отправке данных на веб-хук:", error);
    return {
      success: false,
      status: 0,
      statusText: "Ошибка запроса",
      error: error instanceof Error ? error.message : String(error)
    };
  }
};
