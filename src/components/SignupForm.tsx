
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';
import { sendLeadToWebhook } from '@/utils/webhookService';

interface SignupFormProps {
  formType: 'hero' | 'popup' | 'footer' | 'course' | 'about';
  onSubmitSuccess?: () => void;
  courseTitle?: string;
}

const SignupForm: React.FC<SignupFormProps> = ({ formType, onSubmitSuccess, courseTitle }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Формируем источник лида
    const source = courseTitle 
      ? `Форма ${formType} - Курс "${courseTitle}"` 
      : `Форма ${formType}`;
    
    // Отправляем данные на веб-хук
    const webhookSuccess = await sendLeadToWebhook({
      name,
      phone,
      source
    });
    
    // Даже если веб-хук не сработал, показываем пользователю успех
    // чтобы не ухудшать UX
    toast({
      title: "Успешно!",
      description: courseTitle 
        ? `Мы отправили вам доступ к курсу "${courseTitle}"`
        : "Мы отправили вам доступ к бесплатному курсу",
    });
    
    // Логируем результат для отладки
    if (webhookSuccess) {
      console.log("Данные успешно отправлены на веб-хук");
    } else {
      console.error("Не удалось отправить данные на веб-хук");
    }
    
    // Сбрасываем форму
    setName('');
    setPhone('');
    setIsLoading(false);
    
    if (onSubmitSuccess) {
      onSubmitSuccess();
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
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-3 bg-gray-50"
          />
        </div>
        
        <div>
          <Input
            type="tel"
            placeholder="Номер телефона"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="w-full p-3 bg-gray-50"
          />
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
