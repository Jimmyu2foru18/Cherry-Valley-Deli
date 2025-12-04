import { BusinessInfo, Category, MenuItem, Review, Employee, Shift, JobPosting } from "./types";

export const BUSINESS_INFO: BusinessInfo = {
  address: "168 Hempstead Tpke, West Hempstead, NY 11552",
  phone: "(516) 292-3381",
  hours: "Open 24 Hours",
  coords: {
    lat: 40.7062, 
    lng: -73.6508
  }
};

export const REVIEWS: Review[] = [
  {
    id: '1',
    author: 'Michael R.',
    rating: 5,
    text: "The Chicken Sandwich (TCS) is literally the best sandwich I've ever had. Fast delivery even late at night.",
    date: '2 days ago',
    source: 'Grubhub'
  },
  {
    id: '2',
    author: 'Sarah J.',
    rating: 5,
    text: "Always fresh, always hot. The honey turkey wrap is my go-to. Love that they are open 24/7!",
    date: '1 week ago',
    source: 'Seamless'
  },
  {
    id: '3',
    author: 'David K.',
    rating: 4,
    text: "Solid deli. Great portion sizes for the price. The fries were still crispy upon arrival.",
    date: '3 weeks ago',
    source: 'Grubhub'
  },
  {
    id: '4',
    author: 'Emily W.',
    rating: 5,
    text: "The Coyote Hero is a game changer. Waffle fries ON the sandwich? Genius.",
    date: '1 month ago',
    source: 'Direct'
  }
];

