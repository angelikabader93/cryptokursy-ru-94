
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead 
        title="Страница не найдена"
        description="Запрашиваемая страница не найдена. Вернитесь на главную страницу КриптоКурсы для изучения криптовалют и блокчейна."
        ogImage="https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2070&auto=format&fit=crop"
      />
      <Header />
      <main className="flex-grow flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-crypto-purple mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Страница не найдена</h2>
            <p className="text-gray-600 mb-8">
              К сожалению, запрашиваемая страница не существует. Возможно, она была перемещена или удалена.
            </p>
          </div>
          
          <Button 
            asChild
            className="bg-crypto-purple hover:bg-crypto-lightPurple text-white font-bold py-3 px-6"
          >
            <a href="/">Вернуться на главную</a>
          </Button>
          
          <div className="mt-8 text-sm text-gray-500">
            <p>Или перейдите к:</p>
            <div className="flex flex-wrap justify-center gap-4 mt-2">
              <a href="/courses/crypto-for-beginners" className="text-crypto-purple hover:underline">Курсы</a>
              <a href="/faq" className="text-crypto-purple hover:underline">FAQ</a>
              <a href="/contact" className="text-crypto-purple hover:underline">Контакты</a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
