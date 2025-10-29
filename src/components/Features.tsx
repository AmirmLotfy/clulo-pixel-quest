import { Search, Bot, Trophy } from "lucide-react";

const Features = () => {
  const features = [
    {
      Icon: Search,
      title: "Daily Mysteries",
      description: "New Knulo challenge every day",
      details: ["Movies, history, geography, science, music", "5 progressive clunos from hard to easy"],
    },
    {
      Icon: Bot,
      title: "Knowlo-Powered Hints",
      description: "Hot/cold feedback on every guess",
      details: ["Smart AI similarity scoring", "Learnu something new with every clue"],
    },
    {
      Icon: Trophy,
      title: "Community Play",
      description: "Compete on leaderboards",
      details: ["Unlock bonus clunos together", "Earn badges and streaks"],
    },
  ];

  return (
    <section id="features" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-pixel text-center text-primary mb-16 animate-slide-up">
          How Clulo Works
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-background pixel-border pixel-box-sm p-8 hover:translate-y-[-8px] transition-transform duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6 flex justify-center">
                <feature.Icon className="text-primary" size={64} strokeWidth={3} />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-pixel text-foreground mb-3 text-center leading-tight">
                {feature.title}
              </h3>
              
              <p className="text-xl font-body text-primary mb-4 text-center">
                {feature.description}
              </p>
              
              <ul className="space-y-2">
                {feature.details.map((detail, idx) => (
                  <li key={idx} className="text-lg font-body text-foreground/80 flex items-start gap-2">
                    <span className="text-accent mt-1">▶</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
