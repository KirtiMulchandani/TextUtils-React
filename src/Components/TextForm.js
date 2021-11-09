import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("UpperCase was Clicked");
        // SetText("You have clicked on handleUpClick");
        const newText = text.toUpperCase();
        SetText(newText);
        props.showAlert("Converted to UpperCase!", "success");
    }

    const handleLoClick = () =>{
        // console.log("UpperCase was Clicked");
        // SetText("You have clicked on handleUpClick");
        const newText = text.toLowerCase();
        SetText(newText);
        props.showAlert("Converted to LowerCase!", "success");
    }

    const handleClearAll = () =>{
        // console.log("UpperCase was Clicked");
        // SetText("You have clicked on handleUpClick");
        const newText = '';
        SetText(newText);
        props.showAlert("Cleared", "success");
    }

    const handleCopy = () =>{
        // console.log("UpperCase was Clicked");
        // SetText("You have clicked on handleUpClick");
        navigator.clipboard.writeText(text);
        props.showAlert("Copied", "success");

    }

    const handleOnChange = (event) =>{
        // console.log("On Change");
        SetText(event.target.value);
    }
    const [text, SetText] = useState("")
    return (
        <>
            <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h4 className="mb-2">{props.heading}</h4>
                <div className="mb-3" >
                    <textarea className="form-control" value = {text} onChange={handleOnChange} id="mybox" rows="5" style={{backgroundColor:props.mode === 'light'?'white':'grey', color: props.mode==='dark'?'white':'#042743'}}></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick} >Convert To UpperCase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick} >Convert To LowerCase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearAll} >Clear All</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy} >Copy Text</button>
            </div>
            <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
                <h3>Your Text Summary</h3>
                <p>{text.split(/\s/).filter((element)=>{return element.length!==0}).length} words {text.length} characters</p>
                <p>{0.008 * text.split(/\s/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:"Nothing to Preview!"}</p>
            </div>
        </>
    )
}
