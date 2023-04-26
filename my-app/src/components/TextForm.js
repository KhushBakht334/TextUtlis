import { useState } from 'react';
import React from 'react'

function TextForm({heading, mode, showAlert}) {
  console.log('Mode:', mode);

  const handleUpClick=()=>{
    // console.log("button is clicked" + text)
    let newText= text.toUpperCase();
    setText(newText);
    showAlert("Converted to Uppercase", "success")
  }
  const handleLowClick=()=>{
    // console.log("button is clicked" + text)
    let newText= text.toLowerCase();
    setText(newText);
    showAlert("Converted to Lowercase", "success")
  }
  const handleOnChange=(event)=>{
    // console.log("on Change")
    setText(event.target.value)
  }
  const deleteText=()=>{
    setText(" ")
    showAlert("Text Deleted", "success")
  }
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    showAlert("Copied to Clipeboard", "success")
  };

  const replaceText = () => {
    let a = prompt("What word do you want to replace?");
    if (text.includes(a)) {
      let newWord = prompt(`What do you want to replace ${a} with?`);
      const newText = text.replace(new RegExp(a, "g"), newWord);
      setText(newText);
    } else {
      alert(`The word ${a} was not found in the text`);
    }
    showAlert("Text is replaced", "success")
  };
  const [text, setText] = useState(` `);
  return (
    <>
    <div className='conatiner' style={{
    color: mode === 'light' ? 'black' : 'white'
  }}>
      <h1>{heading}</h1>
<div className="mb-3">
  <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{
    backgroundColor: mode === 'dark' ? '#343a40' : 'lightblue', color: mode === 'dark' ? 'white' : 'black'
  }}></textarea>
</div>
<button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy the text</button>
<button className="btn btn-danger mx-1 my-1" onClick={deleteText}>Delete the text</button>
<button className="btn btn-danger mx-1 my-1" onClick={replaceText}>Replace the text</button>

    </div>
    <div className='conatiner my-4' style={{
    color: mode === 'light' ? 'black' : 'white'
  }}>
      <h1>Your Text Summary</h1>
      <p>Total {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters.</p>
      <p>{0.008 * (text.split(/\s+/).filter((element)=>{return element.length!==0}).length)}minutes taken to thr read the word.</p>
    </div>
    <h2 style={{
    color: mode === 'light' ? 'black' : 'white'
  }}>Preview</h2>
    <p style={{
    color: mode === 'light' ? 'black' : 'white'
  }}>{text.length>0? text:"Enter something to preview"}</p>
    </>
  );
}
TextForm.defaultProps = {
  mode: 'light'
};
export default TextForm;

