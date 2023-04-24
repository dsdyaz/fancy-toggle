import React from "react"
import "../style/toggle.css"
import ToggleBackground from "../toggle__background/toggle__background"
import Circle from "../circle/circle"

export default function Toggle() {
  function move() {
    const toggle = document.getElementById("toggle")
    const circle = document.getElementById("circle")
    const background = document.getElementById("toggle__background")
    background.style.transform = "translateY(66%)"
    circle.style.transform = "translateX(160%)"
    circle.style.transition = "3s"
    background.style.transition = "3s"
  }
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div className="toggle" id="toggle" onClick={() => move()}>
      <div className="toggle__inner-shadow" />
      <ToggleBackground />
      <Circle isOff />
    </div>
  )
}
