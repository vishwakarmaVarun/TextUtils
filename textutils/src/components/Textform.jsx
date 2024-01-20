import React, {useState} from 'react'

export default function Textform(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success");
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success");
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("All text are cleared", "success");
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Your text is copied", "success");
    }

    const removeExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Your text has no extra spaces", "success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = useState('');
  return (
    <>
    <div className={`container text-${props.mode === 'light'?'dark': 'light'}`}>
        <h2 className='mb-3'>{props.headings}</h2>
        <div className="mb-3">
            <textarea className="form-control" value={text} style={{backgroundColor: props.mode === 'dark'?'#a396ff': 'white', color: props.mode === 'dark'?'white': 'black', resize: 'none', borderColor: props.mode === 'dark'? 'white' : '#000'}} onChange={handleOnChange} id="myBox" rows="10"></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={removeExtraSpaces}>RemoveXSpaces</button>
    </div>
    <div className="container my-2">
        <h2 className={`text-${props.mode === 'light'?'dark': 'light'}`}>Your text summary</h2>
        <p style={{fontSize: '14px'}} className={`text-${props.mode === 'light'?'dark': 'light'}`}><b>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</b> words and <b>{text.length}</b> characters</p>
        <p style={{fontSize: '14px'}} className={`text-${props.mode === 'light'?'dark': 'light'}`}><b>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length}</b> minutes read</p>
        <h2 className={`text-${props.mode === 'light'?'dark': 'light'}`}>Preview</h2>
        <p style={{fontSize: '14px'}} className={`text-${props.mode === 'light'?'dark': 'light'}`}>{text.length>0?text: "Nothing to preview"}</p>
    </div>
    </>
  )
}
