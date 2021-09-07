import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import cssEnv from "postcss-preset-env";
import pxtorem from "postcss-pxtorem";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  alias: {
    "@src": "/src/",
  },
  css: {
    postcss: {
      plugins: [
        cssEnv({
          preserve: true,
          stage: -1,
        }),
        pxtorem({
          rootValue: 75 / 2,
          propList: ["*"],
        }),
      ],
    },
  },
  server: {
    host: true,
    port: 3333,
  },
});
