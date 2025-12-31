export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-clouds" aria-hidden="true" />
      <div className="hero-header">
        <button className="hero-link" type="button">
          Press Kit
        </button>
      </div>
      <div className="hero-inner">
        <img
          className="hero-logo"
          src="/img/logo.png"
          alt="Animal Onsen"
        />
        <div className="hero-actions">
          <div className="hero-actions-row primary-row">
            <button className="pill primary" type="button">
              Wishlist on Steam
            </button>
          </div>
          <div className="hero-actions-row social-row" aria-label="Social links">
            <button className="pill icon-pill" type="button" aria-label="Discord">
              <img src="/img/social/discord.svg" alt="" aria-hidden="true" />
            </button>
            <button className="pill icon-pill" type="button" aria-label="YouTube">
              <img src="/img/social/youtube.svg" alt="" aria-hidden="true" />
            </button>
            <button className="pill icon-pill" type="button" aria-label="TikTok">
              <img src="/img/social/tiktok.svg" alt="" aria-hidden="true" />
            </button>
            <button className="pill icon-pill" type="button" aria-label="Instagram">
              <img src="/img/social/instagram.svg" alt="" aria-hidden="true" />
            </button>
            <button className="pill icon-pill" type="button" aria-label="X">
              <img src="/img/social/x.svg" alt="" aria-hidden="true" />
            </button>
            <button className="pill icon-pill" type="button" aria-label="Bluesky">
              <img src="/img/social/bluesky.svg" alt="" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
