import React from "react"
import "./redsouth-widget.css"
import rsLogo from "/rs-logo.svg"

export default function RedsouthWidget() {
  return (
    <a className="rs-widget" href="https://redsouth.eu" target="_blank" draggable="false">
      <div className="rs-widget-link">
        <img src={rsLogo} alt="" />
      </div>
    </a>
  )
}