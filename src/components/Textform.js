import React,{useState} from 'react'
import PropTypes from 'prop-types'
export default function Textform(props) {
    const handleup =()=>{
    let newText=text.toUpperCase();
       setText(newText) 
      props.showAlert('Converted to UpperCase','success');

    }
    const handlelow =()=>{
        let newText=text.toLowerCase();
           setText(newText) 
      props.showAlert('Converted to LowerCase','success');

        }

    const handletitle = () => {
        let newText = text.split(" ").map((currentValue) => {
            let newText = currentValue[0].toUpperCase() + currentValue.slice(1);
            return newText;

        });

        setText(newText.join(" "));
        props.showAlert('Converted to TitleCase','success');


    }

    const handlech =(event)=>{
        setText(event.target.value) 
     }
    //remove all the symbols
    const handletextExtract =()=>{

        const regex = /[0-9/A-Z/a-z/ /]/g;

        const letters = text.match(regex);
        const res1 = letters.join('');
        setText(res1)
        props.showAlert('Symbols Removed','success');
        };
    
    const clear =()=>{
    let newText="";
        setText(newText) 
        props.showAlert('Text Cleared','success');

    }

    const handleExtraSpaces= (event) => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '));
        props.showAlert('Extra spaces Removed','success');

    };

    const Speak_Baby=()=>{

        var msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert('Please Listen','success');
  
    }

    const [text, setText] = useState('');
  return (
      <>

        <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" value={text}  style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} onChange={handlech} rows="10"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleup}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handlelow}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-1" onClick={handletitle}>Convert to TitleCase</button>
            <button className="btn btn-primary mx-1" onClick={handletextExtract}>Remove Symbols</button>      
            <button className="btn btn-primary mx-1" onClick={Speak_Baby}>Listen Text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button className="btn btn-primary mx-1 my-1" onClick={clear}>Clear</button>


        </div>
        <div className="container" style={{color:props.mode==='dark'?'white':'black'}} >
            <h2>Your text Summary</h2>
            <p>{text.split(" ").length-1} words and  {text.length} characters</p>
            <p>You can read the text in {0.008 * text.split(" ").length} minutes</p>

            <h3>Preview</h3>
            <p>{text.length>0?text:'Enter the text in above box to Preview here'}</p>
        </div>

      </>
  )
}

Textform.propTypes={
    heading:PropTypes.string.isRequired
}
Textform.defaultProps={
    heading:"Enter the Text"
}