export const CATEGORIES = [
  { name: Category.SPECIALTY, image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=800&auto=format&fit=crop' },
  { name: Category.CHICKEN, image: 'https://images.unsplash.com/photo-1604467715878-83e57e8bc129?q=80&w=800&auto=format&fit=crop' },
  { name: Category.BEEF, image: 'https://images.unsplash.com/photo-1553909489-cd47e5907264?q=80&w=800&auto=format&fit=crop' },
  { name: Category.BURGERS, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop' },
  { name: Category.BREAKFAST, image: 'https://images.unsplash.com/photo-1533089862017-561484579210?q=80&w=800&auto=format&fit=crop' },
  { name: Category.WRAPS, image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=800&auto=format&fit=crop' },
  { name: Category.APPETIZERS, image: 'https://images.unsplash.com/photo-1541592106381-b31e9674c0e5?q=80&w=800&auto=format&fit=crop' },
  { name: Category.SALADS, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop' },
  { name: Category.SOUPS, image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800&auto=format&fit=crop' },
  { name: Category.SANDWICHES, image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=800&auto=format&fit=crop' },
  { name: Category.BEVERAGES, image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?q=80&w=800&auto=format&fit=crop' },
];

export const MENU_ITEMS: MenuItem[] = [
  // ... (Full menu data from previous step remains here, assume it is populated as per previous turn) ...
  // Re-pasting the full menu would be redundant, assume the comprehensive list exists. 
  // For the sake of this file update, I will include the full list to ensure no data loss.
  
  // --- SPECIALTY HEROES ---
  {
    id: 'congo-hero',
    name: 'Congo Hero',
    description: 'Chicken cutlet, bacon, melted pepper jack, provolone, hot sauce and mayo on toasted garlic bread.',
    price: '$11.50',
    category: Category.SPECIALTY,
    imageUrl: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=800&auto=format&fit=crop',
    tags: ['Spicy'],
    featured: true
  },
  {
    id: 'cowboy-hero',
    name: 'Cowboy Hero',
    description: 'Country-fried steak, brown gravy, lettuce, tomato and mayo on toasted bread.',
    price: '$12.00',
    category: Category.SPECIALTY,
    imageUrl: 'https://images.unsplash.com/photo-1521852934898-be9c76251e60?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'coyote-hero',
    name: 'Coyote Hero',
    description: 'Chicken cutlet, melted mozzarella, bacon, waffle fries and ranch dressing on toasted garlic bread.',
    price: '$11.75',
    category: Category.SPECIALTY,
    imageUrl: 'https://images.unsplash.com/photo-1627662236961-a98072dd2949?q=80&w=800&auto=format&fit=crop',
    tags: ['Best Seller'],
    featured: true
  },
  {
    id: 'gambler-hero',
    name: 'Gambler Hero',
    description: 'Chicken cutlet, bacon, pepper jack and cheddar cheese, hot sauce, hot peppers and bleu cheese on toasted bread.',
    price: '$11.75',
    category: Category.SPECIALTY,
    imageUrl: 'https://images.unsplash.com/photo-1604467715878-83e57e8bc129?q=80&w=800&auto=format&fit=crop',
    tags: ['Spicy']
  },
  {
    id: 'patriot-hero',
    name: 'Patriot Hero',
    description: 'Grilled steak, bacon, mozzarella, garlic, cheddar, ketchup, mayo, oregano and honey mustard on toasted bread.',
    price: '$12.00',
    category: Category.SPECIALTY,
    imageUrl: 'https://images.unsplash.com/photo-1563286094-1e0f074d4452?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'wrangler-hero',
    name: 'Wrangler Hero',
    description: 'Country-fried steak, melted cheddar, BBQ sauce, bacon and tomatoes on toasted bread.',
    price: '$12.00',
    category: Category.SPECIALTY,
    imageUrl: 'https://images.unsplash.com/photo-1549488344-c1a7f73b9499?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'bullet-hero',
    name: 'Bullet Hero',
    description: 'Spicy chicken cutlet, bacon, pepperjack cheese, french fries, and cherry valley sauce on toasted garlic bread.',
    price: '$12.00',
    category: Category.SPECIALTY,
    imageUrl: 'https://images.unsplash.com/photo-1513185158878-8d8c2a2a3da3?q=80&w=800&auto=format&fit=crop',
    tags: ['Spicy']
  },
  {
    id: 'omara-hero',
    name: 'Omara Hero',
    description: 'C.C. Bacon, Melted Mozz, Waffle, & Russian on Toasted Bread.',
    price: '$11.25',
    category: Category.SPECIALTY,
    imageUrl: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'verizon-fios-hero',
    name: 'Verizon Fios Hero',
    description: 'Chicken Fingers, Mozzarella Sticks, Waffle, Coleslaw & CV sauce.',
    price: '$11.50',
    category: Category.SPECIALTY,
    imageUrl: 'https://images.unsplash.com/photo-1562967960-f655dc033f52?q=80&w=800&auto=format&fit=crop'
  },

  // --- CHICKEN HEROES & ROLLS ---
  {
    id: 'tcs-hero',
    name: 'The Chicken Sandwich (TCS) Hero',
    description: 'Chicken cutlet with brown gravy and American cheese on a toasted hero.',
    price: '$10.75+',
    category: Category.CHICKEN,
    imageUrl: 'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?q=80&w=800&auto=format&fit=crop',
    tags: ['Signature', 'Best Seller'],
    featured: true
  },
  {
    id: 'bushman-hero',
    name: 'Bushman Hero',
    description: 'Chicken cutlet with bacon, brown gravy and American cheese on a toasted garlic hero.',
    price: '$12.00+',
    category: Category.CHICKEN,
    imageUrl: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'beast-hero',
    name: 'Beast Hero',
    description: 'Chicken cutlet, bacon, Swiss cheese, onion rings and brown gravy on a toasted garlic hero.',
    price: '$12.25+',
    category: Category.CHICKEN,
    imageUrl: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'last-call-hero',
    name: 'Last Call Hero',
    description: 'Chicken cutlet with mushrooms, mozzarella and brown gravy on a toasted garlic hero.',
    price: '$11.50+',
    category: Category.CHICKEN,
    imageUrl: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'corona-hero',
    name: 'Corona Hero',
    description: 'Chicken cutlet with bacon, cheddar, onion rings and BBQ sauce on a toasted garlic hero.',
    price: '$12.00+',
    category: Category.CHICKEN,
    imageUrl: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'turkey-supreme-hero',
    name: 'Turkey Supreme Hero',
    description: 'Grilled turkey with Swiss, fried onions, bacon and brown gravy on a toasted garlic hero.',
    price: '$11.50+',
    category: Category.CHICKEN,
    imageUrl: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'chicken-cutlet-parm-hero',
    name: 'Chicken Cutlet Parm Hero',
    description: 'Chicken cutlet with mozzarella and marinara sauce on a toasted garlic hero.',
    price: '$11.00+',
    category: Category.CHICKEN,
    imageUrl: 'https://images.unsplash.com/photo-1653559260129-d4347e4c8df0?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'z-zoo-hero',
    name: 'Z-Zoo Hero',
    description: 'Grilled chicken with bacon, mozzarella, onion rings and brown gravy on a toasted garlic hero.',
    price: '$12.00+',
    category: Category.CHICKEN,
    imageUrl: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'mary-jane-hero',
    name: 'Mary Jane Hero',
    description: 'Grilled chicken with Swiss, lettuce, tomato and honey mustard on a toasted garlic hero.',
    price: '$11.00+',
    category: Category.CHICKEN,
    imageUrl: 'https://images.unsplash.com/photo-1517244683847-7456b63c5969?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'plain-jane-hero',
    name: 'Plain Jane Hero',
    description: 'Chicken cutlet with lettuce, tomato and mayo on a toasted garlic hero.',
    price: '$10.00+',
    category: Category.CHICKEN,
    imageUrl: 'https://images.unsplash.com/photo-1603903631889-b5f3ba4d5b9b?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'grilled-chicken-supreme-hero',
    name: 'Grilled Chicken Supreme Hero',
    description: 'Grilled chicken with Swiss, bacon, lettuce, tomato and honey mustard on a toasted garlic hero.',
    price: '$12.00+',
    category: Category.CHICKEN,
    imageUrl: 'https://images.unsplash.com/photo-1521390188746-8ad824872803?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'gimp-hero',
    name: 'Gimp Hero',
    description: 'Grilled chicken with mozzarella, lettuce, tomato, oregano and balsamic vinegar on a toasted hero.',
    price: '$12.00+',
    category: Category.CHICKEN,
    imageUrl: 'https://images.unsplash.com/photo-1553909489-cd47e5907264?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'chicken-cordon-bleu-hero',
    name: 'Chicken Cordon Bleu Hero',
    description: 'Chicken cutlet with grilled ham, Swiss and Russian dressing on a toasted garlic hero.',
    price: '$11.50+',
    category: Category.CHICKEN,
    imageUrl: 'https://images.unsplash.com/photo-1595295333158-4742f28fbd85?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'leanboy-hero',
    name: 'Leanboy Hero',
    description: 'Grilled honey turkey with mozzarella, fried onions and brown gravy on a toasted garlic hero.',
    price: '$11.00+',
    category: Category.CHICKEN,
    imageUrl: 'https://images.unsplash.com/photo-1518035277708-20e365851493?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'buffalo-chicken-cutlet-hero',
    name: 'Buffalo Chicken Cutlet Hero',
    description: 'Chicken cutlet with bleu cheese and hot sauce on a toasted garlic hero.',
    price: '$10.50+',
    category: Category.CHICKEN,
    imageUrl: 'https://images.unsplash.com/photo-1604467715878-83e57e8bc129?q=80&w=800&auto=format&fit=crop',
    tags: ['Spicy']
  },

  // --- BEEF HEROES & ROLLS ---
  {
    id: 'bomb-hero',
    name: 'Bomb Hero',
    description: 'Grilled steak with bacon, cheddar, onion rings and brown gravy on a toasted garlic hero.',
    price: '$12.00+',
    category: Category.BEEF,
    imageUrl: 'https://images.unsplash.com/photo-1603064752734-4c48eff53d05?q=80&w=800&auto=format&fit=crop',
    featured: true
  },
  {
    id: 'philly-cheese-steak-hero',
    name: 'Philly Cheese Steak Hero',
    description: 'Grilled steak with American cheese, fried onions and brown gravy on a toasted garlic hero.',
    price: '$11.50+',
    category: Category.BEEF,
    imageUrl: 'https://images.unsplash.com/photo-1635526910429-04347781b0f6?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'philly-italian-hero',
    name: 'Philly Italian Hero',
    description: 'Grilled steak with mozzarella, peppers, onions and marinara sauce on a toasted garlic hero.',
    price: '$11.50+',
    category: Category.BEEF,
    imageUrl: 'https://images.unsplash.com/photo-1529312266912-b33cf6227e2f?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'macho-man-hero',
    name: 'Macho Man Hero',
    description: 'Grilled roast beef with mozzarella, Swiss, fried onions and brown gravy on a toasted hero.',
    price: '$11.50+',
    category: Category.BEEF,
    imageUrl: 'https://images.unsplash.com/photo-1553909489-cd47e5907264?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'fatboy-hero',
    name: 'Fatboy Hero',
    description: 'Grilled roast beef with fried onions, mozzarella and brown gravy on a toasted garlic hero.',
    price: '$11.50+',
    category: Category.BEEF,
    imageUrl: 'https://images.unsplash.com/photo-1551615593-ef5fe247e8f7?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'sob-hero',
    name: 'SOB Hero',
    description: 'Grilled steak with Swiss, green peppers, fried onions and five different sauces on a toasted hero.',
    price: '$11.50+',
    category: Category.BEEF,
    imageUrl: 'https://images.unsplash.com/photo-1619860860774-1e2e17343432?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'honey-hog-hero',
    name: 'Honey Hog Hero',
    description: 'Grilled honey turkey and roast pork with mozzarella, bacon and brown gravy on a toasted garlic hero.',
    price: '$11.25+',
    category: Category.BEEF,
    imageUrl: 'https://images.unsplash.com/photo-1604467715878-83e57e8bc129?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'tuff-guy-hero',
    name: 'Tuff Guy Hero',
    description: 'Grilled roast beef with onions, mozzarella and Swiss with hot peppers and hot sauce on a toasted hero.',
    price: '$11.00+',
    category: Category.BEEF,
    imageUrl: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=800&auto=format&fit=crop',
    tags: ['Spicy']
  },
  {
    id: 'super-cubano-hero',
    name: 'Super Cubano Hero',
    description: 'Grilled roast pork and ham with Swiss, pickles and mustard on a grilled hero.',
    price: '$11.00+',
    category: Category.BEEF,
    imageUrl: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'fiddlers-green-hero',
    name: 'Fiddler\'s Green Hero',
    description: 'Grilled steak with fried onions, American cheese, lettuce, tomato and mayo on a toasted hero.',
    price: '$11.50+',
    category: Category.BEEF,
    imageUrl: 'https://images.unsplash.com/photo-1475090169767-40ed8d18f67d?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'sausage-hero',
    name: 'Sausage Hero',
    description: 'Three breakfast sausage patties on a toasted hero.',
    price: '$8.75+',
    category: Category.BEEF,
    imageUrl: 'https://images.unsplash.com/photo-1595295333158-4742f28fbd85?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'pastrami-supreme-hero',
    name: 'Pastrami Supreme Hero',
    description: 'Grilled pastrami with Swiss, fried onions and mustard on a toasted hero.',
    price: '$11.00+',
    category: Category.BEEF,
    imageUrl: 'https://images.unsplash.com/photo-1563286094-1e0f074d4452?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'reuben-hero',
    name: 'Reuben Hero',
    description: 'Grilled corned beef with Swiss, sauerkraut and Russian dressing on a grilled hero.',
    price: '$11.00+',
    category: Category.BEEF,
    imageUrl: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'boneless-rib-hero',
    name: 'Boneless Rib Hero',
    description: 'Boneless ribs with BBQ sauce on a toasted hero.',
    price: '$9.50+',
    category: Category.BEEF,
    imageUrl: 'https://images.unsplash.com/photo-1544025162-d76690b67f61?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'blt-hero',
    name: 'BLT Hero',
    description: 'Crispy bacon, lettuce, tomatoes and mayo on a toasted hero.',
    price: '$10.00+',
    category: Category.BEEF,
    imageUrl: 'https://images.unsplash.com/photo-1553909489-cd47e5907264?q=80&w=800&auto=format&fit=crop'
  },

  // --- BURGERS & GRILL ---
  {
    id: 'hamburger',
    name: 'Hamburger',
    description: 'Classic beef patty.',
    price: '$4.25',
    category: Category.BURGERS,
    imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'cheeseburger',
    name: 'Cheeseburger',
    description: 'Classic beef patty with cheese.',
    price: '$4.75',
    category: Category.BURGERS,
    imageUrl: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'bacon-cheeseburger',
    name: 'Bacon Cheeseburger',
    description: 'Beef patty, cheese, and crispy bacon.',
    price: '$6.00',
    category: Category.BURGERS,
    imageUrl: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'pizza-burger',
    name: 'Pizza Burger',
    description: 'Beef patty topped with marinara and mozzarella.',
    price: '$5.00',
    category: Category.BURGERS,
    imageUrl: 'https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'turkey-burger',
    name: 'Turkey Burger',
    description: 'Lean turkey patty.',
    price: '$5.25',
    category: Category.BURGERS,
    imageUrl: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'veggie-burger',
    name: 'Veggie Burger',
    description: 'Plant-based patty.',
    price: '$5.50',
    category: Category.BURGERS,
    imageUrl: 'https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'cheeseburger-deluxe',
    name: 'Cheeseburger Deluxe',
    description: 'Served with lettuce, tomato, pickles and french fries.',
    price: '$9.50',
    category: Category.BURGERS,
    imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'bacon-cheeseburger-deluxe',
    name: 'Bacon Cheeseburger Deluxe',
    description: 'Served with lettuce, tomato, pickles and french fries.',
    price: '$11.50',
    category: Category.BURGERS,
    imageUrl: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'double-bacon-cheeseburger',
    name: 'Double Bacon Cheeseburger',
    description: 'Two patties, crispy bacon, and cheese.',
    price: '$8.50',
    category: Category.BURGERS,
    imageUrl: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'hamburger-deluxe-couch',
    name: 'Hamburger Deluxe Couch',
    description: 'Served with lettuce, tomato, pickles. Includes couch-style fries topped with gravy and mozzarella.',
    price: '$12.00',
    category: Category.BURGERS,
    imageUrl: 'https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?q=80&w=800&auto=format&fit=crop',
    tags: ['Couch Style']
  },

  // --- BREAKFAST ---
  {
    id: 'egg-on-roll',
    name: '1 Egg on a Roll',
    description: 'Simple egg on a fresh roll.',
    price: '$3.25',
    category: Category.BREAKFAST,
    imageUrl: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'bacon-egg-roll',
    name: 'Bacon and Egg on a Roll',
    description: 'Crispy bacon and egg.',
    price: '$4.25',
    category: Category.BREAKFAST,
    imageUrl: 'https://images.unsplash.com/photo-1612032030207-b69eb68b5329?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'bacon-egg-cheese-roll',
    name: 'Bacon, Egg and Cheese on a Roll',
    description: 'The NYC classic.',
    price: '$4.65',
    category: Category.BREAKFAST,
    imageUrl: 'https://images.unsplash.com/photo-1612032030207-b69eb68b5329?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'bacon-egg-cheese-hero',
    name: 'Bacon, Egg and Cheese Hero',
    description: 'The classic breakfast hero.',
    price: '$8.75',
    category: Category.BREAKFAST,
    imageUrl: 'https://images.unsplash.com/photo-1612032030207-b69eb68b5329?q=80&w=800&auto=format&fit=crop',
    featured: true
  },
  {
    id: 'hungry-man-hero',
    name: 'Lumberjack Hero',
    description: 'Three eggs with bacon, ham and cheese.',
    price: '$9.50',
    category: Category.BREAKFAST,
    imageUrl: 'https://images.unsplash.com/photo-1627993072282-5060424ba22c?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'western-omelette-hero',
    name: 'Western Omelette Hero',
    description: 'Ham, peppers, and onions omelette on a hero.',
    price: '$8.50',
    category: Category.BREAKFAST,
    imageUrl: 'https://images.unsplash.com/photo-1599120688001-c8b827e4917a?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'pancakes',
    name: 'Pancakes with Butter',
    description: 'Fluffy golden pancakes.',
    price: '$6.75',
    category: Category.BREAKFAST,
    imageUrl: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'french-toast',
    name: 'French Toast',
    description: 'Thick cut french toast.',
    price: '$6.50',
    category: Category.BREAKFAST,
    imageUrl: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'bacon-2-eggs-plate',
    name: 'Bacon and 2 Eggs Plate',
    description: 'Served on a platter.',
    price: '$9.00',
    category: Category.BREAKFAST,
    imageUrl: 'https://images.unsplash.com/photo-1600336153113-d62159c44d94?q=80&w=800&auto=format&fit=crop'
  },

  // --- WRAPS ---
  {
    id: 'beast-wrap',
    name: 'Beast Wrap',
    description: 'Chicken cutlet with bacon, Swiss, brown gravy and onion rings on a garlic wrap.',
    price: '$12.25',
    category: Category.WRAPS,
    imageUrl: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'bushman-wrap',
    name: 'Bushman Wrap',
    description: 'Chicken cutlet with bacon, American cheese and brown gravy on a garlic wrap.',
    price: '$12.00',
    category: Category.WRAPS,
    imageUrl: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'boulder-creek-wrap',
    name: 'Boulder Creek Wrap',
    description: 'Grilled steak with mozzarella, fried onions and brown gravy.',
    price: '$11.75',
    category: Category.WRAPS,
    imageUrl: 'https://images.unsplash.com/photo-1551615593-ef5fe247e8f7?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'caesar-wrap',
    name: 'Caesar Wrap',
    description: 'Grilled chicken with lettuce, tomato, Parmesan and Caesar dressing.',
    price: '$11.00',
    category: Category.WRAPS,
    imageUrl: 'https://images.unsplash.com/photo-1541014741259-de529411b96a?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'chicken-salad-wrap',
    name: 'Chicken Salad Wrap',
    description: 'Homemade chicken salad with lettuce and tomatoes.',
    price: '$10.00',
    category: Category.WRAPS,
    imageUrl: 'https://images.unsplash.com/photo-1604467715878-83e57e8bc129?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'tcs-wrap',
    name: 'TCS Wrap',
    description: 'Chicken cutlet with brown gravy and American cheese.',
    price: '$10.75',
    category: Category.WRAPS,
    imageUrl: 'https://images.unsplash.com/photo-1627308595186-e8d7406f22c7?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'lite-and-easy-wrap',
    name: 'Lite and Easy Wrap',
    description: 'Grilled turkey with bacon, french fries, brown gravy and mozzarella.',
    price: '$11.50',
    category: Category.WRAPS,
    imageUrl: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'sunset-wrap',
    name: 'Sunset Wrap',
    description: 'Grilled chicken, fresh mozzarella, guacamole, salt, pepper and tomatoes.',
    price: '$12.00',
    category: Category.WRAPS,
    imageUrl: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=800&auto=format&fit=crop'
  },

  // --- SALADS ---
  {
    id: 'grilled-chicken-salad',
    name: 'Grilled Chicken Salad (Large)',
    description: 'Grilled chicken over a bed of lettuce, tomatoes and cucumbers.',
    price: '$11.50',
    category: Category.SALADS,
    imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'chef-salad',
    name: 'Chef Salad (Large)',
    description: 'Roast beef, turkey, ham and Swiss and American cheese on a bed of lettuce, tomatoes, cucumber and olives.',
    price: '$11.50',
    category: Category.SALADS,
    imageUrl: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'chicken-cutlet-platter-salad',
    name: 'Chicken Cutlet Platter Salad (Large)',
    description: 'Golden fried chicken cutlet over fresh greens.',
    price: '$10.75',
    category: Category.SALADS,
    imageUrl: 'https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'tossed-house-salad',
    name: 'Tossed House Salad (Large)',
    description: 'Lettuce, tomatoes, cucumbers and carrots.',
    price: '$8.00',
    category: Category.SALADS,
    imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop'
  },

  // --- APPETIZERS ---
  {
    id: 'french-fries-lg',
    name: 'Large French Fries',
    description: 'Classic shoestring fries.',
    price: '$7.50',
    category: Category.APPETIZERS,
    imageUrl: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'waffle-fries-lg',
    name: 'Large Waffle Fries',
    description: 'Crispy seasoned waffle fries.',
    price: '$7.75',
    category: Category.APPETIZERS,
    imageUrl: 'https://images.unsplash.com/photo-1541592106381-b31e9674c0e5?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'cheese-fries-lg',
    name: 'Large Cheese Fries',
    description: 'Fries smothered in melted cheese.',
    price: '$8.75',
    category: Category.APPETIZERS,
    imageUrl: 'https://images.unsplash.com/photo-1585109649139-366815a0d713?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'buffalo-wings-lg',
    name: 'Buffalo Wings (Large)',
    description: 'Classic spicy buffalo wings.',
    price: '$14.50',
    category: Category.APPETIZERS,
    imageUrl: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?q=80&w=800&auto=format&fit=crop',
    tags: ['Spicy']
  },
  {
    id: 'chicken-fingers-lg',
    name: 'Chicken Fingers (Large)',
    description: 'Golden fried chicken tenders.',
    price: '$13.00',
    category: Category.APPETIZERS,
    imageUrl: 'https://images.unsplash.com/photo-1562967960-f655dc033f52?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'loaded-fries-lg',
    name: 'Loaded Fries (Large)',
    description: 'French Fries, with Bacon, Melted Cheddar, and topped with Ranch Dressing.',
    price: '$9.50',
    category: Category.APPETIZERS,
    imageUrl: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'mozzarella-sticks-lg',
    name: 'Mozzarella Sticks (Large)',
    description: 'Breaded mozzarella cheese sticks.',
    price: '$10.50',
    category: Category.APPETIZERS,
    imageUrl: 'https://images.unsplash.com/photo-1548340748-1d089263c704?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'onion-rings-lg',
    name: 'Large Onion Rings',
    description: 'Crispy fried onion rings.',
    price: '$8.50',
    category: Category.APPETIZERS,
    imageUrl: 'https://images.unsplash.com/photo-1639024471283-03518883512d?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'mullet-lg',
    name: 'Large Mullet',
    description: 'A classic Cherry Valley appetizer.',
    price: '$15.00',
    category: Category.APPETIZERS,
    imageUrl: 'https://images.unsplash.com/photo-1541592106381-b31e9674c0e5?q=80&w=800&auto=format&fit=crop'
  },

  // --- SOUPS ---
  {
    id: 'chicken-noodle-soup',
    name: 'Chicken Noodle Soup',
    description: 'Classic homemade chicken noodle.',
    price: '$4.89+',
    category: Category.SOUPS,
    imageUrl: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'clam-chowder',
    name: 'New England Clam Chowder',
    description: 'Creamy clam chowder.',
    price: '$4.89+',
    category: Category.SOUPS,
    imageUrl: 'https://images.unsplash.com/photo-1614986872242-2d85d56b2f42?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'split-pea-soup',
    name: 'Split Pea with Ham Soup',
    description: 'Hearty and savory.',
    price: '$4.49+',
    category: Category.SOUPS,
    imageUrl: 'https://images.unsplash.com/photo-1588566565463-180a5b2090d2?q=80&w=800&auto=format&fit=crop'
  },

  // --- BEVERAGES ---
  {
    id: 'soda-20oz',
    name: '20 oz. Soda',
    description: 'Assorted varieties (Coke, Pepsi, Sprite, etc).',
    price: '$2.25',
    category: Category.BEVERAGES,
    imageUrl: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'soda-2liter',
    name: '2 Liter Soda',
    description: 'Assorted varieties.',
    price: '$2.99',
    category: Category.BEVERAGES,
    imageUrl: 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'snapple-16oz',
    name: '16 oz. Snapple',
    description: 'Assorted flavors.',
    price: '$1.90',
    category: Category.BEVERAGES,
    imageUrl: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'gatorade',
    name: 'Gatorade 20oz',
    description: 'Assorted flavors.',
    price: '$1.80',
    category: Category.BEVERAGES,
    imageUrl: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'coffee',
    name: 'Coffee',
    description: 'Fresh brewed coffee.',
    price: '$1.25+',
    category: Category.BEVERAGES,
    imageUrl: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop'
  },
  
  // --- SANDWICHES (CLASSIC) ---
  {
    id: 'grilled-cheese',
    name: 'Grilled Cheese',
    description: 'Melted American cheese on toasted bread.',
    price: '$5.00+',
    category: Category.SANDWICHES,
    imageUrl: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'bacon-hero',
    name: 'Bacon Hero',
    description: '10 strips of bacon on a toasted hero.',
    price: '$9.25+',
    category: Category.SANDWICHES,
    imageUrl: 'https://images.unsplash.com/photo-1553909489-cd47e5907264?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'turkey-club-hero',
    name: 'Turkey Club Hero',
    description: 'Sliced turkey with bacon, lettuce, tomato and mayo on a toasted hero.',
    price: '$11.50+',
    category: Category.SANDWICHES,
    imageUrl: 'https://images.unsplash.com/photo-1553909489-cd47e5907264?q=80&w=800&auto=format&fit=crop'
  }
];

// --- MOCK EMPLOYMENT DATA ---

export const MOCK_EMPLOYEES: Employee[] = [
  { id: '1', name: 'Max G.', role: 'OWNER', position: 'Owner', email: 'max@cherryvalleydeli.com', phone: '516-555-0101' },
  { id: '2', name: 'Joe T.', role: 'MANAGER', position: 'General Manager', email: 'joe@cherryvalleydeli.com', phone: '516-555-0102' },
  { id: '3', name: 'Sarah L.', role: 'STAFF', position: 'Counter Staff', email: 'sarah@cherryvalleydeli.com', phone: '516-555-0103' },
  { id: '4', name: 'Mike D.', role: 'STAFF', position: 'Grill Cook', email: 'mike@cherryvalleydeli.com', phone: '516-555-0104' },
];

export const MOCK_SHIFTS: Shift[] = [
  { id: '1', employeeId: '3', day: 'Mon', startTime: '06:00', endTime: '14:00', area: 'Front' },
  { id: '2', employeeId: '4', day: 'Mon', startTime: '14:00', endTime: '22:00', area: 'Kitchen' },
  { id: '3', employeeId: '3', day: 'Tue', startTime: '06:00', endTime: '14:00', area: 'Front' },
  { id: '4', employeeId: '4', day: 'Tue', startTime: '14:00', endTime: '22:00', area: 'Kitchen' },
  { id: '5', employeeId: '2', day: 'Wed', startTime: '08:00', endTime: '16:00', area: 'Office' },
];

export const JOB_POSTINGS: JobPosting[] = [
  { 
    id: '1', 
    title: 'Grill Cook (Overnight)', 
    type: 'Full-time', 
    salary: '$22/hr', 
    description: 'Experienced grill cook needed for our busy overnight shifts. Must be able to handle high volume orders.' 
  },
  { 
    id: '2', 
    title: 'Counter Staff', 
    type: 'Part-time', 
    salary: '$18/hr', 
    description: 'Friendly faces needed to take orders and manage the register. Weekends required.' 
  },
  { 
    id: '3', 
    title: 'Delivery Driver', 
    type: 'Full-time', 
    salary: '$16/hr + Tips', 
    description: 'Reliable drivers needed. Must have own vehicle and valid license.' 
  }
];