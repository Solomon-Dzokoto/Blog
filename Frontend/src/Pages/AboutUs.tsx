import { FC } from "react";
import { motion } from "framer-motion";

const AboutUs: FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">

      <header className=" py-20">
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[2rem] md:text-[3rem] text-[#1e5d6c] font-bold text-center"
          >
            Welcome to Mood
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center mt-6 text-xl max-w-2xl mx-auto"
          >
            Where thoughts find their rhythm and stories come alive
          </motion.p>
        </div>
      </header>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-xl p-8 max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Mood was born from a simple yet powerful idea: everyone has a story worth sharing. 
              In today's fast-paced digital world, we recognized the need for a space where authentic voices 
              could be heard and meaningful connections could be forged through the art of storytelling.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Whether you're here to share your experiences, gain new perspectives, or simply find 
              content that resonates with your mood, we've created a platform that celebrates the 
              diversity of human expression and the power of written word.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Makes Us Different</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-lg p-6 shadow-lg"
              >
                <div className="text-purple-600 text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-md"
              >
                <div className="text-4xl font-bold text-purple-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#1e5d6c] to-indigo-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Share Your Story?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our community of passionate writers and readers. Start sharing your unique perspective today.
          </p>
          <button className="bg-white text-[#1e5d6c] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            Start Writing
          </button>
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