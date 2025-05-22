
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';
import { sendLeadToWebhook, WebhookResponse } from '@/utils/webhookService';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface SignupFormProps {
  formType: 'hero' | 'popup' | 'footer' | 'course' | 'about';
  onSubmitSuccess?: () => void;
  courseTitle?: string;
}

const SignupForm: React.FC<SignupFormProps> = ({ formType, onSubmitSuccess, courseTitle }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [debugResponse, setDebugResponse] = useState<WebhookResponse | null>(null);
  const [debugDialogOpen, setDebugDialogOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Формируем источник лида
      const source = courseTitle 
        ? `Форма ${formType} - Курс "${courseTitle}"` 
        : `Форма ${formType}`;
      
      // Отправляем данные на веб-хук
      const response = await sendLeadToWebhook({
        name,
        phone,
        source
      });
      
      // Сохраняем полный ответ для отладки и показываем диалог
      setDebugResponse(response);
      setDebugDialogOpen(true);
      
      // Показываем уведомление результата отправки
      toast({
        title: response.success ? "Успешно!" : "Внимание!",
        description: response.success 
          ? (courseTitle 
            ? `Мы отправили вам доступ к курсу "${courseTitle}"`
            : "Мы отправили вам доступ к бесплатному курсу")
          : `Ваш запрос получен, но возможны задержки в обработке. Статус: ${response.status}`,
      });
      
      // Логируем результат для отладки
      console.log(`Результат отправки данных на веб-хук (${formType}):`, response);
      
      if (response.success) {
        // Сбрасываем форму
        setName('');
        setPhone('');
        
        if (onSubmitSuccess) {
          onSubmitSuccess();
        }
      }
    } catch (error) {
      console.error("Ошибка при отправке формы:", error);
      
      setDebugResponse({
        success: false,
        status: 0,
        statusText: "Исключение в коде",
        error: error instanceof Error ? error.message : String(error)
      });
      setDebugDialogOpen(true);
      
      toast({
        title: "Ошибка",
        description: "Произошла ошибка при отправке данных. Пожалуйста, попробуйте позже.",
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
      
      {/* Диалог для отображения отладочной информации */}
      <Dialog open={debugDialogOpen} onOpenChange={setDebugDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Отладочная информация</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            {debugResponse && (
              <Alert className={debugResponse.success ? "bg-green-50 border-green-300" : "bg-red-50 border-red-300"}>
                <AlertTitle className={debugResponse.success ? "text-green-800" : "text-red-800"}>
                  Результат отправки формы ({formType})
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
            )}
            <div className="mt-4 flex justify-end">
              <Button onClick={() => setDebugDialogOpen(false)}>
                Закрыть
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SignupForm;
