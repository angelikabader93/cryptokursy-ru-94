
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

interface LeadCaptureModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const LeadCaptureModal: React.FC<LeadCaptureModalProps> = ({ open, onOpenChange }) => {
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Отправляем данные на веб-хук
    const webhookSuccess = await sendLeadToWebhook({
      name,
      phone,
      source: "Модальное окно лида"
    });
    
    // Показываем уведомление об успешной отправке
    toast({
      title: "Успешно!",
      description: "Мы отправили вам доступ к бесплатному курсу",
    });
    
    // Логируем результат для отладки
    if (webhookSuccess) {
      console.log("Данные успешно отправлены на веб-хук из модального окна");
    } else {
      console.error("Не удалось отправить данные на веб-хук из модального окна");
    }
    
    // Сбрасываем форму и закрываем модальное окно
    setName('');
    setPhone('');
    setIsLoading(false);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold">Получите бесплатный доступ!</DialogTitle>
          <DialogDescription className="text-center">
            Оставьте свои контакты и мы предоставим вам доступ к бесплатному курсу
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
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
