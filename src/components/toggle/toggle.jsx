import React, { useState } from "react"
import "../../style/toggle.css"
import ToggleBackground from "../toggle__background/toggle__background"
import Circle from "../circle/circle"

export default function Toggle() {
  const [mode, setMode] = useState("dark")
  function move() {
    const circle = document.getElementById("circle")
    const darkCircle = document.getElementById("circle_off")
    const background = document.getElementById("toggle__background")
    circle.className = `toggle__circle toggle__circle_${mode}`
    darkCircle.className = `circle__background circle__background_off circle__background_${mode}`
    background.className = `toggle__background toggle__background_${mode}`
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
