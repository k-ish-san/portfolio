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
        className="p-2 rounded-full light:bg-black dark:bg-white  transition-colors duration-300"
      >
        {theme === "dark" ? (
          <SunIcon
            className="h-6 w-6 text-amber-400"
            data-tooltip-id="light-tooltip"
            data-tooltip-content="Light Mode"
            data-tooltip-place="bottom"
          />
        ) : (
          <MoonIcon
            className="h-6 w-6 text-white"
            data-tooltip-id="dark-tooltip"
            data-tooltip-content="Dark Mode"
            data-tooltip-place="bottom"
          />
        )}
      </button>
      <Tooltip id="light-tooltip" />
      <Tooltip id="dark-tooltip" />
    </div>
  );
};

export default ThemeToggle;
