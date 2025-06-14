import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Icon name="Gavel" className="text-amber-500" size={28} />
            <span className="text-xl font-bold text-slate-800">ТоргиПро</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-slate-600 hover:text-slate-900 transition-colors"
            >
              Главная
            </a>
            <a
              href="#"
              className="text-slate-600 hover:text-slate-900 transition-colors"
            >
              Объекты
            </a>
            <a
              href="#"
              className="text-slate-600 hover:text-slate-900 transition-colors"
            >
              Для инвесторов
            </a>
            <a
              href="#"
              className="text-slate-600 hover:text-slate-900 transition-colors"
            >
              О нас
            </a>
            <a
              href="#"
              className="text-slate-600 hover:text-slate-900 transition-colors"
            >
              Контакты
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-amber-500 hover:bg-amber-600 text-white">
              Стать инвестором
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-3">
              <a
                href="#"
                className="text-slate-600 hover:text-slate-900 transition-colors py-2"
              >
                Главная
              </a>
              <a
                href="#"
                className="text-slate-600 hover:text-slate-900 transition-colors py-2"
              >
                Объекты
              </a>
              <a
                href="#"
                className="text-slate-600 hover:text-slate-900 transition-colors py-2"
              >
                Для инвесторов
              </a>
              <a
                href="#"
                className="text-slate-600 hover:text-slate-900 transition-colors py-2"
              >
                О нас
              </a>
              <a
                href="#"
                className="text-slate-600 hover:text-slate-900 transition-colors py-2"
              >
                Контакты
              </a>
              <Button className="bg-amber-500 hover:bg-amber-600 text-white mt-4 w-full">
                Стать инвестором
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
