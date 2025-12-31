import { useEffect, useState } from 'react'

export default function Hero() {
  const [pressNotice, setPressNotice] = useState(false)

  useEffect(() => {
    if (!pressNotice) return
    const timer = setTimeout(() => setPressNotice(false), 2200)
    return () => clearTimeout(timer)
  }, [pressNotice])

  return (
    <section className="hero">
      <div className="hero-clouds" aria-hidden="true" />
      <div className="hero-header">
        <button
          className="hero-link"
          type="button"
          onClick={() => setPressNotice(true)}
        >
          Press Kit
        </button>
        {pressNotice && <span className="press-notice">Available soon!</span>}
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
              <button className="pill primary" type="button">
                Wishlist on Steam
              </button>
            </span>
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
          </div>
        </div>
      </div>
    </section>
  )
}
