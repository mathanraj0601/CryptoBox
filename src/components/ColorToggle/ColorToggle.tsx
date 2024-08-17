import { useEffect, useState } from "react";
import "./ColorToggle.css";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

interface ColorToggleProps {
  className?: string;
}

function ColorToggle({ className }: ColorToggleProps) {
  const [colorScheme, setColorScheme] = useState("light");

  useEffect(() => {
    document.documentElement.style.colorScheme =
      colorScheme === "light" ? "only light" : "only dark";
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("colorScheme", colorScheme);
  }, [colorScheme]);

  function handleColorScheme(): void {
    setColorScheme((prev) => (prev === "light" ? "dark" : "light"));
  }
  return (
    <button
      className={"color-toggle-btn " + className}
      onClick={handleColorScheme}
    >
      {colorScheme === "dark" ? (
        <LightModeIcon
          className="color-toggle-btn-icon"
          sx={{ height: 20, width: 20 }}
        />
      ) : (
        <DarkModeIcon
          className="color-toggle-btn-icon"
          sx={{ height: 20, width: 20 }}
        />
      )}
    </button>
  );
}

export default ColorToggle;
