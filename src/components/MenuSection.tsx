import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Flame, Plus, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { categories, menuItems } from "@/data/menuData";
import { useCart } from "@/context/CartContext";
import { MenuItem } from "@/types/menu";

function SpiceLevel({ level }: { level: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3].map((i) => (
        <Flame
          key={i}
          className={`w-3.5 h-3.5 ${
            i <= level ? "text-spice fill-spice" : "text-muted-foreground/30"
          }`}
        />
      ))}
    </div>
  );
}

function MenuCard({ item }: { item: MenuItem }) {
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    addToCart(item);
    setTimeout(() => setIsAdding(false), 300);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -8 }}
      className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-border"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {item.isPopular && (
            <span className="px-2 py-1 bg-gold text-foreground text-xs font-semibold rounded-full">
              Popular
            </span>
          )}
          {item.isVegetarian && (
            <span className="px-2 py-1 bg-green-500 text-white text-xs font-semibold rounded-full flex items-center gap-1">
              <Leaf className="w-3 h-3" /> Veg
            </span>
          )}
        </div>

        {/* Price */}
        <div className="absolute bottom-3 right-3">
          <span className="px-3 py-1.5 bg-primary text-primary-foreground font-bold rounded-lg text-lg">
            Rs. {item.price}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-display text-xl font-semibold text-foreground">
            {item.name}
          </h3>
          <SpiceLevel level={item.spiceLevel} />
        </div>

        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {item.description}
        </p>

        <motion.div whileTap={{ scale: 0.95 }}>
          <Button
            variant="spice"
            className="w-full"
            onClick={handleAddToCart}
          >
            <motion.span
              animate={{ scale: isAdding ? [1, 1.2, 1] : 1 }}
              transition={{ duration: 0.3 }}
            >
              <Plus className="w-4 h-4" />
            </motion.span>
            Add to Cart
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems =
    activeCategory === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-warm-gradient">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-gold font-medium text-sm uppercase tracking-wider">
            Our Menu
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            Taste the <span className="text-primary">Tradition</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Each dish is crafted with authentic recipes passed down through
            generations, using the finest spices imported from Pakistan.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className="rounded-full"
            >
              {category.name}
            </Button>
          ))}
        </motion.div>

        {/* Menu Grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
