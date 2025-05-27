
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 text-center">
      <div className="container mx-auto px-4">
        <p>&copy; 2024 КриптоКурсы. Все права защищены.</p>
        <div className="mt-4 space-x-4">
          <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
            Политика конфиденциальности
          </Link>
          <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
            Пользовательское соглашение
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
