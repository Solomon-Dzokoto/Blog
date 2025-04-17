import { FC } from "react";
import { motion } from "framer-motion";
import {
  FiUsers,
  FiBookOpen,
  FiAward,
  FiGlobe,
  FiTarget,
  FiCheck,
} from "react-icons/fi";
import { Link } from "react-router-dom";

// Team members data
const teamMembers = [
  {
    name: "Alexandra Chen",
    role: "Chief Executive Officer",
    bio: "Experienced leader with 15+ years in digital publishing and knowledge management.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
  },
  {
    name: "Michael Robinson",
    role: "Chief Technology Officer",
    bio: "Tech visionary specializing in AI-driven content platforms and enterprise solutions.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
  },
  {
    name: "Sarah Johnson",
    role: "Head of Content",
    bio: "Former journalist with a passion for quality content and editorial excellence.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
  },
  {
    name: "David Park",
    role: "Director of Enterprise Partnerships",
    bio: "Business development expert focused on creating valuable knowledge sharing ecosystems.",
    image:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
  },
];

// Companies data
const companies = [
  {
    name: "Microsoft",
    logo: "https://via.placeholder.com/150x50?text=Microsoft",
  },
  { name: "IBM", logo: "https://via.placeholder.com/150x50?text=IBM" },
  { name: "Adobe", logo: "https://via.placeholder.com/150x50?text=Adobe" },
  {
    name: "Deloitte",
    logo: "https://via.placeholder.com/150x50?text=Deloitte",
  },
  { name: "Oracle", logo: "https://via.placeholder.com/150x50?text=Oracle" },
];

// Values data
const values = [
  {
    icon: <FiTarget className="w-6 h-6 text-[#1e5d6c]" />,
    title: "Knowledge Accessibility",
    description:
      "Making professional insights available to everyone regardless of background or location",
  },
  {
    icon: <FiCheck className="w-6 h-6 text-[#1e5d6c]" />,
    title: "Content Quality",
    description:
      "Maintaining the highest standards for accuracy, relevance, and depth in every article",
  },
  {
    icon: <FiUsers className="w-6 h-6 text-[#1e5d6c]" />,
    title: "Community Focus",
    description:
      "Building connections between professionals to foster collaboration and innovation",
  },
  {
    icon: <FiGlobe className="w-6 h-6 text-[#1e5d6c]" />,
    title: "Global Perspective",
    description:
      "Embracing diverse viewpoints and experiences from around the world",
  },
];

// Stats data
const stats = [
  {
    icon: <FiUsers className="text-[#1e5d6c]" />,
    value: "250K+",
    label: "Active Users",
  },
  {
    icon: <FiBookOpen className="text-[#1e5d6c]" />,
    value: "100K+",
    label: "Published Articles",
  },
  {
    icon: <FiGlobe className="text-[#1e5d6c]" />,
    value: "120+",
    label: "Countries Reached",
  },
  {
    icon: <FiAward className="text-[#1e5d6c]" />,
    value: "15+",
    label: "Industry Awards",
  },
];

const AboutUs: FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="absolute inset-y-0 right-0 hidden w-1/2 sm:block">
          <img
            className="absolute inset-0 object-cover w-full h-full opacity-30"
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="People collaborating"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-white/80 to-transparent"></div>
        </div>

        <div className="relative px-4 py-32 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                About <span className="text-[#1e5d6c]">Mood</span>
              </h1>
              <p className="mt-6 text-xl text-gray-500 max-w-3xl">
                We're on a mission to transform how professionals share and
                discover knowledge. Our platform connects industry experts,
                thought leaders, and enthusiasts to create a vibrant ecosystem
                of valuable insights.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
              <div className="mt-6 space-y-6 text-gray-500">
                <p>
                  Mood was founded in 2019 by a team of industry veterans who
                  saw a gap in how professionals shared knowledge. Traditional
                  social media platforms were too noisy, and specialized forums
                  were too fragmented.
                </p>
                <p>
                  We envisioned a platform that would serve as the central hub
                  for professional insights across industries - a place where
                  quality content, expert perspectives, and meaningful
                  interactions could thrive.
                </p>
                <p>
                  Three years later, we've grown into a global community of
                  knowledge leaders and lifelong learners, all connected by the
                  power of shared insights. Our platform now serves users in
                  over 120 countries and hosts content from experts in dozens of
                  industries.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-12 lg:mt-0"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="overflow-hidden rounded-lg">
                    <img
                      className="w-full h-auto transform hover:scale-105 transition-transform duration-500"
                      src="https://images.unsplash.com/photo-1553484771-11998c592b9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                      alt="Team collaboration"
                    />
                  </div>
                  <div className="overflow-hidden rounded-lg">
                    <img
                      className="w-full h-auto transform hover:scale-105 transition-transform duration-500"
                      src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                      alt="Office environment"
                    />
                  </div>
                </div>
                <div className="mt-8 space-y-4">
                  <div className="overflow-hidden rounded-lg">
                    <img
                      className="w-full h-auto transform hover:scale-105 transition-transform duration-500"
                      src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                      alt="Team meeting"
                    />
                  </div>
                  <div className="overflow-hidden rounded-lg">
                    <img
                      className="w-full h-auto transform hover:scale-105 transition-transform duration-500"
                      src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                      alt="Digital collaboration"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mission & Values Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900">
              Our Mission & Values
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              We're guided by a commitment to democratizing knowledge and
              fostering professional growth through meaningful connections.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="h-12 w-12 rounded-md bg-[#1e5d6c]/10 flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-500">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 bg-[#1e5d6c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-white flex justify-center mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-blue-100 flex items-center justify-center">
                  <span className="mr-2">{stat.icon}</span>
                  <span>{stat.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900">
              Our Leadership Team
            </h2>
            <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
              Meet the talented individuals behind Mood who are passionate about
              transforming professional knowledge sharing.
            </p>
          </motion.div>

          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative mx-auto w-40 h-40 mb-6 overflow-hidden rounded-full">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-medium text-gray-900">
                  {member.name}
                </h3>
                <p className="text-[#1e5d6c] font-medium">{member.role}</p>
                <p className="mt-2 text-sm text-gray-500">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Trusted By Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900">
              Trusted By Leading Companies
            </h2>
            <p className="mt-4 text-gray-500 max-w-3xl mx-auto">
              Organizations worldwide rely on Mood for their knowledge
              management and professional development needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
            {companies.map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex justify-center"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-12 object-contain filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-gradient-to-r from-[#1e5d6c] to-[#164a57]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-white"
            >
              Ready to join our knowledge community?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-xl text-blue-100"
            >
              Start sharing your valuable insights or discover content from
              industry experts today.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 flex justify-center space-x-4"
            >
              <Link
                to="/signup"
                className="px-6 py-3 rounded-md bg-white text-[#1e5d6c] font-medium shadow-sm hover:bg-gray-100 transition-colors"
              >
                Create Account
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 rounded-md border border-white text-white font-medium hover:bg-white/10 transition-colors"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
