/* eslint-disable @typescript-eslint/no-var-requires */
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "VIDchain documentation",
  tagline: "Welcome to VIDchain documentation",
  url: "https://dev.vidchain.net",
  baseUrl: "/",
  onBrokenLinks: "throw",
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
          path: "./api-json/openapi-vidchain-api.json",
          routeBasePath: "vidchain-openapi",
        },
        docs: {
          path: "docs",
          routeBasePath: "docs",
          sidebarPath: require.resolve("./sidebarsDocs.js"),
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
  ],

  themeConfig:
    /** @type {import('docusaurus-preset-openapi').ThemeConfig} */
    ({
      hideableSidebar: true,
      autoCollapseSidebarCategories: true,
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
              { to: "/vidchain-openapi", label: "VIDchain" },
              { to: "/vidconnect-openapi", label: "VIDconnect" },
            ],
          },
        ],
      },
      footer: {
        copyright: `Copyright © Validated ID`,
      },
      // theme: {
      //   customCss: [require.resolve("./src/css/custom.css")],
      // },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
