import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import HeaderBar from "./components/HeaderBar";
import SidePanel from "./components/SidePanel";
import Main from "./components/Main";

function App() {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="App">
      <CssBaseline />
      <header className="App-header"></header>
      <main>
        <HeaderBar sidepanelState={open} sidepanelFct={setOpen} />
        <SidePanel sidepanelState={open} sidepanelFct={setOpen} />
        <Main sidepanelState={open} />
      </main>
    </div>
  );
}

export default App;
