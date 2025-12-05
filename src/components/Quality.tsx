import { Award, Leaf, Shield, Recycle, Search, Package, Truck } from "lucide-react";

const certifications = [
  { icon: Award, title: "ISO Certified", description: "International quality standards compliance" },
  { icon: Leaf, title: "Organic Certified", description: "100% organic farming practices" },
  { icon: Shield, title: "FSSAI Approved", description: "Food safety and quality assured" },
  { icon: Recycle, title: "Sustainable", description: "Eco-friendly production methods" },
];

const process = [
  { step: 1, icon: Leaf, title: "Careful Sourcing", description: "We partner with certified organic farms that follow sustainable practices." },
  { step: 2, icon: Search, title: "Rigorous Testing", description: "Every batch undergoes multiple quality checks and laboratory testing." },
  { step: 3, icon: Package, title: "Secure Packaging", description: "Hygienic packaging that preserves freshness and meets export standards." },
  { step: 4, icon: Truck, title: "Global Delivery", description: "Reliable shipping to ensure products reach you in perfect condition." },
];

const Quality = () => {
  return (
    <section id="quality" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-medium uppercase tracking-wider text-sm">
            Quality Assurance
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
            Excellence from Farm to Export
          </h2>
          <p className="text-muted-foreground text-lg">
            We maintain the highest standards from farm to export, ensuring every shipment meets global quality benchmarks.
          </p>
        </div>

        {/* Certifications */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              className="bg-card rounded-2xl p-6 text-center shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 border border-border/50"
            >
              <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <cert.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                {cert.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {cert.description}
              </p>
            </div>
          ))}
        </div>

        {/* Process */}
        <div className="bg-primary rounded-3xl p-8 md:p-12 text-primary-foreground">
          <h3 className="font-serif text-3xl font-bold text-center mb-12">
            Our Quality Process
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={item.title} className="relative">
                {/* Connector Line (hidden on mobile and last item) */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-primary-foreground/20" />
                )}
                
                <div className="relative z-10 text-center">
                  {/* Step Number */}
                  <div className="bg-accent text-accent-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl shadow-elevated">
                    {item.step}
                  </div>
                  
                  <div className="bg-primary-foreground/10 rounded-full p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                    <item.icon className="h-6 w-6" />
                  </div>
                  
                  <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                  <p className="text-primary-foreground/80 text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quality;
