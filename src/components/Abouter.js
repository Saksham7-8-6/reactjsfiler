// use the variable above the return and always make sure use the differnt names of the js file and not be present in the anyone of the folder ( name,var, value etc)
import { useState } from "react"
import React from 'react'
export default function Abouter() {
  const [styler, mystyle] = useState({
    color:"white" ,
    backgroundColor:"#05132a"
  })

const [apadder, mypadder] = useState("Enable Dark Mode")
const toggleclick=()=>{
  if(styler.color==='white'){
      mystyle({
        color:'#05132a',  
        backgroundColor:'white'
      })
      document.body.style.backgroundColor='white'
      mypadder("Enable Light Mode")
  }
  else{
    mystyle({
        color:'white',
        backgroundColor:'#05132a'
      })
      document.body.style.backgroundColor='#05132a'
      mypadder("Enable Dark Mode")
  }
}
  return (
    <>
    <div className="container" style={styler}>
      <h2 className='my-3'>About Us</h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={styler}>
          <h2 className="accordion-header">
            <button className="accordion-button" style={styler} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Accordion Item #1
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={styler}>
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={styler} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Accordion Item #2
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={styler}>
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={styler} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Accordion Item #3
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" style={styler} data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
</div>
<div className="container">
  <button type="button" onClick={toggleclick} className="btn btn-primary my-2">{apadder}</button>
</div>
</div>
</>
  )
}
