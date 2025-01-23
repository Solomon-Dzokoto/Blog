import React, { useState } from "react";

const ContactUs: React.FC = () => {
  const [credential, setCredential] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setCredential({ ...credential, [e.target.name]: e.target.value } );
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for reaching out!");
    setCredential({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen">
      <header className="bg-blue-600 text-white py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">Contact Us</h1>
          <p className="text-center mt-4 text-lg">
            We'd love to hear from you! Send us a message using the form below.
          </p>
        </div>
      </header>

      {/* Contact Form Section */}
      <section className="container mx-auto px-4 py-10">
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-lg shadow-md p-8 max-w-lg mx-auto"
        >
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={credential.name}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={credential.email}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={credential.message}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2"
              rows={5}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold px-6 py-2 rounded shadow hover:bg-blue-500 w-full"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default ContactUs;
