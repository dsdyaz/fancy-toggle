import React from "react"
import "../style/toggle.css"
import ToggleBackground from "../toggle__background/toggle__background"

export default function Toggle() {
  return (
    <div className="toggle">
      <ToggleBackground />
      <div className="circle">
        <div className="circle__halo circle__inner-halo" />
        <div className="circle__halo circle__middle-halo" />
        <div className="circle__halo circle__outer-halo" />
      </div>
    </div>
  )
}
