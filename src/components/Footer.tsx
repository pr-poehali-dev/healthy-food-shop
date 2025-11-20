import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground py-12">
      <div className="container px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Leaf" size={28} />
              <h3 className="text-xl font-bold">HealthyFood</h3>
            </div>
            <p className="text-sm opacity-90">
              Полезное питание для здоровой жизни
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Покупателям</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li><a href="#catalog" className="hover:opacity-100 transition-opacity">Каталог</a></li>
              <li><a href="#delivery" className="hover:opacity-100 transition-opacity">Доставка</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Оплата</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Информация</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li><a href="#about" className="hover:opacity-100 transition-opacity">О нас</a></li>
              <li><a href="#recipes" className="hover:opacity-100 transition-opacity">Рецепты</a></li>
              <li><a href="#contacts" className="hover:opacity-100 transition-opacity">Контакты</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Мы в соцсетях</h4>
            <div className="flex gap-3">
              <a href="#" className="bg-accent-foreground/10 p-2 rounded-full hover:bg-accent-foreground/20 transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="bg-accent-foreground/10 p-2 rounded-full hover:bg-accent-foreground/20 transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="bg-accent-foreground/10 p-2 rounded-full hover:bg-accent-foreground/20 transition-colors">
                <Icon name="MessageCircle" size={20} />
              </a>
            </div>
          </div>
        </div>
        <Separator className="mb-6 opacity-30" />
        <div className="text-center text-sm opacity-75">
          <p>© 2024 HealthyFood. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
