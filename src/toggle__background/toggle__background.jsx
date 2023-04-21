import React from "react"
import "../style/toggle-background.css"
import BottomArea from "./bottom-area"

export default function ToggleBackground() {
  return (
    <div className="toggle__background">
      <div className="top-area">
        <div className="top-area__item top-area__item--top-left-top">
          <span>&#10022;</span>
        </div>
        <div className="top-area__item top-area__item--top-left-left">
          <span>&#10022;</span>
        </div>
        <div className="top-area__item top-area__item--top-left-bottom">
          <span>&#10022;</span>
        </div>
      </div>
      <BottomArea />
    </div>
  )
}
