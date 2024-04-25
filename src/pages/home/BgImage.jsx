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
    "/bg-1.jpg",
    "/bg-2.jpg",
    "/bg-3.jpg",
    "/bg-4.jpg",
    "/bg-5.jpg",
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
