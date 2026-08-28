import { useState, useEffect } from "react";
import "./Hero.css";

const SLIDE_DURATION = 5000; // ms — keep in sync with the interval below

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
    }, SLIDE_DURATION);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <main className="relative h-[60vh] w-full overflow-hidden md:h-[70vh]">
        {/* Top segmented progress loader */}
        <div className="progress-loader">
          {slides.map((_, index) => (
            <div key={index} className="progress-segment">
              {index < current && <div className="progress-fill-full" />}
              {index === current && (
                <div
                  key={current}
                  className="progress-fill-active"
                  style={{ animationDuration: `${SLIDE_DURATION}ms` }}
                />
              )}
            </div>
          ))}
        </div>

        <div className="relative h-full w-full">
          {slides.map((src, index) => (
            <div key={src} className="slide-img-wrapper">
              <img
                src={src}
                alt=""
                className={`slide-img ${index === current ? "slide-active" : "slide-inactive"}`}
              />
            </div>
          ))}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
            <h2 className="-mt-4 text-2xl md:text-6xl">Example Container</h2>
          </div>
        </div>
      </main>

      {/* Section - 1 */}
      <section className="relative h-[40vh] w-full overflow-hidden md:h-auto md:aspect-[1845/661]">
        <div className="kenburns-wrapper absolute inset-0 h-full w-full">
          <img
            src="/Home/antico-slider.jpg"
            alt="Exclusive Collection"
            className="kenburns-zoom h-full w-full object-cover"
          />
        </div>

        <div className="relative z-10 flex h-full items-center justify-center px-6 md:justify-center">
          <div className="text-white md:ml-[14.7%]">
            <h2 className="text-[22px] font-semibold tracking-[0.1em] md:text-[42px] md:tracking-[0.12em]">
              Example
              <sup className="ml-1 align-super text-[10px] md:text-[11px]">®</sup>{" "}
              Lorem, ipsum.
            </h2>

            <p className="mt-3 max-w-[90vw] text-[15px] leading-[1.4] md:mt-4 md:max-w-[900px] md:text-[29px] md:leading-[1.3]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>

            <p className="mt-4 text-[11px] tracking-[0.25em] md:mt-7 md:text-[13px] md:tracking-[0.3em]">
              DISCOVER THIS MATERIAL
            </p>
          </div>
        </div>
      </section>

      {/* Section - 2 */}
      <section className="relative h-[40vh] w-full overflow-hidden md:h-auto md:aspect-[1845/661]">
        <div className="kenburns-wrapper absolute inset-0 h-full w-full">
          <img
            src="/Home/antico-slider.jpg"
            alt="Antolini StonerRoom"
            className="kenburns-zoom h-full w-full object-cover"
          />
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
          <h2 className="text-2xl md:-mt-4 md:text-6xl">Example Container</h2>
        </div>
      </section>

      {/* Section - 3 */}
      <section className="relative h-[40vh] w-full overflow-hidden md:h-auto md:aspect-[1845/661]">
        <div className="kenburns-wrapper absolute inset-0 h-full w-full">
          <img
            src="/Home/antico-slider.jpg"
            alt="Antolini StonerRoom"
            className="kenburns-zoom h-full w-full object-cover"
          />
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
          <h2 className="text-xl md:-mt-4 md:text-4xl">Example Container</h2>
        </div>
      </section>

      {/* Section - 4 */}
      <section className="relative h-[45vh] w-full overflow-hidden md:h-auto md:aspect-[1845/661]">
        <div className="kenburns-wrapper absolute inset-0 h-full w-full">
          <img
            src="/Home/antico-slider.jpg"
            alt="ZeroCare"
            className="kenburns-zoom h-full w-full object-cover"
          />
        </div>

        <div className="absolute inset-0 flex items-center justify-center px-4 text-center text-white">
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-light tracking-tight md:text-6xl">
              Example
            </h2>

            <p className="mt-4 text-[10px] font-medium tracking-[0.35em] md:mt-10 md:text-sm md:tracking-[0.5em]">
              NEW TECHNOLOGY
            </p>

            <p className="mt-2 text-sm font-normal md:mt-3 md:text-2xl">
              Developed for surfaces in Leather, Matt and Lux
            </p>

            <p className="mt-4 text-[10px] font-medium tracking-[0.3em] md:mt-10 md:text-sm md:tracking-[0.4em]">
              DISCOVER MORE
            </p>
          </div>
        </div>
      </section>

      {/* Section - 5 */}
      <section className="relative h-[35vh] w-full bg-black text-white md:h-[40vh]">
        {/* Heading */}
        <div className="absolute left-0 top-[50px] w-full px-4 text-center md:top-[90px]">
          <p className="text-[11px] font-normal tracking-[0.25em] md:text-[14px] md:tracking-[0.35em]">
            Lorem ipsum dolor sit amet.
          </p>
        </div>

        {/* Technology Names */}
        <div className="absolute left-0 top-[100px] grid w-full grid-cols-3 gap-2 px-2 md:top-[160px]">
          <div className="text-center">
            <h2 className="text-lg font-light md:text-[38px]">Example</h2>
          </div>

          <div className="text-center">
            <h2 className="text-lg font-light md:text-[38px]">Example</h2>
          </div>

          <div className="text-center">
            <h2 className="text-lg font-light md:text-[38px]">Example</h2>
          </div>
        </div>
      </section>

      {/* Section - 6 */}
      <section className="relative h-[45vh] w-full overflow-hidden md:h-auto md:aspect-[1845/661]">
        <div className="kenburns-wrapper absolute inset-0 h-full w-full">
          <img
            src="/Home/antico-slider.jpg"
            alt="ZeroCare"
            className="kenburns-zoom h-full w-full object-cover"
          />
        </div>

        <div className="absolute inset-0 flex items-center justify-center px-4 text-center text-white">
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-light tracking-tight md:text-6xl">
              Example
            </h2>

            <p className="mt-4 text-[10px] font-medium tracking-[0.35em] md:mt-10 md:text-sm md:tracking-[0.5em]">
              NEW TECHNOLOGY
            </p>

            <p className="mt-2 text-sm font-normal md:mt-3 md:text-2xl">
              Developed for surfaces in Leather, Matt and Lux
            </p>

            <p className="mt-4 text-[10px] font-medium tracking-[0.3em] md:mt-10 md:text-sm md:tracking-[0.4em]">
              DISCOVER MORE
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;