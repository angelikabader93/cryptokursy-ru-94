
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import SignupForm from './SignupForm';

const CalloutSection = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="py-16 bg-crypto-blue text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Начните обучение прямо сейчас!</h2>
          <p className="text-xl mb-8">
            Присоединяйтесь к нашей <strong>крипто школе</strong> и начните свой путь в мире криптовалют! Зарегистрируйтесь на бесплатный вводный курс или выберите премиальную программу для глубокого погружения. <em>Крипта – это будущее, и вы можете стать его частью!</em>
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              className="bg-crypto-orange hover:bg-orange-600 text-white font-bold py-6 px-8 text-lg"
              onClick={() => document.getElementById('signup-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Начать бесплатный курс
            </Button>
            <Button 
              variant="outline" 
              className="border-white bg-transparent hover:bg-white hover:text-crypto-blue text-white font-bold py-6 px-8 text-lg"
              onClick={() => setShowModal(true)}
            >
              Узнать о премиум-курсах
            </Button>
          </div>
          
          <div className="mt-8 flex flex-col md:flex-row gap-6 justify-center">
            <a 
              href="https://t.me/cryptoschool" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-center space-x-2 text-white hover:text-crypto-orange transition-colors"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2zm2.807 14.505h-1.758l-.641-5.77-2.927 5.77h-1.857l3.984-7.59h1.748l.631 5.467 2.895-5.467h1.775l-3.85 7.59z"></path>
              </svg>
              <span className="font-medium">Наш Телеграм канал</span>
            </a>
            <a 
              href="https://wa.me/79001234567" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-center space-x-2 text-white hover:text-crypto-orange transition-colors"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.2.3-.767.966-.94 1.164-.173.199-.347.223-.646.075-.3-.15-1.269-.465-2.419-1.485-.896-.795-1.484-1.77-1.66-2.07-.174-.3-.02-.462.13-.587.134-.11.3-.289.45-.437.15-.148.2-.248.3-.447.1-.2.05-.371-.025-.52-.075-.15-.673-1.62-.922-2.206-.242-.579-.487-.5-.673-.51-.173-.008-.371-.01-.571-.01-.2 0-.522.074-.796.372-.273.297-1.045 1.019-1.045 2.487 0 1.468 1.069 2.885 1.219 3.085.15.2 2.098 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.57-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.074-.124-.272-.223-.572-.372zm-5.497 7.508h-.01c-1.58-.06-3.102-.51-4.427-1.274l-.318-.189-3.296.862.881-3.217-.21-.34c-.847-1.347-1.291-2.892-1.291-4.46.002-4.653 3.793-8.438 8.454-8.438 2.259.002 4.38.88 5.972 2.477 1.59 1.597 2.462 3.72 2.46 5.976-.002 4.648-3.8 8.434-8.454 8.434l-.011-.001zm8.451-15.842c-1.932-1.937-4.507-3.003-7.244-3.005-5.643 0-10.237 4.587-10.24 10.229 0 1.803.477 3.567 1.38 5.117l-1.468 5.355 5.494-1.44c1.493.81 3.183 1.237 4.894 1.238h.005c5.642 0 10.235-4.587 10.237-10.229.002-2.731-1.063-5.306-2.998-7.242l-.06-.013z"></path>
              </svg>
              <span className="font-medium">Написать в WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Получите информацию о премиум-курсах</DialogTitle>
            <DialogDescription>
              Заполните форму, и наш эксперт свяжется с вами для консультации.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <SignupForm formType="popup" onSubmitSuccess={() => setShowModal(false)} />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CalloutSection;
