
/**
 * Сервис для отправки данных на веб-хук Google Apps Script
 */

// URL веб-хука Google Apps Script
const WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbxKjjx1UFxi9BupCMnPAIzlmcWqpJjormDNqIGsw2QTFVtluk-hmWHB94kHpDmRGWkX/exec";

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

    // Google Apps Script обычно ожидает данные в URL-encoded формате
    const params = new URLSearchParams();
    params.append("name", data.name);
    params.append("phone", data.phone);
    if (data.source) {
      params.append("source", data.source);
    }

    // Отправляем запрос в формате, который точно принимает Google Apps Script
    const response = await fetch(`${WEBHOOK_URL}?${params.toString()}`, {
      method: "GET", // Используем GET, т.к. это более надежный способ для Google Apps Script
      // Не устанавливаем никаких заголовков, чтобы не вызвать CORS-проблемы
    });

    console.log("Ответ от веб-хука:", response.status, response.statusText);
    
    let responseText = "";
    try {
      // Пробуем получить текст ответа
      responseText = await response.text();
      console.log("Тело ответа:", responseText);
    } catch (textError) {
      console.error("Не удалось прочитать тело ответа:", textError);
    }

    // Возвращаем полную информацию о ответе
    return {
      success: response.status >= 200 && response.status < 300,
      status: response.status,
      statusText: response.statusText,
      responseText
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
