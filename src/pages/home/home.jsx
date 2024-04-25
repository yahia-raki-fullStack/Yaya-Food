/* eslint-disable no-unused-vars */

import BgImage from "./BgImage";

function Home() {
  // eslint-disable-next-line no-unused-vars

  return (
    <>
      {" "}
      <main className="flex justify-center items-center flex-wrap  w-dvw h-dvh relative ">
        <div className={`relative w-full h-full `}>
          {/* <img
          src="/src/assets/BgImg/bg-1.jpg"
          alt="images of some foods"
          className="object-cover object-center w-full h-full"
        /> */}
          <BgImage />
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
            <div className="   bg-indigo-400/75 p-4 m-4 rounded-md shadow-md md:p-5 md:m-5">
              <h1 className="text-center font-extrabold text-xl text-white md:text-pretty md:text-2xl ">
                Welcome To <span className="text-blue-500">Yaya</span>
                <span className="text-orange-400">Food</span> the best website
                to search for your favorite Meals
              </h1>
            </div>
          </div>{" "}
          <div className="absolute top-0 left-0 w-full h-full bg-slate-200 opacity-25"></div>
        </div>
      </main>
    </>
  );
}

export default Home;
