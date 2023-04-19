import React from "react"
import "./style/App.css"
import "./style/background.css"
import Toggle from "./toggle/toggle"

function App() {
  return (
    <div className="App">
      <div className="background">
        <div className="position-block">
          <Toggle />
        </div>
      </div>
    </div>
  )
}

export default App
