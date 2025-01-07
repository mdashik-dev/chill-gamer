import React from "react";
import { Helmet } from "react-helmet-async";
import { FiHelpCircle, FiPhone, FiMail, FiUsers } from "react-icons/fi";
import { Link } from "react-router-dom";

const Support = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <Helmet>
        <title>Support || Chill Gamer</title>
      </Helmet>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 py-16 text-center text-white">
        <h1 className="text-4xl font-extrabold">Support Center</h1>
        <p className="mt-4 text-lg">
          Need assistance? We're here to help you with anything related to your gaming experience. Find answers to common issues or reach out to us directly!
        </p>
      </div>

      {/* Frequently Asked Questions Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Frequently Asked Questions</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Find answers to some of the most commonly asked questions about our services and platform.
          </p>
          <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">How do I write a game review?</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Learn how to write and submit your own game reviews for our platform. Check out our guidelines.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">How can I become a game reviewer?</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Get information on how you can join our team of expert game reviewers and contribute to our site.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">What gaming platforms do you support?</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                We support reviews and coverage for all major gaming platforms. Learn more about the platforms we cover.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Support Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Contact Support</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Need immediate help? Reach out to our support team, and we'll assist you as soon as possible.
          </p>
          <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
              <FiPhone className="text-4xl text-green-500" />
              <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">Phone Support</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">Call us at 1-800-123-4567 for quick assistance.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
              <FiMail className="text-4xl text-green-500" />
              <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">Email Support</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">Send an email to support@chillgamer.com for detailed inquiries.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
              <FiUsers className="text-4xl text-green-500" />
              <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">Live Chat</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">Chat with our support team directly for real-time assistance.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Submit a Ticket Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Submit a Support Ticket</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            If you're facing an issue that isn't covered in our FAQ, feel free to submit a support ticket, and our team will assist you.
          </p>
          <form className="mt-8 space-y-6 max-w-xl mx-auto">
            <div className="flex flex-col space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="py-3 px-5 rounded-lg text-gray-700 bg-white border border-gray-300 dark:bg-gray-800 dark:text-white dark:border-gray-700 focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="py-3 px-5 rounded-lg text-gray-700 bg-white border border-gray-300 dark:bg-gray-800 dark:text-white dark:border-gray-700 focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
              <textarea
                placeholder="Describe your issue"
                className="py-3 px-5 rounded-lg text-gray-700 bg-white border border-gray-300 dark:bg-gray-800 dark:text-white dark:border-gray-700 focus:ring-2 focus:ring-green-500 focus:outline-none"
                rows="4"
              ></textarea>
              <button
                type="submit"
                className="w-full py-3 px-6 bg-green-500 hover:bg-green-600 text-white rounded-lg"
              >
                Submit Ticket
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Support Resources Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Support Resources</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Access our helpful resources, guides, and tutorials to troubleshoot common problems and enhance your experience.
          </p>
          <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Game Troubleshooting</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Step-by-step troubleshooting guides for common gaming issues.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Account Recovery</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Learn how to recover your account and reset your password.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Game Setup Guides</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Get comprehensive guides to set up your game and optimize your experience.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 py-16 text-center text-white">
        <h2 className="text-3xl font-bold">Need More Help?</h2>
        <p className="mt-4 text-lg">Don't hesitate to reach out to us for personalized assistance. We're here to help!</p>
        <div className="mt-8">
          <Link href="/contact-us" className="py-3 px-8 bg-green-500 hover:bg-green-600 text-white rounded-lg">Contact Us</Link>
        </div>
      </div>
    </div>
  );
};

export default Support;
