/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import BuildStack from "./components/BuildStack";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background selection:bg-accent/30 selection:text-white">
      <div className="grid-overlay" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <BuildStack />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
