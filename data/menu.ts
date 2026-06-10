export type MenuItem = {
  id: string
  name: string
  description: string
  price: string
}

export type MenuCategory = {
  title: string
  items: MenuItem[]
}

export const menuCategories: MenuCategory[] = [
  {
    title: 'Starters',
    items: [
      { id: 'burrata', name: 'Burrata & Roasted Tomatoes', description: 'Creamy burrata, blistered heirloom tomatoes, basil oil, grilled sourdough.', price: '$16' },
      { id: 'calamari', name: 'Crispy Calamari', description: 'Lemon-dusted calamari with fennel, parsley, and chili aioli.', price: '$18' },
      { id: 'arancini', name: 'Porcini Arancini', description: 'Golden risotto croquettes with truffle pecorino and marinara.', price: '$15' },
    ],
  },
  {
    title: 'Mains',
    items: [
      { id: 'vodka-rigatoni', name: 'Rigatoni Alla Vodka', description: 'Housemade rigatoni in a silky tomato-vodka sauce with basil and parmesan.', price: '$24' },
      { id: 'short-rib', name: 'Braised Short Rib Pappardelle', description: 'Slow-braised beef, rosemary jus, pappardelle, and gremolata.', price: '$31' },
      { id: 'branzino', name: 'Pan-Seared Branzino', description: 'Crisp-skinned branzino, charred lemon, cannellini beans, and herbs.', price: '$34' },
    ],
  },
  {
    title: 'Desserts',
    items: [
      { id: 'tiramisu', name: 'Classic Tiramisu', description: 'Espresso-soaked ladyfingers, mascarpone cream, cocoa dust.', price: '$12' },
      { id: 'panna-cotta', name: 'Vanilla Bean Panna Cotta', description: 'Silky panna cotta with orange zest syrup and pistachio crumble.', price: '$11' },
      { id: 'affogato', name: 'Affogato', description: 'Vanilla gelato with a hot pour of espresso and dark chocolate shards.', price: '$10' },
    ],
  },
]

export const featuredDishes: MenuItem[] = [
  menuCategories[0].items[0],
  menuCategories[1].items[1],
  menuCategories[2].items[0],
]
