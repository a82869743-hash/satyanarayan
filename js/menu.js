const DEFAULT_MENU = [
  { id: 1, category: 'icecream', name: 'Royal Vanilla', image: 'images/menu/vanilla.jpg', desc: 'Half ₹20 · Full ₹30 · 1 Ltr ₹300', price: 30 },
  { id: 2, category: 'icecream', name: 'Satyanarayan Special', image: 'images/menu/kesar.jpg', desc: 'Half ₹30 · Full ₹40 · 1 Ltr ₹400', price: 40 },
  { id: 3, category: 'icecream', name: 'American Dryfruit', image: 'images/menu/dryfruit.jpg', desc: 'Half ₹30 · Full ₹40 · 1 Ltr ₹400', price: 40 },
  { id: 4, category: 'icecream', name: 'Rajbhog', image: 'images/menu/rajbhog.jpg', desc: 'Half ₹30 · Full ₹40 · 1 Ltr ₹400', price: 40 },
  { id: 5, category: 'icecream', name: 'Mava Malai', image: 'images/menu/vanilla.jpg', desc: 'Half ₹30 · Full ₹40 · 1 Ltr ₹400', price: 40 },
  { id: 6, category: 'icecream', name: 'Cookie Cream', image: 'images/menu/cookie-cream.jpg', desc: 'Half ₹30 · Full ₹40 · 1 Ltr ₹400', price: 40 },
  { id: 7, category: 'icecream', name: 'Kaju Anjeer', image: 'images/menu/dryfruit.jpg', desc: 'Half ₹30 · Full ₹40 · 1 Ltr ₹400', price: 40 },
  { id: 8, category: 'icecream', name: 'Kaju Draksh', image: 'images/menu/dryfruit.jpg', desc: 'Half ₹30 · Full ₹40 · 1 Ltr ₹400', price: 40 },
  { id: 9, category: 'icecream', name: 'Kpb Mix Elaichi', image: 'images/menu/kesar.jpg', desc: 'Half ₹30 · Full ₹40 · 1 Ltr ₹400', price: 40 },
  { id: 10, category: 'icecream', name: 'Chocolate', image: 'images/menu/chocolate.jpg', desc: 'Half ₹30 · Full ₹40 · 1 Ltr ₹400', price: 40 },
  { id: 11, category: 'icecream', name: 'Gulab Masti', image: 'images/menu/rose-lassi.jpg', desc: 'Half ₹30 · Full ₹40 · 1 Ltr ₹400', price: 40 },
  { id: 12, category: 'icecream', name: 'Kesar Elaichi', image: 'images/menu/kesar.jpg', desc: 'Half ₹30 · Full ₹40 · 1 Ltr ₹400', price: 40 },
  { id: 13, category: 'icecream', name: 'Butter Scotch', image: 'images/menu/butterscotch.jpg', desc: 'Half ₹30 · Full ₹40 · 1 Ltr ₹400', price: 40 },
  { id: 14, category: 'icecream', name: 'Pan Masala', image: 'images/menu/kesar.jpg', desc: 'Half ₹20 · Full ₹30 · 1 Ltr ₹300', price: 30 },
  { id: 15, category: 'icecream', name: 'Sitafal (Seasonal)', image: 'images/menu/sitafal.jpg', desc: 'Half ₹40 · Full ₹50 · 1 Ltr ₹500', price: 50 },
  { id: 16, category: 'icecream', name: 'Mango (Seasonal)', image: 'images/menu/mango.jpg', desc: 'Half ₹40 · Full ₹50 · 1 Ltr ₹500', price: 50 },
  { id: 17, category: 'sundae', name: 'Vanilla Sundae', image: 'images/menu/vanilla-sundae.jpg', desc: 'Classic vanilla sundae with toppings', price: 60 },
  { id: 18, category: 'sundae', name: 'Traffic Jam', image: 'images/menu/traffic-jam.jpg', desc: 'Colorful mixed fruit sundae', price: 60 },
  { id: 19, category: 'sundae', name: 'Chocolate Dhamaka', image: 'images/menu/chocolate-sundae.jpg', desc: 'Loaded chocolate sundae explosion', price: 70 },
  { id: 20, category: 'sundae', name: 'Chocolate Sundae', image: 'images/menu/chocolate-sundae.jpg', desc: 'Rich chocolate sundae with fudge', price: 70 },
  { id: 21, category: 'sundae', name: 'Cookie Sundae', image: 'images/menu/cookie-sundae.jpg', desc: 'Cookie crumble sundae delight', price: 70 },
  { id: 22, category: 'sundae', name: 'Boat Ice-cream', image: 'images/menu/boat-ice-cream.jpg', desc: 'Premium boat-shaped ice cream platter', price: 110 },
  { id: 23, category: 'lassi', name: 'Plain Lassi', image: 'images/menu/plain-lassi.jpg', desc: 'Traditional sweet plain lassi', price: 30 },
  { id: 24, category: 'lassi', name: 'Mango Lassi', image: 'images/menu/mango-lassi.jpg', desc: 'Fresh mango blended with yogurt', price: 35 },
  { id: 25, category: 'lassi', name: 'Pineapple Lassi', image: 'images/menu/mango-lassi.jpg', desc: 'Tangy pineapple yogurt blend', price: 35 },
  { id: 26, category: 'lassi', name: 'Rose Lassi', image: 'images/menu/rose-lassi.jpg', desc: 'Rose flavored creamy lassi', price: 35 },
  { id: 27, category: 'lassi', name: 'Black Current Lassi', image: 'images/menu/blackcurrant-lassi.jpg', desc: 'Black current infused lassi', price: 35 },
  { id: 28, category: 'lassi', name: 'Strawberry Lassi', image: 'images/menu/strawberry-lassi.jpg', desc: 'Strawberry blended yogurt drink', price: 35 },
  { id: 29, category: 'lassi', name: 'Kesar Lassi', image: 'images/menu/kesar-pista-lassi.jpg', desc: 'Premium saffron flavored lassi', price: 35 },
  { id: 30, category: 'lassi', name: 'Kesar Pista Lassi', image: 'images/menu/kesar-pista-lassi.jpg', desc: 'Rich kesar & pistachio lassi', price: 35 },
  { id: 31, category: 'lassi', name: 'Chocolate Lassi', image: 'images/menu/chocolate.jpg', desc: 'Chocolate blended creamy lassi', price: 35 },
  { id: 32, category: 'lassi', name: 'Butter Scotch Lassi', image: 'images/menu/plain-lassi.jpg', desc: 'Butterscotch flavored lassi', price: 35 },
  { id: 33, category: 'lassi', name: 'Ice-cream With Lassi', image: 'images/menu/plain-lassi.jpg', desc: 'Creamy lassi topped with ice cream', price: 55 },
  { id: 34, category: 'lassi', name: 'Dry Fruit Lassi', image: 'images/menu/kesar-pista-lassi.jpg', desc: 'Premium lassi loaded with dry fruits', price: 65 },
  { id: 35, category: 'dish', name: 'Chocolate Dish', image: 'images/menu/chocolate-sundae.jpg', desc: 'Grand chocolate ice cream platter', price: 150 },
  { id: 36, category: 'dish', name: 'Cookie Cream Dish', image: 'images/menu/cookie-sundae.jpg', desc: 'Cookie cream ice cream serving dish', price: 150 },
  { id: 37, category: 'dish', name: 'Mix Ice-cream Dish', image: 'images/menu/traffic-jam.jpg', desc: 'Assorted mix of ice cream flavors', price: 160 },
  { id: 38, category: 'dish', name: 'Your Choice Dish', image: 'images/menu/boat-ice-cream.jpg', desc: 'Pick your favorite flavors', price: 160 },
  { id: 39, category: 'dish', name: 'Dry-fruit Ice-cream Dish', image: 'images/menu/traffic-jam.jpg', desc: 'Premium dry fruits ice cream platter', price: 180 },
  { id: 40, category: 'dish', name: 'Family Dish', image: 'images/menu/boat-ice-cream.jpg', desc: 'Large family-size ice cream sharing dish', price: 200 },
  { id: 41, category: 'speciality', name: 'Cold Coco', image: 'images/menu/chocolate.jpg', desc: 'Chilled coconut water refresher', price: 40 },
  { id: 42, category: 'speciality', name: 'Fruit Salad', image: 'images/menu/traffic-jam.jpg', desc: 'Fresh seasonal fruit salad mix', price: 40 },
  { id: 43, category: 'speciality', name: 'Cold Coco With Ice-cream', image: 'images/menu/chocolate-sundae.jpg', desc: 'Cold coco topped with ice cream', price: 50 },
  { id: 44, category: 'speciality', name: 'Fruit Salad With Ice-cream', image: 'images/menu/traffic-jam.jpg', desc: 'Fruit salad with premium ice cream', price: 50 },
  { id: 45, category: 'speciality', name: 'Kaju Cold Coco', image: 'images/menu/chocolate.jpg', desc: 'Premium cold coco with cashew', price: 80 },
  { id: 46, category: 'vanilla', name: 'Vanilla with Chocolate', image: 'images/menu/vanilla.jpg', desc: 'Vanilla ice cream + chocolate topping', price: 40 },
  { id: 47, category: 'vanilla', name: 'Vanilla with Black Current', image: 'images/menu/vanilla.jpg', desc: 'Vanilla ice cream + black current', price: 40 },
  { id: 48, category: 'vanilla', name: 'Vanilla with Strawberry', image: 'images/menu/vanilla.jpg', desc: 'Vanilla ice cream + strawberry topping', price: 40 },
  { id: 49, category: 'vanilla', name: 'Vanilla with Pineapple', image: 'images/menu/vanilla.jpg', desc: 'Vanilla ice cream + pineapple topping', price: 40 },
  { id: 50, category: 'vanilla', name: 'Vanilla with Butterscotch', image: 'images/menu/vanilla.jpg', desc: 'Vanilla ice cream + butterscotch', price: 40 },
  { id: 51, category: 'milkshake', name: 'Royal Vanilla', image: 'images/menu/vanilla.jpg', desc: 'Classic vanilla milkshake', price: 60 },
  { id: 52, category: 'milkshake', name: 'Rose', image: 'images/menu/rose-lassi.jpg', desc: 'Refreshing rose flavored shake', price: 60 },
  { id: 53, category: 'milkshake', name: 'Pineapple', image: 'images/menu/mango-lassi.jpg', desc: 'Tangy pineapple milkshake', price: 60 },
  { id: 54, category: 'milkshake', name: 'Strawberry', image: 'images/menu/strawberry-lassi.jpg', desc: 'Fresh strawberry shake', price: 60 },
  { id: 55, category: 'milkshake', name: 'Black Current', image: 'images/menu/blackcurrant-lassi.jpg', desc: 'Black current flavored shake', price: 60 },
  { id: 56, category: 'milkshake', name: 'Butter Scotch', image: 'images/menu/butterscotch.jpg', desc: 'Caramel butterscotch shake', price: 60 },
  { id: 57, category: 'milkshake', name: 'Mango', image: 'images/menu/mango.jpg', desc: 'Fresh mango milkshake', price: 60 },
  { id: 58, category: 'milkshake', name: 'Oreo', image: 'images/menu/oreo-shake.jpg', desc: 'Crushed Oreo milkshake', price: 80 },
  { id: 59, category: 'milkshake', name: 'Chocolate', image: 'images/menu/chocolate.jpg', desc: 'Rich chocolate milkshake', price: 80 },
  { id: 60, category: 'milkshake', name: 'Brownie', image: 'images/menu/brownie-shake.jpg', desc: 'Brownie blended milkshake', price: 80 },
  { id: 61, category: 'milkshake', name: 'Chocopie', image: 'images/menu/chocolate-shake.jpg', desc: 'Chocopie blended milkshake', price: 80 },
  { id: 62, category: 'milkshake', name: 'Hide & Seek', image: 'images/menu/hide-seek-shake.jpg', desc: 'Hide & Seek cookie shake', price: 80 },
  { id: 63, category: 'milkshake', name: 'Perk', image: 'images/menu/chocolate-shake.jpg', desc: 'Perk chocolate milkshake', price: 80 },
  { id: 64, category: 'milkshake', name: 'Munch', image: 'images/menu/munch-shake.jpg', desc: 'Munch chocolate milkshake', price: 80 },
  { id: 65, category: 'milkshake', name: 'Kitkat', image: 'images/menu/kitkat-shake.jpg', desc: 'Kitkat wafer milkshake', price: 80 },
  { id: 66, category: 'milkshake', name: '5 Star', image: 'images/menu/chocolate-shake.jpg', desc: '5 Star caramel milkshake', price: 80 },
  { id: 67, category: 'milkshake', name: 'Dairy Milk', image: 'images/menu/dairy-milk-shake.jpg', desc: 'Dairy Milk chocolate shake', price: 80 },
  { id: 68, category: 'milkshake', name: 'Bournvita', image: 'images/menu/chocolate-shake.jpg', desc: 'Classic Bournvita milkshake', price: 80 },
  { id: 69, category: 'milkshake', name: 'Snickers', image: 'images/menu/snickers-shake.jpg', desc: 'Snickers loaded milkshake', price: 80 },
  { id: 70, category: 'milkshake', name: 'Rajbhog', image: 'images/menu/rajbhog.jpg', desc: 'Traditional rajbhog milkshake', price: 80 },
  { id: 71, category: 'milkshake', name: 'Kaju Mango', image: 'images/menu/mango.jpg', desc: 'Kaju & mango premium shake', price: 90 },
  { id: 72, category: 'milkshake', name: 'Kaju Anjeer', image: 'images/menu/dryfruit.jpg', desc: 'Kaju & anjeer premium shake', price: 90 },
  { id: 73, category: 'milkshake', name: 'Sitafal (Seasonal)', image: 'images/menu/sitafal.jpg', desc: 'Seasonal sitafal milkshake', price: 90 },
  { id: 74, category: 'milkshake', name: 'Oreo With Brownie', image: 'images/menu/oreo-shake.jpg', desc: 'Oreo + brownie combo shake', price: 90 },
  { id: 75, category: 'milkshake', name: 'Oreo With Chocopie', image: 'images/menu/oreo-shake.jpg', desc: 'Oreo + chocopie combo shake', price: 90 },
  { id: 76, category: 'milkshake', name: 'Oreo With Hide & Seek', image: 'images/menu/oreo-shake.jpg', desc: 'Oreo + hide & seek combo shake', price: 90 },
  { id: 77, category: 'milkshake', name: 'Oreo With Kitkat', image: 'images/menu/oreo-shake.jpg', desc: 'Oreo + kitkat combo shake', price: 90 },
  { id: 78, category: 'milkshake', name: 'Oreo With Munch', image: 'images/menu/oreo-shake.jpg', desc: 'Oreo + munch combo shake', price: 90 },
  { id: 79, category: 'milkshake', name: 'Oreo With Dairy Milk', image: 'images/menu/oreo-shake.jpg', desc: 'Oreo + dairy milk combo shake', price: 90 },
  { id: 80, category: 'milkshake', name: 'Oreo With 5 Star', image: 'images/menu/oreo-shake.jpg', desc: 'Oreo + 5 star combo shake', price: 90 },
  { id: 81, category: 'milkshake', name: 'Brownie With Chocopie', image: 'images/menu/brownie-shake.jpg', desc: 'Brownie + chocopie combo shake', price: 90 },
  { id: 82, category: 'milkshake', name: 'Brownie With Perk', image: 'images/menu/brownie-shake.jpg', desc: 'Brownie + perk combo shake', price: 90 },
  { id: 83, category: 'milkshake', name: 'Brownie With Kitkat', image: 'images/menu/brownie-shake.jpg', desc: 'Brownie + kitkat combo shake', price: 90 },
  { id: 84, category: 'milkshake', name: 'Brownie With Munch', image: 'images/menu/brownie-shake.jpg', desc: 'Brownie + munch combo shake', price: 90 },
  { id: 85, category: 'milkshake', name: 'Brownie With Hide & Seek', image: 'images/menu/brownie-shake.jpg', desc: 'Brownie + hide & seek combo', price: 90 },
  { id: 86, category: 'milkshake', name: 'Brownie With Dairy Milk', image: 'images/menu/brownie-shake.jpg', desc: 'Brownie + dairy milk combo', price: 90 },
  { id: 87, category: 'milkshake', name: 'Brownie With 5 Star', image: 'images/menu/brownie-shake.jpg', desc: 'Brownie + 5 star combo shake', price: 90 },
  { id: 88, category: 'milkshake', name: 'Hide & Seek With Perk', image: 'images/menu/hide-seek-shake.jpg', desc: 'Hide & seek + perk combo shake', price: 90 },
  { id: 89, category: 'milkshake', name: 'Hide & Seek With Kitkat', image: 'images/menu/hide-seek-shake.jpg', desc: 'Hide & seek + kitkat combo', price: 90 },
  { id: 90, category: 'milkshake', name: 'Hide & Seek With Munch', image: 'images/menu/hide-seek-shake.jpg', desc: 'Hide & seek + munch combo', price: 90 },
  { id: 91, category: 'milkshake', name: 'Hide & Seek With Dairy Milk', image: 'images/menu/hide-seek-shake.jpg', desc: 'Hide & seek + dairy milk combo', price: 90 },
  { id: 92, category: 'milkshake', name: 'Hide & Seek With 5 Star', image: 'images/menu/hide-seek-shake.jpg', desc: 'Hide & seek + 5 star combo', price: 90 },
  { id: 93, category: 'milkshake', name: 'Chocopie With Perk', image: 'images/menu/chocolate-shake.jpg', desc: 'Chocopie + perk combo shake', price: 90 },
  { id: 94, category: 'milkshake', name: 'Chocopie With Hide & Seek', image: 'images/menu/chocolate-shake.jpg', desc: 'Chocopie + hide & seek combo', price: 90 },
  { id: 95, category: 'milkshake', name: 'Chocopie With Kitkat', image: 'images/menu/chocolate-shake.jpg', desc: 'Chocopie + kitkat combo shake', price: 90 },
  { id: 96, category: 'milkshake', name: 'Chocopie With Dairy Milk', image: 'images/menu/chocolate-shake.jpg', desc: 'Chocopie + dairy milk combo', price: 90 },
  { id: 97, category: 'milkshake', name: 'Chocopie With Munch', image: 'images/menu/chocolate-shake.jpg', desc: 'Chocopie + munch combo shake', price: 90 },
  { id: 98, category: 'milkshake', name: 'Chocopie With 5 Star', image: 'images/menu/chocolate-shake.jpg', desc: 'Chocopie + 5 star combo shake', price: 90 },
  { id: 99, category: 'milkshake', name: 'Perk With Kitkat', image: 'images/menu/chocolate-shake.jpg', desc: 'Perk + kitkat combo shake', price: 90 },
  { id: 100, category: 'milkshake', name: 'Perk With Munch', image: 'images/menu/chocolate-shake.jpg', desc: 'Perk + munch combo shake', price: 90 },
  { id: 101, category: 'milkshake', name: 'Perk With Dairy Milk', image: 'images/menu/chocolate-shake.jpg', desc: 'Perk + dairy milk combo shake', price: 90 },
  { id: 102, category: 'milkshake', name: 'Perk With 5 Star', image: 'images/menu/chocolate-shake.jpg', desc: 'Perk + 5 star combo shake', price: 90 },
  { id: 103, category: 'milkshake', name: 'Kitkat With Dairy Milk', image: 'images/menu/kitkat-shake.jpg', desc: 'Kitkat + dairy milk combo shake', price: 90 },
  { id: 104, category: 'milkshake', name: 'Kitkat With 5 Star', image: 'images/menu/kitkat-shake.jpg', desc: 'Kitkat + 5 star combo shake', price: 90 },
  { id: 105, category: 'milkshake', name: 'Munch With Dairy Milk', image: 'images/menu/munch-shake.jpg', desc: 'Munch + dairy milk combo shake', price: 90 },
  { id: 106, category: 'milkshake', name: 'Munch With 5 Star', image: 'images/menu/munch-shake.jpg', desc: 'Munch + 5 star combo shake', price: 90 },
  { id: 107, category: 'milkshake', name: 'Dairy Milk With 5 Star', image: 'images/menu/dairy-milk-shake.jpg', desc: 'Dairy milk + 5 star combo', price: 90 },
  { id: 108, category: 'milkshake', name: 'Satyanarayan Special', image: 'images/menu/kesar.jpg', desc: 'Signature premium milkshake', price: 110 },
  { id: 109, category: 'thickshake', name: 'Rose', image: 'images/menu/rose-lassi.jpg', desc: 'Thick & creamy rose shake', price: 80 },
  { id: 110, category: 'thickshake', name: 'Royal Vanilla', image: 'images/menu/vanilla.jpg', desc: 'Extra thick vanilla shake', price: 80 },
  { id: 111, category: 'thickshake', name: 'Pineapple', image: 'images/menu/mango-lassi.jpg', desc: 'Thick pineapple shake', price: 80 },
  { id: 112, category: 'thickshake', name: 'Strawberry', image: 'images/menu/strawberry-lassi.jpg', desc: 'Thick strawberry shake', price: 80 },
  { id: 113, category: 'thickshake', name: 'Black Current', image: 'images/menu/blackcurrant-lassi.jpg', desc: 'Thick black current shake', price: 80 },
  { id: 114, category: 'thickshake', name: 'Butter Scotch', image: 'images/menu/butterscotch.jpg', desc: 'Thick butterscotch shake', price: 80 },
  { id: 115, category: 'thickshake', name: 'Mango', image: 'images/menu/mango.jpg', desc: 'Thick mango shake', price: 80 },
  { id: 116, category: 'thickshake', name: 'Chocopie', image: 'images/menu/chocolate-shake.jpg', desc: 'Thick chocopie shake', price: 80 },
  { id: 117, category: 'thickshake', name: 'Brownie', image: 'images/menu/brownie-shake.jpg', desc: 'Thick brownie shake', price: 80 },
  { id: 118, category: 'thickshake', name: 'Oreo', image: 'images/menu/oreo-shake.jpg', desc: 'Thick Oreo shake', price: 80 },
  { id: 119, category: 'thickshake', name: 'Chocolate', image: 'images/menu/chocolate.jpg', desc: 'Thick chocolate shake', price: 80 },
  { id: 120, category: 'thickshake', name: 'Perk', image: 'images/menu/chocolate-shake.jpg', desc: 'Thick Perk shake', price: 80 },
  { id: 121, category: 'thickshake', name: 'Hide & Seek', image: 'images/menu/hide-seek-shake.jpg', desc: 'Thick Hide & Seek shake', price: 80 },
  { id: 122, category: 'thickshake', name: 'Kitkat', image: 'images/menu/kitkat-shake.jpg', desc: 'Thick Kitkat shake', price: 80 },
  { id: 123, category: 'thickshake', name: 'Munch', image: 'images/menu/munch-shake.jpg', desc: 'Thick Munch shake', price: 80 },
  { id: 124, category: 'thickshake', name: '5 Star', image: 'images/menu/chocolate-shake.jpg', desc: 'Thick 5 Star shake', price: 80 },
  { id: 125, category: 'thickshake', name: 'Dairy Milk', image: 'images/menu/dairy-milk-shake.jpg', desc: 'Thick Dairy Milk shake', price: 80 },
  { id: 126, category: 'thickshake', name: 'Snickers', image: 'images/menu/snickers-shake.jpg', desc: 'Thick Snickers shake', price: 80 },
  { id: 127, category: 'thickshake', name: 'Kaju Mango', image: 'images/menu/mango.jpg', desc: 'Premium kaju mango thick shake', price: 120 },
  { id: 128, category: 'thickshake', name: 'Kaju Anjeer', image: 'images/menu/dryfruit.jpg', desc: 'Premium kaju anjeer thick shake', price: 120 },
  { id: 129, category: 'coldcoffee', name: 'Cold Coffee', image: 'images/menu/cold-coffee.jpg', desc: 'Classic chilled cold coffee', price: 70 },
  { id: 130, category: 'coldcoffee', name: 'Cold Coffee with Ice-Cream', image: 'images/menu/cold-coffee.jpg', desc: 'Cold coffee topped with ice cream', price: 80 },
  { id: 131, category: 'coldcoffee', name: 'Cold Coffee with Oreo', image: 'images/menu/cold-coffee.jpg', desc: 'Cold coffee blended with Oreo', price: 80 },
  { id: 132, category: 'coldcoffee', name: 'Cold Coffee with Brownie', image: 'images/menu/cold-coffee.jpg', desc: 'Cold coffee with brownie chunks', price: 80 },
  { id: 133, category: 'coldcoffee', name: 'Cold Coffee with Perk', image: 'images/menu/cold-coffee.jpg', desc: 'Cold coffee with Perk chocolate', price: 80 },
  { id: 134, category: 'coldcoffee', name: 'Cold Coffee with Kitkat', image: 'images/menu/cold-coffee.jpg', desc: 'Cold coffee with Kitkat crunch', price: 80 },
  { id: 135, category: 'coldcoffee', name: 'Cold Coffee with Munch', image: 'images/menu/cold-coffee.jpg', desc: 'Cold coffee with Munch chocolate', price: 80 },
  { id: 136, category: 'coldcoffee', name: 'Cold Coffee with 5 Star', image: 'images/menu/cold-coffee.jpg', desc: 'Cold coffee with 5 Star caramel', price: 80 },
  { id: 137, category: 'coldcoffee', name: 'Cold Coffee with Dairy Milk', image: 'images/menu/cold-coffee.jpg', desc: 'Cold coffee with Dairy Milk', price: 80 },
  { id: 138, category: 'coldcoffee', name: 'Cold Coffee with Snickers', image: 'images/menu/cold-coffee.jpg', desc: 'Cold coffee with Snickers', price: 80 },
  { id: 139, category: 'coldcoffee', name: 'Cold Coffee with Chocopie', image: 'images/menu/cold-coffee.jpg', desc: 'Cold coffee with Chocopie', price: 80 },
  { id: 140, category: 'coldcoffee', name: 'Cold Coffee with Hide & Seek', image: 'images/menu/cold-coffee.jpg', desc: 'Cold coffee with Hide & Seek', price: 80 },
  { id: 141, category: 'coldcoffee', name: 'Satyanarayan Special Coffee', image: 'images/menu/cold-coffee-icecream.jpg', desc: 'Signature premium cold coffee', price: 100 },
];

