import { Users, Handshake, Globe, Heart } from "lucide-react";

const values = [
  {
    icon: Users,
    title: "Dignity for Farmers",
    description: "Building long-term relationships that honor their work and ensure fair compensation.",
  },
  {
    icon: Handshake,
    title: "Transparency in Trade",
    description: "Honest business practices and clear communication from farm to export.",
  },
  {
    icon: Globe,
    title: "Global Excellence",
    description: "Bringing India's finest organic products to the world with pride and precision.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-accent font-medium uppercase tracking-wider text-sm">
              Our Story
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-3 mb-8">
              Rooted in India,
              <br />
              <span className="text-primary">Growing Globally</span>
            </h2>
            
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                We're a group of tech minds, logistics experts, and everyday dreamers who believe 
                India's richest treasures aren't just found in markets, they're grown in our soil.
              </p>
              <p>
                Our journey began with a simple idea: farmers should thrive and the world deserves 
                to experience the purity, flavour, and strength of India's organic heritage.
              </p>
              <p>
                We blend innovation with intention using technology to open global doors, and using 
                heart to build long-term relationships with the farmers who make it all possible.
              </p>
              <p>
                From nurturing sustainable farming practices to ensuring every product travels safely 
                from village fields to international shelves, we are committed to creating a supply 
                chain that honours both people and the planet.
              </p>
            </div>
          </div>

          {/* Right - Values Cards */}
          <div className="space-y-6">
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-primary/10 rounded-full p-3">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground">
                  At Our Core
                </h3>
              </div>
              <p className="text-muted-foreground text-lg mb-8">
                We stand for three things that guide everything we do:
              </p>
              
              <div className="space-y-6">
                {values.map((value, index) => (
                  <div
                    key={value.title}
                    className="flex gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
                  >
                    <div className="flex-shrink-0 bg-accent/10 rounded-lg p-3">
                      <value.icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        {value.title}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { number: "25+", label: "Countries" },
                { number: "500+", label: "Tons Exported" },
                { number: "100+", label: "Happy Clients" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-primary text-primary-foreground rounded-xl p-6 text-center"
                >
                  <div className="font-serif text-3xl font-bold mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-primary-foreground/80">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
