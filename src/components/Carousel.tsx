import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/8/89/The_Ka%27ba%2C_Great_Mosque_of_Mecca%2C_Saudi_Arabia_%284%29.jpg",
    alt: "Kabaa in Saudia Arabia",
    caption: "Khana e Kabaa in Mecca, Suadia Arabia",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Masjid_Nabawi_The_Prophet%27s_Mosque%2C_Madina.jpg",
    alt: "Masjid-al-Nabawi in Saudia Arabia",
    caption: "Masjid Al Nabawi (S.A.W.W) in Medina, Saudi Arabia",
  },
  {
    src: "https://i.pinimg.com/1200x/8b/59/8a/8b598a9a278455db9fc6f96c6c37326e.jpg",
    alt: "Jannat Al Baqi in Saudia Arabia",
    caption:
      "Jannat Al Baqi (Graves of Ahylulbayt A.S) in Medina, Saudi Arabia",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/6/69/Shrine_of_Imam_Ali_Najaf_August_2023.jpg",
    alt: "Imam Ali Shrine in Iraq",
    caption: "Imam Ali (A.S) Holy Shrine in Najaf, Iraq",
  },
  {
    src: "https://images.pexels.com/photos/18766055/pexels-photo-18766055.jpeg",
    alt: "Imam Hussain Shrine in Iraq",
    caption: "Imam Hussain (A.S) Holy Shrine in Karbala, Iraq",
  },

  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Al_Abbas_Mosque%2C_Shrine_Karbala.jpg/960px-Al_Abbas_Mosque%2C_Shrine_Karbala.jpg",
    alt: "Hazrat Abbas Shrine in Iraq",
    caption: "Hazrat Abbas (A.S) Holy Shrine in Karbala, Iraq",
  },
  {
    src: "https://i.ibb.co/Z61BHx0X/zayd-ibn-ali-shrine.jpg",
    alt: "Hazrat Zayd ibn Ali Shaheed Shrine in Iraq",
    caption: "Hazrat Zayd ibn Ali Shaheed (A.S) Holy Shrine in Kifl, Iraq",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Al-Kadhimiya_Mosque%2C_Kadhmain_Shrine.jpg/1024px-Al-Kadhimiya_Mosque%2C_Kadhmain_Shrine.jpg",
    alt: "Imam Musa Al Kazim & Imam Jawwad (A.S) Holy Shrine in Iraq",
    caption:
      "Imam Musa Al Kazim & Imam Muahammad Taqi (A.S) Holy Shrine in Kadhmain, Iraq",
  },
  {
    src: "https://i.pinimg.com/1200x/e3/69/fd/e369fd3c456d36a6d9adecb16605b6e8.jpg",
    alt: "Imam Reza (A.S) Holy Shrine in Iran",
    caption: "Imam Reza (A.S) Holy Shrine in Mashhad, Iran",
  },
  {
    src: "https://i.pinimg.com/1200x/bd/63/c7/bd63c7e0157dfbb12f8751f302d9bf44.jpg",
    alt: "Imam Ali Naqi & Imam Hasan Askari (A.S) Holy Shrine in Iraq",
    caption:
      "Imam Ali Naqi & Imam Hasan Al Askari (A.S) Holy Shrine in Samarra, Iraq",
  },
  {
    src: "https://i.pinimg.com/1200x/0c/c4/fe/0cc4febbf3726067206ffdbdcd497f88.jpg",
    alt: "Maqam E Imam Zamana (A.J.T.F) Iraq",
    caption: "Maqam E Imam Zamana (A.J.T.F) Karbala, Iraq",
  },
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const next = useCallback(
    () => setCurrent((current + 1) % images.length),
    [current]
  );
  const prev = () => setCurrent((current - 1 + images.length) % images.length);

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      next();
    }, 15000);

    return () => clearInterval(interval);
  }, [current, autoplay, next]);

  return (
    <div className="relative w-full overflow-hidden h-full group">
      {/* Carousel images */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-black/30 z-10" />
          <img
            src={`${image.src}?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&h=500&q=80`}
            alt={image.alt}
            className="w-full h-full object-cover object-center"
          />
        </div>
      ))}

      {/* Navigation arrows */}
      <button
        onClick={(e) => {
          e.preventDefault();
          setAutoplay(true);
          prev();
        }}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full transition-opacity z-50"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={(e) => {
          e.preventDefault();
          setAutoplay(true);
          next();
        }}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full transition-opacity z-50"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 hidden md:flex space-x-2 z-50">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrent(index);
              setAutoplay(true);
            }}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === current ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Caption */}
     <div className="absolute bottom-4 w-full px-16 md:px-0 md:w-auto text-center md:text-right right-4 text-white font-semibold dark:text-islamic-gold text-sm z-20 select-none">
        <p>{images[current].caption}</p>
      </div>
    </div>
  );
};

export default Carousel;
