import config from "@echristian/eslint-config"

export default [
  { ignores: ["dist/"] },
  ...config({
    prettier: {
      plugins: ["prettier-plugin-packagejson"],
    },
  }),
]
