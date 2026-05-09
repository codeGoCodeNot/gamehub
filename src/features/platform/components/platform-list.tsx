import { useState } from "react";
import usePlatform from "../hooks/use-platform";
import type { Platform } from "../type";
import PlatformDropdown from "./platform-dropdown";

type PlatformListProps = {
  onPlatformSelect: (platform: Platform | null) => void;
  selectedPlatform: number | undefined;
};

const PlatformList = ({
  onPlatformSelect,
  selectedPlatform,
}: PlatformListProps) => {
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
      selectedPlatform={selectedPlatform}
      isExpanded={isExpanded}
      onPlatformSelect={onPlatformSelect}
    />
  );
};

export default PlatformList;
