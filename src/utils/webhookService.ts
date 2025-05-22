
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

    // Создаем объект FormData для отправки
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("phone", data.phone);
    if (data.source) {
      formData.append("source", data.source);
    }

    // CORS для Google Apps Script требует особого подхода
    // Отправляем запрос в формате, который принимает Google Apps Script
    const response = await fetch(WEBHOOK_URL, {
      method: "POST",
      body: formData,
      // Не указываем mode: "no-cors" и не устанавливаем заголовки Content-Type,
      // позволим браузеру автоматически установить правильные заголовки для FormData
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
