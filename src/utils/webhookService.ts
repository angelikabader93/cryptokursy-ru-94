
/**
 * Сервис для отправки данных на веб-хук Google Apps Script через простой GET-запрос
 */

// URL веб-хука Google Apps Script
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
 * Отправляет данные лида на веб-хук Google Apps Script через простой GET-запрос
 * @param data Данные лида (имя и телефон)
 * @returns Promise с результатом отправки
 */
export const sendLeadToWebhook = async (data: LeadData): Promise<WebhookResponse> => {
  try {
    console.log("Отправка данных на веб-хук через GET-запрос:", data);
    
    // Кодируем параметры для URL (обеспечиваем корректную передачу кириллицы)
    const encodedName = encodeURIComponent(data.name);
    const encodedPhone = encodeURIComponent(data.phone);
    
    // Формируем URL с параметрами для GET-запроса (без callback, как в вашем примере)
    const url = `${WEBHOOK_URL}?name=${encodedName}&phone=${encodedPhone}`;
    console.log("URL для отправки:", url);
    
    // Отправляем простой GET-запрос
    const response = await fetch(url, {
      method: 'GET',
      mode: 'no-cors' // Обходим CORS
    });
    
    console.log("Ответ получен, статус:", response.status, response.statusText);
    
    // При mode: 'no-cors' мы не можем читать ответ, но если запрос выполнился без ошибки,
    // считаем его успешным (как в вашем примере PowerShell)
    return {
      success: true,
      status: response.status || 200,
      statusText: response.statusText || "OK",
      responseText: "Данные отправлены успешно"
    };
    
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
