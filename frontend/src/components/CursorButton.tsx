import { useState } from "react";
import { Tooltip } from "react-tooltip";
import SplashCursor from "./SplashCursor";
import { SparklesIcon } from "@heroicons/react/24/solid"; // or /outline



function CursorButton () {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button
        className=" fixed bottom-5 right-5 pl-2 pt-2 bg-purple-600 text-white hover:bg-indigo-800   shadow-lg rounded-xl z-30 "
        onClick={toggleVisibility}
        data-tooltip-id="cursor-tooltip"
        data-tooltip-content={
          isVisible ? "Magic Cursor ON" : "Magic Cursor OFF"
        }
        data-tooltip-place="left"
      >
        <div className="relative h-12 w-12  ">
          <svg
            className="absolute inset-0 z-30 "
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Main rounded rectangle (wand) */}
            <rect
              x="25"
              y="10"
              width="30"
              height="6"
              rx="2"
              transform="rotate(-50 38 38)"
              fill="white"
            />
            {/* Slot/cutout */}
            <rect
              x="25"
              y="10"
              width="8"
              height="3"
              rx="1"
              transform="rotate(-50 31 18)"
              fill="silver"
            />
          </svg>
          {isVisible ? (
            <SparklesIcon className="absolute right-6 top-0 h-6 w-6 text-white z-20" />
          ) : (
            ""
          )}
        </div>
      </button>
      {isVisible && <SplashCursor />}
      <Tooltip id="cursor-tooltip" />
    </div>
  );
}

export default CursorButton;
 