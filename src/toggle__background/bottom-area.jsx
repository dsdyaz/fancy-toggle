import React from "react"
import "../style/bottom-area.css"

export default function BottomArea() {
  return (
    <div className="bottom-area">
      <div className="bottom-area__rear-cluster">
        <div className="bottom-area__item bottom-area__item_top-right" />
        <div className="bottom-area__item bottom-area__item_bottom-right" />
        <div className="bottom-area__item bottom-area__item_right-center" />
        <div className="bottom-area__item bottom-area__item_center" />
        <div className="bottom-area__item bottom-area__item_left-center" />
        <div className="bottom-area__item bottom-area__item_top-left" />
        <div className="bottom-area__item bottom-area__item_bottom-left" />
      </div>
      <div className="bottom-area__item bottom-area__item--front bottom-area__item--top-right" />
      <div className="bottom-area__item bottom-area__item--front bottom-area__item--bottom-right" />
      <div className="bottom-area__item bottom-area__item--front bottom-area__item--right-center" />
      <div className="bottom-area__item bottom-area__item--front bottom-area__item--center" />
      <div className="bottom-area__item bottom-area__item--front bottom-area__item--left-center" />
      <div className="bottom-area__item bottom-area__item--front bottom-area__item--top-left" />
      <div className="bottom-area__item bottom-area__item--front bottom-area__item--bottom-left" />
    </div>
  )
}
