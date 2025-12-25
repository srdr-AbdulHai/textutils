import jsPDF from 'jspdf';
import React, {useState} from 'react'

export default function TextForm(props) {
 const handleUpClick =()=>{
      //  console.log("Uppercase was clicked " + text)
       let newText = text.toUpperCase();
       setText(newText)
 }

  const handleLoClick =()=>{
      //  console.log("Uppercase was clicked " + text)
       let newText = text.toLowerCase();
       setText(newText)
 }
  const handleSaveFile =()=>{
      const pdf = new jsPDF();
      const lines = pdf.splitTextToSize(text || "No text provided", 180);
      pdf.text(lines, 10, 10);
      pdf.save("textutil.pdf");
 }
  

const handleOnChange =(event)=>{
      //  console.log("On Change")
       setText(event.target.value)
 }

  const getButtonStyle = () => {
    if(props.mode === 'dark') return { backgroundColor: '#585858ff', borderColor: '#585858ff' };
    if(props.mode === 'blue') return { backgroundColor: '#0056b3', borderColor: '#0056b3' };
    if(props.mode === 'red') return { backgroundColor: '#c41e1e', borderColor: '#c41e1e' };
    return {};
  }

  const [text,setText] = useState('');
  return (
      <>
     <div className="mb-3"   style={{color: props.mode==='dark'?'white': props.mode==='red' || props.mode==='blue'?'white':'black'}} >
    <h3>{props.heading}</h3>
  <label for="exampleFormControlTextarea1" className="form-label"></label>
  <textarea className="form-control" value={text} onChange={handleOnChange}   
  style={{backgroundColor: props.mode==='dark'?'#2b3136': props.mode==='red'?'#592222ff': props.mode==='blue'?'#232559ff':'white', color: props.mode==='dark'?'white': props.mode==='red' || props.mode==='blue'?'white':'black'}} id="exampleFormControlTextarea1" rows="8">
</textarea>
  <button disabled={text.length===0} className='btn btn-primary my-2'  onClick={handleUpClick} style={getButtonStyle()}>Convert to uppercase</button>
  <button disabled={text.length===0} className='btn btn-primary my-2 mx-2' onClick={handleLoClick} style={getButtonStyle()}>Convert to lowercase</button>
  <button disabled={text.length===0} className='btn btn-primary my-2 mx-2' onClick={handleSaveFile} style={getButtonStyle()}>Save as PDF</button>

  </div>
  <div className="container" style={{color: props.mode==='dark'?'white': props.mode==='red' || props.mode==='blue'?'white':'black'}}>
      <h3>Summary of the text</h3>
      <p>Words : {text.split(" ").filter((element)=>{return element.length !==0}).length} | Characters : {text.length}</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length !==0}).length} Minutes to Read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"No Preview"}</p>
      <hr />
  </div>

  </>
  )
}
