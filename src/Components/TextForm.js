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
        var text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
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
            <h4>{props.heading}</h4>
                <div className="mb-3" >
                    <textarea className="form-control" value = {text} onChange={handleOnChange} id="mybox" rows="5" style={{backgroundColor:props.mode === 'light'?'white':'grey', color: props.mode==='dark'?'white':'#042743'}}></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick} >Convert To UpperCase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick} >Convert To LowerCase</button>
                <button className="btn btn-primary mx-1" onClick={handleClearAll} >Clear All</button>
                <button className="btn btn-primary mx-1" onClick={handleCopy} >Copy Text</button>
            </div>
            <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
                <h3>Your Text Summary</h3>
                <p>{text.split(" ").length} words {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:"Enter your text in the text box above to preview it."}</p>
            </div>
        </>
    )
}
