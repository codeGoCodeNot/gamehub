import axios from "axios";

interface ImportMetaEnv {
  readonly VITE_RAWG_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: import.meta.env.VITE_RAWG_API_KEY,
  },
});
