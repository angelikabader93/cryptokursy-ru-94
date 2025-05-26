import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';
import { sendLeadToWebhook } from '@/utils/webhookService';
import { validatePhoneNumber } from '@/utils/phoneValidation';

interface SignupFormProps {
  formType: 'hero' | 'popup' | 'footer' | 'course' | 'about' | 'landing';
  onSubmitSuccess?: () => void;
  courseTitle?: string;
}

const SignupForm: React.FC<SignupFormProps> = ({ formType, onSubmitSuccess, courseTitle }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  // Функция для определения цены курса на основе URL страницы
  const getCoursePrice = (): string | undefined => {
    const currentPath = window.location.pathname;
    
    // Определяем цену для верхних форм на страницах курсов
    if (formType === 'hero' || formType === 'course') {
      if (currentPath.includes('/courses/blockchain-and-crypto')) {
        return '15000'; // Цена для курса "Блокчейн и криптовалюты"
      } else if (currentPath.includes('/courses/bitcoin-and-altcoins')) {
        return '29000'; // Цена для курса "Биткоин и альткоины"
      } else if (currentPath.includes('/courses/premium-crypto-school')) {
        return '50000'; // Цена для курса "Премиальная криптошкола"
      }
    }
    
    return undefined;
  };

  const validateForm = (): boolean => {
    let isValid = true;
    
    // Сброс ошибок
    setNameError('');
    setPhoneError('');
    
    // Проверка имени
    if (!name || name.trim().length === 0) {
      setNameError('Пожалуйста, введите ваше имя');
      isValid = false;
    }
    
    // Проверка телефона
    if (!phone || phone.trim().length === 0) {
      setPhoneError('Пожалуйста, введите номер телефона');
      isValid = false;
    } else {
      const phoneValidation = validatePhoneNumber(phone);
      if (!phoneValidation.isValid) {
        setPhoneError(phoneValidation.errorMessage || 'Некорректный номер телефона');
        isValid = false;
      }
    }
    
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Формируем источник лида
      const source = courseTitle 
        ? `Форма ${formType} - Курс "${courseTitle}"` 
        : `Форма ${formType}`;
      
      // Получаем цену курса, если это верхняя форма на странице курса
      const coursePrice = getCoursePrice();
      
      console.log("Отправка данных:", { name, phone, source, coursePrice });
      
      // Отправляем данные на веб-хук
      const response = await sendLeadToWebhook({
        name,
        phone,
        source,
        coursePrice
      });
      
      console.log("Результат отправки:", response);
      
      if (response.success) {
        // Показываем успешное уведомление
        toast({
          title: "Успешно!",
          description: courseTitle 
            ? `Мы отправили вам доступ к курсу "${courseTitle}"`
            : "Мы отправили вам доступ к бесплатному курсу",
        });
        
        // Сбрасываем форму
        setName('');
        setPhone('');
        setNameError('');
        setPhoneError('');
        
        if (onSubmitSuccess) {
          onSubmitSuccess();
        }
      } else {
        throw new Error(response.error || 'Неизвестная ошибка при отправке данных');
      }
      
    } catch (error) {
      console.error("Ошибка при отправке формы:", error);
      toast({
        title: "Ошибка",
        description: error instanceof Error ? error.message : "Произошла ошибка при отправке данных. Пожалуйста, попробуйте позже.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const getFormTitle = () => {
    switch (formType) {
      case 'hero':
        return 'Получите бесплатный доступ к курсу';
      case 'popup':
        return 'Не упустите возможность!';
      case 'footer':
        return 'Присоединяйтесь к нам';
      case 'course':
        return courseTitle ? `Запись на курс "${courseTitle}"` : 'Запись на курс';
      case 'about':
        return 'Присоединяйтесь к нашему сообществу';
      case 'landing':
        return 'Получите бесплатный доступ к курсу';
      default:
        return 'Зарегистрируйтесь сейчас';
    }
  };

  const getButtonText = () => {
    switch (formType) {
      case 'hero':
        return 'Получить бесплатный доступ';
      case 'popup':
        return 'Начать обучение';
      case 'footer':
        return 'Присоединиться';
      case 'course':
        return 'Записаться на курс';
      case 'about':
        return 'Присоединиться к нам';
      case 'landing':
        return 'ПОЛУЧИТЬ БЕСПЛАТНЫЙ ДОСТУП';
      default:
        return 'Отправить';
    }
  };

  return (
    <div id="signup-form" className="w-full">
      <h3 className={`text-xl md:text-2xl font-bold mb-4 ${formType === 'footer' ? 'text-white' : 'text-crypto-blue'}`}>
        {getFormTitle()}
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input
            placeholder="Ваше имя"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              if (nameError) setNameError('');
            }}
            required
            className={`w-full p-3 bg-gray-50 ${nameError ? 'border-red-500' : ''}`}
          />
          {nameError && (
            <p className="text-red-500 text-sm mt-1">{nameError}</p>
          )}
        </div>
        
        <div>
          <Input
            type="tel"
            placeholder="Номер телефона"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
              if (phoneError) setPhoneError('');
            }}
            required
            className={`w-full p-3 bg-gray-50 ${phoneError ? 'border-red-500' : ''}`}
          />
          {phoneError && (
            <p className="text-red-500 text-sm mt-1">{phoneError}</p>
          )}
        </div>
        
        <Button 
          type="submit" 
          className={`w-full py-6 font-bold ${
            formType === 'popup' || formType === 'course' 
              ? 'bg-crypto-orange hover:bg-orange-600 text-white' 
              : 'bg-crypto-lightPurple hover:bg-crypto-purple text-white'
          }`}
          disabled={isLoading}
        >
          {isLoading ? 'Загрузка...' : getButtonText()}
        </Button>
        
        <p className={`text-xs text-center ${formType === 'footer' ? 'text-gray-200' : 'text-gray-500'}`}>
          Нажимая на кнопку, вы соглашаетесь с политикой конфиденциальности
        </p>
      </form>
    </div>
  );
};

export default SignupForm;
