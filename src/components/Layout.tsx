
import { useState, createContext, useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@/components/Header';
import Cart from '@/components/Cart';
import { Product } from '@/components/ProductCard';
import { toast } from '@/hooks/use-toast';

interface CartItem extends Product {
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  updateQuantity: (id: number, quantity: number) => void;
  removeFromCart: (id: number) => void;
  cartItemsCount: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

const Layout = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    
    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity === 0) {
      removeFromCart(id);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const removeFromCart = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
    toast({
      title: "Removed from cart",
      description: "Item has been removed from your cart.",
    });
  };

  const cartItemsCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const cartContextValue: CartContextType = {
    cartItems,
    addToCart,
    updateQuantity,
    removeFromCart,
    cartItemsCount,
    isCartOpen,
    setIsCartOpen,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      <div className="min-h-screen bg-gray-50">
        <Header cartItemsCount={cartItemsCount} onCartClick={() => setIsCartOpen(true)} />
        <Outlet />
        <Cart
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          cartItems={cartItems}
          onUpdateQuantity={updateQuantity}
          onRemoveItem={removeFromCart}
        />
      </div>
    </CartContext.Provider>
  );
};

export default Layout;
