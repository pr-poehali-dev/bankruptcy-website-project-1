import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
                <Icon name="Scale" className="text-white" size={20} />
              </div>
              <span className="text-xl font-bold">БезДолгов59</span>
            </div>
            <p className="text-sm text-gray-400">
              Профессиональная помощь в процедуре банкротства с 2020 года
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Банкротство физ. лиц
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Банкротство юр. лиц
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Реструктуризация
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Консультации
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Компания</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  О нас
                </a>
              </li>
              <li>
                <a href="#cases" className="hover:text-white transition-colors">
                  Кейсы
                </a>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition-colors">
                  Блог
                </Link>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Контакты
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                <span>+7 (800) 123-45-67</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                <span>infofaq@bezdolgov.ru</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="MapPin" size={16} />
                <span>Пермь, ул. Екатерининская 109А, оф. 305</span>
              </li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a
                href="https://t.me/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
              >
                <Icon name="Send" size={16} />
              </a>
              <a
                href="https://vk.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zm3.45 14.8c-.43.46-1.23.72-2.38.76-.39.01-.82.02-1.28.02-1.18 0-2.04-.08-2.56-.23-.69-.2-1.23-.54-1.65-1.03-.42-.49-.74-1.18-1.01-2.09l-.01-.04c-.15-.51-.28-.99-.4-1.43-.37-1.36-.56-2.05-1.16-2.05-.06 0-.16.02-.32.08-.15.06-.32.15-.51.28l-.39-.49c.24-.21.48-.42.72-.62.42-.36.77-.61 1.02-.74.45-.24.88-.36 1.28-.38.85-.04 1.37.5 1.58 1.61.22 1.21.37 1.97.45 2.27.24 1.07.5 1.61.8 1.61.23 0 .58-.36 1.04-1.09.46-.72.71-1.27.75-1.64.07-.61-.18-0.92-.74-.92-.26 0-.53.06-.82.17.54-1.77 1.58-2.63 3.11-2.59 1.13.03 1.66.77 1.6 2.21-.04.89-.35 1.86-0.94 2.91-.56 1-.84 1.64-.84 1.93 0 .19.08.38.25.57.17.19.47.43.91.72.43.29.76.51.98.66.85.57 1.29 1.08 1.32 1.54.04.7-.31 1.05-1.05 1.05-.22 0-.49-.08-.82-.25z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2021-2026 БезДолгов59. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;