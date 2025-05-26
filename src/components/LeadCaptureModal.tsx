
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';
import { sendLeadToWebhook } from '@/utils/webhookService';
import { validatePhoneNumber } from '@/utils/phoneValidation';

interface LeadCaptureModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const LeadCaptureModal: React.FC<LeadCaptureModalProps> = ({ open, onOpenChange }) => {
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [nameError, setNameError] = React.useState('');
  const [phoneError, setPhoneError] = React.useState('');

  // Функция для определения цены курса на основе URL страницы
  const getCoursePrice = (): string | undefined => {
    const currentPath = window.location.pathname;
    
    if (currentPath.includes('/courses/blockchain-and-crypto')) {
      return '15000'; // Цена для курса "Блокчейн и криптовалюты"
    } else if (currentPath.includes('/courses/bitcoin-and-altcoins')) {
      return '4990'; // Цена для курса "Биткоин и альткоины"
    } else if (currentPath.includes('/courses/premium-crypto-school')) {
      return '50000'; // Цена для курса "Премиальная криптошкола"
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
      // Получаем цену курса
      const coursePrice = getCoursePrice();
      
      console.log("Отправка данных из модального окна:", { name, phone, coursePrice });
      
      // Отправляем данные на веб-хук
      const response = await sendLeadToWebhook({
        name,
        phone,
        source: "Модальное окно курса",
        coursePrice
      });
      
      console.log("Результат отправки:", response);
      
      if (response.success) {
        // Показываем уведомление об успешной отправке
        toast({
          title: "Успешно!",
          description: "Мы отправили вам доступ к курсу",
        });
        
        // Сбрасываем форму и закрываем модальное окно
        setName('');
        setPhone('');
        setNameError('');
        setPhoneError('');
        onOpenChange(false);
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

  const handleClose = () => {
    setName('');
    setPhone('');
    setNameError('');
    setPhoneError('');
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold">Получите доступ к курсу!</DialogTitle>
          <DialogDescription className="text-center">
            Оставьте свои контакты и мы предоставим вам доступ к курсу
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
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
              className="w-full py-6 font-bold bg-crypto-lightPurple hover:bg-crypto-purple text-white"
              disabled={isLoading}
            >
              {isLoading ? 'Загрузка...' : 'Получить доступ'}
            </Button>
            
            <p className="text-xs text-center text-gray-500">
              Нажимая на кнопку, вы соглашаетесь с политикой конфиденциальности
            </p>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LeadCaptureModal;
