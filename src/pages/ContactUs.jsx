import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("Message sent successfully!");
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <Helmet>
        <title>Contact Us || Chill Gamer</title>
      </Helmet>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 py-16">
        <div className="text-center text-white">
          <h1 className="text-4xl font-extrabold">Contact Us</h1>
          <p className="text-lg mt-4">We’d love to hear from you! Reach out to us for any inquiries or feedback.</p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Get in Touch</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {/* Phone Section */}
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
              <FiPhone className="text-4xl text-green-500 mx-auto" />
              <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">Phone</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">Call us at: <strong>(123) 456-7890</strong></p>
            </div>
            {/* Email Section */}
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
              <FiMail className="text-4xl text-green-500 mx-auto" />
              <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">Email</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">Email us at: <strong>support@chillgamer.com</strong></p>
            </div>
            {/* Location Section */}
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
              <FiMapPin className="text-4xl text-green-500 mx-auto" />
              <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">Location</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">123 Gamer Street, Level 7, Game City</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-gray-100 dark:bg-gray-800 py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Send Us a Message</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Have a question or feedback? Fill out the form below and we’ll get back to you soon.
          </p>
          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-800 dark:text-white">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-800 dark:text-white">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-800 dark:text-white">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows="5"
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 mt-4"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Team Introduction */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-200 dark:bg-gray-900">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Meet Our Team</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">Our team is dedicated to providing you with the best gaming experience!</p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
              <img src="https://media.istockphoto.com/id/1265176370/photo/portrait-of-a-confident-young-businessman.jpg?s=612x612&w=0&k=20&c=Hr5Rn3WlBied-o4Qu2LiRc6wP_eHI8UMG9rl1v-_a9s=" alt="Team Member 1" className="w-32 h-32 object-cover object-top rounded-full mx-auto" />
              <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">John Doe</h3>
              <p className="text-gray-600 dark:text-gray-400">CEO & Founder</p>
            </div>
            {/* Team Member 2 */}
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
              <img src="https://media.istockphoto.com/id/1146627237/photo/friendly-relaxed-young-businessman-in-the-office.jpg?s=612x612&w=0&k=20&c=81mmgwXw_26W_v8BYlOjf6ZGKBWsn8-zzRe04Ydw1XI=" alt="Team Member 2" className="w-32 h-32 object-cover object-top rounded-full mx-auto" />
              <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">Jane Smith</h3>
              <p className="text-gray-600 dark:text-gray-400">Lead Developer</p>
            </div>
            {/* Team Member 3 */}
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
              <img src="https://imgcdn.stablediffusionweb.com/2024/5/18/a3d63b96-5e33-46af-89d9-7f168c764aa2.jpg" alt="Team Member 3" className="w-32 h-32 object-cover object-top rounded-full mx-auto" />
              <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">Mike Johnson</h3>
              <p className="text-gray-600 dark:text-gray-400">Community Manager</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 py-16 text-center">
        <h2 className="text-3xl font-bold text-white">Join the Chill Gamer Community!</h2>
        <p className="mt-4 text-lg text-white">Follow us on social media, or get in touch for any gaming-related inquiries.</p>
        <div className="mt-8 flex justify-center space-x-6">
          <a href="#" className="text-white hover:text-gray-300">Facebook</a>
          <a href="#" className="text-white hover:text-gray-300">Twitter</a>
          <a href="#" className="text-white hover:text-gray-300">Instagram</a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
