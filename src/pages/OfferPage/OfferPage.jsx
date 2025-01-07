import React from "react";
import { FaTag, FaClock, FaArrowRight } from "react-icons/fa";

const OfferPage = () => {
  const offer = {
    id: 1,
    title: "50% Off on Assassin's Creed Valhalla",
    image:
      "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5o0p2Ug7hSTQhU9UHUeKaU/3ac455e4f8cf77fbaa7f00d6fafc8dd7/BrandNewsArticle_lunar-sale-ACV-2022_960x540_GBR-EN.jpg",
    validTill: "Jan 31, 2025",
    offerCode: "ACV50",
    link: "https://store.example.com/assassins-creed-valhalla",
  };
  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-16 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Column: Offer Details */}
          <div className="w-full md:w-1/2">
            <img
              src={offer?.image}
              alt={offer?.title}
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Right Column: Offer Description and Countdown */}
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl font-extrabold text-gray-800 dark:text-white mb-4">
              {offer?.title}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              Use the code{" "}
              <span className="font-semibold text-blue-600">
                {offer?.offerCode}
              </span>{" "}
              to claim this deal!
            </p>
            <div className="flex items-center gap-4 mb-8">
              <span className="bg-red-500 text-white px-4 py-2 rounded-full flex items-center gap-2">
                <FaTag /> Expires: {offer?.validTill}
              </span>
              <div className="flex items-center gap-2">
                <FaClock className="text-gray-500" />
                <span className="font-semibold text-gray-800 dark:text-white">
                  <strong>Hurry up! </strong> Limited Time Offer
                </span>
              </div>
            </div>

            {/* Countdown Timer */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-6">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                Time Remaining
              </h3>
              <div className="text-4xl font-extrabold text-gray-800 dark:text-white mb-2">
                02:15:37
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Time left to grab the deal!
              </p>
            </div>

            {/* Claim Offer Button */}
            <a
              href={offer?.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto bg-blue-600 text-white py-3 px-8 rounded-full flex items-center justify-center gap-2 hover:bg-blue-700 transition duration-300"
            >
              <span>Claim Offer</span>
              <FaArrowRight />
            </a>
          </div>
        </div>

        {/* Secondary Information Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Don't Miss Out on Exclusive Offers
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Get the latest gaming deals and offers directly in your inbox!
          </p>
          <div className="mt-8">
            <a
              href="#"
              className="bg-green-600 text-white py-3 px-8 rounded-full hover:bg-green-700 transition duration-300"
            >
              Subscribe Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferPage;
