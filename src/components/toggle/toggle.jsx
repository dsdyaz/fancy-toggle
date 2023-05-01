import React, { useState } from "react"
import "../../style/toggle.css"
import ToggleBackground from "../toggle__background/toggle__background"
import Circle from "../circle/circle"

export default function Toggle() {
  const [mode, setMode] = useState("dark")
  function move() {
    const toggle = document.getElementById("toggle")
    toggle.className = `toggle toggle_${mode}`
    if (mode === "light") {
      setMode("dark")
    } else if (mode === "dark") {
      setMode("light")
    }
  }
  return (
    <div
      className="toggle"
      id="toggle"
      role="button"
      tabIndex={0}
      onKeyDown={() => move()}
      onClick={() => move()}
    >
      <div className="toggle__inner-shadow" />
      <ToggleBackground />
      <Circle />
    </div>
  )
}
