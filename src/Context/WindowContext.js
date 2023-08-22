import { createContext, useEffect, useState } from "react";

export const WindowSize = createContext(null);
export default function WindowContext({ children }) {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  useEffect(() => {
    function SetWindowWidth() {
      setWindowSize(window.innerWidth);
    }
    window.addEventListener("resize", SetWindowWidth); // when ever the window is size is changed setWindowSize to the new value
    return () => window.removeEventListener("resize", SetWindowWidth);
  }, []);
  return (
    <WindowSize.Provider value={{ windowSize, setWindowSize }}>
      {children}
    </WindowSize.Provider>
  );
} 
