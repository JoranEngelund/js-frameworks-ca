import Footer from "../Footer";
import Header from "../Header";
import { Outlet } from "react-router-dom";
import { Main } from "./styled";

/**
 *
 * @returns Layout component that returns Header, Main -> nested Outlet component and Footer component
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
