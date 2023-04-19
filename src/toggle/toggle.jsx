import React from "react"
import "../style/toggle.css"

export default function Toggle() {
  return (
    <div className="toggle">
      <div className="circle">
        <div className="circle__halo circle__inner-halo" />
        <div className="circle__halo circle__middle-halo" />
        <div className="circle__halo circle__outer-halo" />
      </div>
    </div>
  )
}
