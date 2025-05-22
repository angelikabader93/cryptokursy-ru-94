
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
import { sendLeadToWebhook, WebhookResponse } from '@/utils/webhookService';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface LeadCaptureModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const LeadCaptureModal: React.FC<LeadCaptureModalProps> = ({ open, onOpenChange }) => {
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [debugResponse, setDebugResponse] = React.useState<WebhookResponse | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Отправляем данные на веб-хук
      const response = await sendLeadToWebhook({
        name,
        phone,
        source: "Модальное окно лида"
      });
      
      // Сохраняем полный ответ для отладки
      setDebugResponse(response);
      
      // Показываем уведомление об успешной отправке
      toast({
        title: response.success ? "Успешно!" : "Внимание!",
        description: response.success 
          ? "Мы отправили вам доступ к бесплатному курсу" 
          : `Ваш запрос получен, но возможны задержки в обработке. Статус: ${response.status}`,
      });
      
      // Логируем результат для отладки
      console.log("Результат отправки формы:", response);
      
      if (response.success) {
        // Сбрасываем форму, но НЕ закрываем окно в режиме отладки
        setName('');
        setPhone('');
      }
    } catch (error) {
      console.error("Ошибка при отправке формы:", error);
      setDebugResponse({
        success: false,
        status: 0,
        statusText: "Исключение в коде",
        error: error instanceof Error ? error.message : String(error)
      });
      toast({
        title: "Ошибка",
        description: "Произошла ошибка при отправке данных. Пожалуйста, попробуйте позже.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setDebugResponse(null);
    setName('');
    setPhone('');
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold">Получите бесплатный доступ!</DialogTitle>
          <DialogDescription className="text-center">
            Оставьте свои контакты и мы предоставим вам доступ к бесплатному курсу
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          {debugResponse ? (
            <div className="space-y-4">
              <Alert className={debugResponse.success ? "bg-green-50 border-green-300" : "bg-red-50 border-red-300"}>
                <AlertTitle className={debugResponse.success ? "text-green-800" : "text-red-800"}>
                  Отладочная информация о запросе
                </AlertTitle>
                <AlertDescription>
                  <div className="space-y-2 text-sm">
                    <p><strong>Статус:</strong> {debugResponse.status} {debugResponse.statusText}</p>
                    <p><strong>Успех:</strong> {debugResponse.success ? "Да" : "Нет"}</p>
                    {debugResponse.error && (
                      <p><strong>Ошибка:</strong> {debugResponse.error}</p>
                    )}
                    {debugResponse.responseText && (
                      <div>
                        <p><strong>Ответ сервера:</strong></p>
                        <pre className="mt-1 p-2 bg-gray-100 rounded text-xs overflow-auto max-h-40">
                          {debugResponse.responseText}
                        </pre>
                      </div>
                    )}
                  </div>
                </AlertDescription>
              </Alert>
              
              <div className="flex space-x-2">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={handleClose}
                  className="w-1/2"
                >
                  Закрыть
                </Button>
                <Button 
                  type="button" 
                  onClick={() => setDebugResponse(null)}
                  className="w-1/2"
                >
                  Отправить еще
                </Button>
              </div>
            </div>
          ) : (
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
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LeadCaptureModal;
