import { FC } from "react";
import { motion } from "framer-motion";

const AboutUs: FC = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      {/* Hero Section with enhanced styling */}
      <header className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#1e5d6c] opacity-5 pattern-dots"></div>
        <div className="container mx-auto px-4 relative">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[2.5rem] md:text-[4rem] text-[#1e5d6c] font-bold text-center leading-tight"
          >
            Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e5d6c] to-indigo-600">Mood</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center mt-8 text-xl md:text-2xl max-w-3xl mx-auto text-gray-600 leading-relaxed"
          >
            Where thoughts find their rhythm and stories come alive
          </motion.p>
        </div>
      </header>

      {/* About Section with card effect */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-12 max-w-4xl mx-auto transform hover:scale-[1.02] transition-transform duration-300"
          >
            <h2 className="text-4xl font-bold text-center mb-10 text-[#1e5d6c]">Our Story</h2>
            <div className="space-y-6">
              <p className="text-xl text-gray-600 leading-relaxed">
                Mood was born from a simple yet powerful idea: everyone has a story worth sharing. 
                In today's fast-paced digital world, we recognized the need for a space where authentic voices 
                could be heard and meaningful connections could be forged through the art of storytelling.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed">
                Whether you're here to share your experiences, gain new perspectives, or simply find 
                content that resonates with your mood, we've created a platform that celebrates the 
                diversity of human expression and the power of written word.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section with enhanced cards */}
      <section className="py-24 bg-gradient-to-b from-gray-100 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#1e5d6c]">What Makes Us Different</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-6xl mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-semibold mb-4 text-[#1e5d6c]">{feature.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section with enhanced cards */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-10">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-10 shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-5xl font-bold bg-gradient-to-r from-[#1e5d6c] to-indigo-600 bg-clip-text text-transparent mb-4">
                  {stat.value}
                </div>
                <div className="text-xl text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with enhanced styling */}
      <section className="py-24 bg-gradient-to-r from-[#1e5d6c] to-indigo-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pattern-dots"></div>
        <div className="container mx-auto px-4 text-center relative">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-8"
          >
            Ready to Share Your Story?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-2xl mb-12 max-w-2xl mx-auto opacity-90"
          >
            Join our community of passionate writers and readers. Start sharing your unique perspective today.
          </motion.p>
          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-white text-[#1e5d6c] px-10 py-4 rounded-full text-xl font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Start Writing
          </motion.button>
        </div>
      </section>
    </div>
  );
};

const features = [
  {
    icon: "✨",
    title: "Creative Freedom",
    description: "Express yourself freely through our intuitive and flexible blogging platform."
  },
  {
    icon: "🤝",
    title: "Engaged Community",
    description: "Connect with like-minded individuals who share your interests and passions."
  },
  {
    icon: "🎯",
    title: "Quality Content",
    description: "Curated articles and stories that inspire, educate, and entertain."
  }
];

const stats = [
  { value: "50K+", label: "Monthly Readers" },
  { value: "1000+", label: "Published Stories" },
  { value: "100+", label: "Active Writers" }
];

export default AboutUs;