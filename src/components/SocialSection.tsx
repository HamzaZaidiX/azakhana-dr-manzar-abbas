import React from "react";
import { Facebook, Instagram, Youtube } from "lucide-react";

const SocialSection = () => {
  return (
    <section className="py-16 md:py-20 geometric-pattern dark:bg-islamic-black">
      <div className="container mx-auto px-4 text-center">
        <h2 className="section-heading text-3xl md:text-4xl font-playfair font-bold mb-8 text-islamic-red dark:text-white mx-auto">
          Connect With Us
        </h2>

        <p className="text-lg mb-8 max-w-2xl mx-auto dark:text-white text-islamic-black">
          Stay updated with our Broadcast Live streams, latest Events, programs,
          and Announcements by following us on Social Media.
        </p>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          <a
            href="https://www.facebook.com/imambargah4"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center hover:opacity-80 transition-opacity group"
            aria-label="Facebook"
          >
            <div className="bg-white dark:text-white text-islamic-black dark:bg-islamic-gray dark:text-white dark:hover:bg-islamic-red p-4 hover:bg-islamic-blue rounded-full mb-2 transform transition-transform group-hover:scale-110">
              <Facebook size={28} />
            </div>
            <span>Facebook</span>
          </a>

          <a
            href="https://instagram.com/azakhana_manzarabbas"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center hover:opacity-80 transition-opacity group"
            aria-label="Instagram"
          >
            <div className="bg-white dark:text-white text-islamic-black dark:bg-islamic-gray dark:text-white dark:hover:bg-islamic-red hover:bg-islamic-blue p-4 rounded-full mb-2 transform transition-transform group-hover:scale-110">
              <Instagram size={28} />
            </div>
            <span>Instagram</span>
          </a>

          <a
            href="https://www.youtube.com/@azakhana_manzarabbas/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center hover:opacity-80 transition-opacity group"
            aria-label="YouTube"
          >
            <div className="bg-white dark:text-white text-islamic-black dark:bg-islamic-gray dark:text-white dark:hover:bg-islamic-red hover:bg-islamic-blue p-4 rounded-full mb-2 transform transition-transform group-hover:scale-110">
              <Youtube size={28} />
            </div>
            <span>YouTube</span>
          </a>
        </div>

        {/* <div className="mt-12 border-t border-white/30 pt-10 max-w-md mx-auto">
          <h3 className="text-xl font-playfair font-bold mb-4">Subscribe to Our Newsletter</h3>
          
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-3 rounded-md focus:outline-none flex-1 text-islamic-gray dark:bg-islamic-gray/20 dark:text-white"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-islamic-black dark:text-white rounded-md font-medium hover:bg-opacity-90 transition-colors"
            >
              Subscribe
            </button>
          </form> 
        </div>*/}
      </div>
    </section>
  );
};

export default SocialSection;
