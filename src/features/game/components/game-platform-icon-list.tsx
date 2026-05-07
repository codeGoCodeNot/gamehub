import type { Platform } from "@/features/type";
import { SiPlaystation, SiApple, SiLinux } from "react-icons/si";
import { FaWindows, FaXbox, FaGamepad } from "react-icons/fa";
import type { IconType } from "react-icons/lib";

type GamePlatformIconListProps = {
  platforms: Platform[];
};

const GamePlatformIconList = ({ platforms }: GamePlatformIconListProps) => {
  const iconMap: Record<string, IconType> = {
    playstation: SiPlaystation,
    xbox: FaXbox,
    pc: FaWindows,
    mac: SiApple,
    linux: SiLinux,
    nintendo: FaGamepad,
  };
  return (
    <div className="flex items-center gap-x-2 mt-2">
      {platforms.map((platform) => {
        const Icon = iconMap[platform.slug];
        return (
          <div key={platform.id} className="flex items-center gap-1 text-xs">
            {Icon && <Icon size={18} />}
          </div>
        );
      })}
    </div>
  );
};

export default GamePlatformIconList;
