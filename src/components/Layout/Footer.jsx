const Footer = () => {
  return (
    <footer className="w-full bg-[#080808] px-5 py-16 text-white sm:px-8 md:px-12 lg:flex lg:h-[40vh] lg:items-center lg:px-[5%] lg:py-0">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5 lg:gap-10">
        {/* Logo */}
        <div className="flex items-center lg:justify-start">
          <img
            src="/2016-07-09.png"
            alt="Vaastu"
            className="w-35 h-auto object-contain"
          />
        </div>

        {/* Company Information */}

        <div className="text-[16px] leading-[1.35]">
          <p>
            Vaastu Marble & Granites Pvt.Ltd Opp.Ayyappa Swamy temple,
            Karmanghat, Hyderabad - 500079 Telangana, India From LB Nagar: 1km
          </p>
        </div>

        {/* Location 1 */}

        <div>
          <h2>Factory Location-1</h2>
          <div className="text-[16px] leading-[1.35]">
            <p>
              Punglia Marble Pvt.Ltd F-30,New RIICO Industrial Area,
              Chittorgarh,Rajasthan-312001
            </p>
          </div>
        </div>

        {/* Location 2 */}

        <div>
          <h2>Factory Location-2</h2>
          <div className="text-[16px] leading-[1.35]">
            <p>
              Himalayan Onyx Pvt.Ltd Near Mandalda Village
              Chittorgarh,Rajasthan-312001.
            </p>
          </div>
        </div>

        {/* Social Media */}

        <div>
          <p className="text-[14px] tracking-[0.18em]">FOLLOW US</p>
          <div className="mt-5 flex flex-col text-[16px] leading-[1.35]">
            <p>+91 9391930777</p>
            <p>girishpunglia@gmail.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
