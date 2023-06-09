import React from "react"
import "../../style/circle.css"

export default function Circle() {
  const variant = (
    <div className="toggle__circle" id="circle">
      <div className="circle">
        <div className="circle__background-wrapper circle__background-wrapper_on">
          <div className="circle__background" />
        </div>
        <div className="circle__background-wrapper circle__background-wrapper_off">
          <div
            className="circle__background circle__background_off"
            id="circle_off"
          >
            <div className="circle__inner-circle circle__inner-circle_top" />
            <div className="circle__inner-circle circle__inner-circle_mid" />
            <div className="circle__inner-circle circle__inner-circle_bottom" />
          </div>
        </div>
      </div>
      <div className="halo halo_inner" />
      <div className="halo halo_middle" />
      <div className="halo halo_outer" />
    </div>
  )
  return variant
}
