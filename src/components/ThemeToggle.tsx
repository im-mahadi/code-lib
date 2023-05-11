"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BsSunFill, BsMoonFill } from "react-icons/bs";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <BsSunFill size={24} />;
  }

  return (
    <div className='cursor-pointer'>
      {currentTheme === "dark" ? (
        <BsSunFill size={24} onClick={() => setTheme("light")} />
      ) : (
        <BsMoonFill size={24} onClick={() => setTheme("dark")} />
      )}
    </div>
  );
}
