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
              <Badge variant="outline" className="text-primary border-primary">🌿 O nás</Badge>
              <h2 className="text-3xl md:text-4xl font-bold">Děláme zdravou výživu dostupnou</h2>
              <p className="text-muted-foreground leading-relaxed">
                HealthyFood je tým nadšenců pro zdravý životní styl. Věříme, že zdravá výživa 
                musí být nejen zdravá, ale i chutná a dostupná pro každého.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Spolupracujeme přímo s farmami a výrobci organických produktů, 
                abychom vám nabídli tu nejlepší kvalitu za spravedlivé ceny. Každý produkt prochází 
                přísnou kontrolou kvality a má všechny potřebné certifikáty.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Icon name="Award" className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-bold">5 let</p>
                    <p className="text-sm text-muted-foreground">na trhu</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Icon name="Users" className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-bold">10 000+</p>
                    <p className="text-sm text-muted-foreground">zákazníků</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Icon name="Package" className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-bold">500+</p>
                    <p className="text-sm text-muted-foreground">produktů</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=600"
                alt="O nás"
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
              <Badge variant="outline" className="text-primary border-primary">🚚 Doprava</Badge>
              <h2 className="text-3xl md:text-4xl font-bold">Pohodlná doprava</h2>
              <p className="text-muted-foreground">
                Dodáváme čerstvé produkty přímo k vašim dveřím
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  icon: 'MapPin',
                  title: 'Po celé Praze',
                  desc: 'Dodáváme do všech částí Prahy a okolí'
                },
                {
                  icon: 'Clock',
                  title: 'Den objednávky',
                  desc: 'Při objednávce do 12:00 dodáme stejný den'
                },
                {
                  icon: 'Banknote',
                  title: 'Zdarma od 500 Kč',
                  desc: 'Při objednávce od 500 Kč doprava zdarma'
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
              <h3 className="text-xl font-bold mb-4">Cena dopravy</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-muted-foreground">Praha (včetně okolí)</span>
                  <span className="font-semibold">50 Kč</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-muted-foreground">Okolí Prahy (do 20 km)</span>
                  <span className="font-semibold">90 Kč</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-muted-foreground">Při objednávce od 500 Kč</span>
                  <span className="font-semibold text-primary">Zdarma</span>
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
              <Badge variant="outline" className="text-primary border-primary">📞 Kontakty</Badge>
              <h2 className="text-3xl md:text-4xl font-bold">Kontaktujte nás</h2>
              <p className="text-muted-foreground">
                Rádi odpovíme na vaše otázky
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Icon name="Phone" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Telefon</h3>
                    <p className="text-muted-foreground">+420 123 456 789</p>
                    <p className="text-sm text-muted-foreground mt-1">Po-Ne: 8:00 - 22:00</p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Icon name="Mail" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">info@healthyfood.cz</p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Icon name="MapPin" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Adresa</h3>
                    <p className="text-muted-foreground">Praha 1, Zdravotní 15</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold text-lg mb-4">Napište nám</h3>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Vaše jméno"
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
                      placeholder="Vaše zpráva"
                      rows={4}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    />
                  </div>
                  <Button className="w-full gap-2">
                    <Icon name="Send" size={18} />
                    Odeslat
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