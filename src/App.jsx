import React from "react";
import "./App.css";
import { ThemeProvider } from "./context/theme";
import ThemedApp from "./ThemedApp.jsx";

const App = () => {
  return (
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
  );
};

export default App;
