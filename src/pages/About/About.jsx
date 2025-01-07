import React from "react";
import { FaGamepad, FaUsers, FaBullhorn, FaRocket, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-all">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white py-16">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl font-bold mb-4">Welcome to Chill Gamer</h1>
          <p className="text-lg md:text-2xl max-w-3xl mx-auto">
            We are a passionate community dedicated to providing the best gaming content, reviews, and news. Join us as we explore the world of gaming together.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 text-center">
        <h2 className="text-3xl font-semibold mb-6">Our Mission</h2>
        <p className="text-xl max-w-2xl mx-auto">
          Our mission is to create an inclusive gaming space for everyone. Whether you're a casual gamer or a hardcore enthusiast, Chill Gamer is here to provide content that you'll love. From in-depth reviews to helpful gaming guides, we're your ultimate gaming companion.
        </p>
      </section>

      {/* Vision Section */}
      <section className="bg-gray-100 dark:bg-gray-800 py-16 px-4 text-center">
        <h2 className="text-3xl font-semibold mb-6">Our Vision</h2>
        <p className="text-xl max-w-2xl mx-auto">
          Our vision is to become the leading platform for gaming enthusiasts, bringing the latest reviews, insights, and news straight to your screen. We aim to unite gamers globally by fostering a community of like-minded individuals who share the same love for gaming.
        </p>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-semibold text-center mb-12">Meet The Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-xl text-center">
            <div className="bg-green-500 text-white w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center">
              <FaUsers className="text-3xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2">John Doe</h3>
            <p className="text-lg">Founder & CEO</p>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              John is the visionary behind Chill Gamer. His passion for gaming has driven him to create a space where gamers can connect and share their experiences.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-xl text-center">
            <div className="bg-green-500 text-white w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center">
              <FaBullhorn className="text-3xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Jane Smith</h3>
            <p className="text-lg">Community Manager</p>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Jane manages the Chill Gamer community, ensuring a positive and interactive space for everyone. She loves helping gamers make the most out of their experiences.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-xl text-center">
            <div className="bg-green-500 text-white w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center">
              <FaRocket className="text-3xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Mark Lee</h3>
            <p className="text-lg">Tech Lead</p>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Mark is the tech wizard behind Chill Gamer. He works tirelessly to ensure our platform is running smoothly and that you get the best experience possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-100 dark:bg-gray-800 py-16 px-4 text-center">
        <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Have questions or want to collaborate with us? Feel free to reach out. We’re always happy to connect with fellow gamers!
        </p>
        <div className="flex justify-center space-x-6">
          <a href="mailto:contact@chillgamer.com" className="bg-green-600 text-white px-8 py-3 rounded-full flex items-center space-x-2 hover:bg-green-700 transition duration-300">
            <FaEnvelope />
            <span>Contact Us</span>
          </a>
          <a href="#" className="bg-green-600 text-white px-8 py-3 rounded-full flex items-center space-x-2 hover:bg-green-700 transition duration-300">
            <FaPhoneAlt />
            <span>Call Us</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
