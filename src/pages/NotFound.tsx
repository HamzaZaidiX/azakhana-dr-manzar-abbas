import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen geometric-pattern text-center dark:bg-islamic-black dark:text-islamic-cream flex flex-col items-center justify-center">
      <Navbar />
      <div className="text-center justify-center items-center">
        <div className="mx-auto mb-8 w-60 md:w-80 animate-fade-in">
          {/* Light logo */}
          <a href="/" className="pointer-events-auto cursor-pointer shadow-md">
            <img src="/assets/logo-light.png" alt="logo" className="block" />
          </a>
        </div>
        <h1 className="text-7xl font-bold">404</h1>
        <p className="text-2xl text-gray-600 mb-4 mt-4">Oops! Page not found</p>
        <a
          href="/"
          className="text-blue-500 hover:text-blue-700 underline text-xl"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
