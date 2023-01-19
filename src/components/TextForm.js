import React,{useState} from 'react'

export default function TextForm(props) {
    /*const [myStyle,setmystyle]=useState({
        color:'black',
        backgroundColor:'white'
    });
    const [btnt,setbtn]=useState("enable dark mode")
    const toggle=()=>{
        if(myStyle.color==='white'){
            setmystyle({
                color:'black',
            backgroundColor:'white'
            })
            setbtn("Enable dark mode")
            
        }
        else{
            setmystyle({
            color:'white',
            backgroundColor:'black'
            })
            setbtn("Enable light mode")
        }
    }*/
    const [text,setText]=useState('');
    
    const handleup=()=>{
        //console.log("uppercase was clicked");
        let newtext=text.toUpperCase();
        setText(newtext);
        props.al("converted to uppercase","success");
    }
    const handleOnChange=(event)=>{
        //console.log("on change");
        setText(event.target.value);
        //props.al("text changed","success");

    }
    const handledown=()=>{
        let newt=text.toLowerCase();
        setText(newt);
        props.al("converted to lowercase","success");
    }
    const handleclear=()=>{
        let text='';
        setText(text);
        props.al("text cleared","success");
    }
  return (
            <>
            <div style={{color: props.mode==='dark'?'white':'black'}}>
                <h2>{props.heading}</h2>

        <div className="mb-3">
        <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black'}} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="6"></textarea>
        
        </div>
   
        <button className="btn btn-primary mx-2" onClick={handleup}>To uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handledown}>To lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleclear}>Clear text</button>
            </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words, {text.length} letters</p>
            <p>{(text.split(" ").length)*0.008}seconds- time to read</p>

            <h2>Preview</h2>
            <p>{text.length>0?text:'enter your text in the box above for preview'}</p>

        </div>
            


    </>
  )
}
