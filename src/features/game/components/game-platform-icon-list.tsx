import type { Platform } from "@/entities";
import { iconMap } from "../constant";

type GamePlatformIconListProps = {
  platforms: Platform[];
};

const GamePlatformIconList = ({ platforms }: GamePlatformIconListProps) => {
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
