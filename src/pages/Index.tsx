import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Carousel from "../components/Carousel";
import AboutSection from "../components/AboutSection";
import EventsSection from "../components/EventsSection";
// import GallerySection from '../components/GallerySection';
import VideosSection from "../components/VideosSection";
import SocialSection from "../components/SocialSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import PrayerTimesWidget from "@/components/PrayerTimesWidget";

const Index = () => {
  return (
    <div className="min-h-screen geometric-pattern dark:bg-islamic-black dark:text-islamic-cream animate-fade-in">
      <Navbar />
      <PrayerTimesWidget />
      <Hero />
      <Carousel />
      <AboutSection />
      <EventsSection />
      <VideosSection />
      <SocialSection />
      {/* <GallerySection /> */}
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
