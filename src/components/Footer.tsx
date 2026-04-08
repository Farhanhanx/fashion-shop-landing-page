import { motion } from 'framer-motion';
import { ShoppingBag, Heart, Share2, MessageCircle, Star, MapPin, Phone, Mail as MailIcon } from 'lucide-react';

export const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const socialLinks = [
    { icon: Heart, label: 'Facebook' },
    { icon: MessageCircle, label: 'Instagram' },
    { icon: Share2, label: 'Twitter' },
    { icon: Star, label: 'LinkedIn' },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-pink-500 opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500 opacity-5 rounded-full blur-3xl"></div>

      {/* Main Footer Content */}
      <div className="relative px-4 sm:px-6 lg:px-8 py-12 md:py-16 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-orange-400 rounded-lg flex items-center justify-center">
                <ShoppingBag className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
                FashionHub
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Your ultimate destination for trendy fashion and exclusive digital collections.
            </p>
            {/* Social Links */}
            <div className="flex gap-3 pt-4">
              {socialLinks.map(({ icon: Icon, label }) => (
                <motion.a
                  key={label}
                  href="#"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={label}
                  className="w-10 h-10 bg-gradient-to-br from-pink-500 to-orange-400 rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-pink-500/50 transition-shadow"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="font-bold text-lg">Quick Links</h4>
            {['Shop', 'Collections', 'About Us', 'Contact', 'Blog'].map((link) => (
              <motion.a
                key={link}
                href="#"
                whileHover={{ x: 5 }}
                className="block text-gray-400 hover:text-pink-500 transition-colors"
              >
                {link}
              </motion.a>
            ))}
          </motion.div>

          {/* Customer Service */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="font-bold text-lg">Customer Service</h4>
            {['Help Center', 'Track Order', 'Returns', 'FAQ', 'Shipping Info'].map((link) => (
              <motion.a
                key={link}
                href="#"
                whileHover={{ x: 5 }}
                className="block text-gray-400 hover:text-pink-500 transition-colors"
              >
                {link}
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="font-bold text-lg">Contact Us</h4>
            <div className="space-y-3">
              <a href="#" className="flex items-center gap-3 text-gray-400 hover:text-pink-500 transition-colors">
                <MapPin className="w-5 h-5 flex-shrink-0" />
                <span>fashionHub,  Yogyakarta</span>
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-3 text-gray-400 hover:text-pink-500 transition-colors">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>+62 812 xxx xxx</span>
              </a>
              <a href="mailto:hello@fashionhub.com" className="flex items-center gap-3 text-gray-400 hover:text-pink-500 transition-colors">
                <MailIcon className="w-5 h-5 flex-shrink-0" />
                <span>hello@fashionhub.com</span>
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 text-center md:text-left"
        >
          <p className="text-gray-400 text-xs sm:text-sm">
            &copy; 2026 FashionHub. All rights reserved. | Designed ❤️ by Hans Team
          </p>
          <div className="flex gap-4 md:gap-6 flex-wrap justify-center">
            <a href="#" className="text-gray-400 hover:text-pink-500 text-xs sm:text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-pink-500 text-xs sm:text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-pink-500 text-xs sm:text-sm transition-colors">
              Cookie Settings
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-4 sm:bottom-8 right-4 sm:right-8 w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-pink-500 to-orange-400 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-pink-500/50 text-xs sm:text-base"
      >
        ↑
      </motion.button>
    </footer>
  );
};
