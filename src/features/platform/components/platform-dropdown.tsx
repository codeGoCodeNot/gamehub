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

type PlatformDropdownProps = {
  onPlatformSelect: (platforms: Platform[]) => void;
  selectedPlatforms: Platform[];
};

const PlatformDropdown = ({
  onPlatformSelect,
  selectedPlatforms,
}: PlatformDropdownProps) => {
  const { data: platforms, error } = usePlatform();

  const togglePlatform = (platform: Platform) => {
    const isSelected = selectedPlatforms.some((p) => p.id === platform.id);
    if (isSelected) {
      onPlatformSelect(selectedPlatforms.filter((p) => p.id !== platform.id));
    } else {
      onPlatformSelect([...selectedPlatforms, platform]);
    }
  };

  const handleToggle = (e: React.MouseEvent, platform: Platform) => {
    e.preventDefault();
    e.stopPropagation();
    togglePlatform(platform);
  };

  if (error) return <p>Error loading platforms: {error}</p>;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          Platforms <LucideArrowDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          {platforms?.map((platform) => (
            <DropdownMenuItem
              key={platform.id}
              onClick={(e) => handleToggle(e, platform)}
              className={
                selectedPlatforms.some((p) => p.id === platform.id)
                  ? "bg-blue-50 dark:bg-blue-950"
                  : ""
              }
            >
              {platform.name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default PlatformDropdown;
