export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  items: MenuItem[];
};

export const menuCategories: MenuCategory[] = [
  {
    id: "starters",
    title: "Starters",
    items: [
      { id: "s1", name: "Bruschetta al Pomodoro", description: "Toasted bread, ripe tomatoes, fresh basil, garlic, extra-virgin olive oil.", price: "$9" },
      { id: "s2", name: "Burrata con Prosciutto", description: "Creamy burrata, San Daniele prosciutto, rocket, cherry tomatoes.", price: "$14" },
      { id: "s3", name: "Arancini di Riso", description: "Crispy saffron risotto balls filled with mozzarella, served with marinara.", price: "$11" },
      { id: "s4", name: "Zuppa di Pesce", description: "Provencal-style seafood soup with crusty bread.", price: "$13" },
    ],
  },
  {
    id: "mains",
    title: "Mains",
    items: [
      { id: "m1", name: "Spaghetti alla Carbonara", description: "Guanciale, Pecorino Romano, egg yolk, black pepper. No cream.", price: "$22" },
      { id: "m2", name: "Risotto ai Funghi Porcini", description: "Arborio rice, wild porcini mushrooms, Parmesan, white wine.", price: "$24" },
      { id: "m3", name: "Branzino al Forno", description: "Whole sea bass baked with capers, olives, lemon, and herbs.", price: "$32" },
      { id: "m4", name: "Tagliata di Manzo", description: "Sliced sirloin steak, rocket, Parmesan shavings, balsamic reduction.", price: "$36" },
      { id: "m5", name: "Gnocchi al Pesto Genovese", description: "House-made potato gnocchi, Ligurian basil pesto, pine nuts.", price: "$20" },
      { id: "m6", name: "Pizza Margherita", description: "San Marzano tomato, fior di latte, fresh basil, E.V.O.O.", price: "$18" },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    items: [
      { id: "d1", name: "Tiramisù Classico", description: "Mascarpone cream, espresso-soaked ladyfingers, cocoa dusting.", price: "$9" },
      { id: "d2", name: "Panna Cotta alla Vaniglia", description: "Silky vanilla cream set with fresh berry coulis.", price: "$8" },
      { id: "d3", name: "Cannoli Siciliani", description: "Crisp shells filled with sweetened ricotta, candied orange peel, pistachios.", price: "$9" },
    ],
  },
];

export const featuredDishes = [
  menuCategories[0].items[1], // Burrata con Prosciutto
  menuCategories[1].items[0], // Carbonara
  menuCategories[2].items[0], // Tiramisù
];
