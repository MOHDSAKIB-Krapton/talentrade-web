// components/Layout.js

import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <main className="w-full overflow-hidden">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
