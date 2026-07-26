function Newsletter() {
  return (
    <section className="newsletter">
      <div className="container newsletter-content">
        <div>
          <span className="newsletter-tag">JOIN STRIDEAX</span>

          <h2>Get 10% OFF Your First Order</h2>

          <p>
            Subscribe to receive exclusive drops, new arrivals and special
            offers directly in your inbox.
          </p>
        </div>

        <form className="newsletter-form">
          <input type="email" placeholder="Enter your email address" />

          <button>Subscribe</button>
        </form>
      </div>
    </section>
  );
}

export default Newsletter;
