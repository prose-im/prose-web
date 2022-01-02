import Navbar from "./Navbar";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <CallToAction />
      <Footer />
    </>
  );
}
