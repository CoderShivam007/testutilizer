import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {

  const [mode, setMode] = useState('light');

  const ChangeClick = (cls) => {
    console.log("Mode:" + mode);
        setMode(cls);
        if(cls === 'warning')
        {
          document.body.style.backgroundColor = 'yellow';
          document.body.style.color = 'black';
        }

        else if(cls === 'primary')
        {
          document.body.style.backgroundColor = 'blue';
        }

        else if(cls === 'danger')
        {
          document.body.style.backgroundColor = 'red';
        }

        else if(cls === 'success')
        {
          document.body.style.backgroundColor = 'green';
        }

        else
        {
          document.body.style.backgroundColor = 'black';
          document.body.style.color = 'white';
        }
        
        
  
  }

  return (
    <div className="App" >
     
     <Navbar title="TextUtils" about="About Us" mode={mode} toggle={ChangeClick} />
     <TextForm/>
     
     
      
    </div>
   
  );
}

export default App;
