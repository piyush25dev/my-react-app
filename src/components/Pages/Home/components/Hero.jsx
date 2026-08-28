import { useState, useEffect } from "react";
import "./Hero.css";

function Hero() {
  const slides = [
    "/Home/tajmahal-banner.jpg",
    "/Home/antico-slider.jpg",
    "/Home/stock.jpg",
    "/Home/alaska-banner.jpg",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <main className="relative h-[70vh] w-full overflow-hidden">
        <div className="relative h-full w-full">
          {slides.map((src, index) => (
            <img
              key={src}
              src={src}
              alt=""
              className={`
                absolute inset-0 h-full w-full object-cover
                transition-opacity duration-1000 ease-in-out
                ${index === current ? "opacity-100" : "opacity-0"}
              `}
            />
          ))}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <h2 className="-mt-4 text-4xl md:text-6xl">Example Container</h2>
          </div>
        </div>
      </main>

      {/* Section - 1 */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <img
          src="/Home/antico-slider.jpg"
          alt="Exclusive Collection"
          className="kenburns-zoom absolute inset-0 h-full w-full object-cover"
        />

        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="ml-[14.7%] text-white">
            <h2 className="text-[32px] font-semibold tracking-[0.12em] md:text-[42px]">
              Example
              <sup className="ml-1 align-super text-[11px]">®</sup> Lorem,
              ipsum.
            </h2>

            <p className="mt-4 max-w-[900px] text-[22px] leading-[1.3] md:text-[29px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>

            <p className="mt-7 text-[13px] tracking-[0.3em]">
              DISCOVER THIS MATERIAL
            </p>
          </div>
        </div>
      </section>

      {/* Section - 2 */}
      <section className="kenburns-zoom relative aspect-[1845/661] w-full overflow-hidden">
        <img
          src="/Home/antico-slider.jpg"
          alt="Antolini StonerRoom"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h2 className="-mt-4 text-4xl md:text-6xl">Example Container</h2>
        </div>
      </section>

      {/* Section - 3 */}
      <section className="kenburns-zoom relative aspect-[1845/661] w-full overflow-hidden">
        <img
          src="/Home/antico-slider.jpg"
          alt="Antolini StonerRoom"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h2 className="-mt-4 text-2xl md:text-4xl">Example Container</h2>
        </div>
      </section>

      {/* Section - 4 */}
      <section className="kenburns-zoom relative aspect-[1845/661] w-full overflow-hidden">
        <img
          src="/Home/antico-slider.jpg"
          alt="ZeroCare"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div className="flex flex-col items-center">
            <h2 className="text-4xl font-light tracking-tight md:text-6xl">
              Example
            </h2>

            <p className="mt-10 text-xs font-medium tracking-[0.5em] md:text-sm">
              NEW TECHNOLOGY
            </p>

            <p className="mt-3 text-lg font-normal md:text-2xl">
              Developed for surfaces in Leather, Matt and Lux
            </p>

            <p className="mt-10 text-xs font-medium tracking-[0.4em] md:text-sm">
              DISCOVER MORE
            </p>
          </div>
        </div>
      </section>

      {/* Section - 5 */}
      <section className="relative h-[40vh] w-full bg-black text-white">
        {/* Heading */}
        <div className="absolute left-0 top-[90px] w-full text-center">
          <p className="text-[14px] font-normal tracking-[0.35em]">
            Lorem ipsum dolor sit amet.
          </p>
        </div>

        {/* Technology Names */}
        <div className="absolute left-0 top-[160px] grid w-full grid-cols-3">
          <div className="text-center">
            <h2 className="text-[38px] font-light">Example</h2>
          </div>

          <div className="text-center">
            <h2 className="text-[38px] font-light">Example</h2>
          </div>

          <div className="text-center">
            <h2 className="text-[38px] font-light">Example</h2>
          </div>
        </div>
      </section>

      {/* Section - 6 */}
      <section className="kenburns-zoom relative aspect-[1845/661] w-full overflow-hidden">
        <img
          src="/Home/antico-slider.jpg"
          alt="ZeroCare"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div className="flex flex-col items-center">
            <h2 className="text-4xl font-light tracking-tight md:text-6xl">
              Example
            </h2>

            <p className="mt-10 text-xs font-medium tracking-[0.5em] md:text-sm">
              NEW TECHNOLOGY
            </p>

            <p className="mt-3 text-lg font-normal md:text-2xl">
              Developed for surfaces in Leather, Matt and Lux
            </p>

            <p className="mt-10 text-xs font-medium tracking-[0.4em] md:text-sm">
              DISCOVER MORE
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