// ── Load from localStorage (admin overrides) ─────────
// Cache is now managed by Admin panel

function getMenuData() {
  const saved = localStorage.getItem('scoopSipMenu');
  return saved ? JSON.parse(saved) : DEFAULT_MENU;
}

// ── Render Menu Cards ─────────────────────────────────
function renderMenuCards(filterCategory = 'all') {
  const grid = document.getElementById('menuGrid');
  if (!grid) return;

  grid.innerHTML = ""; // Ensure grid is cleared before rendering to prevent duplicates

  const menu = getMenuData();
  let items = filterCategory === 'all'
    ? menu
    : menu.filter(m => m.category === filterCategory);

  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const isHomePage = currentPage === 'index.html' || currentPage === '' || currentPage === '/';
  if (isHomePage) {
    items = items.slice(0, 30);
  }

  grid.innerHTML = items.map(item => `
    <div class="menu-card" data-aos="zoom-in" data-aos-delay="${(item.id % 5) * 80}">
      <div class="menu-card-img">
        <img src="${item.image}" alt="${item.name}" class="menu-card-photo" loading="lazy">
      </div>
      <div class="menu-card-body">
        <div class="menu-card-name">${item.name}</div>
        <div class="menu-card-desc">${item.desc}</div>
        <div class="menu-card-footer">
          <span class="menu-card-price">₹${item.price}</span>
        </div>
      </div>
    </div>
  `).join('');

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


