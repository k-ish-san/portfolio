import { useEffect, useState } from "react";
import {Tooltip} from "react-tooltip";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    return (localStorage.getItem("theme") as "light" | "dark") || "light";
  });

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div>
      <button
        onClick={toggleTheme}
        
      >
        {theme === "dark" ? (
          <SunIcon
            className="h-6 w-6 text-amber-400"
            data-tooltip-id="light-tooltip"
            data-tooltip-content="Light"
            data-tooltip-place="bottom"
          />
        ) : (
          <MoonIcon
            className="h-6 w-6 text-black"
            data-tooltip-id="dark-tooltip"
            data-tooltip-content="Dark"
            data-tooltip-place="bottom"
          />
        )}
      </button>
      <Tooltip id="light-tooltip" style={{ zIndex: "100" }} />
      <Tooltip id="dark-tooltip" style={{  zIndex: "100" }} />
    </div>
  );
};


export default ThemeToggle;
