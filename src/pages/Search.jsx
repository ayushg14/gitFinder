import React, { useState, useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { MdLightMode } from "react-icons/md";
import Display from "./Display.jsx";
import { ThemeContext } from "../context/theme";

export default function Search() {
  const [username, setUsername] = useState("");
  const [profileData, setProfileData] = useState(null);
  const { themeMode, toggleTheme } = useContext(ThemeContext);

  const handleSearch = async () => {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    setProfileData(data);
  };

  return (
    <div
      className={`flex justify-center items-center min-h-screen ${
        themeMode === "dark" ? "dark-mode" : ""
      }`}
    >
      <div className="w-3/4">
        <div className="flex items-center justify-between mb-4">
          <h1
            className={`text-2xl ${
              themeMode === "dark" ? "text-white" : "text-black"
            }`}
          >
            gitFinder
          </h1>
          <h1
            className="text-md flex items-center gap-2 cursor-pointer"
            onClick={toggleTheme}
          >
            {themeMode === "dark" ? (
              <>
                Light <MdLightMode />
              </>
            ) : (
              <>
                Dark <MdLightMode />
              </>
            )}
          </h1>
        </div>
        <div className="relative">
          <FaSearch
            className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${
              themeMode === "dark" ? "text-white" : "text-[rgb(14,83,210)]"
            }`}
          />
          <input
            type="text"
            placeholder="Search GitHub username..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={`p-4 pl-10 rounded-md focus:outline-none focus:ring-2 focus:ring-opacity-50 w-full shadow-lg ${
              themeMode === "dark"
                ? "bg-gray-800 text-white"
                : "bg-white text-black"
            }`}
          />
          <button
            className={`absolute right-2 top-2 bottom-2 rounded-md px-4 focus:outline-none focus:ring-2 focus:ring-inherit focus:ring-opacity-50 ${
              themeMode === "dark"
                ? "bg-gray-600 text-white"
                : "bg-[#0876f9] text-white"
            }`}
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        {profileData && <Display profileData={profileData} />}
      </div>
    </div>
  );
}
