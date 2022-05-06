/* eslint-disable @typescript-eslint/no-var-requires */
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "VIDchain documentation",
  tagline: "Welcome to VIDchain documentation",
  url: "https://docs.vidchain.net",
  baseUrl: "/",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.svg",
  organizationName: "Validated ID",
  projectName: "vidchain-documentation",
  trailingSlash: false,
  presets: [
    [
      "docusaurus-preset-openapi",
      {
        api: {
          path: "./api-json/openapi-vidcredentials-api.json",
          routeBasePath: "vidcredentials-openapi",
        },
        docs: {
          sidebarCollapsed: false,
          path: "docs",
          routeBasePath: "docs",
          sidebarPath: require.resolve("./sidebarsDocs.js"),
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  plugins: [
    [
      "docusaurus-plugin-openapi",
      {
        id: "vidconnect",
        path: "./api-json/openapi-vidconnect-api.json",
        routeBasePath: "vidconnect-openapi",
        // ... other options
      },
    ],
    [
      "docusaurus-plugin-openapi",
      {
        id: "eidas",
        path: "./api-json/openapi-eidas-bridge-api.json",
        routeBasePath: "eidas-bridge-openapi",
        // ... other options
      },
    ],
  ],

  themeConfig:
    /** @type {import('docusaurus-preset-openapi').ThemeConfig} */
    ({
      hideableSidebar: true,
      autoCollapseSidebarCategories: false,
      navbar: {
        logo: {
          alt: "VIDchain Logo",
          src: "img/VIDchain_H_DARK.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Docs",
          },
          {
            label: "OpenAPIs",
            position: "left",
            items: [
              { to: "/vidcredentials-openapi", label: "VIDcredentials" },
              { to: "/vidconnect-openapi", label: "VIDconnect" },
              { to: "/eidas-bridge-openapi", label: "eIDAS Bridge" },
            ],
          },
        ],
      },
      footer: {
        copyright: `Copyright © Validated ID`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
