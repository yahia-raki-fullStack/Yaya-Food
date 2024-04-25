/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
function BgImage() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const imgIndexInterval = setInterval(() => {
      setIndex((i) => (i + 1) % 5);
    }, 5000); // Use modulo operator to loop back to 0 when index reaches 4

    return function () {
      clearInterval(imgIndexInterval);
    };
  }, []);

  const images = [
    "/src/assets/BgImg/bg-1.jpg",
    "/src/assets/BgImg/bg-2.jpg",
    "/src/assets/BgImg/bg-3.jpg",
    "/src/assets/BgImg/bg-4.jpg",
    "/src/assets/BgImg/bg-5.jpg",
  ];

  return (
    <>
      <img
        src={images[index]}
        alt="images of some foods"
        className={` bg-cover bg-center   w-full  max-h-dvh h-full md:object-cover md:object-center animate-[pulse_5s_ease-in-out_infinite]`}
      />
    </>
  );
}

export default BgImage;
