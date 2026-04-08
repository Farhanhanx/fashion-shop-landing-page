import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 pt-24 overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="relative w-full px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
          >
            {/* Left Content */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Badge */}
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-100 to-orange-100 px-6 py-3 rounded-full"
              >
                <Sparkles className="w-5 h-5 text-orange-500" />
                <span className="font-semibold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
                  New Collection 2024
                </span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight">
                <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                  Elevate Your
                </span>
                <br />
                <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                  Fashion Game
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p variants={itemVariants} className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-lg">
                Discover the latest trends in digital fashion. Shop exclusive collections from top designers and express your unique style with our curated selection.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
                <button className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-pink-500 to-orange-400 text-white rounded-full font-bold flex items-center justify-center sm:justify-start gap-2 hover:shadow-lg transform hover:scale-105 transition-all text-sm sm:text-base">
                  Shop Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-gray-300 text-gray-700 rounded-full font-bold text-sm sm:text-base hover:border-pink-500 hover:text-pink-500 transition-colors">
                  Explore Catalog
                </button>
              </motion.div>

              {/* Stats */}
              <motion.div variants={itemVariants} className="grid grid-cols-3 gap-3 sm:gap-4 pt-6 sm:pt-8">
                <div className="bg-white bg-opacity-80 p-3 sm:p-4 rounded-xl text-center">
                  <p className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">5K+</p>
                  <p className="text-xs sm:text-sm text-gray-600">Premium Items</p>
                </div>
                <div className="bg-white bg-opacity-80 p-3 sm:p-4 rounded-xl text-center">
                  <p className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent">50K+</p>
                  <p className="text-xs sm:text-sm text-gray-600">Happy Customers</p>
                </div>
                <div className="bg-white bg-opacity-80 p-3 sm:p-4 rounded-xl text-center">
                  <p className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-500 to-purple-400 bg-clip-text text-transparent">24/7</p>
                  <p className="text-xs sm:text-sm text-gray-600">Support</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <div className="relative w-full aspect-square">
                {/* Floating Card Animation */}
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute inset-0 bg-gradient-to-br from-pink-400 via-purple-400 to-cyan-400 rounded-3xl opacity-80 flex items-center justify-center text-white text-center p-8"
                >
                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold">Summer Collection</h3>
                    <p className="text-lg">Limited Edition</p>
                    <p className="text-4xl font-black">50% OFF</p>
                  </div>
                </motion.div>

                {/* Decorator Elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-8 -right-8 w-20 h-20 bg-orange-300 rounded-full opacity-60"
                ></motion.div>
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute -bottom-8 -left-8 w-24 h-24 bg-cyan-300 rounded-full opacity-60"
                ></motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};
