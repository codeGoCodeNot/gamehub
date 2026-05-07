import { SiPlaystation, SiApple, SiLinux } from "react-icons/si";
import { FaWindows, FaXbox, FaGamepad } from "react-icons/fa";
import type { IconType } from "react-icons/lib";

const iconMap: Record<string, IconType> = {
  playstation: SiPlaystation,
  xbox: FaXbox,
  pc: FaWindows,
  mac: SiApple,
  linux: SiLinux,
  nintendo: FaGamepad,
};
