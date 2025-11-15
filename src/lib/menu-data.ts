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
    id: 'le-sandwich-combo',
    name: 'Le Sandwich Combo',
    description: 'Brie, fig & arugula sandwich on a half a baguette - served with drop coffee',
    category: 'artisan-bread',
    price: '14.50',
    isPopular: true
  },
  {
    id: 'babka-french-toast',
    name: 'Babka French Toast',
    description: 'Chocolate babka toasted and served with fresh fruit and a dusting of powdered sugar',
    category: 'sweet-treats',
    price: '14.50'
  },
  {
    id: 'benedict',
    name: 'Benedict',
    description: 'Flaky croissant or sourdough with smoked salmon, topped with pached egg, hollandaise, house salad',
    category: 'coco-specials',
    price: '19.50',
    isPopular: true
  },
  {
    id: 'bird-nest-coco-eggs',
    name: 'Bird Nest Coco Eggs',
    description: 'Curly kale salad, shaved potato nests, sunny-side up eggs, sunflower seeds, cruncy chili oil',
    category: 'coco-specials',
    price: '18.75'
  }
]

export const menuCategories: MenuCategory[] = [
  {
    id: 'artisan-bread',
    name: 'Artisan Bread',
    description: 'Authentic French breads, baked daily with organic flour',
    items: [
      {
        id: 'campagne-sourdough',
        name: 'Campagne Sourdough',
        description: 'Rustic organic country bread, blended with wheat, barley, and rye flours',
        category: 'artisan-bread',
        price: '8.00'
      },
      {
        id: 'our-baguette',
        name: 'Our Baguette',
        description: 'Authentic French baguette, baked daily with organic French flour',
        category: 'artisan-bread',
        price: '4.50'
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
        description: 'Sourdough loaf with cranberries, hazelnuts, walnuts, and pumpkin seeds',
        category: 'artisan-bread',
        price: '8.00'
      },
      {
        id: 'olive-bread',
        name: 'Olive Bread',
        description: 'Rustic loaf with Kalamata and a touch of oregano - perfect for olive lovers',
        category: 'artisan-bread',
        price: '8.25'
      },
      {
        id: 'le-sandwich-combo',
        name: 'Le Sandwich Combo',
        description: 'Brie, fig & arugula sandwich on a half a baguette - served with drop coffee',
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
        id: 'strawberry-croissant',
        name: 'Strawberry',
        description: 'Strawberry vanilla cream, fresh strawberries',
        category: 'croissants',
        price: '9.75'
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
        description: 'Filled with fresh almond paste & shaved almonds',
        category: 'croissants',
        price: '5.75'
      },
      {
        id: 'raspberry-croissant',
        name: 'Raspberry',
        description: 'Nutella cream with fresh raspberries',
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
        description: 'Golden, with buttery toffee bits and a hint of caramel',
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
        id: 'brekfast-bar',
        name: 'Breakfast bar',
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
        id: 'benedict',
        name: 'Benedict',
        description: 'Flaky croissant or sourdough with smoked salmon, topped with pached egg, hollandaise, house salad',
        category: 'coco-specials',
        price: '19.50',
        isPopular: true
      },
      {
        id: 'bird-nest-coco-eggs',
        name: 'Bird Nest Coco Eggs',
        description: 'Curly kale salad, shaved potato nests, sunny-side up eggs, sunflower seeds, cruncy chili oil',
        category: 'coco-specials',
        price: '18.75'
      },
      {
        id: 'zucchini-pancakes',
        name: 'Zucchini Pancakes',
        description: 'Three zucchini pancakes with yogurt sauce, lemon zest, arugula & cherry tomato salad',
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
        description: 'Warm brioche filled with scramble eggs, spinach, avocado, cucumbers, microgreens & hummus',
        category: 'eggs',
        price: '14.95',
        isPopular: true
      },
      {
        id: 'breakfast-sandwich',
        name: 'Breakfast Sandwich',
        description: 'Scrambled eggs, turkey bacon, avocado, sweet mayo, brioche, served with house salad',
        category: 'eggs',
        price: '15.50',
        isPopular: true
      },
      {
        id: 'our-counter-sandwich',
        name: 'Our Counter Sandwich',
        description: 'Scrambled eggs & swiss cheese on our famous brioche, warmed to perfection',
        category: 'eggs',
        price: '8.75'
      },
      {
        id: 'little-green-variation',
        name: 'Little Green Variation',
        description: 'Toasted english muffin with homemade pesto, arugula sun-dried cherry tomatoes & poached eggs',
        category: 'eggs',
        price: '16.50'
      },
      {
        id: 'omelette-of-the-day',
        name: 'Omelette of the Day',
        description: 'Served with avocado, house salad & multigrain toast',
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
        description: 'Romaine, cherry tomatoes, cucumber, red onion, bell pepper, chickpeas, boiled egg & halloumi cheese',
        category: 'salads',
        price: '16.50'
      },
      {
        id: 'apple-walnut-brie',
        name: 'Apple, Walnut & Brie',
        description: 'Arugula, fresh apples, brie cheese, walnuts, dried cranberries, balsamic glaze',
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
        id: 'caprese-tartine',
        name: 'Caprese Tartine',
        description: 'Burrata, tomato, basil pesto, balsamic glaze',
        category: 'tartines',
        price: '15.50'
      },
      {
        id: 'avocado-tartine',
        name: 'Avocado Tartine',
        description: 'Avocado, sun-dried tomatoes & multigrain',
        category: 'tartines',
        price: '13.50'
      },
      {
        id: 'smoked-salmon-tartine',
        name: 'Smoked Salmon Tartine',
        description: 'Avocado',
        category: 'tartines',
        price: '16.50'
      },
      {
        id: 'roasted-veggie-tartine',
        name: 'Roasted Veggie Tartine',
        description: 'Seasonal roasted vegetables on toasted olive bread with homemade hummus & feta cheese',
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
        description: 'Cream cheese, smoked salmon, lemon & dill on a potato base',
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
        description: 'Acai, granola, mixed fruits, chia, almond butter, honey',
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
        description: 'Fluffy bite-sized pancakes served with a drizzle of maple syrup and a dusting of powdered sugar',
        category: 'sweet-treats',
        price: '12.50'
      },
      {
        id: 'pancakes',
        name: 'Pancakes',
        description: '3 fluffy large pancakes served warm with a rich drizzle of dulce de leche & pure maple syrup. Choice of: strawberry, blueberry, banana, or nutella',
        category: 'sweet-treats',
        price: '16.50'
      },
      {
        id: 'babka-french-toast',
        name: 'Babka French Toast',
        description: 'Chocolate babka toasted and served with fresh fruit and a dusting of powdered sugar',
        category: 'sweet-treats',
        price: '14.50'
      }
    ]
  }
]
