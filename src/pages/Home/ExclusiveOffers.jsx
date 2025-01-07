import { FaTag } from "react-icons/fa";
import Swal from "sweetalert2"; // Import SweetAlert2

const ExclusiveOffers = () => {
  const offers = [
    {
      id: 1,
      title: "50% Off on Assassin's Creed Valhalla",
      image:
        "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5o0p2Ug7hSTQhU9UHUeKaU/3ac455e4f8cf77fbaa7f00d6fafc8dd7/BrandNewsArticle_lunar-sale-ACV-2022_960x540_GBR-EN.jpg",
      validTill: "Jan 31, 2025",
      offerCode: "ACV50",
      link: "/offer/1",
    },
    {
      id: 2,
      title: "Free DLC for Cyberpunk 2077",
      image:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg",
      validTill: "Feb 15, 2025",
      offerCode: "CPDLCFREE",
      link: "/offer/2",
    },
    {
      id: 3,
      title: "30% Off on The Last of Us Part II",
      image:
        "https://cdn.mos.cms.futurecdn.net/aQm3ztA8rgwMV4eJcRaJi9-1200-80.jpg",
      validTill: "Mar 10, 2025",
      offerCode: "TLOU30",
      link: "/offer/3",
    },
  ];

  const handleClaimOffer = (offerCode, link) => {
    navigator.clipboard.writeText(offerCode).then(() => {
      // Using SweetAlert2 to show a success alert
      Swal.fire({
        title: "Success!",
        text: `Offer code "${offerCode}" copied to clipboard! You will be redirected to the offer page.`,
        icon: "success",
        confirmButtonText: "Go to Offer",
        confirmButtonColor: "#3085d6",
      }).then((result) => {
        if (result.isConfirmed) {
          window.open(link, "_blank");
        }
      });
    });
  };

  return (
    <section className="bg-white dark:bg-gray-900 py-12 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-6">
          Exclusive Offers & Deals
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-center mb-8">
          Grab the hottest gaming deals before they're gone!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={offer.image}
                alt={offer.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {offer.title}
                </h3>
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-red-500 text-white px-3 py-1 rounded text-sm font-semibold">
                    <FaTag className="inline-block mr-1" /> Expires:{" "}
                    {offer.validTill}
                  </span>
                  <span className="bg-green-600 text-white px-3 py-1 rounded text-sm font-semibold">
                    Code: {offer.offerCode}
                  </span>
                </div>
                <button
                  onClick={() => handleClaimOffer(offer.offerCode, offer.link)}
                  className="w-full bg-blue-600 dark:bg-blue-700 text-white py-2 rounded hover:bg-blue-700 dark:hover:bg-blue-800 transition"
                >
                  Claim Offer
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExclusiveOffers;
