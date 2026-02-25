# 🍦 Satyanarayan Ice Cream — Website

A modern, premium website for **Shri Satyanarayan Ice Cream** — a beloved ice cream, shakes & juice center in **Raopura, Vadodara** serving since **1986**.

---

## ✨ Features

- **🏠 Homepage** — Hero section, shop gallery, menu preview, customer testimonials, Google Maps integration, and Zomato delivery
- **🍦 Menu** — Full interactive menu with 28+ items across 9 categories (Ice Cream, Sundae, Lassi, Dishes, Speciality, Vanilla Topping, Milk Shake, Thick Shake, Cold Coffee) with dynamic filtering
- **📸 Gallery** — Photo gallery with lightbox viewer and keyboard navigation
- **💫 About** — Brand story, values, stats, and timeline since 1986
- **⚙️ Admin Panel** — Password-protected panel to edit menu prices & descriptions (saved to browser localStorage)
- **🌙 Dark Mode** — Toggle between light and dark themes (persisted across pages)
- **💬 WhatsApp Ordering** — Floating WhatsApp button for instant order placement
- **📱 Fully Responsive** — Optimized for all screen sizes with mobile navigation
- **🎨 Modern Design** — Glassmorphism, smooth animations, gradient backgrounds, and micro-interactions

---

## 📁 Project Structure

```
ice cream project/
│
├── index.html          # Homepage
├── menu.html           # Full menu page
├── gallery.html        # Photo gallery page
├── about.html          # About us page
├── admin.html          # Admin panel (price management)
│
├── css/
│   └── style.css       # Global stylesheet (design system, components, layouts)
│
├── js/
│   ├── main.js         # Core JS (navbar, dark mode, scroll animations, loader)
│   ├── menu.js         # Menu data & rendering (all 28+ items with prices)
│   ├── gallery.js      # Gallery grid & lightbox functionality
│   ├── testimonials.js # Customer reviews carousel
│   └── admin.js        # Admin panel logic (login, price editing, save/reset)
│
├── images/
│   ├── logo.jpg              # Brand logo
│   ├── shop_front_wide.jpg   # Storefront wide shot
│   ├── shop_front_close.jpg  # Storefront close-up
│   ├── shop_interior.jpg     # Interior view
│   ├── shop_seating.jpg      # Seating area
│   └── shop_entrance_view.jpg # Entrance view
│
├── serve.ps1           # PowerShell local development server
└── README.md           # This file
```

---

## 🚀 Getting Started

### Option 1 — PowerShell Server (Recommended)

```powershell
.\serve.ps1
```

This starts a local server at `http://localhost:5500` and opens the website in Microsoft Edge automatically.

### Option 2 — Open Directly

Simply open `index.html` in any modern browser.

> **Note:** Some features (e.g., Unsplash images) require an internet connection.

---

## 🛠️ Tech Stack

| Layer     | Technology                       |
|-----------|----------------------------------|
| Structure | HTML5 (Semantic)                 |
| Styling   | Vanilla CSS (Custom Properties, Grid, Flexbox, Animations) |
| Logic     | Vanilla JavaScript (ES6+)       |
| Server    | PowerShell `HttpListener`        |
| Storage   | Browser `localStorage` (menu prices, theme preference) |
| Icons     | Emoji-based (no external icon library) |
| Images    | Local photos + Unsplash CDN      |

---

## 🍽️ Menu Categories

| Category        | Items                                                      |
|-----------------|------------------------------------------------------------|
| 🍦 Ice Cream    | Vanilla, Strawberry, Mango, Butterscotch, Chocolate, etc.  |
| 🍨 Sundae       | Mango Sundae, Chocolate Sundae, Butterscotch Sundae, etc.  |
| 🥛 Lassi        | Sweet Lassi, Mango Lassi, Rose Lassi, etc.                 |
| 🍽️ Ice Cream Dish | Special plated ice cream dishes                           |
| ⭐ Speciality   | Premium specialty items                                     |
| 🍦 Vanilla Topping | Vanilla-based toppings & combos                          |
| 🥤 Milk Shake   | Classic milkshakes in various flavors                      |
| 🥤 Thick Shake  | Premium thick shakes                                        |
| ☕ Cold Coffee  | Cold coffee variants                                        |

---

## ⚙️ Admin Panel

Access the admin panel at `admin.html` to:
- Edit menu item **prices** and **descriptions**
- View menu **statistics** (total items, categories, price range)
- **Save** changes (persisted in browser localStorage)
- **Reset** menu to default values
- **Preview** changes on the live menu page

---

## 📞 Contact & Social

| Platform   | Link                                                                 |
|------------|----------------------------------------------------------------------|
| 📞 Phone   | [+91 90169 96990](tel:+919016996990)                                |
| 💬 WhatsApp | [Chat on WhatsApp](https://wa.me/919016996990)                      |
| 📸 Instagram | [@shreesatyanarayanicecream78755](https://instagram.com/shreesatyanarayanicecream78755) |
| 🍕 Zomato   | [Order on Zomato](https://zomato.onelink.me/xqzv/5ya1ptpj)         |
| 📍 Location | Opp. Jubilee Baug, Nr Jagdish Farshan, Raopura, Vadodara           |

---

## 🕐 Opening Hours

| Day         | Hours         |
|-------------|---------------|
| Mon – Fri   | 11 AM – 10 PM |
| Saturday    | 10 AM – 11 PM |
| Sunday      | 10 AM – 11 PM |
| Holidays    | 10 AM – 11 PM |

---

## 📄 License

© 2026 Satyanarayan Ice Cream. All rights reserved.

---

> *Made with ❤️ and lots of ice cream.*
