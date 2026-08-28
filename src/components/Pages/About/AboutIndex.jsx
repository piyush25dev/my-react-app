import {
  Box,
} from "@mui/material";
import CompanyTimeline from "./components/CompanyTimeline";
import SuccessStory from "./components/SuccessStory";
import TeamSection from "./components/TeamSection";
import DiscoverSection from "./components/DiscoverSection";

const AboutIndex = () => {
  return (
    <Box>
      <SuccessStory/>
      <TeamSection/>
      <br/>
      <CompanyTimeline/>
      <DiscoverSection/>
    </Box>
  );
};

export default AboutIndex;
