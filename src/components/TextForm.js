import React, { useState } from 'react';



export default function TextForm()
 {

    const [text, setText] = useState('');
    

    const handleOnChange = (event) => {
        console.log("uppercase clicked");
        setText(event.target.value)
    }

    const handleClick = () => {
        console.log("Conversion of text:" + text);
        let newtext = text.toUpperCase();
        setText(newtext);
    }

    const resetClick = () => {
        console.log("Conversion of text:" + text);
        let newtext = '';
        setText(newtext);
    }

    var counter = () => {
        console.log("counter: " + text);
        let c = text.split(' ').length;
        if( text === '' )
        {
            c = c-1;
        }
        return c;
    }


    

    

    return (
        <>
            <div className='container p-5 ' >
                <div className="form-group mb-3">

                    <label htmlFor="exampleFormControlTextarea1" className='labeling'>Write something Here:</label>
                    <br />
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" value={text} onChange={handleOnChange}></textarea>
                </div>
                <button className='btn btn-success space' onClick={handleClick}>Change</button>
                <button className='btn btn-primary space' onClick={resetClick}>Reset</button>
          
            </div>


            <div className="card w-75 mt-3 container pt-5 pb-5 border border-dark">
                <div className="card-body">
                    <h1>Your Text Summary</h1>
                    <h5 className="card-title">Text Contains  { counter() }  Words and {text.length} characters</h5>
                    <p className="card-text">Time to Read {counter()} Words:  {0.008 * counter()} seconds </p>

                </div>
            </div>
        </>



    )
}
