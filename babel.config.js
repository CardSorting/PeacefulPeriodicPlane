module.exports = {
  presets: [
    [
      "next/babel",
      {
        "preset-react": {
          runtime: "automatic",
          importSource: "@emotion/react",
        },
      },
    ],
  ],
  plugins: [
    "@emotion/babel-plugin",
    "babel-plugin-macros",
    [
      "babel-plugin-transform-imports",
      {
        "@material-ui/core": {
          transform: "@material-ui/core/${member}",
          preventFullImport: true,
        },
        "@material-ui/icons": {
          transform: "@material-ui/icons/${member}",
          preventFullImport: true,
        },
      },
    ],
    [
      "babel-plugin-styled-components",
      {
        ssr: true,
        displayName: true,
        preprocess: false,
      },
    ],
  ],
};