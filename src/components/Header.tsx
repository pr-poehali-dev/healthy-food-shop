import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  scrollToSection: (id: string) => void;
}

const Header = ({ scrollToSection }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Icon name="Leaf" className="text-primary" size={32} />
          <h1 className="text-2xl font-bold text-primary">HealthyFood</h1>
        </div>
        
        <nav className="hidden md:flex gap-6">
          <button onClick={() => scrollToSection('home')} className="text-sm font-medium hover:text-primary transition-colors">
            Главная
          </button>
          <button onClick={() => scrollToSection('catalog')} className="text-sm font-medium hover:text-primary transition-colors">
            Каталог
          </button>
          <button onClick={() => scrollToSection('recipes')} className="text-sm font-medium hover:text-primary transition-colors">
            Рецепты
          </button>
          <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-primary transition-colors">
            О нас
          </button>
          <button onClick={() => scrollToSection('delivery')} className="text-sm font-medium hover:text-primary transition-colors">
            Доставка
          </button>
          <button onClick={() => scrollToSection('contacts')} className="text-sm font-medium hover:text-primary transition-colors">
            Контакты
          </button>
        </nav>

        <Button size="sm" className="gap-2">
          <Icon name="ShoppingCart" size={18} />
          <span className="hidden sm:inline">Корзина</span>
        </Button>
      </div>
    </header>
  );
};

export default Header;
