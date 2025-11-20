import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const CatalogSection = () => {
  const products = [
    {
      id: 1,
      name: 'Bio zelenina',
      description: 'Čerstvá sezónní zelenina z farem',
      price: '120 Kč/kg',
      image: 'https://cdn.poehali.dev/projects/89b5c4eb-a50c-4d25-a37a-f46be2df6583/files/7cdb9674-ec2a-4002-b4fb-d27f82d2ed7c.jpg',
      badge: 'BIO'
    },
    {
      id: 2,
      name: 'Smoothie bowl',
      description: 'Hotová směs pro zdravé snídaní',
      price: '85 Kč',
      image: 'https://cdn.poehali.dev/projects/89b5c4eb-a50c-4d25-a37a-f46be2df6583/files/b3ef9ac0-4e09-4fa9-9516-a2f9743ca913.jpg',
      badge: 'HIT'
    },
    {
      id: 3,
      name: 'Mix ořechů a semeneček',
      description: 'Zdravá svačina na každý den',
      price: '155 Kč',
      image: 'https://cdn.poehali.dev/projects/89b5c4eb-a50c-4d25-a37a-f46be2df6583/files/3d84fab7-aa0e-46d8-b1ab-052f08b9647c.jpg',
      badge: 'SUPERFOOD'
    },
    {
      id: 4,
      name: 'Bio quinoa',
      description: 'Bílkoviná kroupy bez lepku',
      price: '110 Kč',
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400',
      badge: 'NOVINKA'
    }
  ];

  return (
    <section id="catalog" className="py-20">
      <div className="container px-4">
        <div className="text-center space-y-4 mb-12 animate-fade-in">
          <Badge variant="outline" className="text-primary border-primary">🛒 Naše produkty</Badge>
          <h2 className="text-3xl md:text-5xl font-bold">Oblíbené produkty</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Pečlivě vybrané bio produkty pro vaše zdraví
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
                  Do košíku
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="gap-2">
            Zobrazit všechny produkty
            <Icon name="ArrowRight" size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CatalogSection;