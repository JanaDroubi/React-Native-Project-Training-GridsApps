import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const About = () => {
  const { isDarkMode } = useContext(AppContext);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDarkMode ? "bg-gray-900" : "bg-gray-50"}`}>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-extrabold text-center mb-12 text-gray-900 dark:text-white animate-fadeIn">
          About Us
        </h1>

        <div className="max-w-4xl mx-auto space-y-10">
          {/* Mission Section */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-10 hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">
              Our Mission
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              We believe that education should be accessible to everyone, everywhere. Our platform
              connects learners with expert instructors to help them acquire new skills and
              advance their careers.
            </p>
          </section>

          {/* Offerings Section */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-10 hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
              What We Offer
            </h2>
            <ul className="list-disc pl-6 space-y-3 text-gray-600 dark:text-gray-300">
              <li>High-quality courses taught by industry experts</li>
              <li>Flexible learning schedules to fit your lifestyle</li>
              <li>Practical skills that are immediately applicable</li>
              <li>A supportive community of learners</li>
              <li>Affordable pricing options for all budgets</li>
            </ul>
          </section>

          {/* Call to Action */}
          <section className="text-center mt-8">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Ready to start your learning journey with us?
            </p>
            <a
              href="/courses"
              className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Explore Courses
            </a>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
