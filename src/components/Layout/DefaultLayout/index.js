import Header from "./Header";
import Footer from "./Footer";
import classNames from "classnames/bind";

function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="container">{children}</div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
