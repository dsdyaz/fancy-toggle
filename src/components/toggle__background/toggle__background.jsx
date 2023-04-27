import React from "react"
import "../../style/toggle-background.css"
import BottomArea from "./bottom-area"
import TopArea from "./top-area"

export default function ToggleBackground() {
  return (
    <div className="toggle__background" id="toggle__background">
      <TopArea />
      <BottomArea />
    </div>
  )
}
