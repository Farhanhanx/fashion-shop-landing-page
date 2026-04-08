import { useState } from 'react';
import { Menu, X, ShoppingBag, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ['Home', 'Shop', 'Collections', 'About', 'Contact'];

  return (
    <nav className="fixed w-full top-0 z-50 bg-gradient-to-r from-white via-pink-50 to-blue-50 shadow-lg">
      <div className="px-3 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-orange-400 rounded-lg flex items-center justify-center">
              <ShoppingBag className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 via-orange-400 to-cyan-400 bg-clip-text text-transparent">
              FashionHub
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-gray-700 hover:text-pink-500 font-medium transition-colors"
              >
                {item}
              </motion.a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button className="hidden sm:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-orange-400 text-white rounded-full hover:shadow-lg transition-shadow">
              <Heart className="w-4 h-4" />
              <span className="text-sm">Wishlist</span>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-4 border-t border-gray-200"
          >
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-2 text-gray-700 hover:text-pink-500 font-medium"
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
};
