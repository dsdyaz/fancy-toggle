import React from "react"
import "../style/toggle-background.css"

export default function ToggleBackground() {
  return (
    <div className="toggle__background">
      <div className="bottom-cluster bottom-cluster--rear">
        <div className="bottom-cluster__circle bottom-cluster__circle--top-right" />
        <div className="bottom-cluster__circle bottom-cluster__circle--bottom-right" />
        <div className="bottom-cluster__circle bottom-cluster__circle--right-center" />
        <div className="bottom-cluster__circle bottom-cluster__circle--center" />
        <div className="bottom-cluster__circle bottom-cluster__circle--left-center" />
        <div className="bottom-cluster__circle bottom-cluster__circle--left" />
      </div>
    </div>
  )
}
