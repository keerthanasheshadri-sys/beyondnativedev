import { ArrowRight, Leaf, Globe, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Organic farm fields"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest/85 via-forest/75 to-forest/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-6 py-2 mb-8 animate-fade-up">
          <Leaf className="h-4 w-4 text-primary-foreground" />
          <span className="text-sm font-medium text-primary-foreground">
            Premium Indian Agricultural Exports
          </span>
        </div>

        {/* Heading */}
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          India's Goodness,
          <br />
          <span className="text-accent">Shared With the World</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Beyond Native brings you premium moringa, turmeric, and organic superfoods—sourced 
          from India's heartland and exported to discerning buyers worldwide.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <Button variant="hero" size="xl" className="group">
            Explore Products
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="heroOutline" size="xl">
            <Globe className="h-5 w-5" />
            Contact Us
          </Button>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-8 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          {[
            { icon: Leaf, text: "100% Natural" },
            { icon: Award, text: "Premium Quality" },
            { icon: Globe, text: "Global Standards" },
          ].map((badge, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-primary-foreground/80"
            >
              <badge.icon className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium">{badge.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
