import "./Homeindex.css";
import "./components/sections.css";
import Hero from "./components/Hero";
import WhyVaastu from "./components/WhyVaastu";
import CraftedByNature from "./components/CraftedByNature";
import Collections from "./components/Collections";
// import FeaturedStone from "./components/FeaturedStone";
import ShowroomExperience from "./components/ShowroomExperience";
import OurStores from "./components/OurStores";
import GlobalPresence from "./components/GlobalPresence";
import Legacy from "./components/Legacy";
// import Applications from "./components/Applications";
import Process from "./components/Process";
import FinalCta from "./components/FinalCta";

function HomeIndex() {
  return (
    <div className="w-full">
      <Hero />
      <CraftedByNature />
      <WhyVaastu />
      {/* <FeaturedStone /> */}
      <ShowroomExperience />
      <OurStores />
      <Collections />

      <GlobalPresence />
      <Legacy />
      {/* <Applications /> */}
      <Process />
      <FinalCta />
    </div>
  );
}

export default HomeIndex;
