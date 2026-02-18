export interface MenuItem {
  id: string
  name: string
  description: string
  category: string
  price: string
  isPopular?: boolean
  isGlutenFree?: boolean
  isVegan?: boolean
}

export interface MenuCategory {
  id: string
  name: string
  description: string
  items: MenuItem[]
}

export const featuredItems: MenuItem[] = [
  {
    id: 'babka-french-toast',
    name: 'Babka French Toast',
    description: 'Chocolate babka toasted and served with fresh fruit and a dusting of powdered sugar',
    category: 'eggs',
    price: '16.75'
  },
  {
    id: 'benedict',
    name: 'Croissant Benedict',
    description: 'Poached egg and smoked salmon on a warm croissant with silky hollandaise',
    category: 'eggs',
    price: '19.75',
    isPopular: true
  },
  {
    id: 'green-egg-sandwich',
    name: 'Green Egg Sandwich',
    description: 'Warm brioche filled with scramble eggs, spinach, avocado, cucumbers, microgreens & hummus',
    category: 'eggs',
    price: '16.75',
    isPopular: true
  },
  {
    id: 'breakfast-sandwich',
    name: 'Breakfast Sandwich',
    description: 'Scrambled eggs, turkey bacon, avocado, sweet mayo, brioche, served with house salad',
    category: 'eggs',
    price: '18.50',
    isPopular: true
  }
]

