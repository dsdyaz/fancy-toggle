import React from "react"
import "../style/toggle-background.css"

export default function ToggleBackground() {
  return (
    <div className="toggle__background">
      <div className="top-area">
        <div className="top-cluster" />
      </div>
      <div className="bottom-area">
        <div className="bottom-area__item bottom-area__item--rear bottom-area__item--top-right" />
        <div className="bottom-area__item bottom-area__item--rear bottom-area__item--bottom-right" />
        <div className="bottom-area__item bottom-area__item--rear bottom-area__item--right-center" />
        <div className="bottom-area__item bottom-area__item--rear bottom-area__item--center" />
        <div className="bottom-area__item bottom-area__item--rear bottom-area__item--left-center" />
        <div className="bottom-area__item bottom-area__item--rear bottom-area__item--top-left" />
        <div className="bottom-area__item bottom-area__item--rear bottom-area__item--bottom-left" />
        <div className="bottom-area__item bottom-area__item--front bottom-area__item--top-right" />
        <div className="bottom-area__item bottom-area__item--front bottom-area__item--bottom-right" />
        <div className="bottom-area__item bottom-area__item--front bottom-area__item--right-center" />
        <div className="bottom-area__item bottom-area__item--front bottom-area__item--center" />
        <div className="bottom-area__item bottom-area__item--front bottom-area__item--left-center" />
        <div className="bottom-area__item bottom-area__item--front bottom-area__item--top-left" />
        <div className="bottom-area__item bottom-area__item--front bottom-area__item--bottom-left" />
        {/* <div className="bottom-cluster bottom-cluster--rear">
           <div className="bottom-cluster__circle bottom-cluster__circle--top-right" />
        <div className="bottom-cluster__circle bottom-cluster__circle--bottom-right" />
        <div className="bottom-cluster__circle bottom-cluster__circle--right-center" />
        <div className="bottom-cluster__circle bottom-cluster__circle--center" />
        <div className="bottom-cluster__circle bottom-cluster__circle--left-center" />
        <div className="bottom-cluster__circle bottom-cluster__circle--left" /> 
        </div> 
         <div className="bottom-cluster bottom-cluster--front">
          <div className="bottom-cluster__circle bottom-cluster__circle--top-right" />
          <div className="bottom-cluster__circle bottom-cluster__circle--bottom-right" />
          <div className="bottom-cluster__circle bottom-cluster__circle--right-center" />
          <div className="bottom-cluster__circle bottom-cluster__circle--center" />
          <div className="bottom-cluster__circle bottom-cluster__circle--left-center" />
          <div className="bottom-cluster__circle bottom-cluster__circle--left" />
        </div> */}
      </div>
    </div>
  )
}
