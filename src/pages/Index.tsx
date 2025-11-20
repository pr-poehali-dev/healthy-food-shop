import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const products = [
    {
      id: 1,
      name: 'Органические овощи',
      description: 'Свежие сезонные овощи с фермерских хозяйств',
      price: '450₽/кг',
      image: 'https://cdn.poehali.dev/projects/89b5c4eb-a50c-4d25-a37a-f46be2df6583/files/7cdb9674-ec2a-4002-b4fb-d27f82d2ed7c.jpg',
      badge: 'ЭКО'
    },
    {
      id: 2,
      name: 'Смузи-боул',
      description: 'Готовая смесь для полезного завтрака',
      price: '320₽',
      image: 'https://cdn.poehali.dev/projects/89b5c4eb-a50c-4d25-a37a-f46be2df6583/files/b3ef9ac0-4e09-4fa9-9516-a2f9743ca913.jpg',
      badge: 'ХИТ'
    },
    {
      id: 3,
      name: 'Микс орехов и семян',
      description: 'Полезный перекус на каждый день',
      price: '580₽',
      image: 'https://cdn.poehali.dev/projects/89b5c4eb-a50c-4d25-a37a-f46be2df6583/files/3d84fab7-aa0e-46d8-b1ab-052f08b9647c.jpg',
      badge: 'СУПЕРФУД'
    },
    {
      id: 4,
      name: 'Киноа органическая',
      description: 'Белковая крупа без глютена',
      price: '420₽',
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400',
      badge: 'НОВИНКА'
    }
  ];

  const recipes = [
    {
      id: 1,
      title: 'Смузи-боул с ягодами',
      time: '10 мин',
      difficulty: 'Легко',
      description: 'Питательный завтрак с антиоксидантами',
      tips: ['Используйте замороженные ягоды для густой консистенции', 'Добавьте семена чиа для омега-3']
    },
    {
      id: 2,
      title: 'Салат с киноа',
      time: '25 мин',
      difficulty: 'Средне',
      description: 'Полноценный обед с растительным белком',
      tips: ['Промывайте киноа перед варкой', 'Добавьте авокадо для полезных жиров']
    },
    {
      id: 3,
      title: 'Энергетические батончики',
      time: '15 мин',
      difficulty: 'Легко',
      description: 'Полезный перекус для активного дня',
      tips: ['Храните в холодильнике до 2 недель', 'Используйте финики вместо сахара']
    }
  ];

  const healthTips = [
    { icon: 'Apple', title: 'Сезонные продукты', text: 'Выбирайте овощи и фрукты по сезону' },
    { icon: 'Droplet', title: 'Водный баланс', text: 'Пейте не менее 2 литров воды в день' },
    { icon: 'Sun', title: 'Витамин D', text: 'Проводите время на свежем воздухе' },
    { icon: 'Leaf', title: 'Органика', text: 'Выбирайте органические продукты' }
  ];

  return (
    <div className="min-h-screen bg-background">
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

      <section id="home" className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/20 to-accent/10" />
        <div className="container px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-primary/20 text-primary border-primary/30">🌱 Эко-френдли магазин</Badge>
              <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                Полезное питание для
                <span className="text-primary"> здоровой жизни</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Органические продукты, натуральные ингредиенты и забота о природе. 
                Делаем здоровое питание доступным и вкусным!
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={() => scrollToSection('catalog')} className="gap-2">
                  <Icon name="ShoppingBag" size={20} />
                  Смотреть каталог
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('recipes')} className="gap-2">
                  <Icon name="BookOpen" size={20} />
                  Рецепты
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img
                src="https://cdn.poehali.dev/projects/89b5c4eb-a50c-4d25-a37a-f46be2df6583/files/7cdb9674-ec2a-4002-b4fb-d27f82d2ed7c.jpg"
                alt="Органические продукты"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-xl shadow-xl border">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Icon name="Star" className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-2xl">100%</p>
                    <p className="text-sm text-muted-foreground">Органика</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="container px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: 'Leaf', title: '100% органика', desc: 'Только натуральное' },
              { icon: 'Truck', title: 'Быстрая доставка', desc: 'В день заказа' },
              { icon: 'ShieldCheck', title: 'Гарантия качества', desc: 'Сертификаты' },
              { icon: 'Heart', title: 'Забота о природе', desc: 'Эко-упаковка' }
            ].map((item, idx) => (
              <div key={idx} className="text-center space-y-3 animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full">
                  <Icon name={item.icon as any} className="text-primary" size={28} />
                </div>
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20">
        <div className="container px-4">
          <div className="text-center space-y-4 mb-12 animate-fade-in">
            <Badge variant="outline" className="text-primary border-primary">🛒 Наши продукты</Badge>
            <h2 className="text-3xl md:text-5xl font-bold">Популярные товары</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Тщательно отобранные органические продукты для вашего здоровья
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, idx) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in" style={{ animationDelay: `${idx * 100}ms` }}>
                <div className="relative">
                  <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                  <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">{product.badge}</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-primary">{product.price}</span>
                  <Button size="sm" className="gap-2">
                    <Icon name="Plus" size={16} />
                    В корзину
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="gap-2">
              Показать все товары
              <Icon name="ArrowRight" size={18} />
            </Button>
          </div>
        </div>
      </section>

      <section id="recipes" className="py-20 bg-secondary/30">
        <div className="container px-4">
          <div className="text-center space-y-4 mb-12 animate-fade-in">
            <Badge variant="outline" className="text-primary border-primary">👨‍🍳 Рецепты и советы</Badge>
            <h2 className="text-3xl md:text-5xl font-bold">Здоровое питание</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Проверенные рецепты и советы по правильному питанию от наших экспертов
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {recipes.map((recipe, idx) => (
              <Card key={recipe.id} className="hover:shadow-lg transition-all duration-300 animate-scale-in" style={{ animationDelay: `${idx * 100}ms` }}>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary">{recipe.difficulty}</Badge>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Icon name="Clock" size={16} />
                      <span className="text-sm">{recipe.time}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{recipe.title}</CardTitle>
                  <CardDescription>{recipe.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm font-medium">Советы:</p>
                  <ul className="space-y-1">
                    {recipe.tips.map((tip, tidx) => (
                      <li key={tidx} className="text-sm text-muted-foreground flex gap-2">
                        <Icon name="Check" size={16} className="text-primary flex-shrink-0 mt-0.5" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full gap-2">
                    <Icon name="ChefHat" size={16} />
                    Смотреть рецепт
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="bg-card rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">Советы по здоровому питанию</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              {healthTips.map((tip, idx) => (
                <div key={idx} className="text-center space-y-3 p-4 rounded-xl hover:bg-secondary/50 transition-colors animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full">
                    <Icon name={tip.icon as any} className="text-primary" size={24} />
                  </div>
                  <h4 className="font-semibold">{tip.title}</h4>
                  <p className="text-sm text-muted-foreground">{tip.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge variant="outline" className="text-primary border-primary">🌿 О нас</Badge>
              <h2 className="text-3xl md:text-4xl font-bold">Мы делаем здоровое питание доступным</h2>
              <p className="text-muted-foreground leading-relaxed">
                HealthyFood — это команда энтузиастов здорового образа жизни. Мы верим, что правильное питание 
                должно быть не только полезным, но и вкусным, а также доступным каждому.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Мы работаем напрямую с фермерами и производителями органической продукции, 
                чтобы предложить вам лучшее качество по справедливым ценам. Каждый продукт проходит 
                строгий контроль качества и имеет все необходимые сертификаты.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Icon name="Award" className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-bold">5 лет</p>
                    <p className="text-sm text-muted-foreground">на рынке</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Icon name="Users" className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-bold">10 000+</p>
                    <p className="text-sm text-muted-foreground">клиентов</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Icon name="Package" className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-bold">500+</p>
                    <p className="text-sm text-muted-foreground">товаров</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=600"
                alt="О нас"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="delivery" className="py-20 bg-secondary/30">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12 animate-fade-in">
              <Badge variant="outline" className="text-primary border-primary">🚚 Доставка</Badge>
              <h2 className="text-3xl md:text-4xl font-bold">Удобная доставка</h2>
              <p className="text-muted-foreground">
                Мы доставляем свежие продукты прямо к вашей двери
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  icon: 'MapPin',
                  title: 'По всему городу',
                  desc: 'Доставляем во все районы Москвы и Подмосковья'
                },
                {
                  icon: 'Clock',
                  title: 'В день заказа',
                  desc: 'При заказе до 12:00 доставим в тот же день'
                },
                {
                  icon: 'Banknote',
                  title: 'Бесплатно от 2000₽',
                  desc: 'При заказе от 2000₽ доставка бесплатно'
                }
              ].map((item, idx) => (
                <Card key={idx} className="text-center p-6 animate-scale-in" style={{ animationDelay: `${idx * 100}ms` }}>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <Icon name={item.icon as any} className="text-primary" size={28} />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </Card>
              ))}
            </div>

            <Card className="p-8">
              <h3 className="text-xl font-bold mb-4">Стоимость доставки</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-muted-foreground">По Москве (в пределах МКАД)</span>
                  <span className="font-semibold">200₽</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-muted-foreground">Подмосковье (до 20 км от МКАД)</span>
                  <span className="font-semibold">350₽</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-muted-foreground">При заказе от 2000₽</span>
                  <span className="font-semibold text-primary">Бесплатно</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12 animate-fade-in">
              <Badge variant="outline" className="text-primary border-primary">📞 Контакты</Badge>
              <h2 className="text-3xl md:text-4xl font-bold">Свяжитесь с нами</h2>
              <p className="text-muted-foreground">
                Мы всегда рады ответить на ваши вопросы
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Icon name="Phone" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Телефон</h3>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                    <p className="text-sm text-muted-foreground mt-1">Пн-Вс: 8:00 - 22:00</p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Icon name="Mail" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">info@healthyfood.ru</p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Icon name="MapPin" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Адрес</h3>
                    <p className="text-muted-foreground">г. Москва, ул. Здоровья, д. 15</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold text-lg mb-4">Напишите нам</h3>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Ваше имя"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Ваше сообщение"
                      rows={4}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    />
                  </div>
                  <Button className="w-full gap-2">
                    <Icon name="Send" size={18} />
                    Отправить
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

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
    </div>
  );
};

export default Index;
