import './Landing.css';
import React, { useState } from 'react';

const Landing = (props) => {
    // useState always returns an array with value and a setter
    // setter- a fn that allows us to set the state value
    // const [file, setFile] = useState(null);
    const handleUpload = (event) => {
      props.onImageSelect(URL.createObjectURL(event.target.files[0]))
    }
  
    
    return (
      <div>
        <input type="file" onChange={handleUpload}/>
        <button onClick={() => {props.onOpenModal('camera') } }> Take a photo</button>
        <button onClick={() => {props.onOpenModal('picker') } }> Show templates</button>


      </div>
    )
  }

  export default Landing;