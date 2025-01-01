import { AppBar, Toolbar, IconButton } from '@mui/material';
import { ShoppingBag, Menu } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '../contexts/ThemeContext';
import { useCart } from '../hooks/useCart';
import { useState } from 'react';
import CartDrawer from './CartDrawer';

export default function Navbar() {
  const { mode } = useTheme();
  const { cart } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const isLight = mode === 'light';

  return (
    <>
      <AppBar 
        position="fixed" 
        className={`${
          isLight ? 'bg-white/80' : 'bg-gray-900/80'
        } backdrop-blur-sm border-b ${
          isLight ? 'border-gray-200' : 'border-gray-800'
        }`}
      >
        <Toolbar className="container mx-auto">
          <div className="flex items-center gap-2">
            <IconButton className="md:hidden">
              <Menu className="w-5 h-5" />
            </IconButton>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              ShopHub
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-6 mx-8">
            <a href="#" className="text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400">
              Home
            </a>
            <a href="#" className="text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400">
              Products
            </a>
            <a href="#" className="text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400">
              Categories
            </a>
            <a href="#" className="text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400">
              About
            </a>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <ThemeToggle />
            <IconButton 
              onClick={() => setIsCartOpen(true)}
              className="relative"
            >
              <ShoppingBag className="w-5 h-5" />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}