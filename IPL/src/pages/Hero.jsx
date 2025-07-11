import React, { useState, useEffect, useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import { Pagination, EffectCoverflow } from "swiper/modules";
import stadium from "../components/images/motera.webp";
import w2025 from "../components/images/2025.jpg";
import w2024 from "../components/images/2024.jpg";
import w2023 from "../components/images/2023.jpg";
import w2022 from "../components/images/2022.webp";
import w2021 from "../components/images/2021.jpeg";
import w2020 from "../components/images/2020.webp";
import w2019 from "../components/images/2019.jpg";
import w2018 from "../components/images/2018.jpeg";
import w2017 from "../components/images/2017.jpg";
import w2016 from "../components/images/2016.jpg";
import w2015 from "../components/images/2015.webp";
import w2014 from "../components/images/2014.jpg";
import w2013 from "../components/images/2013.jpg";
import w2012 from "../components/images/2012.jpg";
import w2011 from "../components/images/2011.webp";
import w2010 from "../components/images/2010.webp";
import w2009 from "../components/images/2009.jpg";
import w2008 from "../components/images/2008.jpg"

const Hero = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [counting, setCounting] = useState(true);
  const [counting2, setCounting2] = useState(true);
  const swiper1 = useRef(null);
  const swiper2 = useRef(null);
  const syncInProgress = useRef(false);

  useEffect(() => {
    // Synchronize the slides of both swipers
    const syncSwipers = (swiper) => {
      if (syncInProgress.current) return;
      syncInProgress.current = true;
      const otherSwiper = swiper === swiper1.current ? swiper2.current : swiper1.current;
      otherSwiper.swiper.slideTo(swiper.swiper.realIndex);
      syncInProgress.current = false;
    };

    // Subscribe to swiper events to synchronize slides
    if (swiper1.current && swiper2.current) {
      swiper1.current.swiper.on('slideChange', () => syncSwipers(swiper1.current));
      swiper2.current.swiper.on('slideChange', () => syncSwipers(swiper2.current));
    }

    // Unsubscribe from swiper events when component unmounts
    return () => {
      if (swiper1.current && swiper2.current) {
        swiper1.current.swiper.off('slideChange', () => syncSwipers(swiper1.current));
        swiper2.current.swiper.off('slideChange', () => syncSwipers(swiper2.current));
      }
    };
  }, []);
  // Increment the counter quickly from 1 to 1000
  useEffect(() => {
    let i = 1;
    const interval = setInterval(() => {
      setCount(i);
      i++;
      if (i > 17) {
        clearInterval(interval);
        setCounting(false);
      }
    }, 1);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    let i = 1;
    const interval = setInterval(() => {
      setCount2(i);
      i++;
      if (i > 10) {
        clearInterval(interval);
        setCounting2(false);
      }
    }, 1);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-auto mt-24 ">
        <Swiper
         ref={swiper1}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
        }}
        modules={[EffectCoverflow, Pagination]}
        pagination={{
          clickable: true,
        }}
          className="mySwiper landingPageSwiper  overflow-hidden  w-[800px] h-[360px] flex md:flex-row flex-col items-center justify-center rounded-xl"
        >
          return (
          <>
          <SwiperSlide className="w-full h-full">
              <img
                src={w2025}
                alt="winner 2025"
                className="object-cover object-center w-full h-full"
              />
            </SwiperSlide>
            <SwiperSlide className="w-full h-full">
              <img
                src={w2024}
                alt="winner 2024"
                className="object-cover object-center w-full h-full"
              />
            </SwiperSlide>
            <SwiperSlide className="w-full h-full">
              <img
                src={w2023}
                alt="winner 2023"
                className="object-cover object-center w-full h-full"
              />
            </SwiperSlide>
            <SwiperSlide className="w-full h-full">
              <img
                src={w2022}
                alt="winner 2022"
                className="object-cover object-center w-full h-full"
              />
            </SwiperSlide>
            <SwiperSlide className="w-full h-full">
              <img
                src={w2021}
                alt="winner 2021"
                className="object-cover object-center w-full h-full"
              />
            </SwiperSlide>
            <SwiperSlide className="w-full h-full">
              <img
                src={w2020}
                alt="winner 2020"
                className="object-cover object-center w-full h-full"
              />
            </SwiperSlide>
            <SwiperSlide className="w-full h-full">
              <img
                src={w2019}
                alt="img"
                className="object-cover object-center w-full h-full"
              />
            </SwiperSlide>
            <SwiperSlide className="w-full h-full">
              <img
                src={w2018}
                alt="img"
                className="object-cover object-center w-full h-full"
              />
            </SwiperSlide>
            <SwiperSlide className="w-full h-full">
              <img
                src={w2017}
                alt="img"
                className="object-cover object-center w-full h-full"
              />
            </SwiperSlide>
            <SwiperSlide className="w-full h-full">
              <img
                src={w2016}
                alt="img"
                className="object-cover object-center w-full h-full"
              />
            </SwiperSlide>          
            <SwiperSlide className="w-full h-full">
              <img
                src={w2015}
                alt="img"
                className="object-cover object-center w-full h-full"
              />
            </SwiperSlide>          
            <SwiperSlide className="w-full h-full">
              <img
                src={w2014}
                alt="img"
                className="object-cover object-center w-full h-full"
              />
            </SwiperSlide>          
            <SwiperSlide className="w-full h-full">
              <img
                src={w2013}
                alt="img"
                className="object-cover object-center w-full h-full"
              />
            </SwiperSlide>          
            <SwiperSlide className="w-full h-full">
              <img
                src={w2012}
                alt="img"
                className="object-cover object-center w-full h-full"
              />
            </SwiperSlide>          
            <SwiperSlide className="w-full h-full">
              <img
                src={w2011}
                alt="img"
                className="object-cover object-center w-full h-full"
              />
            </SwiperSlide>          
            <SwiperSlide className="w-full h-full">
              <img
                src={w2010}
                alt="img"
                className="object-cover object-center w-full h-full"
              />
            </SwiperSlide>          
            <SwiperSlide className="w-full h-full">
              <img
                src={w2009}
                alt="img"
                className="object-cover object-center w-full h-full"
              />
            </SwiperSlide>          
            <SwiperSlide className="w-full h-full">
              <img
                src={w2008}
                alt="img"
                className="object-cover object-center w-full h-full"
              />
            </SwiperSlide>          
          </>
          );
        </Swiper>
      </div>
      <div className="grid items-center justify-end mx-4 mt-6 align-middle lg:flex lg:mx-8">
      <div className="container relative inline-block w-full h-32 overflow-hidden shadow-lg cursor-pointer lg:w-60 lg:h-48 bg-gradient-to-b from-blue-400 to-blue-900 rounded-xl">
  <div className="absolute inset-0 flex flex-col items-center justify-center gap-8">
    <div className="text-5xl font-bold text-white">18</div>
    <div className="text-3xl font-bold text-white">Seasons</div>
  </div>
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full transition-all duration-1000 ease-in-out origin-top transform bg-white opacity-0 shine rotate-12"></div>
  </div>
</div>


        {/* Swiper Banner  */}
        <div className="container flex flex-col items-center justify-center gap-14 w-full lg:w-[60%] h-60 lg:mx-8">
          <Swiper
            ref={swiper2}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
        }}
        modules={[EffectCoverflow, Pagination]}
        pagination={{
          clickable: true,
        }}
           
            className="mySwiper landingPageSwiper w-full overflow-hidden md:h-[500px] h-auto  flex md:flex-row flex-col items-center justify-center rounded-xl"
          >
            return (
            <>
            <SwiperSlide className="w-full h-full">
                <img
                  src="https://documents.iplt20.com/ipl/RCB/Logos/Logooutline/RCBoutline.png"
                  alt="img"
                  className="object-cover object-center w-full h-full"
                />
              </SwiperSlide>
              <SwiperSlide className="w-full h-full">
                <img
                  src="https://documents.iplt20.com/ipl/KKR/Logos/Logooutline/KKRoutline.png"
                  alt="img"
                  className="object-cover object-center w-full h-full"
                />
              </SwiperSlide>
              <SwiperSlide className="w-full h-full">
                <img
                  src="https://documents.iplt20.com/ipl/CSK/logos/Logooutline/CSKoutline.png"
                  alt="img"
                  className="object-cover object-center w-full h-full"
                />
              </SwiperSlide>
              <SwiperSlide className="w-full h-full">
                <img
                  src="https://documents.iplt20.com/ipl/GT/Logos/Logooutline/GToutline.png"
                  alt="img"
                  className="object-cover object-center w-full h-full"
                />
              </SwiperSlide>
              <SwiperSlide className="w-full h-full">
                <img
                  src="https://documents.iplt20.com/ipl/CSK/logos/Logooutline/CSKoutline.png"
                  alt="img"
                  className="object-cover object-center w-full h-full"
                />
              </SwiperSlide>
              <SwiperSlide className="w-full h-full">
                <img
                  src="https://documents.iplt20.com/ipl/MI/Logos/Logooutline/MIoutline.png"
                  alt="img"
                  className="object-cover object-center w-full h-full"
                />
              </SwiperSlide>
              <SwiperSlide className="w-full h-full">
                <img
                  src="https://documents.iplt20.com/ipl/MI/Logos/Logooutline/MIoutline.png"
                  alt="img"
                  className="object-cover object-center w-full h-full"
                />
              </SwiperSlide>
              <SwiperSlide className="w-full h-full">
                <img
                  src="https://documents.iplt20.com/ipl/CSK/logos/Logooutline/CSKoutline.png"
                  alt="img"
                  className="object-cover object-center w-full h-full"
                />
              </SwiperSlide>
              <SwiperSlide className="w-full h-full">
                <img
                  src="https://documents.iplt20.com/ipl/MI/Logos/Logooutline/MIoutline.png"
                  alt="img"
                  className="object-cover object-center w-full h-full"
                />
              </SwiperSlide>
              <SwiperSlide className="w-full h-full">
                <img
                  src="https://documents.iplt20.com/ipl/SRH/Logos/Logooutline/SRHoutline.png"
                  alt="img"
                  className="object-cover object-center w-full h-full"
                />
              </SwiperSlide>
              <SwiperSlide className="w-full h-full">
                <img
                  src="https://documents.iplt20.com/ipl/MI/Logos/Logooutline/MIoutline.png"
                  alt="img"
                  className="object-cover object-center w-full h-full"
                />
              </SwiperSlide>
              <SwiperSlide className="w-full h-full">
                <img
                  src="https://documents.iplt20.com/ipl/KKR/Logos/Logooutline/KKRoutline.png"
                  alt="img"
                  className="object-cover object-center w-full h-full"
                />
              </SwiperSlide>
              <SwiperSlide className="w-full h-full">
                <img
                  src="https://documents.iplt20.com/ipl/MI/Logos/Logooutline/MIoutline.png"
                  alt="img"
                  className="object-cover object-center w-full h-full"
                />
              </SwiperSlide>
              <SwiperSlide className="w-full h-full">
                <img
                  src="https://documents.iplt20.com/ipl/KKR/Logos/Logooutline/KKRoutline.png"
                  alt="img"
                  className="object-cover object-center w-full h-full"
                />
              </SwiperSlide>
              <SwiperSlide className="w-full h-full">
                <img
                  src="https://documents.iplt20.com/ipl/CSK/logos/Logooutline/CSKoutline.png"
                  alt="img"
                  className="object-cover object-center w-full h-full"
                />
              </SwiperSlide>
              <SwiperSlide className="w-full h-full">
                <img
                  src="https://documents.iplt20.com/ipl/CSK/logos/Logooutline/CSKoutline.png"
                  alt="img"
                  className="object-cover object-center w-full h-full"
                />
              </SwiperSlide>
              <SwiperSlide className="w-full h-full">
                <img
                  src="https://documents.iplt20.com/ipl/SRH/Logos/Logooutline/SRHoutline.png"
                  alt="img"
                  className="object-cover object-center w-full h-full"
                />
              </SwiperSlide>
              <SwiperSlide className="w-full h-full">
                <img
                  src="https://documents.iplt20.com/ipl/RR/Logos/RR_Logo.png"
                  alt="img"
                  className="object-cover object-center w-full h-full"
                />
              </SwiperSlide>
            </>
            );
          </Swiper>
        </div>

        <div className="container relative inline-block w-full h-32 overflow-hidden shadow-lg cursor-pointer lg:w-60 lg:h-48 bg-gradient-to-b from-blue-400 to-blue-900 rounded-xl">
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-8">
            <div className="text-5xl font-bold text-white">{count2}</div>
            <div className="text-3xl font-bold text-white">Teams</div>
          </div>
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full transition-all duration-1000 ease-in-out origin-top transform bg-white opacity-0 shine rotate-12"></div>
          </div>
        </div>
      </div>

     
    </>
  );
};

export default Hero;