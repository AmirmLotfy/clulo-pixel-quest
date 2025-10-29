import { Link } from "react-router-dom";

const Terms = () => {
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
          <h1 className="text-3xl md:text-4xl font-pixel text-primary mb-4">Terms & Conditions</h1>
          <p className="text-lg font-body text-muted-foreground mb-8">Last Updated: October 29, 2025</p>

          <section className="space-y-6 font-body text-lg">
            <div>
              <h2 className="text-2xl font-pixel text-foreground mb-3">1. Acceptance of Terms</h2>
              <p className="text-foreground/90 leading-relaxed">
                By using Clulo, you agree to these Terms & Conditions. If you do not agree, please do not use the game.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-pixel text-foreground mb-3">2. Description of Service</h2>
              <ul className="list-disc list-inside space-y-2 text-foreground/90 leading-relaxed pl-4">
                <li>Clulo is a free daily mystery game for Reddit communities</li>
                <li>We provide clues, feedback, and leaderboards</li>
                <li>Service provided "as-is" with no warranties</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-pixel text-foreground mb-3">3. User Responsibilities</h2>
              <ul className="list-disc list-inside space-y-2 text-foreground/90 leading-relaxed pl-4">
                <li>You must comply with Reddit's Terms of Service</li>
                <li>You must be 13+ years old to play</li>
                <li>You agree not to cheat, hack, or exploit the game</li>
                <li>You agree not to harass other players</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-pixel text-foreground mb-3">4. Intellectual Property</h2>
              <ul className="list-disc list-inside space-y-2 text-foreground/90 leading-relaxed pl-4">
                <li>Clulo game design, code, and content are owned by Clulo</li>
                <li>Reddit owns the platform and user-generated content per their terms</li>
                <li>AI-generated content (hints, facts) provided by Google Gemini API</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-pixel text-foreground mb-3">5. Limitations of Liability</h2>
              <ul className="list-disc list-inside space-y-2 text-foreground/90 leading-relaxed pl-4">
                <li>Clulo is provided for entertainment and educational purposes</li>
                <li>We are not responsible for lost scores, technical issues, or downtime</li>
                <li>We are not liable for any damages arising from use of the game</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-pixel text-foreground mb-3">6. Termination</h2>
              <ul className="list-disc list-inside space-y-2 text-foreground/90 leading-relaxed pl-4">
                <li>We may suspend or terminate your access if you violate these terms</li>
                <li>You may stop playing anytime</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-pixel text-foreground mb-3">7. Changes to Terms</h2>
              <ul className="list-disc list-inside space-y-2 text-foreground/90 leading-relaxed pl-4">
                <li>We may update these terms periodically</li>
                <li>Continued use constitutes acceptance of new terms</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-pixel text-foreground mb-3">8. Governing Law</h2>
              <p className="text-foreground/90 leading-relaxed">
                These terms are governed by applicable laws. Disputes will be resolved through appropriate legal channels.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-pixel text-foreground mb-3">9. Contact Us</h2>
              <p className="text-foreground/90 leading-relaxed">
                Email: <a href="mailto:contact@clulo.com" className="text-primary hover:underline">contact@clulo.com</a><br />
                Reddit: <a href="https://reddit.com/u/clulogame" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">u/clulogame</a>
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
            <Link to="/privacy" className="text-foreground hover:text-primary transition-colors">Privacy Policy</Link>
            <span className="text-foreground/50">|</span>
            <Link to="/terms" className="text-primary">Terms & Conditions</Link>
          </div>
          <p className="font-body text-foreground/70">© 2025 Clulo. Made with ❤️ for Reddit Communities.</p>
        </div>
      </footer>
    </div>
  );
};

export default Terms;
