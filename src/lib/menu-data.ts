export interface MenuItem {
  id: string
  name: string
  description: string
  category: string
  isPopular?: boolean
  isGlutenFree?: boolean
  isVegan?: boolean
}

export const featuredItems: MenuItem[] = [
  {
    id: 'pistachio-croissant',
    name: 'Pistachio Croissant',
    description: 'Buttery, flaky croissant filled with rich pistachio cream - our most popular pastry',
    category: 'pastries',
    isPopular: true
  },
  {
    id: 'coco-breakfast-sandwich',
    name: 'Coco Breakfast Sandwich',
    description: 'House-made English muffin with cage-free scrambled eggs, aged cheddar, and your choice of bacon or avocado',
    category: 'eggs',
    isPopular: true
  },
  {
    id: 'classic-acai-bowl',
    name: 'Classic Acai Bowl',
    description: 'Organic acai berries blended with banana, topped with granola, fresh berries, and coconut flakes',
    category: 'bowls',
    isPopular: true
  },
  {
    id: 'green-power-smoothie',
    name: 'Green Power Smoothie',
    description: 'Spinach, kale, banana, mango, and coconut water - a nutritious powerhouse',
    category: 'smoothies',
    isPopular: true
  }
]

export const menuCategories = [
  {
    id: 'pastries',
    name: 'Fresh Pastries',
    description: 'House-made daily with premium ingredients',
    items: [
      {
        id: 'pistachio-croissant',
        name: 'Pistachio Croissant',
        description: 'Buttery, flaky croissant filled with rich pistachio cream - our most popular pastry',
        category: 'pastries',
        isPopular: true
      },
      {
        id: 'kouign-amann',
        name: 'Kouign-Amann',
        description: 'Traditional Breton pastry with caramelized sugar layers and buttery, crispy texture',
        category: 'pastries'
      },
      {
        id: 'seasonal-fruit-tart',
        name: 'Seasonal Fruit Tart',
        description: 'Delicate pastry shell filled with vanilla custard and topped with fresh seasonal fruits',
        category: 'pastries'
      },
      {
        id: 'chocolate-croissant',
        name: 'Pain au Chocolat',
        description: 'Classic French pastry with rich dark chocolate batons wrapped in buttery layers',
        category: 'pastries'
      }
    ]
  },
  {
    id: 'tartines',
    name: 'Artisan Tartines',
    description: 'Open-faced toasts on house-baked sourdough',
    items: [
      {
        id: 'avocado-tartine',
        name: 'Avocado Tartine',
        description: 'Smashed avocado with lime, sea salt, and red pepper flakes. Add a poached egg for $3',
        category: 'tartines',
        isPopular: true
      },
      {
        id: 'smoked-salmon-tartine',
        name: 'Smoked Salmon Tartine',
        description: 'House-cured salmon with cream cheese, capers, red onion, and fresh dill',
        category: 'tartines'
      },
      {
        id: 'caprese-tartine',
        name: 'Caprese Tartine',
        description: 'Fresh mozzarella, heirloom tomatoes, basil pesto, and balsamic reduction',
        category: 'tartines'
      },
      {
        id: 'sweet-tartine',
        name: 'Sweet Tartine Selection',
        description: 'Choose from almond butter & honey, Nutella & banana, or ricotta & fig jam',
        category: 'tartines'
      }
    ]
  },
  {
    id: 'eggs',
    name: 'Egg Dishes',
    description: 'Farm-fresh eggs prepared to perfection',
    items: [
      {
        id: 'coco-breakfast-sandwich',
        name: 'Coco Breakfast Sandwich',
        description: 'House-made English muffin with cage-free scrambled eggs, aged cheddar, and your choice of bacon or avocado',
        category: 'eggs',
        isPopular: true
      },
      {
        id: 'zucchini-pancakes',
        name: 'Zucchini Pancakes',
        description: 'Light and fluffy gluten-free pancakes made with fresh zucchini, served with maple syrup',
        category: 'eggs',
        isGlutenFree: true
      },
      {
        id: 'build-omelette',
        name: 'Build Your Own Omelette',
        description: 'Three-egg omelette with your choice of cheese, vegetables, and proteins',
        category: 'eggs'
      },
      {
        id: 'shakshuka',
        name: 'Shakshuka',
        description: 'Poached eggs in spiced tomato sauce with peppers, onions, and fresh herbs',
        category: 'eggs'
      }
    ]
  },
  {
    id: 'smoothies',
    name: 'Fresh Smoothies',
    description: 'Nutrient-packed blends made to order',
    items: [
      {
        id: 'green-power-smoothie',
        name: 'Green Power Smoothie',
        description: 'Spinach, kale, banana, mango, and coconut water - a nutritious powerhouse',
        category: 'smoothies',
        isPopular: true
      },
      {
        id: 'berry-blast',
        name: 'Berry Blast',
        description: 'Mixed berries, banana, yogurt, and a touch of honey for natural sweetness',
        category: 'smoothies'
      },
      {
        id: 'tropical-paradise',
        name: 'Tropical Paradise',
        description: 'Pineapple, mango, coconut milk, and lime - like vacation in a glass',
        category: 'smoothies'
      },
      {
        id: 'chocolate-pb-smoothie',
        name: 'Chocolate Peanut Butter',
        description: 'Banana, peanut butter, cocoa powder, and almond milk - healthy indulgence',
        category: 'smoothies'
      }
    ]
  },
  {
    id: 'bowls',
    name: 'Nourish Bowls',
    description: 'Wholesome bowls packed with superfoods',
    items: [
      {
        id: 'classic-acai-bowl',
        name: 'Classic Acai Bowl',
        description: 'Organic acai berries blended with banana, topped with granola, fresh berries, and coconut flakes',
        category: 'bowls',
        isPopular: true
      },
      {
        id: 'greek-yogurt-bowl',
        name: 'Greek Yogurt Granola Bowl',
        description: 'Thick Greek yogurt with house-made granola, seasonal fruits, and local honey drizzle',
        category: 'bowls'
      },
      {
        id: 'pitaya-bowl',
        name: 'Pitaya Dragon Fruit Bowl',
        description: 'Vibrant pink dragon fruit blend with tropical toppings and chia seeds',
        category: 'bowls'
      },
      {
        id: 'green-goddess-bowl',
        name: 'Green Goddess Bowl',
        description: 'Spirulina-infused smoothie bowl with kiwi, spinach, and superfood toppings',
        category: 'bowls'
      }
    ]
  }
]