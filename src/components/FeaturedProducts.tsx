import { motion } from 'framer-motion';
import { Heart, ShoppingCart, Star } from 'lucide-react';

export const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: 'Elegant Summer Dress',
      price: '$89.99',
      originalPrice: '$129.99',
      rating: 4.8,
      reviews: 128,
      image: 'https://i.pinimg.com/originals/3b/03/ac/3b03acf2fe6b66f231d4488c429ffa38.jpg',
      fallbackGradient: 'bg-gradient-to-br from-pink-300 to-rose-400',
      tag: 'New',
    },
    {
      id: 2,
      name: 'Premium Denim Jacket',
      price: '$79.99',
      originalPrice: '$119.99',
      rating: 4.7,
      reviews: 95,
      image: 'https://a.1stdibscdn.com/gucci-embellished-shearling-lined-denim-jacket-for-sale/1121189/v_120828421619000611327/12082842_master.jpg',
      fallbackGradient: 'bg-gradient-to-br from-blue-300 to-cyan-400',
      tag: 'Sale',
    },
    {
      id: 3,
      name: 'Classic Leather Handbag',
      price: '$149.99',
      originalPrice: '$199.99',
      rating: 4.9,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=300&h=300&fit=crop',
      fallbackGradient: 'bg-gradient-to-br from-purple-300 to-pink-400',
      tag: 'Trending',
    },
    {
      id: 4,
      name: 'Stylish Sunglasses',
      price: '$49.99',
      originalPrice: '$79.99',
      rating: 4.6,
      reviews: 72,
      image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&h=300&fit=crop',
      fallbackGradient: 'bg-gradient-to-br from-yellow-300 to-orange-400',
      tag: 'Hot',
    },
  ];

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="shop" className="py-12 md:py-20 bg-gradient-to-b from-blue-50 to-white w-full">
      <div className="px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
            <span className="bg-gradient-to-r from-pink-600 to-orange-500 bg-clip-text text-transparent">
              Featured Products
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Check out our handpicked collection of the season's must-have items
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
            >
              {/* Product Image */}
              <div className={`relative h-40 sm:h-48 md:h-52 ${product.fallbackGradient} overflow-hidden`}>
                <motion.img
                  src={product.image}
                  alt={product.name}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />

                {/* Tag */}
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-bold">
                  <span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
                    {product.tag}
                  </span>
                </div>

                {/* Wishlist Button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute top-4 left-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-pink-500 hover:text-white transition-colors"
                >
                  <Heart className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Product Info */}
              <div className="p-4 sm:p-5 space-y-3">
                <h3 className="font-bold text-sm sm:text-base text-gray-800 group-hover:text-pink-600 transition-colors line-clamp-2">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {product.rating} ({product.reviews})
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-2">
                  <span className="text-xl font-black bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
                    {product.price}
                  </span>
                  <span className="text-sm text-gray-400 line-through">
                    {product.originalPrice}
                  </span>
                </div>

                {/* Add to Cart Button */}
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-pink-500 to-orange-400 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 hover:shadow-lg transition-shadow"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-pink-500 text-pink-600 rounded-full font-bold hover:bg-pink-500 hover:text-white transition-colors"
          >
            View All Products
          </motion.button>
        </motion.div>
        </div>
      </div>
    </section>
  );
};
