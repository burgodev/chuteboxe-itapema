const Banner = () => {
  return (
    <div className="relative w-full h-[75vh] animate-fadeIn">
      <img
        src="/background.webp"
        alt="Free Movies Banner"
        className="object-cover w-full h-full"
      />
      <div className="absolute inset-0 opacity-75 bg-gradient-to-b from-dark via-black to-dark"></div>
    </div>
  );
};

export default Banner;
