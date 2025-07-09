
import { ShoppingCart, Leaf, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  cartItemsCount: number;
  onCartClick: () => void;
}

const Header = ({ cartItemsCount, onCartClick }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-red-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-red-200" />
            <h1 className="text-2xl font-bold">IndoAmerican Farm</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link 
              to="/" 
              className={`hover:text-red-200 transition-colors ${isActive('/') ? 'text-red-200' : ''}`}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className={`hover:text-red-200 transition-colors ${isActive('/products') ? 'text-red-200' : ''}`}
            >
              Products
            </Link>
            <Link 
              to="/about" 
              className={`hover:text-red-200 transition-colors ${isActive('/about') ? 'text-red-200' : ''}`}
            >
              About
            </Link>
            <a href="#" className="hover:text-red-200 transition-colors">Contact</a>
          </nav>

          {/* Cart and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="relative text-white hover:bg-red-700"
              onClick={onCartClick}
            >
              <ShoppingCart className="h-5 w-5" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs h-5 w-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-white hover:bg-red-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-red-500 pt-4">
            <div className="flex flex-col space-y-2">
              <Link 
                to="/" 
                className={`hover:text-red-200 transition-colors py-2 ${isActive('/') ? 'text-red-200' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/products" 
                className={`hover:text-red-200 transition-colors py-2 ${isActive('/products') ? 'text-red-200' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link 
                to="/about" 
                className={`hover:text-red-200 transition-colors py-2 ${isActive('/about') ? 'text-red-200' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <a href="#" className="hover:text-red-200 transition-colors py-2">Contact</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
