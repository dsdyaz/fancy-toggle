import React from "react"
import "../style/toggle-background.css"
import BottomArea from "./bottom-area"

export default function ToggleBackground() {
  return (
    <div className="toggle__background">
      <div className="top-area">
        <div className="top-cluster" />
      </div>
      <BottomArea />
    </div>
  )
}
