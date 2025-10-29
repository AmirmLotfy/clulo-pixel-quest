import { Gamepad2, Film, Globe, BookOpen, Microscope, Music } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 brick-pattern border-y-4 border-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-pixel text-white mb-6 drop-shadow-lg leading-tight">
          Ready to Boost Your Knowlo?
        </h2>

        <p className="text-2xl md:text-3xl font-body text-white/90 mb-12 max-w-2xl mx-auto">
          Join thousands of Redditors solving daily Knulo mysteries
        </p>

        <a
          href="https://www.reddit.com/r/hiclulo_dev/comments/1oj3rc7/daily_mystery_can_you_solve_it/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-accent hover:bg-accent/90 text-accent-foreground font-pixel text-2xl px-12 py-6 pixel-border-white pixel-box bounce-hover inline-flex items-center gap-4"
          style={{ boxShadow: '8px 8px 0 0 white' }}
        >
          <Gamepad2 size={32} strokeWidth={3} />
          <span>Install Clulo</span>
        </a>

        <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/90 font-body text-xl">
          <div className="flex items-center gap-2">
            <Film size={32} strokeWidth={2} />
            <span>Movies</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe size={32} strokeWidth={2} />
            <span>Geography</span>
          </div>
          <div className="flex items-center gap-2">
            <BookOpen size={32} strokeWidth={2} />
            <span>History</span>
          </div>
          <div className="flex items-center gap-2">
            <Microscope size={32} strokeWidth={2} />
            <span>Science</span>
          </div>
          <div className="flex items-center gap-2">
            <Music size={32} strokeWidth={2} />
            <span>Music</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
