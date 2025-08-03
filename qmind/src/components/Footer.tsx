
import { Brain, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neural-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-tech rounded-lg">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold">HumanFactor</span>
                <span className="text-xs text-neural-400">Insights Hub</span>
              </div>
            </div>
            <p className="text-neural-400 text-sm leading-relaxed">
              Инновационная платформа для научного анализа человеческого фактора 
              и управления рисками в команде.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Услуги</h4>
            <ul className="space-y-2 text-sm text-neural-400">
              <li>
                <a href="#method" className="hover:text-white transition-colors">
                  ГРВ-диагностика
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Корпоративные пакеты
                </a>
              </li>
              <li>
                <a href="#express-audit" className="hover:text-white transition-colors">
                  Экспресс-аудит
                </a>
              </li>
              <li>
                <span className="text-neural-500">Профориентация (скоро)</span>
              </li>
              <li>
                <span className="text-neural-500">Совместимость пар (скоро)</span>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4">Компания</h4>
            <ul className="space-y-2 text-sm text-neural-400">
              <li>
                <a href="#method" className="hover:text-white transition-colors">
                  О методе
                </a>
              </li>
              <li>
                <a href="#cases" className="hover:text-white transition-colors">
                  Кейсы
                </a>
              </li>
              <li>
                <a href="#contacts" className="hover:text-white transition-colors">
                  Контакты
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Политика конфиденциальности
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Контакты</h4>
            <div className="space-y-3 text-sm text-neural-400">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-tech-400" />
                <span>info@humanfactor-insights.ru</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-tech-400" />
                <span>+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-tech-400 flex-shrink-0 mt-0.5" />
                <span>Москва, ул. Инновационная, 15</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-neural-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-neural-400">
              © {currentYear} HumanFactor Insights Hub. Все права защищены.
            </div>
            <div className="text-sm text-neural-400">
              ООО "Инсайты Человеческого Фактора" | ИНН 7777777777
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
