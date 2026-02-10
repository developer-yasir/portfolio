import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import ScrollProgress from "./components/helper/scroll-progress";
import Navbar from "./components/navbar";
import "./css/card.scss";
import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { LazyMotion, domAnimation } from "framer-motion";

const HomePage = lazy(() => import("./pages/home"));
const ServicesPage = lazy(() => import("./pages/services"));

function App() {
  return (
    <div className="font-inter">
      <ToastContainer />
      <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
        <LazyMotion features={domAnimation}>
          <ScrollProgress />
          <Navbar />

          <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
            </Routes>
          </Suspense>

          <ScrollToTop />
        </LazyMotion>
      </main>
      <Footer />
    </div>
  );
}

export default App;
