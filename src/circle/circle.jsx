import React from "react"

export default function Circle(props) {
  const isOff = { props }
  const variant = isOff ? (
    <div className="circle circle--off">
      <div className="circle__inner-circle circle__inner-circle_top" />
      <div className="circle__inner-circle circle__inner-circle_mid" />
      <div className="circle__inner-circle circle__inner-circle_bottom" />
      <div className="circle__halo circle__inner-halo" />
      <div className="circle__halo circle__middle-halo" />
      <div className="circle__halo circle__outer-halo" />
    </div>
  ) : (
    <div className="circle">
      <div className="circle__halo circle__inner-halo" />
      <div className="circle__halo circle__middle-halo" />
      <div className="circle__halo circle__outer-halo" />
    </div>
  )
  return variant
}
