import React ,{useState}from 'react'
// var i=1;
export default function TextForm(props) {
  
  const handleupclick=()=>{
    // console.log("Uppercase was clicked" + text);  
    var conti=text.toUpperCase();
    props.alertor("Uppercase changed!","success")
    settext(conti);
  }
  const handlelowclick=()=>{
    // console.log("Lowercase was clicked" + text);  
    var conti=text.toLowerCase();
    props.alertor("Lowercase changed!","success")
    settext(conti);
  }

  const handleCopy =() => {
    var text=document.getElementById("mybox");
    text.select();
    text.setSelectionRange(0,99999);
      navigator.clipboard.writeText(text.value);
  }

  const speak = () => {
  let msg = new SpeechSynthesisUtterance();
  msg.text = text;
  window.speechSynthesis.speak(msg);
}

  const handleclearclick=()=>{
    var conti=("");
    settext(conti);
    props.alertor("Text Clear!","success")
  }
  const handleonchange=(event)=>{
    // console.log("handle on change event fire "+ i);
    // i++;
    settext(event.target.value);  // is used to render the text else will not change the text
  }
   const [text, settext] = useState("Enter Text here");
  //  text="there"                 // wrong way to change the text


   return (
    <div>
      <div className="container"  style={{color:props.mode==='light'?'black':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'#0d2245':'white',color:props.mode==='dark'?'white':'black'}} value  ={text} id="mybox" rows="5" onChange={handleonchange}></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleupclick} >Convert to Uppercase</button>  
        <button className="btn btn-primary mx-2" onClick={handlelowclick} >Convert to Lowercase</button>  
        <button className="btn btn-primary mx-2" onClick={handleclearclick} >Clear Content</button>  
        <button className="btn btn-primary mx-2" onClick={handleCopy} >Copy</button>  
        <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
      </div>
      <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}} >
        <h2>Your text summary</h2>
        <p>{text.length>0?text.split(" ").length:0} words and {text.length} letter</p>
        <p>{0.008*text.split(" ").length} minutes</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter Something in the Text-Box !"}</p>
      </div>
    </div>
  )
}

