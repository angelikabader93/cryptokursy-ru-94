
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-purple-700 text-white py-4">
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center flex-wrap gap-4" role="navigation">
          <Link to="/" className="text-xl font-bold">КриптоКурсы</Link>
          <div className="flex gap-8 flex-wrap">
            <Link to="/" className="hover:text-purple-200 transition-colors">Главная</Link>
            <Link to="/#courses" className="hover:text-purple-200 transition-colors">Курсы</Link>
            <Link to="/about" className="hover:text-purple-200 transition-colors">О нас</Link>
            <Link to="/contact" className="hover:text-purple-200 transition-colors">Контакты</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
