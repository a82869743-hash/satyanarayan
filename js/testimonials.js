// =====================================================
// testimonials.js — Auto-sliding reviews
// =====================================================

const testimonials = [
    { name: 'Priya Sharma', role: 'Regular Customer', text: '"Best ice cream in town! The Mango Madness scoop is absolutely divine. Fresh, creamy, and bursting with real fruit flavor. I visit every single weekend!"', stars: 5 },
    { name: 'Rahul Mehta', role: 'Food Blogger', text: '"Satyanarayan Ice Cream is a game-changer! Their Oreo Thick Shake is out of this world. The presentation is premium, and the taste is unbeatable. Highly recommended!"', stars: 5 },
    { name: 'Anjali Kapoor', role: 'Loyal Customer', text: '"Ordered the Family Fiesta Pack for our reunion — everyone loved it! The combos are great value for money. Hygienic, fresh and absolutely delicious!"', stars: 5 },
    { name: 'Vikas Singh', role: 'Food Critic', text: '"The Belgian Chocolate scoop rivals any premium gelato I\'ve had. Rich, smooth and perfectly balanced. The staff is warm and the place has a great vibe!"', stars: 5 },
    { name: 'Sneha Patel', role: 'Party Planner', text: '"We ordered 50 scoops for a kids party and they delivered on time! Zero complaints from the kids — which is the best review I can give. Will order again!"', stars: 5 },
];

function initTestimonials() {
    const track = document.getElementById('testimonialsTrack');
    const dotsContainer = document.getElementById('testimonialDots');
    if (!track) return;

    let current = 0;
    let autoTimer;

    // Render cards
    track.innerHTML = testimonials.map(t => `
    <div class="testimonial-card">
      <div class="stars">${'⭐'.repeat(t.stars)}</div>
      <p class="testimonial-text">${t.text}</p>
      <div class="testimonial-author">${t.name}</div>
      <div class="testimonial-role">${t.role}</div>
    </div>
  `).join('');

    // Render dots
    if (dotsContainer) {
        dotsContainer.innerHTML = testimonials.map((_, i) => `
      <div class="dot ${i === 0 ? 'active' : ''}" onclick="goToTestimonial(${i})" id="dot-${i}"></div>
    `).join('');
    }

    function goTo(index) {
        current = (index + testimonials.length) % testimonials.length;
        track.style.transform = `translateX(-${current * 100}%)`;
        document.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('active', i === current));
    }

    function autoPlay() {
        autoTimer = setInterval(() => goTo(current + 1), 4500);
    }

    window.goToTestimonial = (i) => { clearInterval(autoTimer); goTo(i); autoPlay(); };

    // Swipe support (mobile)
    let startX = 0;
    track.addEventListener('touchstart', e => { startX = e.touches[0].clientX; });
    track.addEventListener('touchend', e => {
        const diff = startX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 50) goTo(current + (diff > 0 ? 1 : -1));
    });

    autoPlay();
}

document.addEventListener('DOMContentLoaded', initTestimonials);
