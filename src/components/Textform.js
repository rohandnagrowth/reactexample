import React,{useState} from 'react'
import PropTypes from 'prop-types'
export default function Textform(props) {
    const handleup =()=>{
    let newText=text.toUpperCase();
       setText(newText) 
    }

    const handlech =(event)=>{
        setText(event.target.value) 
     }


    const [text, setText] = useState('Enter text here');
  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handlech} rows="10"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleup}>Convert to Uppercase</button>
    </div>
  )
}

Textform.propTypes={
    heading:PropTypes.string.isRequired
}
Textform.defaultProps={
    heading:"Enter the Text"
}
