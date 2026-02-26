// =====================================================
// menu.js — Satyanarayan Ice Cream — Full Real Menu
// =====================================================

// Each item gets its own accurate image matching flavor/color

const DEFAULT_MENU = [
  // ═══════════════════════════════════════════════════
  // 🍦 ICE CREAM (Half / Full / 1 Ltr.)
  // ═══════════════════════════════════════════════════
  { id: 1, category: 'icecream', name: 'Royal Vanilla', image: 'https://images.unsplash.com/photo-1570197571499-166b36435e9f?w=400&h=300&fit=crop', desc: 'Half ₹20 · Full ₹30 · 1 Ltr ₹300', price: 30 },
  { id: 2, category: 'icecream', name: 'Satyanarayan Special', image: 'https://images.unsplash.com/photo-1633933358116-a27b902fad35?w=400&h=300&fit=crop', desc: 'Half ₹30 · Full ₹40 · 1 Ltr ₹400', price: 40 },
  { id: 3, category: 'icecream', name: 'American Dryfruit', image: 'https://images.unsplash.com/photo-1629385701021-fcd568a743e8?w=400&h=300&fit=crop', desc: 'Half ₹30 · Full ₹40 · 1 Ltr ₹400', price: 40 },
  { id: 4, category: 'icecream', name: 'Rajbhog', image: 'https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?w=400&h=300&fit=crop', desc: 'Half ₹30 · Full ₹40 · 1 Ltr ₹400', price: 40 },
  { id: 5, category: 'icecream', name: 'Mava Malai', image: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=400&h=300&fit=crop', desc: 'Half ₹30 · Full ₹40 · 1 Ltr ₹400', price: 40 },
  { id: 6, category: 'icecream', name: 'Cookie Cream', image: 'https://images.unsplash.com/photo-1580915411954-282cb1b0d780?w=400&h=300&fit=crop', desc: 'Half ₹30 · Full ₹40 · 1 Ltr ₹400', price: 40 },
  { id: 7, category: 'icecream', name: 'Kaju Anjeer', image: 'https://images.unsplash.com/photo-1629385701021-fcd568a743e8?w=400&h=300&fit=crop', desc: 'Half ₹30 · Full ₹40 · 1 Ltr ₹400', price: 40 },
  { id: 8, category: 'icecream', name: 'Kaju Draksh', image: 'https://images.unsplash.com/photo-1633933358116-a27b902fad35?w=400&h=300&fit=crop', desc: 'Half ₹30 · Full ₹40 · 1 Ltr ₹400', price: 40 },
  { id: 9, category: 'icecream', name: 'Kpb Mix Elaichi', image: 'https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?w=400&h=300&fit=crop', desc: 'Half ₹30 · Full ₹40 · 1 Ltr ₹400', price: 40 },
  { id: 10, category: 'icecream', name: 'Chocolate', image: 'https://images.unsplash.com/photo-1563589173312-476d8c36b3c9?w=400&h=300&fit=crop', desc: 'Half ₹30 · Full ₹40 · 1 Ltr ₹400', price: 40 },
  { id: 11, category: 'icecream', name: 'Gulab Masti', image: 'https://images.unsplash.com/photo-1557142046-c704a3adf364?w=400&h=300&fit=crop', desc: 'Half ₹30 · Full ₹40 · 1 Ltr ₹400', price: 40 },
  { id: 12, category: 'icecream', name: 'Kesar Elaichi', image: 'https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?w=400&h=300&fit=crop', desc: 'Half ₹30 · Full ₹40 · 1 Ltr ₹400', price: 40 },
  { id: 13, category: 'icecream', name: 'Butter Scotch', image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=400&h=300&fit=crop', desc: 'Half ₹30 · Full ₹40 · 1 Ltr ₹400', price: 40 },
  { id: 14, category: 'icecream', name: 'Pan Masala', image: 'https://images.unsplash.com/photo-1615478503562-ec2d8aa0e24e?w=400&h=300&fit=crop', desc: 'Half ₹20 · Full ₹30 · 1 Ltr ₹300', price: 30 },
  { id: 15, category: 'icecream', name: 'Sitafal (Seasonal)', image: 'https://images.unsplash.com/photo-1570197571499-166b36435e9f?w=400&h=300&fit=crop', desc: 'Half ₹40 · Full ₹50 · 1 Ltr ₹500', price: 50 },
  { id: 16, category: 'icecream', name: 'Mango (Seasonal)', image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=400&h=300&fit=crop', desc: 'Half ₹40 · Full ₹50 · 1 Ltr ₹500', price: 50 },

  // ═══════════════════════════════════════════════════
  // 🍨 SUNDAE
  // ═══════════════════════════════════════════════════
  { id: 17, category: 'sundae', name: 'Vanilla Sundae', image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop', desc: 'Classic vanilla sundae with toppings', price: 60 },
  { id: 18, category: 'sundae', name: 'Traffic Jam', image: 'https://images.unsplash.com/photo-1488900128323-21503983a07e?w=400&h=300&fit=crop', desc: 'Colorful mixed fruit sundae', price: 60 },
  { id: 19, category: 'sundae', name: 'Chocolate Dhamaka', image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop', desc: 'Loaded chocolate sundae explosion', price: 70 },
  { id: 20, category: 'sundae', name: 'Chocolate Sundae', image: 'https://images.unsplash.com/photo-1514849302-984523450cf4?w=400&h=300&fit=crop', desc: 'Rich chocolate sundae with fudge', price: 70 },
  { id: 21, category: 'sundae', name: 'Cookie Sundae', image: 'https://images.unsplash.com/photo-1580915411954-282cb1b0d780?w=400&h=300&fit=crop', desc: 'Cookie crumble sundae delight', price: 70 },
  { id: 22, category: 'sundae', name: 'Boat Ice-cream', image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=400&h=300&fit=crop', desc: 'Premium boat-shaped ice cream platter', price: 110 },

  // ═══════════════════════════════════════════════════
  // 🥛 LASSI
  // ═══════════════════════════════════════════════════
  { id: 23, category: 'lassi', name: 'Plain Lassi', image: 'https://images.unsplash.com/photo-1626200419199-391ae4be7a41?w=400&h=300&fit=crop', desc: 'Traditional sweet plain lassi', price: 30 },
  { id: 24, category: 'lassi', name: 'Mango Lassi', image: 'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=400&h=300&fit=crop', desc: 'Fresh mango blended with yogurt', price: 35 },
  { id: 25, category: 'lassi', name: 'Pineapple Lassi', image: 'https://images.unsplash.com/photo-1589733955941-5eeaf752f6dd?w=400&h=300&fit=crop', desc: 'Tangy pineapple yogurt blend', price: 35 },
  { id: 26, category: 'lassi', name: 'Rose Lassi', image: 'https://images.unsplash.com/photo-1625865636928-f4b384e49870?w=400&h=300&fit=crop', desc: 'Rose flavored creamy lassi', price: 35 },
  { id: 27, category: 'lassi', name: 'Black Current Lassi', image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&h=300&fit=crop', desc: 'Black current infused lassi', price: 35 },
  { id: 28, category: 'lassi', name: 'Strawberry Lassi', image: 'https://images.unsplash.com/photo-1638176066666-ffb2f013c7dd?w=400&h=300&fit=crop', desc: 'Strawberry blended yogurt drink', price: 35 },
  { id: 29, category: 'lassi', name: 'Kesar Lassi', image: 'https://images.unsplash.com/photo-1587049016823-69ef9d68f48a?w=400&h=300&fit=crop', desc: 'Premium saffron flavored lassi', price: 35 },
  { id: 30, category: 'lassi', name: 'Kesar Pista Lassi', image: 'https://images.unsplash.com/photo-1587049016823-69ef9d68f48a?w=400&h=300&fit=crop', desc: 'Rich kesar & pistachio lassi', price: 35 },
  { id: 31, category: 'lassi', name: 'Chocolate Lassi', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop', desc: 'Chocolate blended creamy lassi', price: 35 },
  { id: 32, category: 'lassi', name: 'Butter Scotch Lassi', image: 'https://images.unsplash.com/photo-1626200419199-391ae4be7a41?w=400&h=300&fit=crop', desc: 'Butterscotch flavored lassi', price: 35 },
  { id: 33, category: 'lassi', name: 'Ice-cream With Lassi', image: 'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=400&h=300&fit=crop', desc: 'Creamy lassi topped with ice cream', price: 55 },
  { id: 34, category: 'lassi', name: 'Dry Fruit Lassi', image: 'https://images.unsplash.com/photo-1587049016823-69ef9d68f48a?w=400&h=300&fit=crop', desc: 'Premium lassi loaded with dry fruits', price: 65 },

  // ═══════════════════════════════════════════════════
  // 🍽️ ICE-CREAM DISH
  // ═══════════════════════════════════════════════════
  { id: 35, category: 'dish', name: 'Chocolate Dish', image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop', desc: 'Grand chocolate ice cream platter', price: 150 },
  { id: 36, category: 'dish', name: 'Cookie Cream Dish', image: 'https://images.unsplash.com/photo-1580915411954-282cb1b0d780?w=400&h=300&fit=crop', desc: 'Cookie cream ice cream serving dish', price: 150 },
  { id: 37, category: 'dish', name: 'Mix Ice-cream Dish', image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop', desc: 'Assorted mix of ice cream flavors', price: 160 },
  { id: 38, category: 'dish', name: 'Your Choice Dish', image: 'https://images.unsplash.com/photo-1488900128323-21503983a07e?w=400&h=300&fit=crop', desc: 'Pick your favorite flavors', price: 160 },
  { id: 39, category: 'dish', name: 'Dry-fruit Ice-cream Dish', image: 'https://images.unsplash.com/photo-1629385701021-fcd568a743e8?w=400&h=300&fit=crop', desc: 'Premium dry fruits ice cream platter', price: 180 },
  { id: 40, category: 'dish', name: 'Family Dish', image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=400&h=300&fit=crop', desc: 'Large family-size ice cream sharing dish', price: 200 },

  // ═══════════════════════════════════════════════════
  // ⭐ SPECIALITY
  // ═══════════════════════════════════════════════════
  { id: 41, category: 'speciality', name: 'Cold Coco', image: 'https://images.unsplash.com/photo-1546039907-7c40b1a1e252?w=400&h=300&fit=crop', desc: 'Chilled coconut water refresher', price: 40 },
  { id: 42, category: 'speciality', name: 'Fruit Salad', image: 'https://images.unsplash.com/photo-1564093497595-593b96d80571?w=400&h=300&fit=crop', desc: 'Fresh seasonal fruit salad mix', price: 40 },
  { id: 43, category: 'speciality', name: 'Cold Coco With Ice-cream', image: 'https://images.unsplash.com/photo-1546039907-7c40b1a1e252?w=400&h=300&fit=crop', desc: 'Cold coco topped with ice cream', price: 50 },
  { id: 44, category: 'speciality', name: 'Fruit Salad With Ice-cream', image: 'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=400&h=300&fit=crop', desc: 'Fruit salad with premium ice cream', price: 50 },
  { id: 45, category: 'speciality', name: 'Kaju Cold Coco', image: 'https://images.unsplash.com/photo-1546039907-7c40b1a1e252?w=400&h=300&fit=crop', desc: 'Premium cold coco with cashew', price: 80 },

  // ═══════════════════════════════════════════════════
  // 🍦 VANILLA WITH TOPPING
  // ═══════════════════════════════════════════════════
  { id: 46, category: 'vanilla', name: 'Vanilla with Chocolate', image: 'https://images.unsplash.com/photo-1563589173312-476d8c36b3c9?w=400&h=300&fit=crop', desc: 'Vanilla ice cream + chocolate topping', price: 40 },
  { id: 47, category: 'vanilla', name: 'Vanilla with Black Current', image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&h=300&fit=crop', desc: 'Vanilla ice cream + black current', price: 40 },
  { id: 48, category: 'vanilla', name: 'Vanilla with Strawberry', image: 'https://images.unsplash.com/photo-1557142046-c704a3adf364?w=400&h=300&fit=crop', desc: 'Vanilla ice cream + strawberry topping', price: 40 },
  { id: 49, category: 'vanilla', name: 'Vanilla with Pineapple', image: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=400&h=300&fit=crop', desc: 'Vanilla ice cream + pineapple topping', price: 40 },
  { id: 50, category: 'vanilla', name: 'Vanilla with Butterscotch', image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=400&h=300&fit=crop', desc: 'Vanilla ice cream + butterscotch', price: 40 },

  // ═══════════════════════════════════════════════════
  // 🥤 MILK SHAKE
  // ═══════════════════════════════════════════════════
  { id: 51, category: 'milkshake', name: 'Royal Vanilla', image: 'https://images.unsplash.com/photo-1568901839119-631418a3910d?w=400&h=300&fit=crop', desc: 'Classic vanilla milkshake', price: 60 },
  { id: 52, category: 'milkshake', name: 'Rose', image: 'https://images.unsplash.com/photo-1625865636928-f4b384e49870?w=400&h=300&fit=crop', desc: 'Refreshing rose flavored shake', price: 60 },
  { id: 53, category: 'milkshake', name: 'Pineapple', image: 'https://images.unsplash.com/photo-1589733955941-5eeaf752f6dd?w=400&h=300&fit=crop', desc: 'Tangy pineapple milkshake', price: 60 },
  { id: 54, category: 'milkshake', name: 'Strawberry', image: 'https://images.unsplash.com/photo-1579954115563-e72bf1381629?w=400&h=300&fit=crop', desc: 'Fresh strawberry shake', price: 60 },
  { id: 55, category: 'milkshake', name: 'Black Current', image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&h=300&fit=crop', desc: 'Black current flavored shake', price: 60 },
  { id: 56, category: 'milkshake', name: 'Butter Scotch', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop', desc: 'Caramel butterscotch shake', price: 60 },
  { id: 57, category: 'milkshake', name: 'Mango', image: 'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=400&h=300&fit=crop', desc: 'Fresh mango milkshake', price: 60 },
  { id: 58, category: 'milkshake', name: 'Oreo', image: 'https://images.unsplash.com/photo-1577805947697-89e18249d767?w=400&h=300&fit=crop', desc: 'Crushed Oreo milkshake', price: 80 },
  { id: 59, category: 'milkshake', name: 'Chocolate', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop', desc: 'Rich chocolate milkshake', price: 80 },
  { id: 60, category: 'milkshake', name: 'Brownie', image: 'https://images.unsplash.com/photo-1553787499-6f9133860278?w=400&h=300&fit=crop', desc: 'Brownie blended milkshake', price: 80 },
  { id: 61, category: 'milkshake', name: 'Chocopie', image: 'https://images.unsplash.com/photo-1553787499-6f9133860278?w=400&h=300&fit=crop', desc: 'Chocopie blended milkshake', price: 80 },
  { id: 62, category: 'milkshake', name: 'Hide & Seek', image: 'https://images.unsplash.com/photo-1577805947697-89e18249d767?w=400&h=300&fit=crop', desc: 'Hide & Seek cookie shake', price: 80 },
  { id: 63, category: 'milkshake', name: 'Perk', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop', desc: 'Perk chocolate milkshake', price: 80 },
  { id: 64, category: 'milkshake', name: 'Munch', image: 'https://images.unsplash.com/photo-1553787499-6f9133860278?w=400&h=300&fit=crop', desc: 'Munch chocolate milkshake', price: 80 },
  { id: 65, category: 'milkshake', name: 'Kitkat', image: 'https://images.unsplash.com/photo-1577805947697-89e18249d767?w=400&h=300&fit=crop', desc: 'Kitkat wafer milkshake', price: 80 },
  { id: 66, category: 'milkshake', name: '5 Star', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop', desc: '5 Star caramel milkshake', price: 80 },
  { id: 67, category: 'milkshake', name: 'Dairy Milk', image: 'https://images.unsplash.com/photo-1553787499-6f9133860278?w=400&h=300&fit=crop', desc: 'Dairy Milk chocolate shake', price: 80 },
  { id: 68, category: 'milkshake', name: 'Bournvita', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop', desc: 'Classic Bournvita milkshake', price: 80 },
  { id: 69, category: 'milkshake', name: 'Snickers', image: 'https://images.unsplash.com/photo-1553787499-6f9133860278?w=400&h=300&fit=crop', desc: 'Snickers loaded milkshake', price: 80 },
  { id: 70, category: 'milkshake', name: 'Rajbhog', image: 'https://images.unsplash.com/photo-1568901839119-631418a3910d?w=400&h=300&fit=crop', desc: 'Traditional rajbhog milkshake', price: 80 },
  { id: 71, category: 'milkshake', name: 'Kaju Mango', image: 'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=400&h=300&fit=crop', desc: 'Kaju & mango premium shake', price: 90 },
  { id: 72, category: 'milkshake', name: 'Kaju Anjeer', image: 'https://images.unsplash.com/photo-1568901839119-631418a3910d?w=400&h=300&fit=crop', desc: 'Kaju & anjeer premium shake', price: 90 },
  { id: 73, category: 'milkshake', name: 'Sitafal (Seasonal)', image: 'https://images.unsplash.com/photo-1568901839119-631418a3910d?w=400&h=300&fit=crop', desc: 'Seasonal sitafal milkshake', price: 90 },
  { id: 74, category: 'milkshake', name: 'Oreo With Brownie', image: 'https://images.unsplash.com/photo-1577805947697-89e18249d767?w=400&h=300&fit=crop', desc: 'Oreo + brownie combo shake', price: 90 },
  { id: 75, category: 'milkshake', name: 'Oreo With Chocopie', image: 'https://images.unsplash.com/photo-1577805947697-89e18249d767?w=400&h=300&fit=crop', desc: 'Oreo + chocopie combo shake', price: 90 },
  { id: 76, category: 'milkshake', name: 'Oreo With Hide & Seek', image: 'https://images.unsplash.com/photo-1577805947697-89e18249d767?w=400&h=300&fit=crop', desc: 'Oreo + hide & seek combo shake', price: 90 },
  { id: 77, category: 'milkshake', name: 'Oreo With Kitkat', image: 'https://images.unsplash.com/photo-1577805947697-89e18249d767?w=400&h=300&fit=crop', desc: 'Oreo + kitkat combo shake', price: 90 },
  { id: 78, category: 'milkshake', name: 'Oreo With Munch', image: 'https://images.unsplash.com/photo-1577805947697-89e18249d767?w=400&h=300&fit=crop', desc: 'Oreo + munch combo shake', price: 90 },
  { id: 79, category: 'milkshake', name: 'Oreo With Dairy Milk', image: 'https://images.unsplash.com/photo-1577805947697-89e18249d767?w=400&h=300&fit=crop', desc: 'Oreo + dairy milk combo shake', price: 90 },
  { id: 80, category: 'milkshake', name: 'Oreo With 5 Star', image: 'https://images.unsplash.com/photo-1577805947697-89e18249d767?w=400&h=300&fit=crop', desc: 'Oreo + 5 star combo shake', price: 90 },
  { id: 81, category: 'milkshake', name: 'Brownie With Chocopie', image: 'https://images.unsplash.com/photo-1553787499-6f9133860278?w=400&h=300&fit=crop', desc: 'Brownie + chocopie combo shake', price: 90 },
  { id: 82, category: 'milkshake', name: 'Brownie With Perk', image: 'https://images.unsplash.com/photo-1553787499-6f9133860278?w=400&h=300&fit=crop', desc: 'Brownie + perk combo shake', price: 90 },
  { id: 83, category: 'milkshake', name: 'Brownie With Kitkat', image: 'https://images.unsplash.com/photo-1553787499-6f9133860278?w=400&h=300&fit=crop', desc: 'Brownie + kitkat combo shake', price: 90 },
  { id: 84, category: 'milkshake', name: 'Brownie With Munch', image: 'https://images.unsplash.com/photo-1553787499-6f9133860278?w=400&h=300&fit=crop', desc: 'Brownie + munch combo shake', price: 90 },
  { id: 85, category: 'milkshake', name: 'Brownie With Hide & Seek', image: 'https://images.unsplash.com/photo-1553787499-6f9133860278?w=400&h=300&fit=crop', desc: 'Brownie + hide & seek combo', price: 90 },
  { id: 86, category: 'milkshake', name: 'Brownie With Dairy Milk', image: 'https://images.unsplash.com/photo-1553787499-6f9133860278?w=400&h=300&fit=crop', desc: 'Brownie + dairy milk combo', price: 90 },
  { id: 87, category: 'milkshake', name: 'Brownie With 5 Star', image: 'https://images.unsplash.com/photo-1553787499-6f9133860278?w=400&h=300&fit=crop', desc: 'Brownie + 5 star combo shake', price: 90 },
  { id: 88, category: 'milkshake', name: 'Hide & Seek With Perk', image: 'https://images.unsplash.com/photo-1577805947697-89e18249d767?w=400&h=300&fit=crop', desc: 'Hide & seek + perk combo shake', price: 90 },
  { id: 89, category: 'milkshake', name: 'Hide & Seek With Kitkat', image: 'https://images.unsplash.com/photo-1577805947697-89e18249d767?w=400&h=300&fit=crop', desc: 'Hide & seek + kitkat combo', price: 90 },
  { id: 90, category: 'milkshake', name: 'Hide & Seek With Munch', image: 'https://images.unsplash.com/photo-1577805947697-89e18249d767?w=400&h=300&fit=crop', desc: 'Hide & seek + munch combo', price: 90 },
  { id: 91, category: 'milkshake', name: 'Hide & Seek With Dairy Milk', image: 'https://images.unsplash.com/photo-1577805947697-89e18249d767?w=400&h=300&fit=crop', desc: 'Hide & seek + dairy milk combo', price: 90 },
  { id: 92, category: 'milkshake', name: 'Hide & Seek With 5 Star', image: 'https://images.unsplash.com/photo-1577805947697-89e18249d767?w=400&h=300&fit=crop', desc: 'Hide & seek + 5 star combo', price: 90 },
  { id: 93, category: 'milkshake', name: 'Chocopie With Perk', image: 'https://images.unsplash.com/photo-1553787499-6f9133860278?w=400&h=300&fit=crop', desc: 'Chocopie + perk combo shake', price: 90 },
  { id: 94, category: 'milkshake', name: 'Chocopie With Hide & Seek', image: 'https://images.unsplash.com/photo-1553787499-6f9133860278?w=400&h=300&fit=crop', desc: 'Chocopie + hide & seek combo', price: 90 },
  { id: 95, category: 'milkshake', name: 'Chocopie With Kitkat', image: 'https://images.unsplash.com/photo-1553787499-6f9133860278?w=400&h=300&fit=crop', desc: 'Chocopie + kitkat combo shake', price: 90 },
  { id: 96, category: 'milkshake', name: 'Chocopie With Dairy Milk', image: 'https://images.unsplash.com/photo-1553787499-6f9133860278?w=400&h=300&fit=crop', desc: 'Chocopie + dairy milk combo', price: 90 },
  { id: 97, category: 'milkshake', name: 'Chocopie With Munch', image: 'https://images.unsplash.com/photo-1553787499-6f9133860278?w=400&h=300&fit=crop', desc: 'Chocopie + munch combo shake', price: 90 },
  { id: 98, category: 'milkshake', name: 'Chocopie With 5 Star', image: 'https://images.unsplash.com/photo-1553787499-6f9133860278?w=400&h=300&fit=crop', desc: 'Chocopie + 5 star combo shake', price: 90 },
  { id: 99, category: 'milkshake', name: 'Perk With Kitkat', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop', desc: 'Perk + kitkat combo shake', price: 90 },
  { id: 100, category: 'milkshake', name: 'Perk With Munch', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop', desc: 'Perk + munch combo shake', price: 90 },
  { id: 101, category: 'milkshake', name: 'Perk With Dairy Milk', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop', desc: 'Perk + dairy milk combo shake', price: 90 },
  { id: 102, category: 'milkshake', name: 'Perk With 5 Star', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop', desc: 'Perk + 5 star combo shake', price: 90 },
  { id: 103, category: 'milkshake', name: 'Kitkat With Dairy Milk', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop', desc: 'Kitkat + dairy milk combo shake', price: 90 },
  { id: 104, category: 'milkshake', name: 'Kitkat With 5 Star', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop', desc: 'Kitkat + 5 star combo shake', price: 90 },
  { id: 105, category: 'milkshake', name: 'Munch With Dairy Milk', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop', desc: 'Munch + dairy milk combo shake', price: 90 },
  { id: 106, category: 'milkshake', name: 'Munch With 5 Star', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop', desc: 'Munch + 5 star combo shake', price: 90 },
  { id: 107, category: 'milkshake', name: 'Dairy Milk With 5 Star', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop', desc: 'Dairy milk + 5 star combo', price: 90 },
  { id: 108, category: 'milkshake', name: 'Satyanarayan Special', image: 'https://images.unsplash.com/photo-1568901839119-631418a3910d?w=400&h=300&fit=crop', desc: 'Signature premium milkshake', price: 110 },

  // ═══════════════════════════════════════════════════
  // 🥤 THICK SHAKE
  // ═══════════════════════════════════════════════════
  { id: 109, category: 'thickshake', name: 'Rose', image: 'https://images.unsplash.com/photo-1625865636928-f4b384e49870?w=400&h=300&fit=crop', desc: 'Thick & creamy rose shake', price: 80 },
  { id: 110, category: 'thickshake', name: 'Royal Vanilla', image: 'https://images.unsplash.com/photo-1568901839119-631418a3910d?w=400&h=300&fit=crop', desc: 'Extra thick vanilla shake', price: 80 },
  { id: 111, category: 'thickshake', name: 'Pineapple', image: 'https://images.unsplash.com/photo-1589733955941-5eeaf752f6dd?w=400&h=300&fit=crop', desc: 'Thick pineapple shake', price: 80 },
  { id: 112, category: 'thickshake', name: 'Strawberry', image: 'https://images.unsplash.com/photo-1579954115563-e72bf1381629?w=400&h=300&fit=crop', desc: 'Thick strawberry shake', price: 80 },
  { id: 113, category: 'thickshake', name: 'Black Current', image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&h=300&fit=crop', desc: 'Thick black current shake', price: 80 },
  { id: 114, category: 'thickshake', name: 'Butter Scotch', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop', desc: 'Thick butterscotch shake', price: 80 },
  { id: 115, category: 'thickshake', name: 'Mango', image: 'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=400&h=300&fit=crop', desc: 'Thick mango shake', price: 80 },
  { id: 116, category: 'thickshake', name: 'Chocopie', image: 'https://images.unsplash.com/photo-1553787499-6f9133860278?w=400&h=300&fit=crop', desc: 'Thick chocopie shake', price: 80 },
  { id: 117, category: 'thickshake', name: 'Brownie', image: 'https://images.unsplash.com/photo-1553787499-6f9133860278?w=400&h=300&fit=crop', desc: 'Thick brownie shake', price: 80 },
  { id: 118, category: 'thickshake', name: 'Oreo', image: 'https://images.unsplash.com/photo-1577805947697-89e18249d767?w=400&h=300&fit=crop', desc: 'Thick Oreo shake', price: 80 },
  { id: 119, category: 'thickshake', name: 'Chocolate', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop', desc: 'Thick chocolate shake', price: 80 },
  { id: 120, category: 'thickshake', name: 'Perk', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop', desc: 'Thick Perk shake', price: 80 },
  { id: 121, category: 'thickshake', name: 'Hide & Seek', image: 'https://images.unsplash.com/photo-1577805947697-89e18249d767?w=400&h=300&fit=crop', desc: 'Thick Hide & Seek shake', price: 80 },
  { id: 122, category: 'thickshake', name: 'Kitkat', image: 'https://images.unsplash.com/photo-1577805947697-89e18249d767?w=400&h=300&fit=crop', desc: 'Thick Kitkat shake', price: 80 },
  { id: 123, category: 'thickshake', name: 'Munch', image: 'https://images.unsplash.com/photo-1553787499-6f9133860278?w=400&h=300&fit=crop', desc: 'Thick Munch shake', price: 80 },
  { id: 124, category: 'thickshake', name: '5 Star', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop', desc: 'Thick 5 Star shake', price: 80 },
  { id: 125, category: 'thickshake', name: 'Dairy Milk', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop', desc: 'Thick Dairy Milk shake', price: 80 },
  { id: 126, category: 'thickshake', name: 'Snickers', image: 'https://images.unsplash.com/photo-1553787499-6f9133860278?w=400&h=300&fit=crop', desc: 'Thick Snickers shake', price: 80 },
  { id: 127, category: 'thickshake', name: 'Kaju Mango', image: 'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=400&h=300&fit=crop', desc: 'Premium kaju mango thick shake', price: 120 },
  { id: 128, category: 'thickshake', name: 'Kaju Anjeer', image: 'https://images.unsplash.com/photo-1568901839119-631418a3910d?w=400&h=300&fit=crop', desc: 'Premium kaju anjeer thick shake', price: 120 },

  // ═══════════════════════════════════════════════════
  // ☕ COLD COFFEE
  // ═══════════════════════════════════════════════════
  { id: 129, category: 'coldcoffee', name: 'Cold Coffee', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop', desc: 'Classic chilled cold coffee', price: 70 },
  { id: 130, category: 'coldcoffee', name: 'Cold Coffee with Ice-Cream', image: 'https://images.unsplash.com/photo-1592663527359-cf6642f54cff?w=400&h=300&fit=crop', desc: 'Cold coffee topped with ice cream', price: 80 },
  { id: 131, category: 'coldcoffee', name: 'Cold Coffee with Oreo', image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=400&h=300&fit=crop', desc: 'Cold coffee blended with Oreo', price: 80 },
  { id: 132, category: 'coldcoffee', name: 'Cold Coffee with Brownie', image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop', desc: 'Cold coffee with brownie chunks', price: 80 },
  { id: 133, category: 'coldcoffee', name: 'Cold Coffee with Perk', image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=400&h=300&fit=crop', desc: 'Cold coffee with Perk chocolate', price: 80 },
  { id: 134, category: 'coldcoffee', name: 'Cold Coffee with Kitkat', image: 'https://images.unsplash.com/photo-1592663527359-cf6642f54cff?w=400&h=300&fit=crop', desc: 'Cold coffee with Kitkat crunch', price: 80 },
  { id: 135, category: 'coldcoffee', name: 'Cold Coffee with Munch', image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop', desc: 'Cold coffee with Munch chocolate', price: 80 },
  { id: 136, category: 'coldcoffee', name: 'Cold Coffee with 5 Star', image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=400&h=300&fit=crop', desc: 'Cold coffee with 5 Star caramel', price: 80 },
  { id: 137, category: 'coldcoffee', name: 'Cold Coffee with Dairy Milk', image: 'https://images.unsplash.com/photo-1592663527359-cf6642f54cff?w=400&h=300&fit=crop', desc: 'Cold coffee with Dairy Milk', price: 80 },
  { id: 138, category: 'coldcoffee', name: 'Cold Coffee with Snickers', image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop', desc: 'Cold coffee with Snickers', price: 80 },
  { id: 139, category: 'coldcoffee', name: 'Cold Coffee with Chocopie', image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=400&h=300&fit=crop', desc: 'Cold coffee with Chocopie', price: 80 },
  { id: 140, category: 'coldcoffee', name: 'Cold Coffee with Hide & Seek', image: 'https://images.unsplash.com/photo-1592663527359-cf6642f54cff?w=400&h=300&fit=crop', desc: 'Cold coffee with Hide & Seek', price: 80 },
  { id: 141, category: 'coldcoffee', name: 'Satyanarayan Special Coffee', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop', desc: 'Signature premium cold coffee', price: 100 },
];

// ── Load from localStorage (admin overrides) ─────────
// Force clear old cache to ensure new accurate images apply
localStorage.removeItem('scoopSipMenu');

function getMenuData() {
  const saved = localStorage.getItem('scoopSipMenu');
  return saved ? JSON.parse(saved) : DEFAULT_MENU;
}

// ── Dynamic Accurate Image Mapper ─────────────────────
const IMG_MAP = {
  rose: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop', // pink drink
  mango: 'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=400&h=300&fit=crop', // yellow lassi/shake
  chocolate: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop', // brown shake
  oreo: 'https://images.unsplash.com/photo-1577805947697-89e18249d767?w=400&h=300&fit=crop', // dark/speckled shake
  coffee: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop', // iced coffee
  plain: 'https://images.unsplash.com/photo-1628557044797-f8fa5dd0ac04?w=400&h=300&fit=crop', // white lassi/drink
  vanilla: 'https://images.unsplash.com/photo-1553177595-4de2bb0842b9?w=400&h=300&fit=crop', // white ice cream scoop
  fruit: 'https://images.unsplash.com/photo-1564093497595-593b96d80571?w=400&h=300&fit=crop', // fruit salad
  sundae: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop', // sundae dessert
};

function getAccurateImage(name, category) {
  const n = name.toLowerCase();
  // Flavors overrides
  if (n.includes('rose') || n.includes('strawberry') || n.includes('gulab') || n.includes('jam')) return IMG_MAP.rose;
  if (n.includes('mango') || n.includes('kesar') || n.includes('rajbhog') || n.includes('pineapple') || n.includes('sitafal')) return IMG_MAP.mango;
  if (n.includes('chocolate') || n.includes('brownie') || n.includes('dairy milk') || n.includes('bournvita') || n.includes('5 star') || n.includes('perk') || n.includes('munch') || n.includes('kitkat') || n.includes('snickers') || n.includes('chocopie')) return IMG_MAP.chocolate;
  if (n.includes('oreo') || n.includes('hide & seek') || n.includes('cookie')) return IMG_MAP.oreo;
  if (n.includes('coffee')) return IMG_MAP.coffee;
  if (n.includes('fruit') || n.includes('anjeer') || n.includes('draksh')) return IMG_MAP.fruit;
  if (n.includes('plain')) return IMG_MAP.plain;

  // Category defaults if no specific flavor keyword matched
  if (category === 'icecream' || category === 'vanilla' || n.includes('vanilla')) return IMG_MAP.vanilla;
  if (category === 'sundae' || category === 'dish') return IMG_MAP.sundae;

  return IMG_MAP.plain; // Default fallback to white drink/shake
}

// ── Render Menu Cards ─────────────────────────────────
function renderMenuCards(filterCategory = 'all') {
  const grid = document.getElementById('menuGrid');
  if (!grid) return;

  const menu = getMenuData();
  let items = filterCategory === 'all'
    ? menu
    : menu.filter(m => m.category === filterCategory);

  // On the homepage, limit to 30 items to keep the page concise
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const isHomePage = currentPage === 'index.html' || currentPage === '' || currentPage === '/';
  if (isHomePage) {
    items = items.slice(0, 30);
  }

  grid.innerHTML = items.map(item => {
    const accurateImg = getAccurateImage(item.name, item.category);
    return `
    <div class="menu-card" data-aos="zoom-in" data-aos-delay="${(item.id % 5) * 80}">
      <div class="menu-card-img">
        <img src="${accurateImg}" alt="${item.name}" class="menu-card-photo" loading="lazy" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=400&h=300&fit=crop';">
      </div>
      <div class="menu-card-body">
        <div class="menu-card-name">${item.name}</div>
        <div class="menu-card-desc">${item.desc}</div>
        <div class="menu-card-footer">
          <span class="menu-card-price">₹${item.price}</span>
        </div>
      </div>
    </div>
  `}).join('');

  setTimeout(() => { if (window.revealAOS) revealAOS(); }, 50);
}
window.renderMenuCards = renderMenuCards;

// ── Category Tab Switching ───────────────────────────
function initMenuTabs() {
  const tabs = document.querySelectorAll('.menu-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderMenuCards(tab.dataset.cat);
    });
  });
}

// ── Init on DOMContentLoaded ──────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderMenuCards();
  initMenuTabs();
});
