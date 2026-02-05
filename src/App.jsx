import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import ScrollProgress from "./components/helper/scroll-progress";
import Navbar from "./components/navbar";
import "./css/card.scss";
// Homepage Sections
import HeroSection from "./components/homepage/hero-section";
import AboutSection from "./components/homepage/about";
import Experience from "./components/homepage/experience";
import Skills from "./components/homepage/skills";
import Projects from "./components/homepage/projects";
import GitHubActivity from "./components/homepage/github-activity";
import Services from "./components/homepage/services";
import Education from "./components/homepage/education";
import Blog from "./components/homepage/blog";
import ContactSection from "./components/homepage/contact";

import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import ServicesPage from "./pages/services";

function App() {
  return (
    <div className="font-inter">
      <ToastContainer />
      <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
        <ScrollProgress />
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>

        <ScrollToTop />
      </main>
      <Footer />
    </div>
  );
}

export default App;
