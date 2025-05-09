
import React from 'react';
import { Link } from 'react-router-dom';
import SignupForm from './SignupForm';

const Footer = () => {
  return (
    <footer className="bg-crypto-blue text-white pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <span className="text-white font-heading font-extrabold text-2xl">КРИПТО</span>
              <span className="text-crypto-orange font-heading font-bold text-2xl">СТАРТ</span>
            </div>
            <p className="mb-6">
              Мы предлагаем бесплатные и платные курсы по криптовалютам и блокчейну для всех уровней подготовки.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-crypto-orange transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-crypto-orange transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-crypto-orange transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-crypto-orange transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm3.521 16.766c-.18.153-.452.19-.684.126-1.881-.766-4.184-.958-6.916-.526-.263.04-.527-.138-.575-.408-.045-.271.138-.527.408-.575 3.012-.458 5.517-.261 7.622.612.271.126.369.39.253.661l-.108.11zm.918-2.017c-.215.215-.557.306-.833.215-2.152-.645-5.427-.833-7.97-.458-.306.087-.645-.087-.738-.398-.087-.306.09-.645.398-.738 2.913-.431 6.496-.215 8.917.526.368.126.463.494.337.857l-.111-.004zm.092-1.971c-2.582-.789-6.849-.861-9.325-.477-.394.117-.789-.117-.917-.5-.117-.394.117-.789.5-.917 2.832-.45 7.54-.365 10.525.563.365.144.557.557.413.934-.144.343-.557.54-.934.397h-.262z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6">Быстрые ссылки</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="hover:text-crypto-orange transition-colors">Главная</Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-crypto-orange transition-colors">Курсы</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-crypto-orange transition-colors">О нас</Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-crypto-orange transition-colors">Блог</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-crypto-orange transition-colors">Контакты</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6">Контакты</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="h-6 w-6 mr-2 mt-0.5 text-crypto-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span>Москва, ул. Пресненская набережная, 12</span>
              </li>
              <li className="flex items-center">
                <svg className="h-6 w-6 mr-2 text-crypto-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <span>+7 (495) 123-45-67</span>
              </li>
              <li className="flex items-center">
                <svg className="h-6 w-6 mr-2 text-crypto-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <span>info@cryptostart.ru</span>
              </li>
            </ul>
          </div>
          
          <div>
            <SignupForm formType="footer" />
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} КриптоСтарт. Все права защищены.</p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-sm hover:text-crypto-orange transition-colors">Политика конфиденциальности</Link>
              <Link to="/terms" className="text-sm hover:text-crypto-orange transition-colors">Условия использования</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
