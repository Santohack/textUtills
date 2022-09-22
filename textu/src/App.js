import "./App.css";

import React, { useState } from "react";

import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";

function App() {
  const [modeSw, setModeSw] = useState("Enable dark mode");
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setModeSw("Enable light mode");
      document.body.style.backgroundColor = "gray";
    } else {
      setMode("light");
      setModeSw("Enable dark mode");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Navbar
        title="TextUtil"
        mode={mode}
        toggleMode={toggleMode}
        modeSw={modeSw}
      />
      <TextForm header="Welcome to App" mode={mode} />
    </>
  );
}

export default App;
