import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
// @ts-ignore
import { deepmerge } from "@material-ui/utils";
import { themeCommonOptions } from "./themeCommonOptions";

const themeDarkOption = deepmerge(
  {
    palette: {
      type: "dark",
      text: {
        primary: "#fff",
        secondary: "rgba(255, 255, 255, 0.7)",
        disabled: "rgba(255, 255, 255, 0.5)",
        hint: "rgba(255, 255, 255, 0.5)",
        // icon: "rgba(255, 255, 255, 0.5)",
      },
      divider: "rgba(255, 255, 255, 0.12)",
      background: {
        paper: "#424242",
        default: "#303030",
      },
    },
  },
  themeCommonOptions
);
let themeDark = createMuiTheme(themeDarkOption);
themeDark = responsiveFontSizes(themeDark);

export { themeDark };
