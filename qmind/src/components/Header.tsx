import { useState } from "react";
import { Menu, X, Brain, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Главная", href: "/" },
    { name: "О Методе", href: "/about" },
    { name: "Услуги", href: "/services" },
    { name: "Кейсы", href: "/cases" },
    { name: "Контакты", href: "/contacts" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neural-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-tech rounded-lg">
              <Brain className="w-6 h-6 text-white " />
            </div>
            <div className="flex flex-col">
              <span className="text-lg  bg-gradient-to-r from-blue-600 via-pink-500 to-purple-600 font-bold gradient-text">
                Q-Mind
              </span>
              <span className="text-xs text-neural-600">Insights Hub</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`transition-colors duration-200 font-medium ${
                  isActive(item.href)
                    ? "text-tech-600 border-b-2 border-tech-600"
                    : "text-neural-700 hover:text-tech-600"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/express-audit">
              <Button className="bg-gradient-tech hover:shadow-lg transition-all duration-300">
                <BarChart3 className="w-4 h-4 mr-2" />
                Экспресс-Аудит
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-neural-200">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 transition-colors duration-200 ${
                    isActive(item.href)
                      ? "text-tech-600 bg-tech-50"
                      : "text-neural-700 hover:text-tech-600"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Link to="/express-audit">
                  <Button
                    className="w-full  bg-gradient-tech  hover:shadow-lg transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <BarChart3 className="w-4 h-4 mr-2" />
                    Экспресс-Аудит
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
