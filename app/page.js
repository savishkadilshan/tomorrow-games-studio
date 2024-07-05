import React from 'react'
import styles from "./page.module.css";

// components
import HeroSection from "./components/HeroSection";
import ProjectSection from "./components/ProjectSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProjectSection />
      <Footer />
    </main>
  );
}
