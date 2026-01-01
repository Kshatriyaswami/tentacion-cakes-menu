import { Cake } from '@/components/CakeCard';
import cakeRedVelvet from '@/assets/cake-red-velvet.jpg';
import cakeChocolateTruffle from '@/assets/cake-chocolate-truffle.jpg';
import cakeStrawberry from '@/assets/cake-strawberry.jpg';
import cakeBlackForest from '@/assets/cake-black-forest.jpg';
import cakeWedding from '@/assets/cake-wedding.jpg';
import cakePineapple from '@/assets/cake-pineapple.jpg';

export const sampleCakes: Cake[] = [
  {
    id: '1',
    name: 'Red Velvet Cake',
    price: 850,
    image: cakeRedVelvet,
    description: 'A rich, moist red velvet sponge layered with smooth cream cheese frosting. This classic favorite combines subtle cocoa flavors with a striking red hue, topped with delicate red velvet crumbs.'
  },
  {
    id: '2',
    name: 'Chocolate Truffle Cake',
    price: 750,
    image: cakeChocolateTruffle,
    description: 'Indulge in layers of rich chocolate sponge enveloped in velvety chocolate ganache. This decadent cake is a chocolate lover\'s dream, perfect for any celebration.'
  },
  {
    id: '3',
    name: 'Fresh Strawberry Shortcake',
    price: 900,
    image: cakeStrawberry,
    description: 'Light and fluffy vanilla sponge layered with fresh whipped cream and juicy strawberries. A refreshing and delightful treat that captures the essence of summer.'
  },
  {
    id: '4',
    name: 'Black Forest Cake',
    price: 800,
    image: cakeBlackForest,
    description: 'A German classic featuring layers of chocolate sponge, whipped cream, and cherries, topped with chocolate shavings. The perfect balance of rich chocolate and fruity freshness.'
  },
  {
    id: '5',
    name: 'Elegant Wedding Cake',
    price: 3500,
    image: cakeWedding,
    description: 'A stunning three-tier vanilla buttercream cake adorned with elegant sugar roses and delicate gold accents. Customizable to match your special day\'s theme.'
  },
  {
    id: '6',
    name: 'Pineapple Upside Down Cake',
    price: 650,
    image: cakePineapple,
    description: 'A nostalgic delight featuring caramelized pineapple rings and cherries on a golden brown butter cake. Sweet, tangy, and absolutely irresistible.'
  }
];
