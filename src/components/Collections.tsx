import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const Collections = () => {
  const collections = [
    {
      id: 1,
      title: 'Summer Vibes',
      description: 'Bright colors and breezy designs',
      image: 'bg-gradient-to-br from-yellow-300 via-orange-300 to-red-300',
      link: '#',
      items: '250+ Items',
    },
    {
      id: 2,
      title: 'Winter Elegance',
      description: 'Cozy and sophisticated looks',
      image: 'bg-gradient-to-br from-blue-300 via-cyan-300 to-purple-300',
      link: '#',
      items: '180+ Items',
    },
    {
      id: 3,
      title: 'Urban Street',
      description: 'Modern and trendy fashion',
      image: 'bg-gradient-to-br from-gray-300 via-pink-300 to-purple-300',
      link: '#',
      items: '320+ Items',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="collections" className="py-12 md:py-20 bg-gradient-to-b from-white to-pink-50 w-full">
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
            <span className="bg-gradient-to-r from-cyan-600 to-pink-600 bg-clip-text text-transparent">
              Shop Collections
            </span>
          </h2>
          <p className="text-gray-600 text-lg">
            Explore our curated fashion collections
          </p>
        </motion.div>

        {/* Collections Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8"
        >
          {collections.map((collection) => (
            <motion.div
              key={collection.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group relative h-60 sm:h-72 md:h-80 rounded-3xl overflow-hidden cursor-pointer"
            >
              {/* Background */}
              <div className={`${collection.image} w-full h-full absolute inset-0`}></div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-all duration-300"></div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-between p-8">
                <div>
                  <p className="text-white text-sm font-semibold mb-2">
                    {collection.items}
                  </p>
                  <h3 className="text-3xl font-black text-white mb-2">
                    {collection.title}
                  </h3>
                  <p className="text-white text-opacity-90">
                    {collection.description}
                  </p>
                </div>

                {/* Button */}
                <motion.button
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center gap-2 bg-white text-pink-600 font-bold px-6 py-3 rounded-full w-fit group hover:bg-pink-500 hover:text-white transition-colors"
                >
                  Explore
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>

              {/* Shine Effect */}
              <motion.div
                initial={{ x: '100%' }}
                whileHover={{ x: '-100%' }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
              ></motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Categories Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-20 grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4"
        >
          {['Dresses', 'Tops', 'Bottoms', 'Outerwear', 'Accessories'].map((category, index) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="py-3 sm:py-4 px-4 sm:px-6 bg-white border-2 border-gray-200 rounded-xl font-bold text-sm sm:text-base text-gray-700 hover:border-pink-500 hover:text-pink-600 transition-colors"
            >
              {category}
            </motion.button>
          ))}
        </motion.div>
        </div>
      </div>
    </section>
  );
};
