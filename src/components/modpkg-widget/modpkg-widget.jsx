import React from "react"
import "./modpkg-widget.css"
import mpLogo from "/mp-logo.svg"

export default function ModpkgWidget() {
  return (
    <a className="mp-widget" href="https://modpkg.redsouth.eu" target="_blank" draggable="false">
      <div className="mp-widget-link">
        <img src={mpLogo} alt="" />
      </div>
    </a>
  )
}