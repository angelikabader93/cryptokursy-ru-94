
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

/**
 * Отправляет данные лида на веб-хук Google Apps Script
 * @param data Данные лида (имя и телефон)
 * @returns Promise с результатом отправки
 */
export const sendLeadToWebhook = async (data: LeadData): Promise<boolean> => {
  try {
    console.log("Отправка данных на веб-хук:", data);

    // Отправляем POST запрос на веб-хук
    const response = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      mode: "no-cors", // Используем no-cors для обхода CORS-ограничений
    });

    console.log("Ответ от веб-хука получен");
    
    // Из-за режима no-cors мы не можем получить статус ответа,
    // поэтому считаем что запрос выполнен успешно
    return true;
  } catch (error) {
    console.error("Ошибка при отправке данных на веб-хук:", error);
    return false;
  }
};
