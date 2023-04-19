import React from "react"
import "./style/App.css"
import "./style/page-background.css"
import Toggle from "./toggle/toggle"
import ToggleBackground from "./toggle__background/toggle__background"

function App() {
  return (
    <div className="App">
      <div className="background">
        <div className="position-block">
          {/* <Toggle /> */}
          <ToggleBackground />
        </div>
      </div>
    </div>
  )
}

export default App
