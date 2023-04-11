import { useState } from 'react';


function TextForm({heading}) {
  const handleUpClick=()=>{
    // console.log("button is clicked" + text)
    let newText= text.toUpperCase();
    setText(newText);
  }
  const handleLowClick=()=>{
    // console.log("button is clicked" + text)
    let newText= text.toLowerCase();
    setText(newText);
  }
  const handleOnChange=(event)=>{
    // console.log("on Change")
    setText(event.target.value)
  }
  const deleteText=()=>{
    setText(" ")
  }
  const replaceText = () => {
    let a = prompt("What word do you want to replace?");
    if (text.includes(a)) {
      let newWord = prompt(`What do you want to replace ${a} with?`);
      const newText = text.replace(new RegExp(a, "g"), newWord);
      setText(newText);
    } else {
      alert(`The word ${a} was not found in the text`);
    }
  };
  const [text, setText] = useState(` `);
  return (
    <>
    <div>
      <h1>{heading}</h1>
<div className="mb-3">
  <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
</div>
<button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary" onClick={handleLowClick}>Convert to Lowercase</button>
<button className="btn btn-danger mx-5" onClick={deleteText}>Delete the text</button>
<button className="btn btn-danger" onClick={replaceText}>Replace the text</button>
    </div>
    <div className='conatiner my-4'>
      <h1>Your Text Summary</h1>
      <p>Total {text.split(/\s+/).length-1} words and {text.length} characters.</p>
      <p>{0.008 * (text.split(/\s+/).length-1)}minutes taken to read the word.</p>
    </div>
    <h2>Preview</h2>
    <p>{text}</p>
    </>
  );
}
export default TextForm;
