import React from "react"
import Button_RFCE from "./Button_RFCE"
import Button_RFCE_UseRef from "./Button_RFCE_UseRef"
import Button_ClassComponent from "./Button_ClassComponent"

function App() {


  return (
<div className="centerThis">
  <h1>React Button Functionality</h1>
  <div className="shape">Hello</div>
  <h3>Using <span style={{color:"blue"}}>UseState()</span> Method</h3>
<Button_RFCE/><br/>
<h3>Using <span style={{color:"blue"}}>UseRef()</span> Method</h3>
<Button_RFCE_UseRef/><br/>
<h3>Using React <span style={{color:"blue"}}>Class Component</span></h3>
<Button_ClassComponent/>
</div>
  )
}

export default App
