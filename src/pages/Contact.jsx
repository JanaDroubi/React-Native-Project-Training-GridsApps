import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Contact = () => {
  const { isDarkMode } = useContext(AppContext);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDarkMode ? "bg-gray-900" : "bg-gray-50"}`}>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-extrabold text-center mb-12 text-gray-900 dark:text-white animate-fadeIn">
          Contact Us
        </h1>

        <div className="max-w-4xl mx-auto grid gap-12 md:grid-cols-2">
          {/* Contact Info */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-10 hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
              Get in Touch
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
            <ul className="space-y-4 text-gray-700 dark:text-gray-300">
              <li>📧 <strong>Email:</strong> support@edtech.com</li>
              <li>📞 <strong>Phone:</strong> (123) 456-7890</li>
              <li>🏢 <strong>Address:</strong> 123 Education Street, Tech City</li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-10 hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Send a Message</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-1" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-1" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-1" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Your message..."
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-lg transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
