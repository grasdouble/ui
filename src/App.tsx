import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import "@fontsource/roboto";

import HeaderBar from "./components/HeaderBar";
import SidePanel from "./components/SidePanel";
import Main from "./components/Main";

function App() {
  const [open, setOpen] = React.useState(false);
  const [page, setPage] = React.useState("aboutme");
  return (
    <div className="App">
      <CssBaseline />
      <header className="App-header"></header>
      <main>
        <HeaderBar sidepanelFct={setOpen} />
        <SidePanel
          sidepanelState={open}
          sidepanelFct={setOpen}
          pageState={page}
          pageFct={setPage}
        />
        <Main pageState={page} pageFct={setPage} sidepanelFct={setOpen} />
      </main>
    </div>
  );
}

export default App;
