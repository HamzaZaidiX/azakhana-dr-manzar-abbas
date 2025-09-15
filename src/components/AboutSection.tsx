import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Facebook, Youtube } from "lucide-react";

const aboutImages = [
  {
    src: "https://i.ibb.co/r2st2zwh/azakhana.jpg",
    alt: "Azakhana Dr. Manzar Abbas",
    caption: "عزاخانہ ڈاکٹر منظر عباس",
  },
  {
    src: "https://i.ibb.co/7xVMNp5L/Manzar-abbas.jpg",
    alt: "Dr. Manzar Abbas picture",
    caption: "Dr. Syed Manzar Abbas Zaidi",
  },
  {
    src: "https://i.ibb.co/RT66vTV9/ahmed-abbas.jpg",
    alt: "Syed Ahmed Abbas picture",
    caption: "Syed Ahmed Abbas Zaidi",
  },
  {
    src: "https://i.ibb.co/LXJrLMj0/azakhana-full.jpg",
    alt: "Azakhana Dr. Manzar Abbas",
    caption: "عزاخانہ ڈاکٹر منظر عباس",
  },
  {
    src: "https://i.ibb.co/N6G7ZmFs/shrine.jpg",
    alt: "Replica of Imam Musa Al Kazim (A.S) Holy Shrine",
    caption: "Replica of Imam Musa Al Kazim (A.S) Holy Shrine",
  },
];

const AboutSection = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % aboutImages.length);
  const prev = () =>
    setCurrent((current - 1 + aboutImages.length) % aboutImages.length);

  return (
    <section id="about" className="py-16 md:py-24 geometric-pattern">
      <div className="container mx-auto px-4 items-center text-center">
        <h2 className="section-heading text-center items-center mx-auto">
          About Us
        </h2>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <div className="relative w-[500px] h-[600px] mx-auto group overflow-hidden ">
              {aboutImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
                    index === current ? "opacity-100" : "opacity-0"
                  } rounded-lg`}
                >
                  <img
                    src={image.src}
                    alt={`${image.alt} ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                  {/* Caption */}
                  <div className="absolute bottom-2 right-4 text-islamic-gold font-semibold dark:text-green-500 text-xs z-20 select-none">
                    <p>{aboutImages[current].caption}</p>
                  </div>
                </div>
              ))}
              <button
                onClick={prev}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10"
                aria-label="Previous slide"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={next}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10"
                aria-label="Next slide"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div className="md:w-1/2 items-start text-left">
            <div className="rtl-text mr-4 fontFamily-urdu urdu-text">
              <p className="text-xl font-bold mb-2 justify">
                سنہ 1952 سے قائم عزاخانہ جس کی بنیاد ڈاکٹر سید منظر عباس زیدی
                صاحب نے رکھی۔ اس عزاخانہ کو ان کے نام سے ہی منسوب کردیا گیا ہے۔
                اس عزاخانہ میں مجالس 70 سال سے برپا ہو رہی ہیں۔
              </p>
              <p className="text-xl font-bold mb-2 justify">
                ڈاکٹر سید منظر عباس زیدی کے بعد اس عزاداری کے سلسلے کو سید احمد
                عباس زیدی نے نہایت اخلاص و محبت سے آگے بڑھایا، اور پھر یہ سلسلہ
                یوں ہی تسلسل کے ساتھ جاری و ساری ہے، اور ان شاء اللہ ہمیشہ جاری
                رہے گا۔
              </p>
              <p className="text-xl font-bold mb-2 justify">
                اس عزاخانہ میں ڈاکٹر منظر عباس صاحب کے علاؤہ جن علماء و ذاکرین
                نے خدمات انجام دیں ہیں ان کے نام یہ ہیں: علامہ رشید ترابی، علامہ
                ابن حسن نجفی، علامہ مصطفیٰ جوہر، سید احمد عباس زیدی، افسر مہدی
                صاحب، زین العابدین صاحب، زین الصابرین صاحب، مصطفیٰ زیدی صاحب،
                سید ناصر زیدی — پروردگار ان سب کو جوار سید الشہداء میں جگہ عنائت
                فرمایۓ۔ (آمین)
              </p>
              <p className="text-xl font-bold mb-2 justify">
                دور حاضر میں اس عزاخانہ میں درج ذیل حضرات خدمات انجام دیتے ہیں
                اور ہم ان کی صحت، سلامتی اور طول عمر کے لیے دعا گو ہیں: سوز و
                سلام: سید علی عباس زیدی، سید زائر عباس، سید کاشف زیدی، سید اظفر
                زیدی، سید رضی حیدر زیدی، سید حسن حیدر خطابت: پروفیسر ڈاکٹر سید
                ظفر حیدر زیدی، سید سلمان حسین جلالوی، علامہ طلال رضوی نوحاخوان:
                سید ذوالفقار حیدر زیدی، سید حسن حیدر، قنبر اقبال، وسیم رضوی،
                محسن رضا-
              </p>
              <p className="text-xl font-bold mb-2 justify">
                یہ عزاخانہ ایک روحانی اور خوش آئند ماحول فراہم کرتا ہے جہاں
                مجالسِ عزا، میلاد، اور دیگر مذہبی اجتماعات کا انعقاد کیا جاتا ہے
                — جن کا مقصد اللہ سُبْحَانَهُ وَتَعَالَىٰ کی خوشنودی اور اہلِ
                بیت عَلَیْهِمُ السَّلَام کا قرب حاصل کرنا ہے۔ ہم دعاگو ہیں کہ یہ
                تمام اعمال ان کی بارگاہ میں شرفِ قبولیت پائیں۔
              </p>
              <p className="text-xl font-bold mb-2 justify">
                اس عزاخانہ کا مقصد نہ صرف عزاداری سید الشہداء علیہ السلام کو
                فروغ دینا ہے بلکہ تعلیماتِ اہلِ بیت علیہم السلام کو محفوظ رکھنا
                اور آگے پہنچانا بھی اس مشن کا حصہ ہے۔ یہ سلسلہ ان شاء اللہ تا
                قیامت جاری رہے گا۔
              </p>
              <p className="text-xl font-bold mb-2 justify">
                ہمارے فیس بک اور یوٹیوب کے پیجز سے براہِ راست اور ریکارڈڈ مجالس
                نشر کی جائیں گی۔
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center ml-[500px] gap-6 md:gap-8 mt-5">
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
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
