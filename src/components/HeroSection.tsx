import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <>
      <section id="home" className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/20 to-accent/10" />
        <div className="container px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-primary/20 text-primary border-primary/30">🌱 Eko-friendly obchod</Badge>
              <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                Zdravá výživa pro
                <span className="text-primary"> zdravý život</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Organické produkty, přírodní ingredience a peče o přírodu. 
                Děláme zdravou výživu dostupnou a chutnou!
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={() => scrollToSection('catalog')} className="gap-2">
                  <Icon name="ShoppingBag" size={20} />
                  Prohlédnout katalog
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('recipes')} className="gap-2">
                  <Icon name="BookOpen" size={20} />
                  Recepty
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in px-4 md:px-8">
              <img
                src="https://cdn.poehali.dev/projects/89b5c4eb-a50c-4d25-a37a-f46be2df6583/files/7cdb9674-ec2a-4002-b4fb-d27f82d2ed7c.jpg"
                alt="Organické produkty"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-2 md:-bottom-6 md:-right-4 bg-card p-6 rounded-xl shadow-xl border">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Icon name="Star" className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-2xl">100%</p>
                    <p className="text-sm text-muted-foreground">Bio</p>
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
              { icon: 'Leaf', title: '100% bio', desc: 'Pouze přírodní' },
              { icon: 'Truck', title: 'Rychlá doprava', desc: 'Dne objednávky' },
              { icon: 'ShieldCheck', title: 'Záruka kvality', desc: 'Certifikáty' },
              { icon: 'Heart', title: 'Peče o přírodu', desc: 'Eko obal' }
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
    </>
  );
};

export default HeroSection;