
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LeadCaptureModal from '@/components/LeadCaptureModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();

  const handleCoursesClick = (e: React.MouseEvent) => {
    if (location.pathname === '/') {
      e.preventDefault();
      document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <span className="text-crypto-blue font-heading font-extrabold text-2xl">КРИПТО</span>
            <span className="text-crypto-orange font-heading font-bold text-2xl">КУРСЫ</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link 
            to="/" 
            className={`font-medium hover:text-crypto-purple transition-colors ${location.pathname === '/' ? 'text-crypto-purple' : 'text-gray-700'}`}
          >
            Главная
          </Link>
          <Link 
            to={location.pathname === '/' ? '#courses' : '/#courses'}
            onClick={handleCoursesClick}
            className={`font-medium hover:text-crypto-purple transition-colors ${location.pathname.includes('/courses') || location.hash === '#courses' ? 'text-crypto-purple' : 'text-gray-700'}`}
          >
            Курсы
          </Link>
          <Link 
            to="/faq" 
            className={`font-medium hover:text-crypto-purple transition-colors ${location.pathname === '/faq' ? 'text-crypto-purple' : 'text-gray-700'}`}
          >
            FAQ
          </Link>
          <Link 
            to="/about" 
            className={`font-medium hover:text-crypto-purple transition-colors ${location.pathname === '/about' ? 'text-crypto-purple' : 'text-gray-700'}`}
          >
            О нас
          </Link>
          <Link 
            to="/contact" 
            className={`font-medium hover:text-crypto-purple transition-colors ${location.pathname === '/contact' ? 'text-crypto-purple' : 'text-gray-700'}`}
          >
            Контакты
          </Link>
        </nav>

        <div className="hidden md:block">
          <Button 
            className="bg-crypto-orange text-white font-bold hover:bg-orange-600"
            onClick={() => setShowModal(true)}
          >
            Начать бесплатно
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="md:hidden text-gray-700"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white w-full py-4 px-4 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className={`font-medium hover:text-crypto-purple transition-colors px-2 py-1 ${location.pathname === '/' ? 'text-crypto-purple' : 'text-gray-700'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Главная
            </Link>
            <Link 
              to={location.pathname === '/' ? '#courses' : '/#courses'}
              onClick={(e) => {
                if (location.pathname === '/') {
                  e.preventDefault();
                  document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' });
                }
                setIsMenuOpen(false);
              }}
              className={`font-medium hover:text-crypto-purple transition-colors px-2 py-1 ${location.pathname.includes('/courses') || location.hash === '#courses' ? 'text-crypto-purple' : 'text-gray-700'}`}
            >
              Курсы
            </Link>
            <Link 
              to="/faq" 
              className={`font-medium hover:text-crypto-purple transition-colors px-2 py-1 ${location.pathname === '/faq' ? 'text-crypto-purple' : 'text-gray-700'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link 
              to="/about" 
              className={`font-medium hover:text-crypto-purple transition-colors px-2 py-1 ${location.pathname === '/about' ? 'text-crypto-purple' : 'text-gray-700'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              О нас
            </Link>
            <Link 
              to="/contact" 
              className={`font-medium hover:text-crypto-purple transition-colors px-2 py-1 ${location.pathname === '/contact' ? 'text-crypto-purple' : 'text-gray-700'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Контакты
            </Link>
            <Button 
              className="bg-crypto-orange text-white font-bold hover:bg-orange-600 w-full"
              onClick={() => {
                setShowModal(true);
                setIsMenuOpen(false);
              }}
            >
              Начать бесплатно
            </Button>
          </nav>
        </div>
      )}
      
      <LeadCaptureModal open={showModal} onOpenChange={setShowModal} />
    </header>
  );
};

export default Header;
