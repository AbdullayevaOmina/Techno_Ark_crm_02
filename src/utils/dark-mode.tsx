import { DarkThemeToggle } from "flowbite-react";
import { useEffect, useState } from "react";

export const DarkModeButton = () => {
  // ================== Dark & Light Mode ===================
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode === "true";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      document.body.classList.add("bg-gray-900", "text-white");
    } else {
      document.documentElement.classList.remove("dark");
      document.body.classList.remove("bg-gray-900", "text-white");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("darkMode", newMode.toString());
      return newMode;
    });
  };
  // ================== Dark & Light Mode ===================

  return (
    <button className="fixed bottom-3 right-3" onClick={toggleDarkMode}>
      <DarkThemeToggle />
    </button>
  );
};
