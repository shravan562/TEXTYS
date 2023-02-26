import React,{useState} from 'react'

export default function TextForm(props) {
    
    const handleUpclick = ()=>{
       // console.log("Uppercase was clicked"+ text);
        let newText=text.toUpperCase();
        setText(newText) 
    }
    const handleLoclick = ()=>{
      // console.log("Uppercase was clicked"+ text);
       let newText=text.toLowerCase();
       setText(newText) 
   }
   const handleClclick = ()=>{
    // console.log("Uppercase was clicked"+ text);
     let newText='';
     setText(newText) 
 }
 const handleCopyclick = ()=>{
  // console.log("Uppercase was clicked"+ text);
   var text=document.getElementById("my box");
   text.select();
   navigator.clipboard.writeText(text.value);
}
 
    const handleonchange = (event)=>{
        //console.log("on change");
        setText(event.target.value);
    }
    const [text,setText]=useState('');
    
  return (
   <>
    <div className="container"style={{color:props.mode==='dark'?'white':`light`}}>
   <h1>{props.heading}</h1> 
<div className="mb-3">

  <textarea className="form-control" value={text} onChange={handleonchange} style={{backgroundColor:props.mode==='dark'?'grey':`white`,
color:props.mode==='dark'?'white':`light`}} id="my box" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-3" onClick={handleUpclick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-3" onClick={handleLoclick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-3" onClick={handleClclick}>Clear text</button>
<button className="btn btn-primary mx-3" onClick={handleCopyclick}>Copy text</button>

    </div>
    <div className="container my-3"style={{color:props.mode==='dark'?'white':`light`}}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} character</p>
      <p>{0.008*text.split(" ").length} Minutes read </p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
