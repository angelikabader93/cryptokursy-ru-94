
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

    // Формируем данные в формате JSON
    const jsonData = {
      name: data.name,
      phone: data.phone,
      source: data.source || ''
    };
    
    // Преобразуем объект в строку JSON
    const jsonString = JSON.stringify(jsonData);
    console.log("JSON для отправки:", jsonString);

    // Отправляем запрос на вебхук
    const response = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: jsonString // Отправляем строку JSON без Blob
    });

    console.log("Статус ответа:", response.status, response.statusText);
    console.log("Заголовки ответа:", [...response.headers.entries()]);
    
    let responseText = "";
    let responseJson = null;
    
    try {
      // Сначала пробуем получить ответ как JSON
      responseJson = await response.json();
      responseText = JSON.stringify(responseJson);
      console.log("JSON ответ:", responseJson);
    } catch (jsonError) {
      console.log("Не удалось получить JSON, пробуем получить текст");
      try {
        // Если не удалось получить JSON, пробуем получить текст
        responseText = await response.text();
        console.log("Текст ответа:", responseText);
      } catch (textError) {
        console.error("Не удалось прочитать тело ответа:", textError);
      }
    }

    // Возвращаем полную информацию о ответе
    return {
      success: response.status >= 200 && response.status < 300,
      status: response.status,
      statusText: response.statusText,
      responseText: responseText
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
