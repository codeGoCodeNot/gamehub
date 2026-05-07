import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { LucideArrowDown } from "lucide-react";
import usePlatform from "../hooks/use-platform";
import type { Platform } from "../type";
import { useState } from "react";

type PlatformDropdownProps = {
  onPlatformSelect: (platform: Platform | null) => void;
  selectedPlatform: Platform | null;
};

const PlatformDropdown = ({
  onPlatformSelect,
  selectedPlatform,
}: PlatformDropdownProps) => {
  const { data: platforms, error } = usePlatform();
  const [isExpanded, setIsExpanded] = useState(false);

  const displayedPlatforms = isExpanded ? platforms : platforms?.slice(0, 10);

  const handleSelectPlatform = (platform: Platform) => {
    onPlatformSelect(platform);
  };

  if (error) return <p>Error loading platforms: {error}</p>;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          {selectedPlatform ? selectedPlatform.name : "Platforms"}
          <LucideArrowDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          {displayedPlatforms?.map((platform) => (
            <DropdownMenuItem
              key={platform.id}
              onClick={() => handleSelectPlatform(platform)}
              className={
                selectedPlatform?.id === platform.id
                  ? "bg-blue-50 dark:bg-blue-950"
                  : ""
              }
            >
              {platform.name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
        {platforms && platforms.length > 10 && (
          <div className="flex justify-center mt-2">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className={`text-sm text-blue-600 dark:text-blue-400 hover:underline ${isExpanded ? "mb-2" : "mt-2"}`}
            >
              {isExpanded ? "Show less" : "Show more"}
            </button>
          </div>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default PlatformDropdown;
