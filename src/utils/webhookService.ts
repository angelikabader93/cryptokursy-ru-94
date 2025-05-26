/**
 * Сервис для отправки данных на веб-хук Google Apps Script через простой GET-запрос
 */

import { validatePhoneNumber } from './phoneValidation';

// URL веб-хука Google Apps Script
const WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbx93NsRl0QUeqQbPVjoh_hlaFXKo3cx4zCiytmrS8Esi5856peQbn2alms9VyGjae3J/exec";

// Интерфейс для данных лида
export interface LeadData {
  name: string;
  phone: string;
  source?: string;  // Источник лида (для аналитики)
  coursePrice?: string;  // Цена курса (для записи в столбец D Google Таблицы)
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
 * Форматирует номер телефона для корректного отображения в Google Таблицах
 * @param phone - номер телефона
 * @returns отформатированный номер телефона
 */
const formatPhoneForGoogleSheets = (phone: string): string => {
  const cleanedPhone = phone.trim();
  // Если номер начинается с плюса, обрамляем в одинарные кавычки
  if (cleanedPhone.startsWith('+')) {
    return `'${cleanedPhone}`;
  }
  return cleanedPhone;
};

/**
 * Отправляет данные лида на веб-хук Google Apps Script через простой GET-запрос
 * @param data Данные лида (имя, телефон и опционально цена курса)
 * @returns Promise с результатом отправки
 */
export const sendLeadToWebhook = async (data: LeadData): Promise<WebhookResponse> => {
  try {
    console.log("Проверка данных перед отправкой:", data);
    
    // Проверяем, что имя заполнено
    if (!data.name || data.name.trim().length === 0) {
      throw new Error("Пожалуйста, заполните поле имени");
    }
    
    // Проверяем, что телефон заполнен
    if (!data.phone || data.phone.trim().length === 0) {
      throw new Error("Пожалуйста, заполните поле телефона");
    }
    
    // Валидируем номер телефона
    const phoneValidation = validatePhoneNumber(data.phone);
    if (!phoneValidation.isValid) {
      throw new Error(phoneValidation.errorMessage || "Некорректный номер телефона");
    }
    
    console.log("Данные прошли валидацию, отправка на веб-хук через GET-запрос:", data);
    
    // Кодируем параметры для URL (обеспечиваем корректную передачу кириллицы)
    const encodedName = encodeURIComponent(data.name.trim());
    // Форматируем телефон для Google Таблиц и кодируем
    const formattedPhone = formatPhoneForGoogleSheets(data.phone);
    const encodedPhone = encodeURIComponent(formattedPhone);
    
    // Формируем URL с параметрами для GET-запроса
    let url = `${WEBHOOK_URL}?name=${encodedName}&phone=${encodedPhone}`;
    
    // Добавляем coursePrice, если он передан
    if (data.coursePrice) {
      const encodedCoursePrice = encodeURIComponent(data.coursePrice);
      url += `&coursePrice=${encodedCoursePrice}`;
    }
    
    console.log("URL для отправки:", url);
    
    // Отправляем простой GET-запрос
    const response = await fetch(url, {
      method: 'GET',
      mode: 'no-cors' // Обходим CORS
    });
    
    console.log("Ответ получен, статус:", response.status, response.statusText);
    
    // При mode: 'no-cors' мы не можем читать ответ, но если запрос выполнился без ошибки,
    // считаем его успешным
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
