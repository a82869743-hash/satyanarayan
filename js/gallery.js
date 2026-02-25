// =====================================================
// gallery.js — Real Photo Gallery + Lightbox
// =====================================================

const galleryItems = [
    { src: 'images/shop_front_wide.jpg', label: 'Shri Satyanarayan Ice Cream — Our Shop', category: 'storefront' },
    { src: 'images/shop_front_close.jpg', label: 'Welcome to Satyanarayan Ice Cream', category: 'storefront' },
    { src: 'images/shop_seating.jpg', label: 'Cozy Seating Area', category: 'interior' },
    { src: 'images/shop_interior.jpg', label: 'Inside Our Shop — Wall of Flavors', category: 'interior' },
    { src: 'images/shop_entrance_view.jpg', label: 'Entrance View & Seating', category: 'interior' },
];

function initGallery() {
    const grid = document.getElementById('galleryGrid');
    if (!grid) return;

    grid.innerHTML = galleryItems.map((item, i) => `
    <div class="gallery-item gallery-item-photo ${i === 0 ? 'gallery-item-featured' : ''}" 
         onclick="openLightbox(${i})"
         data-aos="zoom-in"
         data-aos-delay="${i * 80}">
      <img src="${item.src}" 
           alt="${item.label}" 
           class="gallery-item-img" 
           loading="lazy" />
      <div class="gallery-overlay">
        <span>🔍 ${item.label}</span>
      </div>
    </div>
  `).join('');
}

// ── Lightbox ──────────────────────────────────────────
let currentLightbox = 0;

function openLightbox(index) {
    currentLightbox = index;
    const item = galleryItems[index];
    const lb = document.getElementById('lightbox');
    const content = document.getElementById('lightboxContent');
    const label = document.getElementById('lightboxLabel');
    const counter = document.getElementById('lightboxCounter');

    if (!lb) return;

    if (content) {
        content.innerHTML = `<img src="${item.src}" alt="${item.label}" class="lightbox-img" />`;
    }
    if (label) label.textContent = item.label;
    if (counter) counter.textContent = `${index + 1} / ${galleryItems.length}`;
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
}
window.openLightbox = openLightbox;

function closeLightbox() {
    const lb = document.getElementById('lightbox');
    if (lb) lb.classList.remove('open');
    document.body.style.overflow = '';
}
window.closeLightbox = closeLightbox;

function lightboxNav(dir) {
    openLightbox((currentLightbox + dir + galleryItems.length) % galleryItems.length);
}
window.lightboxNav = lightboxNav;

// Keyboard nav
document.addEventListener('keydown', e => {
    const lb = document.getElementById('lightbox');
    if (!lb || !lb.classList.contains('open')) return;
    if (e.key === 'ArrowRight') lightboxNav(1);
    if (e.key === 'ArrowLeft') lightboxNav(-1);
    if (e.key === 'Escape') closeLightbox();
});

document.addEventListener('DOMContentLoaded', initGallery);
