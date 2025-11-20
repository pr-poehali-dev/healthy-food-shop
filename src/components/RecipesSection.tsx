import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const RecipesSection = () => {
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
  );
};

export default RecipesSection;
