import React, { useState, useEffect } from "react";
import Switch from "./components/Switch";
function App() {
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    const themeTypeToAdd = theme ? "dark-mode" : "light-mode";
    const themeTypeToRemove = !theme ? "dark-mode" : "light-mode";

    document.querySelector("body").classList.add(themeTypeToAdd);
    document.querySelector("body").classList.remove(themeTypeToRemove);
  }, [theme]);

  return (
    <div className="App">
      Pokemon Reack / Bulbasaur
      <Switch onChange={() => setTheme(!theme)} />
      <div>
        <button onClick={() => setTheme(!theme)}>Top</button>
      </div>
    </div>
  );
}

export default App;
