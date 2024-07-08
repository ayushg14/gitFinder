import React from "react";
import Search from "./pages/Search.jsx";
import { useTheme } from "./context/theme";

const ThemedApp = () => {
  const { themeMode, toggleTheme } = useTheme();

  return (
    <div className={`min-h-screen ${themeMode === "dark" ? "dark-mode" : ""}`}>
      <section className="mx-40">
        <Search />
      </section>
    </div>
  );
};

export default ThemedApp;
