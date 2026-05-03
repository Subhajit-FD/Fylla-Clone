import { useTheme } from "../contexts/Theme-Provider";
import { SunIcon, MoonIcon } from "@phosphor-icons/react";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <label className="relative inline-block h-8 w-14 cursor-pointer select-none">
      <input
        type="checkbox"
        checked={theme === "dark"}
        onChange={toggleTheme}
        className="peer absolute inset-0 h-full w-full cursor-pointer opacity-0"
      />
      <span className="absolute inset-0 rounded-full border transition duration-300 ease-in-out" />
      <span className="absolute top-0 left-0.5 flex h-[1.9em] w-[1.9em] items-center justify-center rounded-full transition-transform duration-300 ease-in-out peer-checked:translate-x-[1.5em]">
        {theme === "light" ? <SunIcon size={16} weight="fill" /> : <MoonIcon size={16} weight="fill" />}
      </span>
    </label>
  );
};

export default ThemeToggle;
