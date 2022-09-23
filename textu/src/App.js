import "./App.css";

import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import About from "./Components/About";
import Alert from "./Components/Alert";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const [modeSw, setModeSw] = useState("Enable dark mode");
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setModeSw("Enable light mode");
      document.body.style.backgroundColor = "gray";
      showAlert("dark mode is enabled", "success");
      document.title = "dark mode";
    } else {
      setMode("light");
      setModeSw("Enable dark mode");
      document.body.style.backgroundColor = "white";
      showAlert("light mode is enabled", "success");
      document.title = "light mode";
    }
  };
  return (
    <>
      <Navbar
        title="TextUtil"
        mode={mode}
        toggleMode={toggleMode}
        modeSw={modeSw}
        alert={alert}
      />
      <Alert alert={alert} />
      <Routes>
        <Route EXACT path="About" element={<About />} />
      </Routes>
      <Routes>
        <Route
          EXACT
          path="/"
          element={
            <TextForm
              header="Welcome to App"
              mode={mode}
              alert={alert}
              showAlert={showAlert}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
