export default function HomePage() {
  const stats = [
    { value: '10k+', label: 'happy customers' },
    { value: '250+', label: 'restaurants' },
    { value: '20 min', label: 'avg. delivery' },
    { value: '4.8/5', label: 'customer rating' },
  ]

  const features = [
    { title: 'Fast delivery', text: 'Fresh meals delivered quickly from nearby kitchens.' },
    { title: 'Easy ordering', text: 'Browse menus, add to cart, and checkout in minutes.' },
    { title: 'Secure payments', text: 'Multiple payment methods with safe, simple checkout.' },
  ]

  const restaurants = [
    { name: 'Spice Hub', cuisine: 'Andhra • Biryani', time: '25-30 min', rating: '4.8' },
    { name: 'Burger House', cuisine: 'American • Fast food', time: '20-25 min', rating: '4.7' },
    { name: 'Green Bowl', cuisine: 'Healthy • Vegan', time: '15-20 min', rating: '4.9' },
  ]

  return (
    <div className="app-shell">
      <main className="main-content" id="home">
        <section className="hero-section">
          <div className="hero-copy">
            <span className="eyebrow">Fresh • Fast • Flavorful</span>
            <h1>Food that feels like home, delivered fast.</h1>
            <p>
              Discover handpicked restaurants, juicy meals, and daily deals from your
              neighborhood.
            </p>

            <div className="search-box">
              <input type="text" placeholder="Search for biryani, pizza, burgers..." />
              <button type="button">Search</button>
            </div>

            <div className="rating-strip" aria-label="Customer rating summary">
              <div>
                <strong>4.8</strong>
                <span>Average rating</span>
              </div>
              <div>
                <strong>15k+</strong>
                <span>Orders delivered</span>
              </div>
            </div>
          </div>

          <div className="hero-card" aria-label="Featured dish card">
            <div className="dish-image">🍛</div>
            <div className="dish-badge">Best Seller</div>
            <h3>Fire Chicken Bowl</h3>
            <p>Grilled chicken, rice, herbs, and a rich spicy sauce.</p>

            <div className="dish-meta">
              <span>⭐ 4.8</span>
              <span>25 min</span>
            </div>

            <div className="dish-footer">
              <strong>₹299</strong>
              <button type="button">Add to cart</button>
            </div>
          </div>
        </section>

        <section className="stats-grid" aria-label="Business stats">
          {stats.map((stat) => (
            <div className="stat-card" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </section>

        <section className="features-section" id="offers">
          <div className="section-heading">
            <span>Why choose us</span>
            <h2>Built for everyday cravings</h2>
          </div>

          <div className="feature-grid">
            {features.map((feature) => (
              <article className="feature-card" key={feature.title}>
                <div className="feature-icon">✓</div>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="restaurants-section" id="restaurants">
          <div className="section-heading">
            <span>Popular spots</span>
            <h2>Top restaurants nearby</h2>
          </div>

          <div className="restaurant-grid">
            {restaurants.map((restaurant) => (
              <article className="restaurant-card" key={restaurant.name}>
                <div className="restaurant-image" aria-hidden="true">🍽️</div>
                <div className="restaurant-content">
                  <div className="restaurant-topline">
                    <h3>{restaurant.name}</h3>
                    <span>⭐ {restaurant.rating}</span>
                  </div>
                  <p>{restaurant.cuisine}</p>
                  <div className="restaurant-footer">
                    <span>{restaurant.time}</span>
                    <button type="button">View menu</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
