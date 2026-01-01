export default function MainContent() {
  return (
    <main className="main-content">
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
      <section className="about">
        <h2>About the game</h2>
        <p>
          Animal Onsen is a cozy and relaxing companion game. It lives at the bottom of your screen while you work, study, or unwind. Decorate your onsen, upgrade amenities, and collect adorable animal visitors as you build the perfect retreat, one peaceful moment at a time.
        </p>
        <p>
          Start small, then grow your onsen into a little getaway. Upgrade amenities, improve comfort, and create the kind of soothing space that makes regulars linger (and leave better tips).
        </p>
        <p>
          Unlock new themed onsens as you hit simple milestones, then decorate each one to match the vibe. Some animals are drawn to specific themes, and collecting them all becomes a cozy long-term goal.
        </p>
        <p>
          Expect small surprises along the way: milestone messages, seasonal moments, and the occasional gift from a grateful guest, plus a warm “we missed you” when you return after a break.
        </p>
      </section>
      <section className="spacer">
        <h3>More onsen moments coming soon</h3>
        <p>
          This space will become screenshots, devlogs, and a simple roadmap as the game grows. In the meantime, you can wishlist on Steam and join the Discord to follow development.
        </p>
      </section>
    </main>
  )
}
