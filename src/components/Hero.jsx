export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-clouds" aria-hidden="true" />
      <div className="hero-inner">
        <img
          className="hero-logo"
          src="/img/logo.png"
          alt="Animal Onsen"
        />
        <div className="hero-actions">
          <div className="hero-actions-row primary-row">
            <button className="pill" type="button">
              Discord
            </button>
            <button className="pill primary" type="button">
              Wishlist on Steam
            </button>
            <button className="pill" type="button">
              Press Kit
            </button>
          </div>
          <div className="hero-actions-row secondary-row">
            <button className="pill ghost" type="button">
              Youtube
            </button>
            <button className="pill ghost" type="button">
              Tiktok
            </button>
            <button className="pill ghost" type="button">
              Instagram
            </button>
            <button className="pill ghost" type="button">
              X
            </button>
            <button className="pill ghost" type="button">
              Bluesky
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
