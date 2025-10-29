import { Gamepad2, BookOpen } from "lucide-react";
import cluloLogo from "@/assets/clulo-logo.svg";
import { useState, useRef, useEffect } from "react";


const Hero = () => {
  const [isPlayful, setIsPlayful] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const catRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (catRef.current) {
        const rect = catRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const angleX = (e.clientY - centerY) / 50;
        const angleY = (e.clientX - centerX) / 50;
        
        setRotation({ x: -angleX, y: angleY });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleCatClick = () => {
    setIsPlayful(true);
    setTimeout(() => setIsPlayful(false), 600);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pixel-clouds overflow-hidden">
      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        <div className="animate-bounce-in">
          <div 
            ref={catRef}
            className="mb-6 flex justify-center items-center perspective-1000"
            onClick={handleCatClick}
            onTouchStart={handleCatClick}
          >
            <img 
              src={cluloLogo} 
              alt="Clulo Logo - 8-bit character mascot" 
              className={`w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 cursor-pointer transition-all duration-300 select-none
                ${isPlayful ? 'animate-cat-bounce' : 'animate-cat-wiggle hover:animate-cat-purr'}`}
              style={{
                transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                transformStyle: 'preserve-3d'
              }}
              draggable="false"
            />
          </div>
          
          <p className="text-3xl md:text-4xl lg:text-5xl font-body text-foreground mb-4 max-w-4xl mx-auto leading-tight">
            Level Up Your Knowlo,<br />One Cluno at a Time
          </p>
          
          <p className="text-2xl md:text-3xl font-body text-foreground/80 mb-12 max-w-2xl mx-auto">
            The #1 daily mystery game for Reddit — Easy to Learnu, Impossible to Quit
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-2xl mx-auto">
            <a
              href="https://www.reddit.com/r/hiclulo_dev/comments/1oj3rc7/daily_mystery_can_you_solve_it/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-pixel text-xl px-8 py-6 pixel-border pixel-box bounce-hover inline-flex items-center gap-3 w-full sm:w-auto justify-center"
            >
              <Gamepad2 size={24} strokeWidth={3} />
              <span>Play on Reddit</span>
            </a>
            
            <a
              href="#features"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-pixel text-xl px-8 py-6 pixel-border pixel-box bounce-hover inline-flex items-center gap-3 w-full sm:w-auto justify-center"
            >
              <BookOpen size={24} strokeWidth={3} />
              <span>How It Works</span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Pixel decoration elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-success border-t-4 border-foreground" style={{
        backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 30px, hsl(var(--foreground)) 30px, hsl(var(--foreground)) 34px)'
      }} />
    </section>
  );
};

export default Hero;
