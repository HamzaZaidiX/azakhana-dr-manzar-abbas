import React from "react";
import Carousel from "./Carousel";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden geometric-pattern dark:bg-islamic-black/95 dark:bg-blend-overlay select-non cursor-default"
    >
      <div className="absolute inset-0 z-0">
        <Carousel />
      </div>
      <div className="relative z-10 container mx-auto px-4 py-12 text-center pointer-events-none">
        <div className="max-w-2xl mx-auto">
          <div className="mx-auto mb-8 w-64 md:w-80 animate-fade-in">
            {/* Light logo */}
            <a
              href="/"
              className="pointer-events-auto cursor-pointer shadow-md"
            >
              <img src="/assets/logo-light.png" alt="logo" className="block" />
            </a>
            {/* Dark logo */}
            {/* <a href="/" className="pointer-events-auto">
              <img
                src="/assets/logo-dark.png"
                alt="logo"
                className="block"
              />
            </a> */}
          </div>

          {/* <h1 className="text-3xl md:text-5xl font-bold text-islamic-black dark:text-white mb-6 font-playfair">
            Azakhana Dr. Manzar Abbas Zaidi
          </h1> */}
          <p className="text-xl font-semibold md:text-2xl text-white dark:text-islamic-gold mb-8">
            سنہ 1952 سے قائم امام بارگاہ و عزاخانہ جس کی بنیاد ڈاکٹر سید منظر
            عباس زیدی صاحب نے رکھی۔
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a
              href="#about"
              className="islamicButton dark:bg-blue-600 dark:hover:bg-blue-700 pointer-events-auto"
            >
              Learn More
            </a>
            <a
              href="#events"
              className="islamicButtonOutline dark:border-blue-600 dark:text-blue-500 dark:hover:bg-blue-600 dark:hover:text-white pointer-events-auto"
            >
              Upcoming Events
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
