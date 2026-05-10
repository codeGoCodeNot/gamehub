import useGameQuery from "@/state-management/hooks/use-game-query";
import { useState } from "react";
import usePlatform from "../hooks/use-platform";
import PlatformDropdown from "./platform-dropdown";

const PlatformList = () => {
  const { gameQuery, setPlatform } = useGameQuery();
  const { data: platforms, error } = usePlatform();
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandedChange = (expanded: boolean) => {
    setIsExpanded(expanded);
  };

  if (error) return <p>Error loading platforms: {error.message}</p>;

  return (
    <PlatformDropdown
      platforms={platforms}
      onIsExpanded={handleExpandedChange}
      selectedPlatform={gameQuery.platformId}
      isExpanded={isExpanded}
      onPlatformSelect={(platform) => setPlatform(platform?.id)}
    />
  );
};

export default PlatformList;
