export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-clouds" aria-hidden="true" />
      <div className="hero-header">
        <a
          className="hero-link"
          href="/presskit.zip"
          download
        >
          Press Kit
        </a>
      </div>
      <div className="hero-inner">
        <img
          className="hero-logo"
          src="/img/logo.png"
          alt="Animal Onsen"
        />
        <div className="hero-actions">
          <div className="hero-actions-row primary-row">
            <span className="cta-wrapper">
              <span className="cta-seam" aria-hidden="true">
                <svg viewBox="0 0 100 32" role="presentation" preserveAspectRatio="none">
                  <rect x="2" y="2" width="96" height="28" rx="12" ry="12" pathLength="100" />
                </svg>
              </span>
              <a
                className="pill primary"
                href="https://store.steampowered.com/app/3808610/Animal_Onsen_A_Cozy_Retreat/"
                target="_blank"
                rel="noreferrer"
              >
                Wishlist on Steam
              </a>
            </span>
          </div>
          <div className="hero-actions-row social-row" aria-label="Social links">
            <a
              className="pill icon-pill"
              href="https://discord.gg/6cWXTAaQ9q"
              target="_blank"
              rel="noreferrer"
              aria-label="Discord"
            >
              <img src="/img/social/discord.svg" alt="" aria-hidden="true" />
            </a>
            <a
              className="pill icon-pill"
              href="https://www.youtube.com/@hazelsxia"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
            >
              <img src="/img/social/youtube.svg" alt="" aria-hidden="true" />
            </a>
            <a
              className="pill icon-pill"
              href="https://www.tiktok.com/@hazelsxia"
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok"
            >
              <img src="/img/social/tiktok.svg" alt="" aria-hidden="true" />
            </a>
            <a
              className="pill icon-pill"
              href="https://www.instagram.com/hazelsxia/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <img src="/img/social/instagram.svg" alt="" aria-hidden="true" />
            </a>
            <a
              className="pill icon-pill"
              href="https://x.com/hazelsxia"
              target="_blank"
              rel="noreferrer"
              aria-label="X"
            >
              <img src="/img/social/x.svg" alt="" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
