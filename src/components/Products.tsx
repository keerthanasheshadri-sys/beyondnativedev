import { useState } from "react";
import { Sparkles, Heart, Zap, Shield, Leaf, Sun, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import productMoringa from "@/assets/product-moringa.jpg";
import productTurmeric from "@/assets/product-turmeric.jpg";
import productArrowroot from "@/assets/product-arrowroot.jpg";
import productPepper from "@/assets/product-pepper.jpg";
import productGinger from "@/assets/product-ginger.jpg";
import productAshwagandha from "@/assets/product-ashwagandha.jpg";
import productMockup from "@/assets/product-mockup.jpg";

interface SKU {
  id: string;
  name: string;
  weight: string;
  packaging: string;
  minOrder: string;
}

interface Product {
  name: string;
  description: string;
  image: string;
  benefits: string[];
  healthBenefits: {
    title: string;
    description: string;
  }[];
  youtubeVideoId: string;
  icon: React.ComponentType<{ className?: string }>;
  origin: string;
  shelfLife: string;
  skus: SKU[];
}

const products: Product[] = [
  {
    name: "Moringa",
    description: "Nutrient-rich superfood packed with vitamins, minerals, and antioxidants. Perfect for health-conscious consumers.",
    image: productMoringa,
    benefits: ["Rich in Antioxidants", "High Protein Content", "Anti-inflammatory"],
    healthBenefits: [
      { title: "Nutrient Powerhouse", description: "Contains 7x more Vitamin C than oranges, 4x more calcium than milk, 4x more Vitamin A than carrots, and 3x more potassium than bananas." },
      { title: "Powerful Antioxidant Protection", description: "Rich in quercetin, chlorogenic acid, and beta-carotene which help combat oxidative stress and protect cells from damage." },
      { title: "Supports Blood Sugar Balance", description: "Studies show moringa may help reduce blood sugar levels and improve insulin sensitivity in diabetic individuals." },
      { title: "Anti-inflammatory Properties", description: "Contains isothiocyanates that help reduce inflammation in the body, supporting joint health and overall wellness." },
      { title: "Boosts Energy & Stamina", description: "High iron content helps combat fatigue and improve oxygen transport throughout the body for sustained energy." },
    ],
    youtubeVideoId: "ViRfLvxdJFg",
    icon: Leaf,
    origin: "Tamil Nadu, India",
    shelfLife: "24 months",
    skus: [
      { id: "MOR-DL", name: "Moringa Dry Leaves", weight: "1kg / 5kg / 25kg", packaging: "PP Bag / Carton", minOrder: "100 kg" },
      { id: "MOR-DLP", name: "Moringa Dry Leaf Powder", weight: "100g / 500g / 1kg / 25kg", packaging: "Pouch / Drum", minOrder: "50 kg" },
      { id: "MOR-SO", name: "Moringa Seed Oil", weight: "100ml / 500ml / 1L / 5L", packaging: "Glass / HDPE Drum", minOrder: "20 L" },
      { id: "MOR-TAB", name: "Moringa Tablets", weight: "60 / 120 / 500 tabs", packaging: "HDPE Bottle", minOrder: "5000 tabs" },
    ],
  },
  {
    name: "Turmeric",
    description: "Premium golden turmeric with high curcumin content. Sourced from organic farms for maximum potency.",
    image: productTurmeric,
    benefits: ["Natural Anti-inflammatory", "Immune Booster", "High Curcumin"],
    healthBenefits: [
      { title: "Powerful Anti-inflammatory", description: "Curcumin is one of nature's most potent anti-inflammatory compounds, matching the effectiveness of some pharmaceutical drugs without side effects." },
      { title: "Brain Health Support", description: "Increases Brain-Derived Neurotrophic Factor (BDNF), supporting cognitive function and potentially delaying age-related brain diseases." },
      { title: "Heart Disease Prevention", description: "Improves endothelial function, helping regulate blood pressure, blood clotting, and various cardiovascular factors." },
      { title: "Natural Pain Relief", description: "Clinical studies show turmeric can be as effective as ibuprofen for reducing joint pain and arthritis symptoms." },
      { title: "Immune System Boost", description: "Powerful antimicrobial and antiviral properties help strengthen the body's natural defense mechanisms." },
    ],
    youtubeVideoId: "s8XD0ydXlZE",
    icon: Sun,
    origin: "Erode, Tamil Nadu",
    shelfLife: "24 months",
    skus: [
      { id: "TUR-FG", name: "Turmeric Fingers", weight: "1kg / 5kg / 25kg", packaging: "Jute Bag / Carton", minOrder: "100 kg" },
      { id: "TUR-PWD", name: "Turmeric Powder", weight: "100g / 500g / 1kg / 25kg", packaging: "Pouch / Drum", minOrder: "50 kg" },
      { id: "TUR-SL", name: "Turmeric Slices", weight: "500g / 1kg / 5kg", packaging: "PP Bag / Carton", minOrder: "25 kg" },
      { id: "TUR-CUR", name: "Curcumin Extract (95%)", weight: "100g / 500g / 1kg", packaging: "Aluminium Container", minOrder: "10 kg" },
    ],
  },
  {
    name: "Arrowroot",
    description: "Pure white arrowroot starch, ideal for gluten-free cooking and as a natural thickening agent.",
    image: productArrowroot,
    benefits: ["Gluten-Free", "Easy to Digest", "Versatile Use"],
    healthBenefits: [
      { title: "Gentle on Digestion", description: "Easily digestible starch that soothes the digestive tract, making it ideal for those with sensitive stomachs or recovering from illness." },
      { title: "Gluten-Free Alternative", description: "Perfect substitute for wheat flour in baking and cooking for those with celiac disease or gluten sensitivity." },
      { title: "Supports Metabolism", description: "Contains B-vitamins including folate, which plays a crucial role in energy metabolism and cell function." },
      { title: "Heart-Healthy", description: "Good source of potassium which helps maintain healthy blood pressure levels and supports cardiovascular function." },
      { title: "Natural Skin Soother", description: "Traditionally used in skincare to absorb moisture and soothe irritated skin, rashes, and minor wounds." },
    ],
    youtubeVideoId: "cjXEGEn7pxk",
    icon: Sparkles,
    origin: "Kerala, India",
    shelfLife: "18 months",
    skus: [
      { id: "ARR-PWD", name: "Arrowroot Powder", weight: "100g / 500g / 1kg / 25kg", packaging: "Pouch / Drum", minOrder: "50 kg" },
      { id: "ARR-STR", name: "Arrowroot Starch (Industrial)", weight: "25kg / 50kg", packaging: "HDPE Drum / Bag", minOrder: "500 kg" },
      { id: "ARR-FLR", name: "Arrowroot Flour (Fine)", weight: "500g / 1kg / 5kg", packaging: "Kraft Bag / Pouch", minOrder: "25 kg" },
      { id: "ARR-CHP", name: "Arrowroot Chips (Dried)", weight: "250g / 500g / 1kg", packaging: "PP Bag", minOrder: "50 kg" },
    ],
  },
  {
    name: "Black Pepper",
    description: "Premium quality black peppercorns, hand-picked and sun-dried for maximum flavor and aroma.",
    image: productPepper,
    benefits: ["Enhances Absorption", "Rich Flavor", "Antioxidant Properties"],
    healthBenefits: [
      { title: "Enhances Nutrient Absorption", description: "Piperine increases absorption of curcumin by up to 2000% and improves bioavailability of many other nutrients and supplements." },
      { title: "Digestive Health", description: "Stimulates digestive enzymes and increases hydrochloric acid secretion, improving digestion and reducing bloating." },
      { title: "Metabolism Booster", description: "Thermogenic properties help increase metabolic rate and support healthy weight management when combined with balanced diet." },
      { title: "Respiratory Support", description: "Traditional remedy for coughs and colds, helping to loosen phlegm and provide relief from congestion." },
      { title: "Antioxidant Protection", description: "Contains piperine and other compounds that neutralize free radicals and protect against cellular damage." },
    ],
    youtubeVideoId: "mG3EtN7PflY",
    icon: Zap,
    origin: "Wayanad, Kerala",
    shelfLife: "36 months",
    skus: [
      { id: "PEP-WH", name: "Black Pepper Whole (Bold)", weight: "100g / 500g / 1kg / 25kg", packaging: "Jute / PP Bag", minOrder: "100 kg" },
      { id: "PEP-MG1", name: "Black Pepper MG1 Grade", weight: "1kg / 5kg / 25kg", packaging: "Jute Bag / Carton", minOrder: "100 kg" },
      { id: "PEP-PWD", name: "Black Pepper Powder", weight: "100g / 500g / 1kg", packaging: "Pouch / Glass Jar", minOrder: "25 kg" },
      { id: "PEP-PIP", name: "Piperine Extract (95%)", weight: "100g / 500g / 1kg", packaging: "Aluminium Container", minOrder: "5 kg" },
    ],
  },
  {
    name: "Ginger",
    description: "Aromatic ginger with intense flavor, perfect for culinary and wellness applications.",
    image: productGinger,
    benefits: ["Digestive Aid", "Anti-nausea", "Warming Properties"],
    healthBenefits: [
      { title: "Natural Nausea Relief", description: "Highly effective against morning sickness, motion sickness, and chemotherapy-induced nausea, backed by numerous clinical studies." },
      { title: "Reduces Muscle Pain", description: "Regular consumption can reduce exercise-induced muscle soreness and pain by up to 25% due to anti-inflammatory gingerols." },
      { title: "Lowers Blood Sugar", description: "Studies show ginger can significantly reduce fasting blood sugar levels and improve long-term blood sugar markers." },
      { title: "Supports Digestive Health", description: "Accelerates gastric emptying, reducing indigestion and bloating while stimulating saliva and bile production." },
      { title: "Cold & Flu Fighter", description: "Warming properties and antimicrobial compounds help fight infections and provide relief from respiratory symptoms." },
    ],
    youtubeVideoId: "7NzLaO2MJQo",
    icon: Heart,
    origin: "Assam, India",
    shelfLife: "18 months",
    skus: [
      { id: "GIN-DRY", name: "Dry Ginger Whole (Cochin)", weight: "500g / 1kg / 5kg / 25kg", packaging: "Jute Bag / Carton", minOrder: "100 kg" },
      { id: "GIN-PWD", name: "Ginger Powder", weight: "100g / 500g / 1kg / 25kg", packaging: "Pouch / Drum", minOrder: "50 kg" },
      { id: "GIN-FLK", name: "Ginger Flakes (Dehydrated)", weight: "250g / 500g / 1kg", packaging: "PP Bag / Carton", minOrder: "25 kg" },
      { id: "GIN-OIL", name: "Ginger Oil (Steam Distilled)", weight: "50ml / 100ml / 500ml / 1L", packaging: "Glass / Aluminium", minOrder: "5 L" },
    ],
  },
  {
    name: "Ashwagandha",
    description: "Ancient Ayurvedic adaptogen root, known for stress relief and vitality enhancement.",
    image: productAshwagandha,
    benefits: ["Stress Relief", "Energy Boost", "Adaptogenic"],
    healthBenefits: [
      { title: "Stress & Anxiety Reduction", description: "Clinically proven to reduce cortisol levels by up to 30%, significantly decreasing stress and anxiety symptoms." },
      { title: "Improves Sleep Quality", description: "Contains triethylene glycol which promotes deeper, more restful sleep and helps those struggling with insomnia." },
      { title: "Boosts Testosterone & Fertility", description: "Studies show significant increases in testosterone, sperm count, and sperm motility in men taking ashwagandha." },
      { title: "Enhances Athletic Performance", description: "Improves VO2 max, strength, and recovery time in athletes, making it popular among fitness enthusiasts." },
      { title: "Cognitive Function Support", description: "Protects nerve cells and may improve memory, reaction time, and ability to perform tasks in healthy adults." },
    ],
    youtubeVideoId: "qHNCTB7sDYs",
    icon: Shield,
    origin: "Madhya Pradesh, India",
    shelfLife: "24 months",
    skus: [
      { id: "ASH-RT", name: "Ashwagandha Root Whole", weight: "500g / 1kg / 5kg / 25kg", packaging: "PP Bag / Carton", minOrder: "50 kg" },
      { id: "ASH-PWD", name: "Ashwagandha Root Powder", weight: "100g / 500g / 1kg / 25kg", packaging: "Pouch / Drum", minOrder: "50 kg" },
      { id: "ASH-EXT", name: "Ashwagandha Extract (5% Withanolides)", weight: "100g / 500g / 1kg", packaging: "Aluminium Container", minOrder: "10 kg" },
      { id: "ASH-TAB", name: "Ashwagandha Tablets (500mg)", weight: "60 / 120 / 500 tabs", packaging: "HDPE Bottle", minOrder: "5000 tabs" },
    ],
  },
];

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

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

                <Button 
                  variant="outline" 
                  className="w-full group/btn"
                  onClick={() => setSelectedProduct(product)}
                >
                  Learn More
                  <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Detail Modal */}
      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
          {selectedProduct && (
            <>
              <DialogHeader>
                <DialogTitle className="font-serif text-3xl text-foreground">
                  {selectedProduct.name}
                </DialogTitle>
                <p className="text-muted-foreground mt-2">{selectedProduct.description}</p>
              </DialogHeader>
              
              {/* Product Image & Basic Info */}
              <div className="grid md:grid-cols-2 gap-8 mt-6">
                <div>
                  <img
                    src={selectedProduct.image}
                    alt={`${selectedProduct.name} packaging`}
                    className="w-full rounded-xl mb-4"
                  />
                  <div className="space-y-3 bg-secondary/30 rounded-xl p-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Origin:</span>
                      <span className="font-medium text-foreground">{selectedProduct.origin}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Shelf Life:</span>
                      <span className="font-medium text-foreground">{selectedProduct.shelfLife}</span>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <h4 className="font-semibold text-foreground mb-2">Key Benefits</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProduct.benefits.map((benefit) => (
                        <span
                          key={benefit}
                          className="text-xs font-medium bg-accent/10 text-accent px-3 py-1 rounded-full"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Detailed Health Benefits */}
                <div>
                  <h4 className="font-serif text-xl font-semibold text-foreground mb-4">
                    Health Benefits of {selectedProduct.name}
                  </h4>
                  <div className="space-y-3">
                    {selectedProduct.healthBenefits.map((benefit, index) => (
                      <div 
                        key={index}
                        className="bg-gradient-to-br from-secondary/50 to-secondary/20 rounded-xl p-4 border border-border/30"
                      >
                        <div className="flex items-start gap-3">
                          <div className="bg-primary/10 rounded-full p-2 mt-0.5">
                            <Heart className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <h5 className="font-medium text-foreground mb-1">{benefit.title}</h5>
                            <p className="text-sm text-muted-foreground">{benefit.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* YouTube Video Section */}
              <div className="mt-8">
                <h4 className="font-serif text-xl font-semibold text-foreground mb-4">
                  Learn More About {selectedProduct.name}
                </h4>
                <div className="aspect-video rounded-xl overflow-hidden bg-secondary/50">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube-nocookie.com/embed/${selectedProduct.youtubeVideoId}?rel=0&modestbranding=1`}
                    title={`${selectedProduct.name} video`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </div>

              {/* SKUs Section */}
              <div className="mt-8">
                <h4 className="font-serif text-xl font-semibold text-foreground mb-4">
                  Available SKUs for Export
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {selectedProduct.skus.map((sku) => (
                    <div
                      key={sku.id}
                      className="bg-secondary/50 rounded-xl p-4 border border-border/50"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <h5 className="font-medium text-foreground">{sku.name}</h5>
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded font-mono">
                          {sku.id}
                        </span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-sm">
                        <div>
                          <span className="text-muted-foreground block text-xs">Weight Options</span>
                          <span className="font-medium text-foreground">{sku.weight}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground block text-xs">Packaging</span>
                          <span className="font-medium text-foreground">{sku.packaging}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground block text-xs">Min. Order</span>
                          <span className="font-medium text-foreground">{sku.minOrder}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <Button 
                  className="w-full mt-6" 
                  variant="accent"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Request Quote for {selectedProduct.name}
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Products;
