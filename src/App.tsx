import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import "@fontsource/roboto";

import HeaderBar from "./components/HeaderBar";
import SidePanel from "./components/SidePanel";
import Main from "./components/Main";
import UnderConstruction from "./components/UnderConstruction";

function App() {
  const [open, setOpen] = React.useState(false);
  const [page, setPage] = React.useState("aboutme");
  const GetContent = () => {
    if (localStorage.getItem("dev")) {
      return (
        <React.Fragment>
          <HeaderBar sidepanelFct={setOpen} />
          <SidePanel
            sidepanelState={open}
            sidepanelFct={setOpen}
            pageState={page}
            pageFct={setPage}
          />

          <Main pageState={page} pageFct={setPage} sidepanelFct={setOpen} />
        </React.Fragment>
      );
    } else {
      return <UnderConstruction />;
    }
  };

  return (
    <div className="App">
      <CssBaseline />
      <header className="App-header"></header>
      <main>
        <GetContent />
      </main>
    </div>
  );
}

export default App;
