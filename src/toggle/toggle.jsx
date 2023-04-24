import React, { useState } from "react"
import "../style/toggle.css"
import ToggleBackground from "../toggle__background/toggle__background"
import Circle from "../circle/circle"

export default function Toggle() {
  const [isOff, setOff] = useState(false)
  function move() {
    console.log(isOff)
    const backgroundAnimation = isOff ? "translateY(0%)" : "translateY(66%)"
    const circleAnimation = isOff ? "translateX(0%)" : "translateX(160%)"
    const circle = document.getElementById("circle")
    const background = document.getElementById("toggle__background")
    circle.className = "circle circle__off"
    background.style.transform = backgroundAnimation
    circle.style.transform = circleAnimation
    circle.style.transition = "1s"
    background.style.transition = "1s"
    setOff(!isOff)
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
