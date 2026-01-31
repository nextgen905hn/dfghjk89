export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  spiceLevel: 1 | 2 | 3;
  isPopular?: boolean;
  isVegetarian?: boolean;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface Category {
  id: string;
  name: string;
  description: string;
}
