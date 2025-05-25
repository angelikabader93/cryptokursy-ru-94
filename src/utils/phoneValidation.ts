
/**
 * Утилита для валидации номеров телефона
 * Поддерживает российские и международные номера
 */

export interface PhoneValidationResult {
  isValid: boolean;
  errorMessage?: string;
}

/**
 * Валидирует номер телефона согласно требованиям:
 * - Российские номера: +7 или 8, затем 10 цифр
 * - Международные номера: от 7 до 15 цифр, может начинаться с кода страны
 * - Игнорирует пробелы, дефисы, скобки
 * @param phone - номер телефона для проверки
 * @returns результат валидации с флагом и сообщением об ошибке
 */
export const validatePhoneNumber = (phone: string): PhoneValidationResult => {
  if (!phone || typeof phone !== 'string') {
    return {
      isValid: false,
      errorMessage: "Номер телефона не может быть пустым"
    };
  }

  // Удаляем пробелы, дефисы, скобки
  const cleanedPhone = phone.replace(/[\s\-\(\)]/g, '');
  
  // Проверяем, что остались только цифры и максимум один знак "+" в начале
  const validCharactersRegex = /^(\+?\d+)$/;
  if (!validCharactersRegex.test(cleanedPhone)) {
    return {
      isValid: false,
      errorMessage: "Номер телефона может содержать только цифры и знак '+' в начале"
    };
  }
  
  // Проверяем, что знак "+" может быть только в начале
  const plusCount = (cleanedPhone.match(/\+/g) || []).length;
  if (plusCount > 1 || (plusCount === 1 && !cleanedPhone.startsWith('+'))) {
    return {
      isValid: false,
      errorMessage: "Знак '+' может быть только в начале номера"
    };
  }
  
  // Получаем только цифры для проверки длины
  const digitsOnly = cleanedPhone.replace(/\+/g, '');
  
  // Проверка на минимальную длину (должно быть хотя бы 7 цифр)
  if (digitsOnly.length < 7) {
    return {
      isValid: false,
      errorMessage: "Номер телефона слишком короткий (минимум 7 цифр)"
    };
  }
  
  // Проверка на максимальную длину (не более 15 цифр)
  if (digitsOnly.length > 15) {
    return {
      isValid: false,
      errorMessage: "Номер телефона слишком длинный (максимум 15 цифр)"
    };
  }
  
  // Специальная проверка для российских номеров
  if (cleanedPhone.startsWith('+7') || cleanedPhone.startsWith('8')) {
    const russianPhoneRegex = /^(?:\+7|8)\d{10}$/;
    if (!russianPhoneRegex.test(cleanedPhone)) {
      return {
        isValid: false,
        errorMessage: "Некорректный российский номер. Используйте формат +79991234567 или 89991234567"
      };
    }
  }
  
  return {
    isValid: true
  };
};

/**
 * Форматирует номер телефона, удаляя лишние символы
 * @param phone - номер телефона
 * @returns очищенный номер телефона
 */
export const formatPhoneNumber = (phone: string): string => {
  return phone.replace(/[\s\-\(\)]/g, '');
};
