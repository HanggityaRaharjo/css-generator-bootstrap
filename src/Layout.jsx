import Navbar from "./components/Navbar";
import Sidebar from "./components/sidebar/Sidebar";

const Layout = ({ children }) => {
  return (
    <div id="app">
      <Navbar />
      <Sidebar />
      <div id="main-content-wrapper">
        <main id="main-content">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
