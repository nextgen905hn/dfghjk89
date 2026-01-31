import { MenuItem, Category } from "@/types/menu";

import dishKarahi from "@/assets/dish-karahi.jpg";
import dishKebab from "@/assets/dish-kebab.jpg";
import dishNihari from "@/assets/dish-nihari.jpg";
import dishHaleem from "@/assets/dish-haleem.jpg";
import dishTikka from "@/assets/dish-tikka.jpg";
import heroBiryani from "@/assets/hero-biryani.jpg";

export const categories: Category[] = [
  { id: "all", name: "All Items", description: "Browse our complete menu" },
  { id: "biryani", name: "Biryani", description: "Aromatic rice dishes" },
  { id: "karahi", name: "Karahi", description: "Wok-cooked specialties" },
  { id: "kebab", name: "Kebabs", description: "Grilled perfection" },
  { id: "curries", name: "Curries", description: "Rich, flavorful stews" },
];

export const menuItems: MenuItem[] = [
  {
    id: "1",
    name: "Chicken Biryani",
    description: "Aromatic basmati rice layered with tender chicken, saffron, and traditional spices. Slow-cooked to perfection.",
    price: 1299,
    category: "biryani",
    image: heroBiryani,
    spiceLevel: 2,
    isPopular: true,
  },
  {
    id: "2",
    name: "Mutton Biryani",
    description: "Succulent mutton pieces with fragrant long-grain rice, caramelized onions, and aromatic spices.",
    price: 1599,
    category: "biryani",
    image: heroBiryani,
    spiceLevel: 2,
    isPopular: true,
  },
  {
    id: "3",
    name: "Chicken Karahi",
    description: "Wok-fried chicken in a rich tomato and ginger gravy, garnished with fresh coriander and green chilies.",
    price: 1199,
    category: "karahi",
    image: dishKarahi,
    spiceLevel: 3,
    isPopular: true,
  },
  {
    id: "4",
    name: "Mutton Karahi",
    description: "Tender mutton cooked in a traditional iron karahi with tomatoes, green peppers, and aromatic spices.",
    price: 1499,
    category: "karahi",
    image: dishKarahi,
    spiceLevel: 3,
  },
  {
    id: "5",
    name: "Seekh Kebab",
    description: "Minced beef skewers seasoned with herbs and spices, charcoal grilled to perfection.",
    price: 899,
    category: "kebab",
    image: dishKebab,
    spiceLevel: 2,
    isPopular: true,
  },
  {
    id: "6",
    name: "Chicken Tikka",
    description: "Boneless chicken marinated in yogurt and spices, cooked in traditional clay oven.",
    price: 799,
    category: "kebab",
    image: dishTikka,
    spiceLevel: 2,
  },
  {
    id: "7",
    name: "Beef Nihari",
    description: "Slow-cooked beef stew simmered overnight with bone marrow and traditional spices. A Lahori specialty.",
    price: 1399,
    category: "curries",
    image: dishNihari,
    spiceLevel: 2,
    isPopular: true,
  },
  {
    id: "8",
    name: "Haleem",
    description: "Rich and hearty stew of meat, lentils, and wheat, slow-cooked and garnished with fried onions.",
    price: 999,
    category: "curries",
    image: dishHaleem,
    spiceLevel: 1,
    isVegetarian: false,
  },
];
