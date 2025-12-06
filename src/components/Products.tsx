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
  icon: React.ComponentType<{ className?: string }>;
  origin: string;
  shelfLife: string;
  skus: SKU[];
}

const products: Product[] = [
  {
    name: "Moringa Powder",
    description: "Nutrient-rich superfood packed with vitamins, minerals, and antioxidants. Perfect for health-conscious consumers.",
    image: productMoringa,
    benefits: ["Rich in Antioxidants", "High Protein Content", "Anti-inflammatory"],
    icon: Leaf,
    origin: "Tamil Nadu, India",
    shelfLife: "24 months",
    skus: [
      { id: "MOR-100", name: "Moringa Powder - Retail Pack", weight: "100g", packaging: "Stand-up Pouch", minOrder: "500 units" },
      { id: "MOR-250", name: "Moringa Powder - Family Pack", weight: "250g", packaging: "Stand-up Pouch", minOrder: "300 units" },
      { id: "MOR-500", name: "Moringa Powder - Value Pack", weight: "500g", packaging: "Glass Jar", minOrder: "200 units" },
      { id: "MOR-BULK", name: "Moringa Powder - Bulk", weight: "25kg", packaging: "Food-grade Drum", minOrder: "10 units" },
    ],
  },
  {
    name: "Turmeric Powder",
    description: "Premium golden turmeric with high curcumin content. Sourced from organic farms for maximum potency.",
    image: productTurmeric,
    benefits: ["Natural Anti-inflammatory", "Immune Booster", "High Curcumin"],
    icon: Sun,
    origin: "Erode, Tamil Nadu",
    shelfLife: "24 months",
    skus: [
      { id: "TUR-100", name: "Turmeric Powder - Retail Pack", weight: "100g", packaging: "Stand-up Pouch", minOrder: "500 units" },
      { id: "TUR-250", name: "Turmeric Powder - Family Pack", weight: "250g", packaging: "Stand-up Pouch", minOrder: "300 units" },
      { id: "TUR-500", name: "Turmeric Powder - Premium Jar", weight: "500g", packaging: "Glass Jar", minOrder: "200 units" },
      { id: "TUR-BULK", name: "Turmeric Powder - Bulk", weight: "25kg", packaging: "Food-grade Drum", minOrder: "10 units" },
    ],
  },
  {
    name: "Arrowroot Powder",
    description: "Pure white arrowroot starch, ideal for gluten-free cooking and as a natural thickening agent.",
    image: productArrowroot,
    benefits: ["Gluten-Free", "Easy to Digest", "Versatile Use"],
    icon: Sparkles,
    origin: "Kerala, India",
    shelfLife: "18 months",
    skus: [
      { id: "ARR-100", name: "Arrowroot Powder - Retail Pack", weight: "100g", packaging: "Stand-up Pouch", minOrder: "500 units" },
      { id: "ARR-250", name: "Arrowroot Powder - Family Pack", weight: "250g", packaging: "Stand-up Pouch", minOrder: "300 units" },
      { id: "ARR-500", name: "Arrowroot Powder - Bulk Pack", weight: "500g", packaging: "Kraft Paper Bag", minOrder: "200 units" },
      { id: "ARR-BULK", name: "Arrowroot Powder - Bulk", weight: "20kg", packaging: "Food-grade Drum", minOrder: "15 units" },
    ],
  },
  {
    name: "Black Pepper",
    description: "Premium quality black peppercorns, hand-picked and sun-dried for maximum flavor and aroma.",
    image: productPepper,
    benefits: ["Enhances Absorption", "Rich Flavor", "Antioxidant Properties"],
    icon: Zap,
    origin: "Wayanad, Kerala",
    shelfLife: "36 months",
    skus: [
      { id: "PEP-50", name: "Black Pepper - Retail Pack", weight: "50g", packaging: "Glass Jar", minOrder: "500 units" },
      { id: "PEP-100", name: "Black Pepper - Family Pack", weight: "100g", packaging: "Stand-up Pouch", minOrder: "400 units" },
      { id: "PEP-250", name: "Black Pepper - Premium Jar", weight: "250g", packaging: "Glass Jar", minOrder: "200 units" },
      { id: "PEP-BULK", name: "Black Pepper - Bulk", weight: "25kg", packaging: "Jute Bag", minOrder: "20 units" },
    ],
  },
  {
    name: "Ginger Powder",
    description: "Aromatic ginger powder with intense flavor, perfect for culinary and wellness applications.",
    image: productGinger,
    benefits: ["Digestive Aid", "Anti-nausea", "Warming Properties"],
    icon: Heart,
    origin: "Assam, India",
    shelfLife: "18 months",
    skus: [
      { id: "GIN-100", name: "Ginger Powder - Retail Pack", weight: "100g", packaging: "Stand-up Pouch", minOrder: "500 units" },
      { id: "GIN-250", name: "Ginger Powder - Family Pack", weight: "250g", packaging: "Stand-up Pouch", minOrder: "300 units" },
      { id: "GIN-500", name: "Ginger Powder - Value Pack", weight: "500g", packaging: "Glass Jar", minOrder: "200 units" },
      { id: "GIN-BULK", name: "Ginger Powder - Bulk", weight: "20kg", packaging: "Food-grade Drum", minOrder: "10 units" },
    ],
  },
  {
    name: "Ashwagandha",
    description: "Ancient Ayurvedic adaptogen root powder, known for stress relief and vitality enhancement.",
    image: productAshwagandha,
    benefits: ["Stress Relief", "Energy Boost", "Adaptogenic"],
    icon: Shield,
    origin: "Madhya Pradesh, India",
    shelfLife: "24 months",
    skus: [
      { id: "ASH-100", name: "Ashwagandha Powder - Retail Pack", weight: "100g", packaging: "Stand-up Pouch", minOrder: "500 units" },
      { id: "ASH-250", name: "Ashwagandha Powder - Family Pack", weight: "250g", packaging: "Stand-up Pouch", minOrder: "300 units" },
      { id: "ASH-500", name: "Ashwagandha Powder - Premium Jar", weight: "500g", packaging: "Glass Jar", minOrder: "150 units" },
      { id: "ASH-BULK", name: "Ashwagandha Powder - Bulk", weight: "25kg", packaging: "Food-grade Drum", minOrder: "10 units" },
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
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedProduct && (
            <>
              <DialogHeader>
                <DialogTitle className="font-serif text-3xl text-foreground">
                  {selectedProduct.name}
                </DialogTitle>
              </DialogHeader>
              
              <div className="grid md:grid-cols-2 gap-8 mt-4">
                {/* Product Image & Info */}
                <div>
                  <img
                    src={selectedProduct.image}
                    alt={`${selectedProduct.name} packaging`}
                    className="w-full rounded-xl mb-4"
                  />
                  <div className="space-y-3">
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

                {/* SKUs */}
                <div>
                  <h4 className="font-semibold text-foreground mb-4">Available SKUs</h4>
                  <div className="space-y-3">
                    {selectedProduct.skus.map((sku) => (
                      <div
                        key={sku.id}
                        className="bg-secondary/50 rounded-xl p-4 border border-border/50"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h5 className="font-medium text-foreground">{sku.name}</h5>
                          <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                            {sku.id}
                          </span>
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-sm">
                          <div>
                            <span className="text-muted-foreground block">Weight</span>
                            <span className="font-medium text-foreground">{sku.weight}</span>
                          </div>
                          <div>
                            <span className="text-muted-foreground block">Packaging</span>
                            <span className="font-medium text-foreground">{sku.packaging}</span>
                          </div>
                          <div>
                            <span className="text-muted-foreground block">Min. Order</span>
                            <span className="font-medium text-foreground">{sku.minOrder}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <Button className="w-full mt-6" variant="accent">
                    Request Quote
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Products;
