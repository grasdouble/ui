// import type { Preview } from "@storybook/react";
import { Preview } from "@storybook/react";
import { DocsContainer } from "./DocsContainer";

import { themes } from "@storybook/theming";

import "../src/globals.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    darkMode: {
      dark: { ...themes.dark },
      light: { ...themes.light },
      stylePreview: true,
      darkClass: "dark",
    },
    docs: {
      container: DocsContainer,
    },
  },
};

export default preview;
