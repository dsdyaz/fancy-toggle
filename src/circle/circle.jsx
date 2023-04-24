import React from "react"

export default function Circle(props) {
  const isOff = { props }
  const variant =
    isOff === true ? (
      <div className="circle circle--off" id="circle">
        <div className="circle__inner-circle circle__inner-circle_top" />
        <div className="circle__inner-circle circle__inner-circle_mid" />
        <div className="circle__inner-circle circle__inner-circle_bottom" />
        <div className="circle__halo circle__inner-halo" />
        <div className="circle__halo circle__middle-halo" />
        <div className="circle__halo circle__outer-halo" />
      </div>
    ) : (
      <div className="circle" id="circle">
        <div className="circle__halo circle__inner-halo" />
        <div className="circle__halo circle__middle-halo" />
        <div className="circle__halo circle__outer-halo" />
      </div>
    )
  return variant
}
