import React, { useState } from "react";
import { Tooltip } from "react-tooltip";

interface ButtonProps {
  text?: string;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ text, children }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

 
  const handleDownload = () => {
    const pdfName = "SAMRUDH_RESUME.pdf";
    const fileUrl = `/src/assets/${pdfName}`;

    const link = document.createElement("a");
    link.href = fileUrl;
    link.setAttribute("download", pdfName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
    
  return (
    <button
      className="group relative font-bold text-sm transition-all duration-150 ease-in-out"
      data-tooltip-id="button-tooltip"
      data-tooltip-place="bottom"
          data-tooltip-content="Resume"
          onClick={handleDownload}
      style={{
        appearance: "none",
        background: "none",
        border: "none",
        color: "#0f1923",
        cursor: "pointer",
        padding: "8px",
        marginBottom: "20px",
        outline: "none",
        position: "relative",
        fontVariant: "small-caps",
        letterSpacing: "0.1em",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={() => setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
      onFocus={() => {}}
      onBlur={() => {}}
    >
      {/* Top border (simulated ::before) */}
      <span
        className="absolute left-0 right-0 block"
        style={{
          top: isActive ? "3px" : "0",
          height: "calc(50% - 5px)",
          borderLeft: "1px solid #7D8082",
          borderRight: "1px solid #7D8082",
          borderTop: "1px solid #7D8082",
          borderBottom: "none",
          transition: "all .15s ease",
          left: isActive ? "3px" : "0",
          right: isActive ? "3px" : "0",
        }}
      />
      {/* Bottom border (simulated ::after) */}
      <span
        className="absolute left-0 right-0 block"
        style={{
          bottom: isActive ? "3px" : "0",
          height: "calc(50% - 5px)",
          borderLeft: "1px solid #7D8082",
          borderRight: "1px solid #7D8082",
          borderBottom: "1px solid #7D8082",
          borderTop: "none",
          transition: "all .15s ease",
          left: isActive ? "3px" : "0",
          right: isActive ? "3px" : "0",
        }}
      />
      {/* Inner container (button_lg) */}
      <span
        className="relative block px-5 py-3 light:bg-black dark:bg-white light:text-white dark:text-black overflow-hidden"
        style={{
          boxShadow: "inset 0px 0px 0px 1px transparent",
        }}
      >
        {/* Corner dot: top-left (simulated ::before) */}
        <span
          className="absolute"
          style={{
            top: "0",
            left: "0",
            width: "4px",
            height: "4px",
            backgroundColor: "#0f1923",
          }}
        />
        {/* Corner dot: bottom-right (simulated ::after) */}
        <span
          className="absolute"
          style={{
            bottom: "0",
            right: "0",
            width: "4px",
            height: "4px",
            backgroundColor: isHovered ? "#fff" : "#0f1923",
            transition: "all .2s ease",
          }}
        />
        {/* Slider effect (button_sl) */}
        <span
          className="absolute top-0 bottom-0 left-0"
          style={{
            background: "#3aa5fd",
            transform: "skew(-15deg)",
            transition: "all .2s ease",
            width: isHovered ? "calc(100% + 15px)" : "0",
            left: "-8px",
          }}
        />
        {/* Button text */}
        <span className="relative">{children || text}</span>
      </span>

      {
        /* Tooltip for the button */
        <Tooltip
          id="button-tooltip"
          style={{ fontVariant: "small-caps", letterSpacing: "0.1em" }}
        />
      }
    </button>
  );
};



export default Button;
