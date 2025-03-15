import { useEffect, useState } from "react";
import { HeaderContent } from "./components";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <header className="w-screen px-4 py-6 border-b border-solid md:px-6 lg:px-8 xl:px-16 bg-darkGrey border-mediumGrey">
        <div className="flex flex-row items-center gap-8">
          <img
            className="object-contain rounded cursor-pointer max-h-[65px] transition-all duration-300 animate-slideInFromLeftAndFadeIn"
            src={"./freeMovies.webp"}
            alt="Free movies logo"
            onClick={scrollToTop}
          />

          <HeaderContent />
        </div>
      </header>
      {isSticky && (
        <header className="fixed top-0 left-0 right-0 z-50 w-screen px-4 py-6 shadow-lg md:px-6 lg:px-8 xl:px-16 bg-dark">
          <div className="flex flex-row items-center gap-8">
            <img
              className="object-contain rounded cursor-pointer max-h-[50px] transition-all duration-300 animate-slideInFromLeftAndFadeIn"
              src={"./freeMovies.webp"}
              alt="Free movies logo"
              onClick={scrollToTop}
            />
            <HeaderContent />
          </div>
        </header>
      )}
    </>
  );
};

export default Header;
