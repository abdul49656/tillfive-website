export type MenuItem = {
  name: string;
  price: string;
  description?: string;
  image?: string;
};

export type MenuCategory = {
  id: string;
  name: string;
  description?: string;
  items: MenuItem[];
};

export const menuCategories: MenuCategory[] = [
  {
    id: "pizza",
    name: "Build Your Own Pizza",
    description: "Dough made fresh daily on premises. Any pizza can be ordered as a calzone.",
    items: [
      {
        name: "Build Your Own Pizza",
        price: "$10.00",
        description: "Classic cheese or create your own pizza. Can be ordered as a calzone.",
        image: "/images/pizzas/cheese-pizza.jpg",
      },
      {
        name: "Pepperoni Pizza",
        price: "$10.99",
        description: "Classic pepperoni pizza. Can be ordered as a calzone.",
        image: "/images/pizzas/pepperoni-lover-pizza.jpg",
      },
      {
        name: "Sausage Pizza",
        price: "$10.99",
        description: "Classic sausage pizza. Can be ordered as a calzone.",
      },
    ],
  },
  {
    id: "specialty",
    name: "Specialty Pizzas & Calzones",
    description: "Any pizza can be ordered as a calzone.",
    items: [
      {
        name: "Primo Pizza",
        price: "$12.99",
        description: "Pepperoni, Italian sausage, salami.",
        image: "/images/pizzas/primo-pizza.jpg",
      },
      {
        name: "Meat Lover's Pizza",
        price: "$12.99",
        description: "Pepperoni, sausage, bacon, beef, and ham.",
        image: "/images/pizzas/meat-lover-pizza.jpg",
      },
      {
        name: "Supreme Pizza",
        price: "$12.99",
        description: "Pepperoni, sausage, onions, green peppers, mushrooms.",
        image: "/images/pizzas/supreme-pizza.jpg",
      },
      {
        name: "Veggie Lover's Pizza",
        price: "$12.99",
        description: "Black olives, green peppers, onions, mushrooms, tomatoes.",
        image: "/images/pizzas/veggie-lover-pizza.jpg",
      },
      {
        name: "Meatball Pizza",
        price: "$12.99",
        description: "Meatballs, onions, tomatoes.",
      },
      {
        name: "Greek Pizza",
        price: "$12.99",
        description: "Light garlic, feta cheese, black olive, tomato, onion, green pepper & basil with olive oil.",
      },
      {
        name: "Mexican Pizza",
        price: "$12.99",
        description: "Beef, jalapenos, tomatoes, onions, mozzarella and cheddar cheeses.",
        image: "/images/pizzas/mexican-pizza.jpg",
      },
      {
        name: "Hawaiian Pizza",
        price: "$12.99",
        description: "Ham and pineapple.",
        image: "/images/pizzas/hawaiian-pizza.jpg",
      },
      {
        name: "Margherita Pizza",
        price: "$12.99",
        description: "Light garlic, tomatoes, cheddar and mozzarella cheeses.",
        image: "/images/pizzas/margherita-pizza.jpg",
      },
      {
        name: "Spinach Pizza",
        price: "$12.99",
        description: "Spinach, onions, tomatoes, garlic.",
      },
      {
        name: "Chicken & Bacon Pizza",
        price: "$12.99",
        description: "Grilled chicken, bacon, tomatoes, with garlic Parmesan sauce.",
      },
      {
        name: "Grilled Chicken Pizza",
        price: "$12.99",
        description: "Grilled chicken, tomatoes, spinach, and onions.",
        image: "/images/pizzas/grilled-chicken-pizza.jpg",
      },
      {
        name: "Grilled Chicken Ranch Pizza",
        price: "$12.99",
        description: "Grilled chicken, bacon, onions, tomatoes, green peppers, with ranch sauce.",
        image: "/images/pizzas/grilled-chicken-ranch-pizza.jpg",
      },
      {
        name: "BBQ Chicken Pizza",
        price: "$12.99",
        description: "Grilled chicken, onions, with BBQ sauce.",
        image: "/images/pizzas/bbq-chicken-pizza.jpg",
      },
      {
        name: "Classic Pizza",
        price: "$12.99",
        description: "Pepperoni, ham, onions, mushrooms, green peppers, and black olives.",
        image: "/images/pizzas/classic-pizza.jpg",
      },
      {
        name: "Gyro Pizza",
        price: "$12.99",
        description: "Gyro meat, onions, tomatoes, green peppers, with ranch sauce.",
      },
      {
        name: "Chicken Alfredo Pizza",
        price: "$12.99",
        description: "Grilled chicken with Alfredo sauce.",
        image: "/images/pizzas/chicken-alfredo-pizza.jpg",
      },
      {
        name: "Pepperoni Lover's Pizza",
        price: "$12.99",
        description: "Loaded triple pepperoni.",
        image: "/images/pizzas/pepperoni-lover-pizza.jpg",
      },
      {
        name: "Cheese Lover's Pizza",
        price: "$12.99",
        description: "Mozzarella, provolone, Parmesan, and cheddar cheeses.",
      },
      {
        name: "Premium Veggie Pizza",
        price: "$12.99",
        description: "Spinach, zucchini, green peppers, garlic, tomatoes.",
      },
      {
        name: "Cheeseburger Pizza",
        price: "$12.99",
        description: "Beef, bacon, mozzarella and cheddar cheeses.",
      },
      {
        name: "White Pizza",
        price: "$12.99",
        description: "Garlic parmesan sauce, beef topping, onions, green peppers, tomatoes, basil, oregano.",
      },
      {
        name: "Buffalo Chicken Pizza",
        price: "$12.99",
        description: "Grilled chicken, hot sauce, ranch sauce, jalapeno, tomato, mozzarella & cheddar cheese.",
      },
      {
        name: "Calzone",
        price: "$12.99",
        description: "Any pizza can be made as a calzone.",
        image: "/images/pizzas/calzone.jpg",
      },
    ],
  },
  {
    id: "appetizers",
    name: "Appetizers",
    items: [
      {
        name: "Chicken Wings",
        price: "$7.49",
        description: "Choice of sauce: plain, hot, medium, honey BBQ, teriyaki, garlic parmesan, lemon pepper, cajun. Available in 5, 10, 15, or 20 pieces.",
        image: "/images/appetizers/chicken-wings.jpg",
      },
      {
        name: "Chicken Tender Basket",
        price: "$10.99",
        description: "5 breaded chicken tenders with french fries.",
        image: "/images/appetizers/chicken-tender-basket.jpg",
      },
      {
        name: "Buffalo Boneless Chicken Strips",
        price: "$10.99",
        description: "5 breaded chicken strips with choice of hot or mild buffalo sauce. Served with fries.",
        image: "/images/appetizers/buffalo-boneless-chicken-strips.jpg",
      },
      {
        name: "Chicken Quesadilla",
        price: "$8.99",
        description: "Served with salsa and sour cream.",
        image: "/images/appetizers/chicken-quesadilla.jpg",
      },
      {
        name: "Cheese Quesadilla",
        price: "$8.99",
        description: "Served with salsa and sour cream.",
      },
      {
        name: "Cheese Breadsticks",
        price: "$7.99",
        description: "10 inch cheese breadsticks.",
        image: "/images/appetizers/cheese-breadsticks.jpg",
      },
      {
        name: "Regular Breadsticks",
        price: "$5.99",
        image: "/images/appetizers/regular-breadsticks.jpg",
      },
      {
        name: "Garlic Bread",
        price: "$5.99",
        description: "Bread topped with garlic, herb seasoning, baked to perfection.",
        image: "/images/appetizers/garlic-bread.jpg",
      },
      {
        name: "Garlic Cheese Bread",
        price: "$5.99",
        image: "/images/appetizers/garlic-cheese-breadsticks.jpg",
      },
      {
        name: "Onion Rings",
        price: "$6.99",
        description: "8 breaded onion rings served with ketchup.",
        image: "/images/appetizers/onion-rings.jpg",
      },
      {
        name: "Fried Mushrooms",
        price: "$7.99",
        description: "10 breaded mushrooms served with ranch dressing.",
        image: "/images/appetizers/fried-mushrooms.jpg",
      },
      {
        name: "Fried Mozzarella Sticks",
        price: "$6.99",
        description: "6 breaded mozzarella sticks served with marinara sauce.",
        image: "/images/appetizers/mozzerella-sticks.jpg",
      },
      {
        name: "Stuffed Jalapeno Poppers",
        price: "$6.99",
        description: "6 stuffed cheese jalapeno poppers served with ranch dressing.",
        image: "/images/appetizers/jalapeno-poppers.jpg",
      },
      {
        name: "Chicken Tenders",
        price: "$7.99",
        description: "5 breaded chicken tenders served with honey mustard dressing.",
        image: "/images/appetizers/chicken-tenders.jpg",
      },
      {
        name: "Sampler Platter",
        price: "$12.99",
        description: "Chicken tenders (2), mozzarella sticks (3) & onion rings (4).",
        image: "/images/appetizers/sampler-platter.jpg",
      },
      {
        name: "French Fries (Small)",
        price: "$2.99",
        description: "Deep-fried golden brown, seasoned to perfection.",
        image: "/images/appetizers/fries.jpg",
      },
      {
        name: "French Fries (Large)",
        price: "$3.99",
        description: "Deep-fried golden brown, seasoned to perfection.",
      },
      {
        name: "Cheesy Bacon Fries",
        price: "$6.99",
        description: "Melted nacho cheese & bacon topped on french fries.",
        image: "/images/appetizers/cheezy-bacon-fries.jpg",
      },
      {
        name: "Breaded Chicken Nuggets",
        price: "$4.99",
        description: "10 breaded chicken nuggets served with ranch dressing.",
        image: "/images/appetizers/chicken-nuggets.jpg",
      },
    ],
  },
  {
    id: "salads",
    name: "Salads",
    items: [
      {
        name: "House Salad",
        price: "$6.99",
        description: "Romaine lettuce, onion, green pepper, cherry tomatoes, black olives, mozzarella & cheddar cheese.",
        image: "/images/salads/house-salad.jpg",
      },
      {
        name: "Club Salad",
        price: "$9.99",
        description: "Turkey, roast beef, onion, green pepper, cherry tomato, black olives & mozzarella cheese.",
        image: "/images/salads/club-salad.jpg",
      },
      {
        name: "Teriyaki Chicken Salad",
        price: "$9.99",
        description: "Grilled chicken marinated with teriyaki sauce, cherry tomatoes, pineapple, mozzarella cheese, onion & almonds.",
      },
      {
        name: "Greek Salad",
        price: "$9.99",
        description: "Onion, green pepper, cherry tomatoes, black olives & feta cheese with Greek dressing.",
        image: "/images/salads/greek-salad.jpg",
      },
      {
        name: "Grilled Chicken Salad",
        price: "$9.99",
        description: "Grilled chicken strips, onion, green pepper, cherry tomato, black olives & mozzarella cheese.",
        image: "/images/salads/grilled-chicken-salad.jpg",
      },
      {
        name: "Buffalo Chicken Salad",
        price: "$9.99",
        description: "Chicken tenders tossed in buffalo sauce, onion, green pepper, cherry tomato, black olives & mozzarella cheese.",
        image: "/images/salads/buffalo-chicken-salad.jpg",
      },
      {
        name: "Crispy Chicken Salad",
        price: "$9.99",
        description: "Breaded chicken tenders, onion, green pepper, cherry tomato, black olives & mozzarella cheese.",
        image: "/images/salads/crispy-chicken-salad.jpg",
      },
      {
        name: "Grilled Shrimp Salad",
        price: "$9.99",
        description: "Shrimp, onion, cherry tomato & black olives.",
        image: "/images/salads/grilled-shrimp-salad.jpg",
      },
      {
        name: "Fuji Apple Salad",
        price: "$9.99",
        description: "Fuji apple chips, grilled chicken, cherry tomatoes, onion, pecans & mozzarella cheese with raspberry dressing.",
      },
      {
        name: "Chicken Pecan Salad",
        price: "$9.99",
        description: "Grilled chicken, orange slices, pecans & feta cheese with raspberry dressing.",
      },
      {
        name: "Classic Caesar Salad",
        price: "$9.99",
        description: "Parmesan cheese & croutons with Caesar dressing.",
        image: "/images/salads/ceaser-salad.jpg",
      },
      {
        name: "Chicken Caesar Salad",
        price: "$9.99",
        description: "Choice of grilled or crispy chicken, Parmesan cheese & croutons.",
        image: "/images/salads/chicken-ceaser-salad.jpg",
      },
      {
        name: "Chef's Salad",
        price: "$9.99",
        description: "Turkey, ham, green pepper, onion, cherry tomatoes & black olives with mozzarella cheese.",
        image: "/images/salads/chef-salad.jpg",
      },
    ],
  },
  {
    id: "pastas",
    name: "Pastas",
    description: "Served with two breadsticks. Add a small salad for an additional charge.",
    items: [
      {
        name: "Fettuccine Alfredo",
        price: "$14.99",
        description: "Grilled chicken, cajun chicken, or shrimp.",
        image: "/images/pastas/fettucine-alfredo.jpg",
      },
      {
        name: "Spaghetti with Red Sauce",
        price: "$14.99",
        description: "Meatball or meat sauce.",
        image: "/images/pastas/spaghetti-red-sauce.jpg",
      },
      {
        name: "Cheese Ravioli",
        price: "$14.99",
        description: "Red or white sauce.",
        image: "/images/pastas/ravioli.jpg",
      },
      {
        name: "Meat Ravioli",
        price: "$14.99",
        description: "Red or white sauce.",
      },
      {
        name: "Meat Lasagna",
        price: "$14.99",
        description: "Classic cheese, tomato sauce, and ground beef.",
        image: "/images/pastas/meat-lasagna.jpg",
      },
      {
        name: "Baked Ziti",
        price: "$14.99",
        description: "Red or meat sauce.",
      },
      {
        name: "Eggplant Parmesan Pasta",
        price: "$14.99",
        description: "Breaded eggplant with red sauce & Parmesan.",
        image: "/images/pastas/eggplant-parmesan-pasta.jpg",
      },
      {
        name: "Chicken Parmesan Pasta",
        price: "$14.99",
        description: "Breaded chicken breast with red sauce & Parmesan.",
        image: "/images/pastas/chicken-parmesan-pasta.jpg",
      },
      {
        name: "Cheese Tortellini",
        price: "$14.99",
        description: "Red or white sauce.",
        image: "/images/pastas/cheese-tortellini.jpg",
      },
      {
        name: "Seafood Fettuccini",
        price: "$14.99",
        description: "Shrimp, crab meat, tomato & green pepper with Alfredo sauce.",
        image: "/images/pastas/seafood-fettucine.jpg",
      },
      {
        name: "Veggie Primo Pasta",
        price: "$14.99",
        description: "Ziti pasta with grilled green pepper, onion, black olives & tomatoes in red sauce.",
      },
      {
        name: "Classic Chicken Pasta",
        price: "$14.99",
        description: "Ziti pasta with grilled chicken, tomato & spinach with Alfredo sauce & light red sauce.",
        image: "/images/pastas/classic-chicken-pasta.jpg",
      },
    ],
  },
  {
    id: "burgers",
    name: "Burgers & Pitas",
    description: "All burgers & pitas come with fries.",
    items: [
      {
        name: "Classic Cheeseburger",
        price: "$11.99",
        description: "1/4 lb beef patty, lettuce, onion, tomato & American cheese.",
        image: "/images/burgers/classic-cheeseburger.jpg",
      },
      {
        name: "Mushroom Swiss Burger",
        price: "$11.99",
        description: "1/4 lb beef patty, Swiss cheese, grilled mushrooms & onion.",
        image: "/images/burgers/mushroom-swiss-burger.jpg",
      },
      {
        name: "Bacon Cheeseburger",
        price: "$11.99",
        description: "1/4 lb beef patty, American cheese, bacon, onion, lettuce & tomato.",
        image: "/images/burgers/bacon-cheese-burger.jpg",
      },
      {
        name: "Spicy Jalapeno Cheeseburger",
        price: "$11.99",
        description: "Burger, American cheese, jalapeno, lettuce, onion & tomato.",
        image: "/images/burgers/spicy-jalapeno-cheeseburger.jpg",
      },
      {
        name: "Cajun Chicken Sandwich",
        price: "$11.99",
        description: "Grilled cajun chicken, Swiss cheese, lettuce, tomatoes, and onions.",
        image: "/images/burgers/cajun-chicken-sandwich.jpg",
      },
      {
        name: "Buffalo Chicken Sandwich",
        price: "$11.99",
        description: "Breaded chicken tossed in buffalo sauce, ranch sauce, lettuce, and tomatoes.",
        image: "/images/burgers/buffalo-chicken-sandwich.jpg",
      },
      {
        name: "Chicken Fajita Pita",
        price: "$11.99",
        description: "Grilled chicken, tomatoes, green peppers, and onions with sour cream.",
        image: "/images/burgers/chicken-fajita-pita.jpg",
      },
      {
        name: "Steak Fajita Pita",
        price: "$11.99",
        description: "Grilled steak, tomato, green pepper & onion with sour cream.",
        image: "/images/burgers/steak-fajita-pita.jpg",
      },
      {
        name: "Gyro Pita",
        price: "$11.99",
        description: "Grilled gyro slices, lettuce & tomato with tzatziki sauce.",
        image: "/images/burgers/gyro-pita.jpg",
      },
      {
        name: "Grilled Chicken Pita",
        price: "$11.99",
        description: "Grilled chicken, lettuce & tomato with tzatziki sauce.",
        image: "/images/burgers/grilled-chicken-pita-2.jpg",
      },
    ],
  },
  {
    id: "subs",
    name: "Sub Sandwiches",
    description: "Add chips or fries for an additional charge.",
    items: [
      {
        name: "Meatball Sub",
        price: "$11.99",
        description: "Meatball with red sauce topped with mozzarella and Parmesan cheeses.",
        image: "/images/subs/meatball-sub.jpg",
      },
      {
        name: "Chicken Parmesan Sub",
        price: "$11.99",
        description: "Breaded chicken with red sauce topped with mozzarella and Parmesan cheeses.",
      },
      {
        name: "Grilled Veggie Sub",
        price: "$11.99",
        description: "Grilled onions, green peppers, black olives, and mushrooms with fresh tomato, lettuce, and mozzarella cheese.",
      },
      {
        name: "Philly Cheesesteak Sub",
        price: "$11.99",
        description: "Philly, onions, green peppers, mushrooms topped with cheese.",
        image: "/images/subs/philly-cheeseteak.jpg",
      },
      {
        name: "Chicken Philly Sub",
        price: "$11.99",
        description: "Chicken Philly, onions, green peppers, mushrooms topped with cheese.",
        image: "/images/subs/chicken-philly.jpg",
      },
      {
        name: "Club Sub",
        price: "$11.99",
        description: "Turkey, ham, lettuce, tomatoes topped with mozzarella cheese.",
        image: "/images/subs/club-sub.jpg",
      },
      {
        name: "Classic Chicken Sub",
        price: "$11.99",
        description: "Grilled chicken, cheese, lettuce & tomato with tzatziki sauce.",
      },
      {
        name: "Eggplant Parmesan Sub",
        price: "$11.99",
        description: "Breaded eggplant, red sauce & light garlic topped with mozzarella cheese.",
      },
      {
        name: "Chicken Ranch Sub",
        price: "$11.99",
        description: "Grilled chicken, bacon, lettuce, tomato & ranch sauce topped with cheese.",
        image: "/images/subs/chicken-ranch-sub.jpg",
      },
      {
        name: "Ham Sub",
        price: "$11.99",
        description: "Ham, lettuce, and tomatoes.",
      },
      {
        name: "Turkey Sub",
        price: "$11.99",
        description: "Turkey, lettuce, and tomatoes.",
      },
      {
        name: "Steak & Cheese Sub",
        price: "$11.99",
        description: "Steak, cheese, lettuce, and tomatoes.",
        image: "/images/subs/steak-and-cheese-sub.jpg",
      },
      {
        name: "Roast Beef Sub",
        price: "$11.99",
        description: "Roast beef, cheese, lettuce, and tomatoes.",
      },
    ],
  },
  {
    id: "desserts",
    name: "Desserts",
    items: [
      {
        name: "New York Style Cheesecake",
        price: "$4.99",
        description: "Classic New York cheesecake with a creamy satiny texture.",
        image: "/images/desserts/cheesecake.jpg",
      },
      {
        name: "Cannoli",
        price: "$5.99",
        description: "Two classic Italian cannoli.",
        image: "/images/desserts/cannoli.jpg",
      },
      {
        name: "Chocolate Cake",
        price: "$5.99",
        image: "/images/desserts/chocolate-cake.jpg",
      },
      {
        name: "Tiramisu",
        price: "$5.99",
        description: "Coffee-flavored Italian dessert. Ladyfingers dipped in coffee, layered with mascarpone cheese, flavored with cocoa.",
        image: "/images/desserts/tiramisu.jpg",
      },
      {
        name: "Chocolate Chip Cookie",
        price: "$7.99",
        description: "7-inch fresh baked chocolate chip cookie.",
        image: "/images/desserts/chocolate-chip-cookie.jpg",
      },
    ],
  },
  {
    id: "beverages",
    name: "Beverages",
    items: [
      { name: "Pepsi", price: "$1.49", description: "12 oz can, 20 oz bottle, or 2 liter." },
      { name: "Diet Pepsi", price: "$1.49", description: "12 oz can, 20 oz bottle, or 2 liter." },
      { name: "Sierra Mist", price: "$1.49", description: "12 oz can, 20 oz bottle, or 2 liter." },
      { name: "Orange Crush", price: "$1.49", description: "12 oz can, 20 oz bottle, or 2 liter." },
      { name: "Sweet Tea (Can)", price: "$1.49", description: "12 oz can." },
      { name: "Sweet Tea (Bottle)", price: "$1.99", description: "20 oz bottle." },
      { name: "Bottled Water", price: "$1.99", description: "20 oz bottle." },
    ],
  },
  {
    id: "catering",
    name: "Catering",
    items: [
      { name: "Salad Half Tray", price: "$29.00", description: "Serves 8–10 people." },
      { name: "Salad Full Tray", price: "$49.00", description: "Serves 15–20 people." },
      { name: "Pasta Half Tray", price: "$49.00", description: "Serves 8–10 people. Served with garlic bread." },
      { name: "Pasta Full Tray", price: "$79.00", description: "Serves 15–20 people. Served with garlic bread." },
      { name: "Large Pizza (up to 2 toppings)", price: "$10.00", description: "Minimum order of 5." },
      { name: "Sub Sandwich Half Tray", price: "$35.00", description: "4.5\" subs. Serves 8–10 people." },
      { name: "Sub Sandwich Full Tray", price: "$65.00", description: "4.5\" subs. Serves 15–20 people." },
    ],
  },
];
