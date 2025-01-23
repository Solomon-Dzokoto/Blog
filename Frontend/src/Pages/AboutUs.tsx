// src/pages/AboutUs.tsx
import {FC} from "react";

const AboutUs: FC = () => {
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen">
      <header className="bg-blue-600 text-white py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">About Us</h1>
          <p className="text-center mt-4 text-lg">
            Learn more about our story, mission, and values.
          </p>
        </div>
      </header>

      {/* Mission Section */}
      <section className="container mx-auto px-4 py-10">
        <h2 className="text-3xl font-semibold text-center mb-6">Our Mission</h2>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
          At Mood, our mission is to empower individuals through
          high-quality content and meaningful discussions. We strive to be a
          source of inspiration, learning, and connection for our readers.
        </p>
      </section>

      <section className="bg-blue-600 text-white py-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold">Want to Learn More?</h2>
          <p className="mt-4 text-lg">
            Explore our articles and resources or get in touch with us for
            collaboration opportunities.
          </p>
          <a
            href="/contact"
            className="mt-6 inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded shadow hover:bg-gray-100"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
