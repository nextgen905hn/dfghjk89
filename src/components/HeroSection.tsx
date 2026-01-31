import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBiryani from "@/assets/hero-biryani.jpg";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-hero-gradient"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 spice-pattern opacity-30" />

      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 rounded-full bg-gold/20 blur-2xl"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-40 right-20 w-32 h-32 rounded-full bg-saffron/20 blur-3xl"
        animate={{
          y: [0, 20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/20 text-gold mb-6"
            >
              <Star className="w-4 h-4 fill-current" />
              <span className="text-sm font-medium">Authentic Pakistani Cuisine</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight"
            >
              Experience the{" "}
              <span className="text-gold">Soul</span> of{" "}
              <br className="hidden md:block" />
              Pakistani{" "}
              <span className="text-saffron">Flavors</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              From aromatic biryanis to sizzling kebabs, every dish tells a
              story of tradition, passion, and the finest spices from the heart
              of Pakistan.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button variant="hero" size="xl" asChild>
                <a href="#menu">
                  Order Now
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="#about">Our Story</a>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex gap-8 mt-12 justify-center lg:justify-start"
            >
              {[
                { value: "15+", label: "Years of Legacy" },
                { value: "50+", label: "Signature Dishes" },
                { value: "10k+", label: "Happy Customers" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-gold">
                    {stat.value}
                  </div>
                  <div className="text-sm text-primary-foreground/60">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gold/30 rounded-full blur-3xl transform scale-75" />

              {/* Main image */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10"
              >
                <img
                  src={heroBiryani}
                  alt="Signature Biryani"
                  className="w-full max-w-lg mx-auto rounded-3xl shadow-2xl"
                />

                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 }}
                  className="absolute -bottom-4 -left-4 glass rounded-2xl p-4 shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center">
                      <span className="text-2xl">🔥</span>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">
                        Best Seller
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Chicken Biryani
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Rating badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 }}
                  className="absolute -top-4 -right-4 glass rounded-2xl p-4 shadow-xl"
                >
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-gold text-gold"
                        />
                      ))}
                    </div>
                    <span className="font-semibold">4.9</span>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    2,847 Reviews
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-gold/50 flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-3 rounded-full bg-gold" />
        </motion.div>
      </motion.div>
    </section>
  );
}
