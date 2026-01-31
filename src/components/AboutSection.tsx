import { motion } from "framer-motion";
import { ChefHat, Award, Clock, Heart } from "lucide-react";
import dishKarahi from "@/assets/dish-karahi.jpg";

const features = [
  {
    icon: ChefHat,
    title: "Master Chefs",
    description: "Our chefs bring decades of experience from Pakistan's finest kitchens.",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "We source only the finest ingredients and authentic spices.",
  },
  {
    icon: Clock,
    title: "Fresh Daily",
    description: "Every dish is prepared fresh to order with love and care.",
  },
  {
    icon: Heart,
    title: "Family Recipe",
    description: "Traditional recipes passed down through generations.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              <img
                src={dishKarahi}
                alt="Our signature dish"
                className="rounded-3xl shadow-2xl w-full"
              />

              {/* Experience badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl"
              >
                <div className="text-4xl font-bold font-display">15+</div>
                <div className="text-sm opacity-80">Years of Excellence</div>
              </motion.div>
            </div>

            {/* Decorative element */}
            <div className="absolute -z-10 top-10 -left-10 w-64 h-64 bg-gold/20 rounded-full blur-3xl" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold font-medium text-sm uppercase tracking-wider">
              Our Story
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">
              A Journey of <span className="text-primary">Flavors</span>
            </h2>

            <p className="text-muted-foreground mb-6 text-lg">
              Founded in 2010, Zaika began with a simple dream: to bring the
              authentic taste of Pakistani cuisine to food lovers everywhere.
              Our name, meaning "flavor" in Urdu, represents our commitment to
              creating dishes that capture the essence of Pakistan's rich
              culinary heritage.
            </p>

            <p className="text-muted-foreground mb-8">
              Every dish at Zaika tells a story—from the aromatic biryanis that
              echo the royal kitchens of Lucknow to the fiery karahis that
              originated in the bustling streets of Lahore. We use traditional
              cooking methods and the finest spices to ensure every bite
              transports you to the heart of Pakistan.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
