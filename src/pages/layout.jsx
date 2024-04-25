import { Outlet, useNavigation } from "react-router-dom";
import Header from "../components/Header";
import Loader from "../ui/Loader";
import Footer from "../components/Footer";

function Layout() {
  const navigation = useNavigation();
  // console.log(navigation);
  const isLoading = navigation.state === `loading`;
  return (
    <div className="md:overflow-hidden lg:overflow-hidden overflow-hidden">
      <Header />
      {isLoading && <Loader />}

      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
