import { useState } from 'react';


function TextForm({heading}) {
  const handleUpClick=()=>{
    console.log("button is clicked" + text)
    let newText= text.toUpperCase();
    setText(newText);
  }
  const handleOnChange=(event)=>{
    console.log("on Change")
    setText(event.target.value)
  }
  const [text, setText] = useState(`Enter text here`);
  return (
    <div>
      <h1>{heading}</h1>
<div className="mb-3">
  <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
</div>
<button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
    </div>
  );
}
export default TextForm;