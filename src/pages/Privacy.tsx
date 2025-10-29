import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b-4 border-foreground bg-card">
        <div className="container mx-auto px-4 py-6">
          <Link to="/" className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity">
            <span className="text-2xl font-pixel text-primary">← CLULO</span>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <article className="bg-card pixel-border pixel-box p-8 mb-8">
          <h1 className="text-3xl md:text-4xl font-pixel text-primary mb-4">Privacy Policy</h1>
          <p className="text-lg font-body text-muted-foreground mb-8">Last Updated: October 29, 2025</p>

          <section className="space-y-6 font-body text-lg">
            <div>
              <h2 className="text-2xl font-pixel text-foreground mb-3">1. Introduction</h2>
              <p className="text-foreground/90 leading-relaxed">
                Clulo ("we," "us," "our") operates the Clulo game on Reddit. This Privacy Policy explains how we collect, use, and protect your information when you use Clulo.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-pixel text-foreground mb-3">2. Information We Collect</h2>
              <ul className="list-disc list-inside space-y-2 text-foreground/90 leading-relaxed pl-4">
                <li>Reddit User ID (provided by Reddit API)</li>
                <li>Gameplay data (guesses, scores, streaks, leaderboard positions)</li>
                <li className="font-bold">We do NOT collect: Emails, passwords, personal contact info</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-pixel text-foreground mb-3">3. How We Use Your Information</h2>
              <ul className="list-disc list-inside space-y-2 text-foreground/90 leading-relaxed pl-4">
                <li>To operate the game (track scores, streaks, leaderboards)</li>
                <li>To improve game features and user experience</li>
                <li>To display leaderboards and achievements</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-pixel text-foreground mb-3">4. Data Storage</h2>
              <ul className="list-disc list-inside space-y-2 text-foreground/90 leading-relaxed pl-4">
                <li>All data stored securely in Reddit's Devvit Redis database</li>
                <li>No third-party databases or external servers</li>
                <li>Data retained as long as you play the game</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-pixel text-foreground mb-3">5. Third-Party Services</h2>
              <ul className="list-disc list-inside space-y-2 text-foreground/90 leading-relaxed pl-4">
                <li>We use Google Gemini AI API for game features (hot/cold feedback, hints)</li>
                <li>Gemini processes guesses anonymously (no personal data sent)</li>
                <li>Reddit's privacy policy applies to all Reddit user data</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-pixel text-foreground mb-3">6. Your Rights</h2>
              <ul className="list-disc list-inside space-y-2 text-foreground/90 leading-relaxed pl-4">
                <li>You can request data deletion by contacting us</li>
                <li>You can stop playing anytime (no account deletion needed)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-pixel text-foreground mb-3">7. Children's Privacy</h2>
              <ul className="list-disc list-inside space-y-2 text-foreground/90 leading-relaxed pl-4">
                <li>Clulo is intended for ages 13+ (Reddit's minimum age)</li>
                <li>We do not knowingly collect data from children under 13</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-pixel text-foreground mb-3">8. Changes to This Policy</h2>
              <ul className="list-disc list-inside space-y-2 text-foreground/90 leading-relaxed pl-4">
                <li>We may update this policy periodically</li>
                <li>Changes posted on this page with updated date</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-pixel text-foreground mb-3">9. Contact Us</h2>
              <p className="text-foreground/90 leading-relaxed">
                Email: <a href="mailto:contact@clulo.com" className="text-primary hover:underline">contact@clulo.com</a><br />
                Reddit: Message <a href="https://reddit.com/u/clulogame" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">u/clulogame</a>
              </p>
            </div>
          </section>
        </article>
      </main>

      <footer className="border-t-4 border-foreground bg-card py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-wrap justify-center gap-4 mb-4 font-body text-lg">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">Home</Link>
            <span className="text-foreground/50">|</span>
            <Link to="/privacy" className="text-primary">Privacy Policy</Link>
            <span className="text-foreground/50">|</span>
            <Link to="/terms" className="text-foreground hover:text-primary transition-colors">Terms & Conditions</Link>
          </div>
          <p className="font-body text-foreground/70">© 2025 Clulo. Made with ❤️ for Reddit Communities.</p>
        </div>
      </footer>
    </div>
  );
};

export default Privacy;
