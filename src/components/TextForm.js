import React ,{useState} from 'react'



export default function TextForm(props) {
    const handleUpClick = ()=>{
       // console.log("UpperCase was click"+text);
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Convert into upper case","success")
    }

    const handleLoClick = ()=>{
        // console.log("UpperCase was click"+text);
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Convert into Lower case","success")
    }
    
    
    const handleOnChange = (event)=>{
        //  console.log("on change");
        setText(event.target.value);
    }

    const handleClearClick = ()=>{
        let newText='';
        //  console.log("on change");
          setText(newText);
          props.showAlert("Clear text","success")
    }

    const handleCopy=()=>{

        var text=document.getElementById("MyBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copy to clipboard","success")

    }
    
    const handlExtraSpace=()=>{
        let newText=text.split(/[  ]+/);
        setText(newText.join(" "));

    }

  
  

   const [text, setText]=useState('');


  
    //setText("new text");
    return (
        <>
        <div className="container" style={{color:props.mode === 'dark' ? 'white':'black' }}>
            <h1>{props.heading}</h1>
            <div class="mb-3">
            <textarea className="form-control" value={text} onChange= {handleOnChange} style={{backgroundColor:props.mode === 'dark' ? '#343a40' : 'white',color:props.mode === 'dark' ? 'white' : 'black' }} id="MyBox" rows="8"></textarea>
            </div>

            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-info mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
            <button className="btn btn-danger mx-2" onClick={handleClearClick} >Clear</button>
            <button className="btn btn-info mx-2" onClick={handleCopy} >CopyText</button>
            <button className="btn btn-primary mx-2" onClick={handlExtraSpace} > Remove ExtraSpace</button>
        
        </div>

        <div className="container my-3"  style={{color:props.mode === 'dark' ? 'white':'black'}}>
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} word and {text.length}charaters</p>
            <p>{0.008*text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"ENTER  SOMETHING IN THE TEXBOX ABOVE TO PREVIEW IT HERE :)"}</p>
        </div>
        </>
   )
}
