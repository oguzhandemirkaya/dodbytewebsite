"use client";

import Slider from "react-slick";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderMobile = () => {
  const isMediumScreen = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });

  const settings = {
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 1000,
    className: "w-full mx-auto cursor-pointer center-mode",
  };

  if (isMediumScreen) {
    settings.slidesToShow = 1.67;
  } else if (isSmallScreen) {
    settings.slidesToShow = 1;
  }

  return (
    <div>
      <Slider {...settings}>
        <>
        <div className="rounded-md px-2 md:p-10">
            <Image
              priority
              src="/images/002.png"
              alt="logo"
              width={250}
              height={250}
              className="
                  rounded-2xl pl-30
                      "
            />
          </div>
        </>

        <>
          <div className="rounded-md px-2 md:p-10">
            <Image
              priority
              src="/images/002.png"
              alt="logo"
              width={250}
              height={250}
              className="
                  rounded-2xl 
                      "
            />
          </div>
        </>

        <>
          <div className="rounded-md px-2 md:p-10">
            <Image
              priority
              src="/images/002.png"
              alt="logo"
              width={250}
              height={250}
              className="
                  rounded-2xl 
                      "
            />
          </div>
        </>

        <>
          <div className="rounded-md px-2 md:p-10">
            <Image
              priority
              src="/images/002.png"
              alt="logo"
              width={250}
              height={250}
              className="
                  rounded-2xl 
                      "
            />
          </div>
        </>

        <>
          <div className="rounded-md px- md:p-10">
            <Image
              priority
              src="/images/002.png"
              alt="logo"
              width={250}
              height={250}
              className="
                  rounded-2xl 
                      "
            />
          </div>

          
        </>
      </Slider>
    </div>
  );
};

export default SliderMobile;