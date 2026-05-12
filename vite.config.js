import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  // GitHub Pages のようにサブパス配下へ置いても壊れにくいよう、相対パスで出力する
  base: "./",
  publicDir: "bonus-public",
  build: {
    rollupOptions: {
      input: {
        bonusGuide: resolve(__dirname, "bonus-guide.source.html")
      }
    }
  }
});
