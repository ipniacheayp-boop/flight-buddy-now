import React from 'react';

const Index = () => {
  return (
    <div>
      {/* Navigation */}
      <nav>
        <div className="logo">Flight Buddy</div>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Destinations</li>
          <li>Contact</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to Flight Buddy</h1>
        <p>Your journey starts here.</p>
        <button>Book Now</button>
      </section>

      {/* Booking Form */}
      <section className="booking-form">
        <h2>Book Your Flight</h2>
        <form>
          <label htmlFor="from">From:</label>
          <input type="text" id="from" name="from" required />

          <label htmlFor="to">To:</label>
          <input type="text" id="to" name="to" required />

          <label htmlFor="date">Date:</label>
          <input type="date" id="date" name="date" required />

          <button type="submit">Search Flights</button>
        </form>
      </section>

      {/* Features */}
      <section className="features">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>Best Prices</li>
          <li>24/7 Customer Support</li>
          <li>Wide Range of Destinations</li>
          <li>Exclusive Deals</li>
        </ul>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2026 Flight Buddy. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;