export const menuCategories: MenuCategory[] = [
  /* Drinks menu — commented out until section images are available
  {
    id: 'hot-drinks',
    name: 'Hot Drinks',
    description: '',
    items: [
      {
        id: 'espresso',
        name: 'Espresso',
        description: '',
        category: 'hot-drinks',
        price: '3.75'
      },
      {
        id: 'americano',
        name: 'Americano',
        description: '',
        category: 'hot-drinks',
        price: '4.75'
      },
      {
        id: 'drip-coffee',
        name: 'Drip Coffee',
        description: '',
        category: 'hot-drinks',
        price: '3.00'
      },
      {
        id: 'macchiato',
        name: 'Macchiato',
        description: '',
        category: 'hot-drinks',
        price: '4.25'
      },
      {
        id: 'cortado',
        name: 'Cortado',
        description: '',
        category: 'hot-drinks',
        price: '4.50'
      },
      {
        id: 'cappuccino',
        name: 'Cappuccino',
        description: '',
        category: 'hot-drinks',
        price: '4.75'
      },
      {
        id: 'latte-mocha',
        name: 'Latte Mocha',
        description: '',
        category: 'hot-drinks',
        price: '5.25'
      },
      {
        id: 'matcha-latte',
        name: 'Matcha Latte',
        description: '',
        category: 'hot-drinks',
        price: '6.00'
      },
      {
        id: 'hot-chocolate',
        name: 'Hot Chocolate',
        description: '',
        category: 'hot-drinks',
        price: '6.75'
      },
      {
        id: 'chai-latte',
        name: 'Chai Latte',
        description: '',
        category: 'hot-drinks',
        price: '5.75'
      },
      {
        id: 'tea',
        name: 'Tea',
        description: '',
        category: 'hot-drinks',
        price: '5.50'
      }
    ]
  },
  {
    id: 'cold-drinks',
    name: 'Cold Drinks',
    description: '',
    items: [
      {
        id: 'iced-coffee',
        name: 'Iced Coffee',
        description: '',
        category: 'cold-drinks',
        price: '4.00'
      },
      {
        id: 'iced-mocha-latte',
        name: 'Iced Mocha Latte',
        description: '',
        category: 'cold-drinks',
        price: '7.00'
      },
      {
        id: 'iced-matcha-latte',
        name: 'Iced Matcha Latte',
        description: '',
        category: 'cold-drinks',
        price: '7.00'
      },
      {
        id: 'iced-cappuccino',
        name: 'Iced Cappuccino',
        description: '',
        category: 'cold-drinks',
        price: '5.75'
      },
      {
        id: 'lemonade',
        name: 'Lemonade',
        description: '',
        category: 'cold-drinks',
        price: '5.50'
      },
      {
        id: 'iced-tea',
        name: 'Iced Tea',
        description: '',
        category: 'cold-drinks',
        price: '5.00'
      },
      {
        id: 'cold-brew',
        name: 'Cold Brew',
        description: '',
        category: 'cold-drinks',
        price: '5.00'
      }
    ]
  },
  {
    id: 'specialty-drinks',
    name: 'Specialty Drinks',
    description: '',
    items: [
      {
        id: 'cold-foam-americano',
        name: 'Cold Foam Americano',
        description: 'Smooth blend of rich espresso with cold milk foam',
        category: 'specialty-drinks',
        price: '5.00'
      },
      {
        id: 'white-chocolate-mocha',
        name: 'White Chocolate Mocha',
        description: 'Espresso with steamed milk, white chocolate syrup, and whipped cream',
        category: 'specialty-drinks',
        price: '6.75'
      },
      {
        id: 'coco-special',
        name: 'Coco Special',
        description: 'Coconut water & frothed espresso (iced)',
        category: 'specialty-drinks',
        price: '7.50'
      },
      {
        id: 'autumn-drink',
        name: 'Autumn Drink',
        description: 'Espresso, steamed milk & Irish syrup, finished with whipped cream and cinnamon',
        category: 'specialty-drinks',
        price: '7.50'
      },
      {
        id: 'hibiscus-matcha-latte',
        name: 'Hibiscus Matcha Latte',
        description: 'Iced / warm — espresso shot, hibiscus matcha, milk foam',
        category: 'specialty-drinks',
        price: '8.25'
      },
      {
        id: 'matcha-heaven',
        name: 'Matcha Heaven',
        description: 'Iced / warm — matcha & cold vanilla foam',
        category: 'specialty-drinks',
        price: '7.95'
      },
      {
        id: 'coco-matcha',
        name: 'Coco Matcha',
        description: 'Coconut water topped with matcha foam — iced only',
        category: 'specialty-drinks',
        price: '7.50'
      }
    ]
  },
  {
    id: 'smoothies',
    name: 'Smoothies & Juices',
    description: '',
    items: [
      {
        id: 'green-detox',
        name: 'Green Detox',
        description: 'Spinach, kale, cucumbers, ginger, lemon, pineapple',
        category: 'smoothies',
        price: '9.50'
      },
      {
        id: 'berry-blast',
        name: 'Berry Blast',
        description: 'Mixed berries, banana, Greek yogurt and almond milk',
        category: 'smoothies',
        price: '9.50'
      },
      {
        id: 'peanut-butter-banana',
        name: 'Peanut Butter Banana',
        description: 'Peanut butter, banana, protein powder and milk',
        category: 'smoothies',
        price: '9.50'
      },
      {
        id: 'apple-juice',
        name: 'Apple Juice (Organic)',
        description: '',
        category: 'smoothies',
        price: '5.00'
      }
    ]
  },
  {
    id: 'coffee-bags',
    name: 'Signature Coffee Bags for Home',
    description: '',
    items: [
      {
        id: 'house-blend-ground',
        name: 'Café Coco House Blend Ground Coffee (12oz)',
        description: '',
        category: 'coffee-bags',
        price: '19.00'
      },
      {
        id: 'house-espresso-beans',
        name: 'Café Coco House Espresso Beans (12oz)',
        description: '',
        category: 'coffee-bags',
        price: '19.00'
      }
    ]
  },
  */
  {
    id: 'artisan-bread',
    name: 'Artisan Bread',
    description: 'Authentic French breads, baked daily with organic flour',
    items: [
      {
        id: 'our-baguette',
        name: 'Our Baguette',
        description: 'Authentic French baguette, baked daily with organic French flour',
        category: 'artisan-bread',
        price: '4.50'
      },
      {
        id: 'campagne-sourdough',
        name: 'Campagne Sourdough',
        description: 'Rustic organic country bread, blended with wheat, barley, and rye flours',
        category: 'artisan-bread',
        price: '10.50'
      },
      {
        id: 'pain-sportif',
        name: 'Pain Sportif',
        description: 'Sourdough loaf with cranberries, hazelnuts, walnuts, and pumpkin seeds',
        category: 'artisan-bread',
        price: '10.50'
      },
      {
        id: 'olive-bread',
        name: 'Olive Bread',
        description: 'Rustic loaf with Kalamata and a touch of oregano - perfect for olive lovers',
        category: 'artisan-bread',
        price: '10.50'
      }
    ]
  },
  {
    id: 'biscuits',
    name: 'Biscuits',
    description: 'Buttery, flaky biscuits and scones',
    items: [
      {
        id: 'cheddar-chive-scone',
        name: 'Cheddar & Chive Scone',
        description: 'Buttery cheddar and chive scone - golden, flaky, and delicious',
        category: 'biscuits',
        price: '6.50'
      },
      {
        id: 'rosemary-honey',
        name: 'Rosemary Honey',
        description: 'Fluffy biscuit with rosemary-infused honey - buttery and more perfection',
        category: 'biscuits',
        price: '6.50'
      },
      {
        id: 'everything-biscuit',
        name: 'Everything',
        description: 'Classic New York everything seasoning - sesame, poppy, garlic & onion',
        category: 'biscuits',
        price: '6.50'
      }
    ]
  },
  {
    id: 'croissants',
    name: 'Croissants',
    description: 'Flaky French pastries made with premium butter',
    items: [
      {
        id: 'chocolate-croissant',
        name: 'Pain au Chocolat',
        description: 'Classic pastry with dark valrhona',
        category: 'croissants',
        price: '5.50'
      },
      {
        id: 'our-croissant',
        name: 'Our Croissant',
        description: 'Flaky French classic pastry',
        category: 'croissants',
        price: '4.95'
      },
      {
        id: 'almond-croissant',
        name: 'Almond Croissant',
        description: 'Filled with fresh almond paste & shaved almonds',
        category: 'croissants',
        price: '5.95'
      }
    ]
  },
  {
    id: 'pastries',
    name: 'Pastries',
    description: 'House-made pastries with premium ingredients',
    items: [
      {
        id: 'nutella-banana-bread',
        name: 'Nutella Banana Bread',
        description: 'Moist banana bread served with creamy Nutella',
        category: 'pastries',
        price: '6.75'
      },
      {
        id: 'double-choco-muffin',
        name: 'Double Choco Muffin',
        description: 'Soft choco chip muffin - extra fluffy',
        category: 'pastries',
        price: '5.75'
      },
      {
        id: 'blueberry-crumb-muffin',
        name: 'Blueberry Crumb Muffin',
        description: 'Moist muffin with fresh blueberries',
        category: 'pastries',
        price: '5.75'
      },
      {
        id: 'lemon-poppy',
        name: 'Lemon Poppy',
        description: 'Bright, zesty, and soft with a delicate crunch',
        category: 'pastries',
        price: '5.75'
      },
      {
        id: 'fruit-tart',
        name: 'Fruit Tart',
        description: 'Buttery, flaky, filled with sweet-tart cherry compote',
        category: 'pastries',
        price: '7.25'
      },
      {
        id: 'sea-salt-choco-chip',
        name: 'Sea Salt Choco Chip',
        description: 'Chewy, buttery, with a hint of sea salt',
        category: 'pastries',
        price: '5.95'
      },
      {
        id: 'toffee-cookie',
        name: 'One Toffee Cookie',
        description: 'Golden, with buttery toffee bits and a hint of caramel',
        category: 'pastries',
        price: '5.95'
      }
    ]
  },
  {
    id: 'eggs',
    name: 'Egg Specials',
    description: 'Farm-fresh eggs prepared to perfection',
    items: [
      {
        id: 'benedict',
        name: 'Croissant Benedict',
        description: 'Poached egg and smoked salmon on a warm croissant with silky hollandaise',
        category: 'eggs',
        price: '19.75',
        isPopular: true
      },
      {
        id: 'green-egg-sandwich',
        name: 'Green Egg Sandwich',
        description: 'Warm brioche filled with scramble eggs, spinach, avocado, cucumbers, microgreens & hummus',
        category: 'eggs',
        price: '16.75',
        isPopular: true
      },
      {
        id: 'french-breakfast-croissant',
        name: 'French Breakfast Croissant',
        description: 'Mushrooms, scrambled eggs, Swiss cheese, dill, served with house salad',
        category: 'eggs',
        price: '18.25'
      },
      {
        id: 'breakfast-sandwich',
        name: 'Breakfast Sandwich',
        description: 'Scrambled eggs, turkey bacon, avocado, sweet mayo, brioche, served with house salad',
        category: 'eggs',
        price: '18.50',
        isPopular: true
      },
      {
        id: 'our-counter-sandwich',
        name: 'Our Counter Sandwich',
        description: 'Scrambled eggs & swiss cheese on our famous brioche, warmed to perfection',
        category: 'eggs',
        price: '9.95'
      },
      {
        id: 'omelette-of-the-day',
        name: 'Omelette of the Day',
        description: 'Served with avocado, house salad & multigrain toast',
        category: 'eggs',
        price: '17.50'
      },
      {
        id: 'babka-french-toast',
        name: 'Babka French Toast',
        description: 'Chocolate babka toasted and served with fresh fruit and a dusting of powdered sugar',
        category: 'eggs',
        price: '16.75'
      }
    ]
  },
  {
    id: 'tartines',
    name: 'Tartines',
    description: 'Open-faced toasts on house-baked sourdough',
    items: [
      {
        id: 'avocado-tartine',
        name: 'Avocado Tartine',
        description: 'Avocado, sun-dried tomatoes & multigrain',
        category: 'tartines',
        price: '12.75'
      },
      {
        id: 'smoked-salmon-tartine',
        name: 'Smoked Salmon Tartine',
        description: 'Avocado',
        category: 'tartines',
        price: '16.75'
      },
      {
        id: 'caprese-tartine',
        name: 'Caprese Tartine',
        description: 'Burrata, tomato, basil pesto, balsamic glaze',
        category: 'tartines',
        price: '15.95'
      },
      {
        id: 'roasted-veggie-tartine',
        name: 'Roasted Veggie Tartine',
        description: 'Seasonal roasted vegetables on toasted olive bread with homemade hummus & feta cheese',
        category: 'tartines',
        price: '15.75'
      }
    ]
  },
  {
    id: 'sandwiches',
    name: 'Sandwiches',
    description: '',
    items: [
      {
        id: 'le-sandwich-combo',
        name: 'Prosciutto',
        description: 'French baguette, pesto, arugula, Prosciutto di Parma, mozzarella, drizzle of balsamic cream',
        category: 'sandwiches',
        price: '12.50'
      },
      {
        id: 'turkey-cheese',
        name: 'Turkey Cheese',
        description: 'French baguette, turkey, American cheese, lettuce, tomato, cucumbers',
        category: 'sandwiches',
        price: '13.25'
      },
      {
        id: 'veggie-cheese',
        name: 'Veggie Cheese',
        description: 'French baguette, hummus, arugula, Swiss cheese, tomato',
        category: 'sandwiches',
        price: '9.95'
      },
      {
        id: 'grilled-cheese',
        name: 'Grilled Cheese',
        description: 'Panini pressed toast, filled with American cheese, served with house salad',
        category: 'sandwiches',
        price: '12.50'
      }
    ]
  },
  {
    id: 'salads',
    name: 'Salads',
    description: 'Fresh, vibrant salads (Add chicken +$7)',
    items: [
      {
        id: 'mediterranean-salad',
        name: 'Caesar Salad',
        description: 'Romaine lettuce, cream cheese & bread croutons, shredded parmesan, house Caesar dressing',
        category: 'salads',
        price: '16.95'
      },
      {
        id: 'traditional-greek-salad',
        name: 'Traditional Greek Salad',
        description: 'Cucumbers, tomatoes, onions, Kalamata olives, red peppers, lemon olive oil dressing, oregano',
        category: 'salads',
        price: '16.95'
      },
      {
        id: 'sweet-potato-kale-salad',
        name: 'Sweet Potato & Kale Salad',
        description: 'Roasted sweet potatoes, kale, sunflower seeds, roasted chickpeas, house vinaigrette',
        category: 'salads',
        price: '16.95'
      }
    ]
  },
  {
    id: 'soupe-du-jour',
    name: 'Soupe du Jour',
    description: '',
    items: [
      {
        id: 'shakshuka',
        name: 'Made Fresh Daily',
        description: "Chef's daily soup served with toasted sourdough",
        category: 'soupe-du-jour',
        price: '12.75'
      }
    ]
  },
  {
    id: 'sweet-treats',
    name: 'Sweet Treats',
    description: 'Indulgent breakfast desserts',
    items: [
      {
        id: 'acai-treat',
        name: 'Acai Treat',
        description: 'Acai, granola, mixed fruits, chia, almond butter, honey',
        category: 'sweet-treats',
        price: '13.75',
        isPopular: true
      },
      {
        id: 'greek-yogurt-bowl',
        name: 'Greek Yogurt Bowl',
        description: 'Greek yogurt, mixed fruits, granola, seeds, nuts, coconut flakes, honey',
        category: 'sweet-treats',
        price: '13.50'
      },
      {
        id: 'pancakes',
        name: 'Pancakes',
        description: '3 fluffy large pancakes served warm with a rich drizzle of dulce de leche & pure maple syrup. Choice of: strawberry, blueberry, banana, or nutella',
        category: 'sweet-treats',
        price: '16.75'
      }
    ]
  }
]
