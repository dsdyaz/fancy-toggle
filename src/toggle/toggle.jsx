import React from "react"
import "../style/toggle.css"

export default function Toggle() {
  return (
    <div className="toggle">
      <div className="circle">
        <div className="circle__inner-halo" />
        <div className="circle__middle-halo" />
        <div className="circle__outer-halo" />
      </div>
    </div>
  )
}
