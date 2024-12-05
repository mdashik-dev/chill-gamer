import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCreative } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Fade } from "react-awesome-reveal";

const Banner = () => {
  return (
    <div className="banner-container relative">
      <Swiper
        modules={[Autoplay, Pagination, EffectCreative]}
        grabCursor={true}
        slidesPerView={1}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        className="mySwiper"
        autoplay={{
          delay: 3000,
        }}
        parallax={true}
        pagination={true}
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative bg-gray-800 text-white h-96 flex justify-center items-center">
            <img
              src="https://cdn.magicdecor.in/com/2024/02/06154140/Colorful-Gaming-Console-Wallpaper-for-Gamers.jpg" // Replace with your image URL
              alt="Game 1"
              className="absolute inset-0 w-full h-full object-cover opacity-50"
            />
            <div className="z-10 text-center">
              <Fade direction="down">
                <h2 className="text-4xl font-bold mb-4">Game of the Year</h2>
              </Fade>
              <Fade direction="up">
                <p className="text-xl">
                  Explore the ultimate adventure of 2024 with incredible
                  graphics and an immersive story.
                </p>
              </Fade>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative bg-gray-800 text-white h-96 flex justify-center items-center">
            <img
              src="https://www.ncsc.gov.uk/images/iStock-1334436084.jpg" // Replace with your image URL
              alt="Game 2"
              className="absolute inset-0 w-full h-full object-cover opacity-50"
            />
            <div className="z-10 text-center">
              <Fade direction="down">
                <h2 className="text-4xl font-bold mb-4">
                  Must-Have Game Titles
                </h2>
              </Fade>
              <Fade direction="up">
                <p className="text-xl">
                  Check out the top-rated games that everyone is talking about
                  this year.
                </p>
              </Fade>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative bg-gray-800 text-white h-96 flex justify-center items-center">
            <img
              src="https://t4.ftcdn.net/jpg/05/64/31/67/360_F_564316725_zE8llusnCk3Sfr9rdfKya6fV7BQbjfyV.jpg" // Replace with your image URL
              alt="Game 3"
              className="absolute inset-0 w-full h-full object-cover opacity-50"
            />
            <div className="z-10 text-center">
              <Fade direction="down">
                <h2 className="text-4xl font-bold mb-4">
                  Epic Multiplayer Experience
                </h2>
              </Fade>
              <Fade direction="up">
                <p className="text-xl">
                  Gather your friends for an unforgettable multiplayer
                  experience with new features.
                </p>
              </Fade>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
