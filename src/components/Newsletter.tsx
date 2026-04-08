import { motion } from 'framer-motion';
import { Mail, Send, Check } from 'lucide-react';

export const Newsletter = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-pink-500 via-orange-400 to-cyan-400 relative overflow-hidden">
      {/* Animated Background */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-10 right-10 w-40 h-40 bg-white bg-opacity-10 rounded-full blur-2xl"
      ></motion.div>
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-20 -left-20 w-60 h-60 bg-white bg-opacity-10 rounded-full blur-2xl"
      ></motion.div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-3xl md:text-4xl font-black mb-4 leading-tight">
              Stay Updated with <br />Latest Trends
            </h2>
            <p className="text-white text-opacity-90 text-base leading-relaxed">
              Subscribe to our newsletter and get exclusive deals, early access, new collections, and fashion tips delivered to your inbox.
            </p>
          </motion.div>

          {/* Center - Newsletter Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <form
              onSubmit={(e) => e.preventDefault()}
              className="w-full max-w-sm"
            >
              <div className="flex flex-col gap-4">
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white w-5 h-5" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 pl-12 py-3 sm:py-4 rounded-full focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50 bg-white bg-opacity-20 text-white placeholder-white placeholder-opacity-70 backdrop-blur-sm font-semibold"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="bg-white text-orange-500 px-8 py-3 sm:py-4 rounded-full font-black flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-white/50 transition-all text-sm sm:text-base"
                >
                  Subscribe
                  <Send className="w-5 h-5" />
                </motion.button>
              </div>
            </form>
          </motion.div>

          {/* Right Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-3 text-white md:text-right"
          >
            <div className="flex items-center gap-3 md:justify-end rounded-full bg-white/15 px-4 py-3 backdrop-blur-sm border border-white/20">
              <Check className="w-5 h-5 flex-shrink-0 bg-white text-orange-500 rounded-full p-0.5" />
              <span className="font-semibold">Exclusive fashion deals</span>
            </div>
            <div className="flex items-center gap-3 md:justify-end rounded-full bg-white/15 px-4 py-3 backdrop-blur-sm border border-white/20">
              <Check className="w-5 h-5 flex-shrink-0 bg-white text-orange-500 rounded-full p-0.5" />
              <span className="font-semibold">Early access to new drops</span>
            </div>
            <div className="flex items-center gap-3 md:justify-end rounded-full bg-white/15 px-4 py-3 backdrop-blur-sm border border-white/20">
              <Check className="w-5 h-5 flex-shrink-0 bg-white text-orange-500 rounded-full p-0.5" />
              <span className="font-semibold">Free shipping tips & offers</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
