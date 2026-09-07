import { useMemo, useState } from "react";
import { Box } from "@mui/material";
import { storeLocations } from "../../../Data/StoreData";
import StoreLocatorLeft from "./StoreLocatorLeft";
import StoreLocatorRight from "./StoreLocatorRight";

const StoreLocator = () => {
  const [selectedLocation, setSelectedLocation] = useState(
    storeLocations[0],
  );
  
  // State to control card visibility
  const [isCardVisible, setIsCardVisible] = useState(true);

  const mapUrl = useMemo(() => {
    const query = encodeURIComponent(selectedLocation.mapAddress);
    return `https://www.google.com/maps?q=${query}&output=embed`;
  }, [selectedLocation]);

  const handleLocationClick = (location) => {
    setSelectedLocation(location);
    // Show card when a new location is selected from the left panel
    setIsCardVisible(true);
  };

  const openGoogleMaps = () => {
    window.open(
      selectedLocation.mapUrl,
      "_blank",
      "noopener,noreferrer",
    );
  };

  // Function to close the card
  const handleCloseCard = () => {
    setIsCardVisible(false);
  };

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#faf9f6",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: {
            xs: "column",
            lg: "row",
          },
          minHeight: {
            xs: "auto",
            lg: "780px",
          },
          gap: {
            xs: 3,
            lg: 0,
          },
          p: {xs: 2, md: 4}
        }}
      >
        {/* Left Panel */}
        <StoreLocatorLeft
          locations={storeLocations}
          selectedLocation={selectedLocation}
          onLocationClick={handleLocationClick}
          onGetDirections={openGoogleMaps}
        />

        {/* Right Panel */}
        <StoreLocatorRight
          selectedLocation={selectedLocation}
          mapUrl={mapUrl}
          onGetDirections={openGoogleMaps}
          onCloseCard={handleCloseCard}
          isCardVisible={isCardVisible}
        />
      </Box>
    </Box>
  );
};

export default StoreLocator;