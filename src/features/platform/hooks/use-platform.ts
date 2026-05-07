import useData from "@/features/hooks/use-data";
import type { Platform } from "../type";

const usePlatform = () => useData<Platform>("/platforms");

export default usePlatform;
