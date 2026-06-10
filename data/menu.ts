export type MenuItem = {
  id: string
  name: string
  description: string
  price: string
}

export type MenuCategory = {
  id: string
  title: string
  description: string
  items: MenuItem[]
}

export const menuCategories: MenuCategory[] = [
  {
    id: 'starters',
    title: 'Starters',
    description: 'Light, shareable plates to begin the evening.',
    items: [
      {
        id: 'burrata',
        name: 'Creamy Burrata',
        description: 'Heirloom tomatoes, basil oil, grilled sourdough.',
        price: '$16',
      },
      {
        id: 'arancini',
        name: 'Wild Mushroom Arancini',
        description: 'Crisp risotto croquettes with parmesan and roasted garlic aioli.',
        price: '$14',
      },
      {
        id: 'calamari',
        name: 'Crispy Calamari',
        description: 'Lemon, fennel salt, and charred chili marinara.',
        price: '$17',
      }
    ]
  },
  {
    id: 'mains',
    title: 'Mains',
    description: 'Comforting dishes for dinner, date nights, and weekend outings.',
    items: [
      {
        id: 'vodka-rigatoni',
        name: 'Rigatoni alla Vodka',
        description: 'Silky tomato cream sauce, basil, pecorino, and cracked pepper.',
        price: '$24',
      },
      {
        id: 'short-rib',
        name: 'Braised Short Rib',
        description: 'Soft polenta, roasted carrots, and red wine jus.',
        price: '$32',
      },
      {
        id: 'salmon',
        name: 'Seared Salmon',
        description: 'Cannellini beans, blistered tomatoes, caper brown butter.',
        price: '$29',
      }
    ]
  },
  {
    id: 'desserts',
    title: 'Desserts',
    description: 'A sweet finish for guests lingering over espresso and cocktails.',
    items: [
      {
        id: 'tiramisu',
        name: 'House Tiramisu',
        description: 'Espresso-soaked ladyfingers with mascarpone cream.',
        price: '$11',
      },
      {
        id: 'panna-cotta',
        name: 'Vanilla Bean Panna Cotta',
        description: 'Seasonal berries, citrus zest, and almond crumble.',
        price: '$10',
      },
      {
        id: 'affogato',
        name: 'Affogato',
        description: 'Gelato finished with a pour of hot espresso.',
        price: '$9',
      }
    ]
  }
]

export const featuredDishes: MenuItem[] = [
  menuCategories[0].items[0],
  menuCategories[1].items[0],
  menuCategories[2].items[0],
]
