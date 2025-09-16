import React from "react";
import { ChevronRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-islamic-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div>
            <a href="#home">
              <h1 className="text-2xl whitespace-nowrap font-semibold md:text-4xl dark:text-islamic-gold text-islamic-white hover:scale-105 hover:text-islamic-green dark:hover:text-islamic-red transition-colors urdu-text text-center justify-center">
                عزاخانہ ڈاکٹر منظر عباس
              </h1>
            </a>
          </div>

          <div>
            <h3 className="text-xl font-playfair font-bold mb-4 text-islamic-gold dark:text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {["Home", "About", "Events", "Videos", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-300 hover:text-islamic-green transition-colors flex items-center hover:dark:text-islamic-red"
                  >
                    <ChevronRight size={16} className="mr-1" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-playfair font-bold mb-4 text-islamic-gold dark:text-white">
              Events
            </h3>
            <ul className="space-y-2">
              {["Daily Majalis", "Recorded Videos", "Live Stream Majalis"].map(
                (service) => (
                  <li key={service}>
                    <a
                      href="#events"
                      className="text-gray-300 hover:text-islamic-green transition-colors flex items-center hover:dark:text-islamic-red"
                    >
                      <ChevronRight size={16} className="mr-1" />
                      {service}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()}{" "}
            <a href="/" className="hover:text-islamic-gold transition-colors">
              عزاخانہ ڈاکٹر منظر عباس
            </a>{" "}
            All rights reserved.
          </p>
          <p className="mt-2 text-sm">
            Designed by{" "}
            <a
              href="https://hamza-zaidi-portfolio-jade.vercel.app/"
              className="hover:text-islamic-gold transition-colors hover:underline hover:underline-offset-4 hover:decoration-wavy font-semibold decoration-primary hover:decoration-primary-hover"
            >
              Hamza Zaidi
            </a>{" "}
            with ❤️ Dedicated to{" "}
            <span className="font-bold text-sm text-[#10d610] dark:text-[#dd4e4e] hover:underline hover:underline-offset-4 hover:decoration-wavy font-semibold hover:decoration-islamic-gold">
              AhlulBayt (A.S)
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

