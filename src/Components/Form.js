import React, {useState} from 'react'

export default function Form(props) {

const [text, setText] = useState("");

//--------- All the button functions--------------

function upperfunc() {
    setText(text.toUpperCase())
};
function lowerfunc() {
    setText(text.toLowerCase())
};
function handleChange(_event) {
    setText(_event.target.value)
};
function cleartext() {
    
    if (window.confirm("Do you want to clear the text?")===true) {
        setText("")
    }
}
function copyToClip() {
    const text=document.getElementById('textarea');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.alertFunc('Success!','Text Copied to Clipboard.','success')
}



return (
<>
<div className="mb-3">
<label htmlFor="textarea" class="form-label"><b>Write Your Lines Here Below</b>
</label>
<textarea className="form-control" id="textarea" rows="9" value={text} onChange={handleChange} style={{background:props.mode==='dark'?'rgb(6 19 22 / 72%)':'white', color:props.mode==='dark'?'#ffffffcf':'black'}}></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={lowerfunc}>Convert to Lowercase</button>
<button className="btn btn-success mx-2" onClick={upperfunc}>Convert to Uppercase</button><br />
<button className="btn btn-dark mx-2 my-2" onClick={cleartext}>Clear</button>
<button className="btn btn-secondary mx-2 my-2" onClick={copyToClip}>Copy to Clipboard</button>

<div className="container my-2">
<b>Word Count: </b>{(text.split(" ").length)-1}<br/>
<b>Characters Count: </b>{text.length}
</div>
</>
)
}
