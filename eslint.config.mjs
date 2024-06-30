import { createConfigForNuxt } from "@nuxt/eslint-config/flat";

export default createConfigForNuxt()
  .append({
    files: ["src/{app,error}.vue", "src/layouts/*.vue", "src/pages/**/*.vue"],

    rules: {
      "vue/multi-word-component-names": "off"
    }
  })
  .append({
    files: ["src/pages/**/*.vue"],
    rules: { "@typescript-eslint/no-unused-vars": "off" }
  });
