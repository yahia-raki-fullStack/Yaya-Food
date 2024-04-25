import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className=" flex justify-center items-center  text-xl bg-black text-white my-auto h-14">
      <Link to={`/About`}>About</Link>
    </footer>
  );
}

export default Footer;
