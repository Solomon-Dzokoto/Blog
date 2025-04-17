import { useState, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { BsCheckCircle } from "react-icons/bs";
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactPage = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const contactInfo = [
    {
      icon: <FaPhone className="text-xl text-teal-600" />,
      title: "Phone",
      details: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: <FaEnvelope className="text-xl text-teal-600" />,
      title: "Email",
      details: "support@moodblog.com",
      link: "mailto:support@moodblog.com",
    },
    {
      icon: <FaMapMarkerAlt className="text-xl text-teal-600" />,
      title: "Office",
      details: "123 Innovation Drive, San Francisco, CA 94103",
      link: "https://maps.google.com/?q=123+Innovation+Drive+San+Francisco+CA+94103",
    },
  ];

  const socialLinks = [
    { icon: <FaTwitter />, link: "https://twitter.com/moodblog" },
    { icon: <FaFacebook />, link: "https://facebook.com/moodblog" },
    { icon: <FaLinkedin />, link: "https://linkedin.com/company/moodblog" },
    { icon: <FaInstagram />, link: "https://instagram.com/moodblog" },
  ];

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error for this field if it exists
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    let isValid = true;

    // Simple validation - check if fields are filled
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
      isValid = false;
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setServerError(null);

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulating API call with a timeout
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // For demo purposes, we'll just set success
      // In a real app, you'd make an API call here
      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Reset success state after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch {
      setServerError(
        "There was a problem sending your message. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-teal-700 to-teal-900">
        <div className="absolute inset-0 opacity-20 pattern-dots pattern-white pattern-size-4 pattern-bg-fixed"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-white sm:text-5xl">
              Get in Touch
            </h1>
            <p className="mt-4 text-xl text-teal-100 max-w-2xl mx-auto">
              We'd love to hear from you. Our team is always here to help.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gray-50 rounded-2xl p-8 lg:col-span-1"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Contact Information
            </h2>

            <div className="space-y-8 mb-12">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="flex items-start group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="mt-1 mr-4">{item.icon}</div>
                  <div>
                    <h3 className="font-medium text-gray-900">{item.title}</h3>
                    <p className="mt-1 text-gray-600 group-hover:text-teal-700 transition-colors">
                      {item.details}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <h3 className="text-lg font-medium text-gray-800 mb-4">
              Follow Us
            </h3>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  className="bg-white p-3 rounded-full text-gray-600 hover:text-teal-600 hover:shadow-md transition-all transform hover:-translate-y-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-8 lg:col-span-2"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Send a Message
            </h2>

            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 border border-green-100 rounded-lg p-6 text-center"
              >
                <BsCheckCircle className="text-green-500 text-4xl mx-auto mb-4" />
                <h3 className="text-xl font-medium text-green-800 mb-2">
                  Message Sent Successfully!
                </h3>
                <p className="text-green-700">
                  Thank you for contacting us. We will get back to you shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`block w-full px-4 py-3 rounded-lg border ${
                          errors.name ? "border-red-300" : "border-gray-300"
                        } focus:ring-teal-500 focus:border-teal-500`}
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.name}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <div className="mt-1">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`block w-full px-4 py-3 rounded-lg border ${
                          errors.email ? "border-red-300" : "border-gray-300"
                        } focus:ring-teal-500 focus:border-teal-500`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Subject
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`block w-full px-4 py-3 rounded-lg border ${
                        errors.subject ? "border-red-300" : "border-gray-300"
                      } focus:ring-teal-500 focus:border-teal-500`}
                    />
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.subject}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className={`block w-full px-4 py-3 rounded-lg border ${
                        errors.message ? "border-red-300" : "border-gray-300"
                      } focus:ring-teal-500 focus:border-teal-500`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.message}
                      </p>
                    )}
                  </div>
                </div>

                {serverError && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                    {serverError}
                  </div>
                )}

                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-6 py-3 bg-teal-600 text-white rounded-lg flex items-center ${
                      isSubmitting
                        ? "opacity-70 cursor-not-allowed"
                        : "hover:bg-teal-700"
                    } transition-colors shadow-md`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FiSend className="mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      {/* Map Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900">Our Location</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Visit our office in the heart of San Francisco's technology
              district.
            </p>
          </motion.div>

          <div className="h-96 bg-gray-200 rounded-xl overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50470.77483540176!2d-122.43462582608577!3d37.76133305389723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1664372031036!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            ></iframe>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Find quick answers to common questions about contacting us.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
          {[
            {
              question: "How quickly will I receive a response?",
              answer:
                "We typically respond to all inquiries within 24-48 business hours. For urgent matters, please indicate this in your subject line.",
            },
            {
              question: "Can I schedule a call with your team?",
              answer:
                "Yes! You can request a call in your message, and one of our team members will get back to you with available time slots.",
            },
            {
              question: "Do you offer customer support over the weekend?",
              answer:
                "Our customer support team is available Monday through Friday. Weekend support is available for enterprise customers only.",
            },
            {
              question: "How can I report a technical issue?",
              answer:
                "Please use this contact form and select 'Technical Issue' as your subject. Including screenshots and detailed steps to reproduce the issue will help us resolve it faster.",
            },
          ].map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-sm border border-gray-100 p-6"
            >
              <h3 className="text-lg font-medium text-gray-900 mb-3">
                {faq.question}
              </h3>
              <p className="text-gray-600">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
