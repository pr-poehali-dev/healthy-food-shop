import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const InfoSections = () => {
  return (
    <>
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
    </>
  );
};

export default InfoSections;
