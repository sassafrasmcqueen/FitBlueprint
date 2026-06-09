/**
 * FitBlueprint – Products Data
 * All product info is defined here and injected into the product grid.
 * Edit this file to add, remove, or update products.
 */
const products = [
  {
    id: 'beginner-bodyweight',
    category: 'Workout Plan',
    title: '4-Week Beginner Bodyweight Workout Plan',
    description: 'Start your fitness journey today with our equipment-free, beginner-friendly workout plan. This 4-week program builds strength and confidence through effective bodyweight exercises you can do anywhere.',
    price: '$17',
    image: 'assets/images/products/beginner-bodyweight-plan-cover.png',
    payhipLink: 'https://payhip.com/fitblueprint'
  },
  {
    id: 'home-gym',
    category: 'Workout Plan',
    title: '12-Week Home Gym Program',
    description: 'Ready to take your home workouts to the next level? Build muscle and gain strength with just dumbbells and a bench. Includes three progressive phases to keep you challenged.',
    price: '$37',
    image: 'assets/images/products/home-gym-program-cover.png',
    payhipLink: 'https://payhip.com/fitblueprint'
  },
  {
    id: 'meal-prep',
    category: 'Meal Prep',
    title: '7-Day Meal Prep Guide & Grocery List',
    description: 'Take the guesswork out of healthy eating with our comprehensive meal prep guide. Includes a streamlined grocery list, easy-to-follow recipes, and step-by-step prep instructions.',
    price: '$12',
    image: 'assets/images/products/7-day-meal-prep-cover.png',
    payhipLink: 'https://payhip.com/fitblueprint'
  },
  {
    id: 'fitness-journal',
    category: 'Tools',
    title: 'Fitness Journey Journal',
    description: 'More than just a workout log — track your meals, mood, energy, and sleep. This holistic approach ensures you stay mindful and motivated on your path to wellness.',
    price: '$15',
    image: 'assets/images/products/fitness-journal-cover.png',
    payhipLink: 'https://payhip.com/fitblueprint'
  },
  {
    id: 'habit-tracker',
    category: 'Tools',
    title: 'Habit Tracker Printable',
    description: 'Master your routine with our minimalist Monthly Habit Tracker. Designed for clarity, this printable helps you visualize your progress across health, fitness, and lifestyle goals.',
    price: '$7',
    image: 'assets/images/products/habit-tracker-cover.png',
    payhipLink: 'https://payhip.com/fitblueprint'
  }
];

/**
 * Render products into the grid.
 */
function renderProducts() {
  const grid = document.getElementById('productGrid');
  if (!grid) return;

  grid.innerHTML = products.map(product => `
    <div class="product-card">
      <div class="product-img-wrap">
        <img
          src="${product.image}"
          alt="${product.title}"
          class="product-img"
          loading="lazy"
          onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22 fill=%22%23f0f0f0%22><rect width=%22400%22 height=%22300%22/><text x=%22200%22 y=%22150%22 text-anchor=%22middle%22 fill=%22%23999%22 font-family=%22sans-serif%22 font-size=%2224%22>${encodeURIComponent(product.title)}</text></svg>'"
        >
      </div>
      <div class="product-info">
        <div class="product-category">${product.category}</div>
        <h3 class="product-title">${product.title}</h3>
        <p class="product-desc">${product.description}</p>
        <div class="product-footer">
          <span class="product-price">${product.price}</span>
          <a href="${product.payhipLink}" target="_blank" rel="noopener" class="product-btn">Buy on Payhip</a>
        </div>
      </div>
    </div>
  `).join('');
}

// Render on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderProducts);
} else {
  renderProducts();
}