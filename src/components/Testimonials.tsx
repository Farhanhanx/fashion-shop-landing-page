import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Anderson',
      role: 'Fashion Enthusiast',
      content: 'Amazing collection! The quality is exceptional and the delivery was super fast. I\'m already a regular customer.',
      rating: 5,
      avatar: 'bg-gradient-to-br from-pink-400 to-rose-400',
    },
    {
      id: 2,
      name: 'Emily Chen',
      role: 'Style Blogger',
      content: 'FashionHub has transformed how I shop online. The curated collections are on point and customer service is outstanding!',
      rating: 5,
      avatar: 'bg-gradient-to-br from-purple-400 to-pink-400',
    },
    {
      id: 3,
      name: 'Jessica Williams',
      role: 'Professional',
      content: 'Great variety and affordable prices. I found the perfect outfit for my business meetings here. Highly recommended!',
      rating: 5,
      avatar: 'bg-gradient-to-br from-cyan-400 to-blue-400',
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
    <section className="py-12 md:py-20 bg-gradient-to-b from-pink-50 to-white w-full">
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
            <span className="bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
              Love from Our Customers
            </span>
          </h2>
          <p className="text-gray-600 text-lg">
            See what people love about FashionHub
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-shadow relative"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-pink-200 opacity-50" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`${testimonial.avatar} w-12 h-12 rounded-full`}
                />
                <div>
                  <p className="font-bold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {[
            { number: '50K+', label: 'Happy Customers' },
            { number: '98%', label: 'Satisfaction Rate' },
            { number: '24/7', label: 'Customer Support' },
            { number: '100%', label: 'Secure Checkout' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-pink-100 via-orange-100 to-cyan-100 rounded-2xl p-4 md:p-6 text-center"
            >
              <p className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </p>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 font-semibold">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
        </div>
      </div>
    </section>
  );
};
