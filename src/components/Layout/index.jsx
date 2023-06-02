import Footer from "../Footer";
import Header from "../Header";
import { Outlet } from "react-router-dom";

/**
 *
 * @returns Layout component that returns Header, Main -> nested Outlet component and Footer component
 */
export default function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
