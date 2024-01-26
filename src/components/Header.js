import { useEffect, useState } from "react"
import Logo from "../assets/logo.png"

export const Header = () => {
  const localStore = localStorage.getItem("theme");
  const [theme, setTheme] = useState( localStore || "light");

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));    //1
    document.documentElement.removeAttribute("class");
    document.documentElement.classList.add(theme);
  }, [theme])

  return (
    <header>
        <div className="logo">
            <img src={Logo} alt="" />
            <span>Taskapp</span>
        </div>
        <div className="themeSelector">
            <span onClick={() => setTheme("light")} className={theme === "light"? "light activeTheme" : "light"}></span>
            <span onClick={() => setTheme("medium")} className={theme === "medium"? "medium activeTheme" : "medium"}></span>
            <span onClick={() => setTheme("dark")} className={theme === "dark"? "dark activeTheme" : "dark"}></span>
            <span onClick={() => setTheme("gOne")} className={theme === "gOne"? "gOne activeTheme" : "gOne"}></span>
            <span onClick={() => setTheme("gTwo")} className={theme === "gTwo"? "gTwo activeTheme" : "gTwo"}></span>
            <span onClick={() => setTheme("gThree")} className={theme === "gThree"? "gThree activeTheme" : "gThree"}></span>
        </div>
    </header>
  )
}

/********************************************** COMMENT BOX ********************************************
1) Yaha humne localStorage main theme ki value ko update krke abhi ka jo bhi selected theme hai, vo laga diya.
    Pehle selected theme name jo ki ek js object hai, usse strnig main convert kr diya , 
    phir usse server ko bhej diya to store it.

*/