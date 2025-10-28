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
    id: 'pistachio-croissant',
    name: 'Pistachio',
    description: 'Pistachio cream with crushed pistachios',
    category: 'croissants',
    price: '7.75',
    isPopular: true
  },
  {
    id: 'benedicto',
    name: 'Benedict',
    description: 'Fluffy croissant or sourdough with poached salmon, avocado and hollandaise, house salad',
    category: 'coco-specials',
    price: '19.50',
    isPopular: true
  },
  {
    id: 'acai-treat',
    name: 'Acai Treat',
    description: 'Acai, granola, mixed fruits, chia, homemade butter, honey',
    category: 'sweet-treats',
    price: '14.50',
    isPopular: true
  },
  {
    id: 'mediterranean-salad',
    name: 'Mediterranean',
    description: 'Mixed greens, tomato, cherry tomatoes, cucumbers, feta, red onions, olives, pita, feta cheese',
    category: 'salads',
    price: '15.50',
    isPopular: true
  }
]

export const menuCategories: MenuCategory[] = [
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
        description: 'Rustic organic country bread, blessed with sea salt, butter, and bee pollen',
        category: 'artisan-bread',
        price: '8.00'
      },
      {
        id: 'seeded-campagne',
        name: 'Seeded Campagne',
        description: 'Rustic organic country loaf with sesame, poppy, and sunflower seeds',
        category: 'artisan-bread',
        price: '8.50'
      },
      {
        id: 'pain-sportif',
        name: 'Pain Sportif',
        description: 'Sourdough loaf with cranberries, walnuts, figs, apricots, and pumpkin seeds',
        category: 'artisan-bread',
        price: '8.00'
      },
      {
        id: 'olive-bread',
        name: 'Olive Bread',
        description: 'Rustic loaf with Kalamata olives and herbs - lovely toasted and olive oiled',
        category: 'artisan-bread',
        price: '8.25'
      },
      {
        id: 'le-sandwich-combo',
        name: 'Le Sandwich Combo',
        description: 'Bowl of 3 seasonal sandwich on half a baguette - served with drip coffee',
        category: 'artisan-bread',
        price: '14.50'
      },
      {
        id: 'sweet-combo',
        name: 'Sweet Combo',
        description: 'Half baguette with French butter and seasonal jam - served with drip coffee',
        category: 'artisan-bread',
        price: '9.75'
      }
    ]
  },
  {
    id: 'croissants',
    name: 'Croissants',
    description: 'Flaky French pastries made with premium butter',
    items: [
      {
        id: 'our-croissant',
        name: 'Our Croissant',
        description: 'Flaky French classic pastry',
        category: 'croissants',
        price: '4.75'
      },
      {
        id: 'pain-au-chocolat',
        name: 'Pain au Chocolat',
        description: 'Classic pastry with dark valrhona',
        category: 'croissants',
        price: '5.25'
      },
      {
        id: 'almond-croissant',
        name: 'Almond Croissant',
        description: 'Filled with fresh almond paste & toasted almonds',
        category: 'croissants',
        price: '5.75'
      },
      {
        id: 'pistachio-croissant',
        name: 'Pistachio',
        description: 'Pistachio cream with crushed pistachios',
        category: 'croissants',
        price: '7.75',
        isPopular: true
      },
      {
        id: 'raspberry-croissant',
        name: 'Raspberry',
        description: 'Vanilla cream with fresh raspberries',
        category: 'croissants',
        price: '9.75'
      },
      {
        id: 'strawberry-croissant',
        name: 'Strawberry',
        description: 'Strawberry vanilla cream, fresh strawberries',
        category: 'croissants',
        price: '9.75'
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
        description: 'Moist banana bread swirled with creamy Nutella',
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
        description: 'Moist muffin with buttery crumble',
        category: 'pastries',
        price: '5.75'
      },
      {
        id: 'vegan-carrot-muffin',
        name: 'Vegan Carrot Muffin',
        description: 'Moist, spiced, and very tasty',
        category: 'pastries',
        price: '5.75',
        isVegan: true
      },
      {
        id: 'lemon-poppy',
        name: 'Lemon Poppy',
        description: 'Bright, zesty, and soft with a delicate crunch',
        category: 'pastries',
        price: '5.75'
      },
      {
        id: 'sea-salt-choco-chip',
        name: 'Sea Salt Choco Chip',
        description: 'Chewy, buttery, with a hint of sea salt',
        category: 'pastries',
        price: '6.95'
      },
      {
        id: 'toffee-cookie',
        name: 'One Toffee Cookie',
        description: 'Gooey, with buttery toffee bits',
        category: 'pastries',
        price: '5.95'
      },
      {
        id: 'fruit-tart',
        name: 'Fruit Tart',
        description: 'Buttery, flaky, filled with sweet-tart cherry compote',
        category: 'pastries',
        price: '6.00'
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
        price: '6.25'
      },
      {
        id: 'rosemary-honey',
        name: 'Rosemary Honey',
        description: 'Fluffy biscuit with rosemary-infused honey - buttery and more perfection',
        category: 'biscuits',
        price: '6.25'
      },
      {
        id: 'everything-biscuit',
        name: 'Everything',
        description: 'Classic New York everything seasoning - sesame, poppy, garlic & onion',
        category: 'biscuits',
        price: '6.50'
      },
      {
        id: 'incognito-beg',
        name: 'Incognito B.E.G',
        description: 'Soft-baked oatmeal with nuts, seeds & dried fruit - nutritious, guilt-free, vegan!',
        category: 'biscuits',
        price: '6.50',
        isVegan: true
      }
    ]
  },
  {
    id: 'coco-specials',
    name: 'Coco Specials',
    description: 'Signature brunch dishes crafted with care',
    items: [
      {
        id: 'benedicto',
        name: 'Benedict',
        description: 'Fluffy croissant or sourdough with poached salmon, avocado and hollandaise, house salad',
        category: 'coco-specials',
        price: '19.50',
        isPopular: true
      },
      {
        id: 'bird-nest-coco-eggs',
        name: 'Bird Nest Coco Eggs',
        description: 'House salty brioche nest, poach eggs, garlic aioli, chorizo popcorn salsa, sourdough salt oil',
        category: 'coco-specials',
        price: '18.75'
      },
      {
        id: 'coconut-pancakes',
        name: 'Coconut Pancakes',
        description: 'Three coconut pancakes with yogurt sauce, lemon curd & crispy toasted balls',
        category: 'coco-specials',
        price: '14.85'
      }
    ]
  },
  {
    id: 'eggs',
    name: 'Eggs',
    description: 'Farm-fresh eggs prepared to perfection',
    items: [
      {
        id: 'green-egg-sandwich',
        name: 'Green Egg Sandwich',
        description: 'Warm brioche filled with scramble eggs, spinach, pesto, avocado, fresh tomato, arugula',
        category: 'eggs',
        price: '14.95'
      },
      {
        id: 'breakfast-sandwich',
        name: 'Breakfast Sandwich',
        description: 'Warm brioche filled with scramble eggs with cheddar, bacon, served with house salad',
        category: 'eggs',
        price: '15.50'
      },
      {
        id: 'our-founder-sandwich',
        name: 'Our Founder Sandwich',
        description: 'Scrambled eggs & swiss cheese on our famous baguette, served to perfection',
        category: 'eggs',
        price: '8.75'
      },
      {
        id: 'little-green-variation',
        name: 'Little Green Variation',
        description: 'Rustic english muffin with scrambled eggs, arugula, sun-dried cherry tomatoes, pumpkin oil',
        category: 'eggs',
        price: '16.50'
      },
      {
        id: 'frittata-of-the-day',
        name: 'Frittata of the Day',
        description: 'Loaded with seasonal house salad & multigrain toast',
        category: 'eggs',
        price: '15.50'
      }
    ]
  },
  {
    id: 'salads',
    name: 'Salads',
    description: 'Fresh, vibrant salads (Add chicken +$8)',
    items: [
      {
        id: 'mediterranean-salad',
        name: 'Mediterranean',
        description: 'Mixed greens, tomato, cherry tomatoes, cucumbers, feta, red onions, olives, pita, feta cheese',
        category: 'salads',
        price: '15.50',
        isPopular: true
      },
      {
        id: 'chopped-salad',
        name: 'Chopped Salad',
        description: 'Mixed greens, avocado, cherry tomatoes, baby bell pepper, cucumber, boiled egg, walnuts',
        category: 'salads',
        price: '16.50'
      },
      {
        id: 'coco-salad',
        name: 'Coco Salad',
        description: 'Arugula, fresh apples, brie cheese, kalamata, dried cranberries, balsamic glaze',
        category: 'salads',
        price: '16.50'
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
        description: 'Avocado, sun-dried tomatoes & multigrain - 12 oz',
        category: 'tartines',
        price: '13.50'
      },
      {
        id: 'smoked-salmon-tartine',
        name: 'Smoked Salmon Tartine',
        description: 'Avocado - 2 oz',
        category: 'tartines',
        price: '16.50'
      },
      {
        id: 'caprese-tartine',
        name: 'Caprese Tartine',
        description: 'Burrata, tomato, basil pesto, balsamic glaze',
        category: 'tartines',
        price: '15.50'
      },
      {
        id: 'roasted-veggie-tartine',
        name: 'Roasted Veggie Tartine',
        description: 'Seasonal roasted vegetables on toasted sourdough with hummus, goat cheese and avocado - 12 oz / our bev - 18 oz',
        category: 'tartines',
        price: '13.50'
      },
      {
        id: 'spinach-cheese-tart',
        name: 'Spinach Cheese Tart',
        description: 'Spinach & flaky cheese pastry, savory',
        category: 'tartines',
        price: '6.95'
      },
      {
        id: 'our-daily-galette',
        name: 'Our Daily Galette',
        description: 'Cream cheese, smoked salmon, beets & dill on a potato hash',
        category: 'tartines',
        price: '15.50'
      },
      {
        id: 'kids-grilled-cheese',
        name: "Kids' Grilled Cheese",
        description: 'American & cheddar cheese on challah toast',
        category: 'tartines',
        price: '7.50'
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
        description: 'Acai, granola, mixed fruits, chia, homemade butter, honey',
        category: 'sweet-treats',
        price: '14.50',
        isPopular: true
      },
      {
        id: 'greek-yogurt-bowl',
        name: 'Greek Yogurt Bowl',
        description: 'Greek yogurt, mixed fruits, granola, seeds, nuts, coconut flakes, honey',
        category: 'sweet-treats',
        price: '11.50'
      },
      {
        id: 'mini-pancakes',
        name: 'Mini Pancakes',
        description: 'Fluffy bite-sized pancakes served with maple syrup, butter & your choice of: berries, nutella, banana or powdered sugar',
        category: 'sweet-treats',
        price: '12.50'
      },
      {
        id: 'pancakes',
        name: 'Pancakes',
        description: '3 fluffy large pancakes served warm with a rich drizzle of sauce or slice and your maple syrup served with whipped butter & powdered sugar',
        category: 'sweet-treats',
        price: '16.50'
      },
      {
        id: 'babka-french-toast',
        name: 'Babka French Toast',
        description: 'Chocolate babka slices in cinnamon-vanilla french toast and a dusting of powdered sugar',
        category: 'sweet-treats',
        price: '14.50'
      }
    ]
  }
]
