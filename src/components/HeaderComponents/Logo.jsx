import { Link } from "react-router-dom";

function Logo() {
  return (
    <>
      <Link
        to={`/`}
        className=" text-center text-blue-500 font-bold text-xl sm:font-black sm:text-5xl "
      >
        Yaya <span className=" text-yellow-500">Food</span>
      </Link>
    </>
  );
}

export default Logo;
