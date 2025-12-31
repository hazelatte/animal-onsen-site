export default function MainContent() {
  return (
    <main className="main-content">
      <section className="about">
        <h2>About the game</h2>
        <p>
          Animal Onsen is a cozy bathhouse sim where gentle routines and little
          rituals turn into a tiny world of calm. This is placeholder copy that
          will later describe the core loop, the setting, and the overall mood.
        </p>
        <p>
          Placeholder paragraph for feature one: describe the onsen upgrades,
          soothing ambience, and why animals keep coming back.
        </p>
        <p>
          Placeholder paragraph for feature two: talk about collecting
          ingredients, customizing baths, or discovering new visitors.
        </p>
        <p>
          Placeholder paragraph for feature three: hint at story beats, seasonal
          events, or surprises tucked into the mountains.
        </p>
      </section>
      <section className="video-section" aria-label="Trailer video">
        <h3>Early peek</h3>
        <div className="video-frame">
          <iframe
            src="https://www.youtube.com/embed/WGm5ULQucfk?autoplay=1&mute=1&playsinline=1&controls=1&rel=0"
            title="Animal Onsen teaser"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>
      <section className="spacer">
        <h3>More onsen stories coming soon</h3>
        <p>
          Extra space so the page scrolls and the bottom dock can show off the
          movement. Replace this later with screenshots, devlogs, or a roadmap.
        </p>
      </section>
    </main>
  )
}
