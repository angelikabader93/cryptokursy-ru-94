
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

    // Создаем JSON строку
    const jsonString = JSON.stringify({
      name: data.name,
      phone: data.phone,
      source: data.source || ''
    });
    
    console.log("JSON для отправки:", jsonString);
    
    // Преобразуем JSON строку в Blob с явной UTF-8 кодировкой
    // это аналог PowerShell: [System.Text.Encoding]::UTF8.GetBytes(jsonString)
    const blob = new Blob([jsonString], { type: 'application/json;charset=utf-8' });
    
    // Отправляем запрос в точности как PowerShell скрипт
    const response = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: blob
    });

    console.log("Статус ответа:", response.status, response.statusText);
    console.log("Заголовки ответа:", [...response.headers.entries()]);
    
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
