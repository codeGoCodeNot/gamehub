import { SiPlaystation, SiApple, SiLinux } from "react-icons/si";
import { FaWindows, FaXbox, FaGamepad } from "react-icons/fa";
import type { IconType } from "react-icons/lib";

export const iconMap: Record<string, IconType> = {
  playstation: SiPlaystation,
  xbox: FaXbox,
  pc: FaWindows,
  mac: SiApple,
  linux: SiLinux,
  nintendo: FaGamepad,
};

export const metacriticColorMap = (metacritic?: number) => {
  return `${(metacritic ?? 0) >= 75 ? "text-green-400" : (metacritic ?? 0) >= 50 ? "text-yellow-400" : "text-red-600"} text-sm`;
};
