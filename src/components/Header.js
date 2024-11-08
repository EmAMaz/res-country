import { useState } from "react";

export default function Header() {
  const [modeDark, setModeDark] = useState(false);
  const handleThemeMode = () => {
    const body = document.body;
    setModeDark(!modeDark);
    body.classList.toggle("dark");
  };

  return (
    <header>
      <div className="flex items-center justify-between">
        <h1 onClick={() => window.location.reload()} className="text-xl xl:text-3xl font-bold tracking-tight text-gray-900 dark:text-white cursor-pointer">
            Where in the world?
        </h1>
        <div
          onClick={handleThemeMode}
          className="flex gap-2 items-center cursor-pointer hover:translate-y-[-1px] dark:text-white"
        >
          <ion-icon name={modeDark ? "moon" : "moon-outline"}></ion-icon>
          <span className="font-semibold dark:text-white text-sm">
            Dark Mode
          </span>
        </div>
      </div>
    </header>
  );
}
