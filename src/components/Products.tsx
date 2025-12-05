import { Sparkles, Heart, Zap, Shield, Leaf, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import productMoringa from "@/assets/product-moringa.jpg";
import productTurmeric from "@/assets/product-turmeric.jpg";
import productArrowroot from "@/assets/product-arrowroot.jpg";
import productPepper from "@/assets/product-pepper.jpg";
import productGinger from "@/assets/product-ginger.jpg";
import productAshwagandha from "@/assets/product-ashwagandha.jpg";

const products = [
  {
    name: "Moringa Powder",
    description: "Nutrient-rich superfood packed with vitamins, minerals, and antioxidants. Perfect for health-conscious consumers.",
    image: productMoringa,
    benefits: ["Rich in Antioxidants", "High Protein Content", "Anti-inflammatory"],
    icon: Leaf,
  },
  {
    name: "Turmeric Powder",
    description: "Premium golden turmeric with high curcumin content. Sourced from organic farms for maximum potency.",
    image: productTurmeric,
    benefits: ["Natural Anti-inflammatory", "Immune Booster", "High Curcumin"],
    icon: Sun,
  },
  {
    name: "Arrowroot Powder",
    description: "Pure white arrowroot starch, ideal for gluten-free cooking and as a natural thickening agent.",
    image: productArrowroot,
    benefits: ["Gluten-Free", "Easy to Digest", "Versatile Use"],
    icon: Sparkles,
  },
  {
    name: "Black Pepper",
    description: "Premium quality black peppercorns, hand-picked and sun-dried for maximum flavor and aroma.",
    image: productPepper,
    benefits: ["Enhances Absorption", "Rich Flavor", "Antioxidant Properties"],
    icon: Zap,
  },
  {
    name: "Ginger Powder",
    description: "Aromatic ginger powder with intense flavor, perfect for culinary and wellness applications.",
    image: productGinger,
    benefits: ["Digestive Aid", "Anti-nausea", "Warming Properties"],
    icon: Heart,
  },
  {
    name: "Ashwagandha",
    description: "Ancient Ayurvedic adaptogen root powder, known for stress relief and vitality enhancement.",
    image: productAshwagandha,
    benefits: ["Stress Relief", "Energy Boost", "Adaptogenic"],
    icon: Shield,
  },
];

const Products = () => {
  return (
    <section id="products" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-medium uppercase tracking-wider text-sm">
            Our Products
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
            Premium Organic Products
          </h2>
          <p className="text-muted-foreground text-lg">
            Handpicked from India's finest farms, processed with care, and exported with excellence.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.name}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-full p-2">
                  <product.icon className="h-5 w-5 text-primary" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
                  {product.name}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {product.description}
                </p>
                
                {/* Benefits */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.benefits.map((benefit) => (
                    <span
                      key={benefit}
                      className="text-xs font-medium bg-secondary text-secondary-foreground px-3 py-1 rounded-full"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>

                <Button variant="outline" className="w-full group/btn">
                  Learn More
                  <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
