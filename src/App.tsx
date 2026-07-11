import { Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TransitionProvider } from "@/lib/transition";
import { useLenis, useScrollReveals, useScrollToTop } from "@/lib/motion";
import Home from "@/pages/Home";
import Journeys from "@/pages/Journeys";
import JourneyDetail from "@/pages/JourneyDetail";
import Homestays from "@/pages/Homestays";
import About from "@/pages/About";
import Team from "@/pages/Team";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";

export default function App() {
  useLenis();
  useScrollToTop();
  useScrollReveals();

  return (
    <TransitionProvider>
      <div className="grain">
        <Navbar />
        <main id="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/journeys" element={<Journeys />} />
            <Route path="/journeys/:slug" element={<JourneyDetail />} />
            <Route path="/homestays" element={<Homestays />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </TransitionProvider>
  );
}
