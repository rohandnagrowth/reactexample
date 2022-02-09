import React,{useState} from 'react'
import PropTypes from 'prop-types'
export default function Textform(props) {
    const handleup =()=>{
    let newText=text.toUpperCase();
       setText(newText) 
    }
    const handlelow =()=>{
        let newText=text.toLowerCase();
           setText(newText) 
        }

    const handletitle = () => {
        let newText = text.split(" ").map((currentValue) => {
            let newText = currentValue[0].toUpperCase() + currentValue.slice(1);
            return newText;
        });

        setText(newText.join(" "));

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
        };


    //to extract only the numbers in the text:
    const handleNumExtract =()=>{

    const regex = /[0-9/ /]/g;

    const digits = text.match(regex);
    const res = digits.join('');
    setText(res)
    };
    const handleReverse = (event) => {
    /* Convert string to array*/
    let strArr = text.split("");
    /* Reverse array*/
    strArr = strArr.reverse();
    /* Convert array to string*/
    let newText = strArr.join("");
    setText(newText);
    };

    const clear =()=>{
    let newText="";
        setText(newText) 
    }

    const handleExtraSpaces= (event) => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '));
    };

    //Function to download text as a text file

    const handleDownload=(filename, text)=>{
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);
        element.style.display = 'none'; 
        document.body.appendChild(element);
        element.click(); 
        document.body.removeChild(element);
    } 
    const Speak_Baby=()=>{

        var msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
  
    }

    const [text, setText] = useState('');
  return (
      <>

        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handlech} rows="10"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleup}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handlelow}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-1" onClick={handletitle}>Convert to TitleCase</button>
            <button className="btn btn-primary mx-1" onClick={handleReverse}>Convert to Reverse</button>

            <button className="btn btn-primary mx-1" onClick={handletextExtract}>Remove Symbols</button>

            <button className="btn btn-primary mx-1" onClick={handleNumExtract}>Extract Number</button>

            <button className="btn btn-primary mx-1" onClick={handleDownload}>Download Text</button>
            <button className="btn btn-primary mx-1" onClick={Speak_Baby}>Listen Text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

            <button className="btn btn-primary mx-1 my-1" onClick={clear}>Clear</button>


        </div>
        <div className="container">
            <h2>Your text Summary</h2>
            <p>{text.split(" ").length} words and  {text.length} characters</p>
            <p>You can read the text in {0.008 * text.split(" ").length} minutes</p>

            <h3>Preview</h3>
            <p>{text}</p>
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
