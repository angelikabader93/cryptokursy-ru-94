
import React from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { cn } from '@/lib/utils';

interface FloatingCoursePriceBarProps {
  courseTitle: string;
  price: string;
  isVisible: boolean;
}

const FloatingCoursePriceBar: React.FC<FloatingCoursePriceBarProps> = ({
  courseTitle,
  price,
  isVisible
}) => {
  // Функция для определения отображения цены
  const getPriceDisplay = () => {
    if (price === "Бесплатно") {
      return { 
        price: "Бесплатно", 
        originalPrice: "", 
        discount: "",
        badgeColor: "bg-green-100 text-green-700",
        badgeText: "ДОСТУПНО",
        buttonText: "Начать бесплатно"
      };
    } else if (price === "Платно") {
      return { 
        price: "15 000 ₽", 
        originalPrice: "20 000 ₽", 
        discount: "25% скидка",
        badgeColor: "bg-blue-100 text-blue-700",
        badgeText: "СТАНДАРТ",
        buttonText: "Записаться на курс"
      };
    } else {
      return { 
        price: "50 000 ₽", 
        originalPrice: "75 000 ₽", 
        discount: "33% скидка",
        badgeColor: "bg-purple-100 text-purple-700",
        badgeText: "ПРЕМИУМ",
        buttonText: "Записаться на курс"
      };
    }
  };

  const priceData = getPriceDisplay();

  return (
    <div 
      className={cn(
        "fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg transition-transform duration-300 z-50 py-3 px-4 md:py-4",
        isVisible ? "translate-y-0" : "translate-y-full"
      )}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-1 line-clamp-1">{courseTitle}</h3>
              <div className="flex items-center gap-2">
                <Badge className={priceData.badgeColor}>{priceData.badgeText}</Badge>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-crypto-blue">{priceData.price}</span>
                  {priceData.originalPrice && (
                    <span className="text-sm text-gray-400 line-through">{priceData.originalPrice}</span>
                  )}
                </div>
              </div>
            </div>
          </div>
          
          <Button 
            className={`${
              price === "Бесплатно" 
                ? "bg-gradient-to-r from-crypto-orange to-amber-500 hover:from-amber-500 hover:to-crypto-orange" 
                : "bg-gradient-to-r from-crypto-purple to-crypto-lightPurple hover:from-crypto-lightPurple hover:to-crypto-purple"
            } text-white px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition-all font-bold whitespace-nowrap`}
            onClick={() => document.getElementById('signup-form-course')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {priceData.buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FloatingCoursePriceBar;
