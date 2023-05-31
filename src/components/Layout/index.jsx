import Footer from "../Footer";
import Header from "../Header";
import Main from "../Main";
import { Outlet } from "react-router-dom";

/**
 *
 * @returns Layout component that returns Header, Main -> nested Outlet components and Footer component
 */
export default function Layout() {
  return (
    <div>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </div>
  );
}
