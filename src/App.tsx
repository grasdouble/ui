import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import "@fontsource/roboto";

import { themeLight } from "./utils/themeLight";
import { themeDark } from "./utils/themeDark";
import HeaderBar from "./components/HeaderBar";
import SidePanel from "./components/SidePanel";
import Main from "./components/Main";
import UnderConstruction from "./components/UnderConstruction";

function App() {
  const isLight = true;
  const [open, setOpen] = React.useState(false);
  const [page, setPage] = React.useState("aboutme");
  const GetContent = () => {
    if (localStorage.getItem("dev")) {
      return (
        <MuiThemeProvider theme={isLight ? themeLight : themeDark}>
          <CssBaseline />
          <HeaderBar sidepanelFct={setOpen} />
          <SidePanel
            sidepanelState={open}
            sidepanelFct={setOpen}
            pageState={page}
            pageFct={setPage}
          />

          <Main pageState={page} pageFct={setPage} sidepanelFct={setOpen} />
        </MuiThemeProvider>
      );
    } else {
      return <UnderConstruction />;
    }
  };

  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        <GetContent />
      </main>
    </div>
  );
}

export default App;