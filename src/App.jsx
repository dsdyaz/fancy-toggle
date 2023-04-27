/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react"
import "./style/App.css"
import "./style/page-background.css"
import Toggle from "./components/toggle/toggle"

function App() {
  const [theme, setTheme] = useState("light")
  function onClickFunc() {
    if (theme === "light") {
      setTheme("dark")
    } else if (theme === "dark") {
      setTheme("light")
    }
  }
  return (
    <div className="App">
      <div className={`background background_${theme}`}>
        <div className="position-block">
          <div
            className="theme-toggle"
            onClick={() => {
              onClickFunc()
            }}
          >
            <Toggle />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
