import './CameraPreview.css';
import React, { useState, useRef, useCallback } from 'react';// import ReactFileReader from 'react-file-reader';
import Webcam from "react-webcam";
import PropTypes from 'prop-types';

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user"
};

const CameraPreview = (props) => {
  // useState always returns an array with value and a setter
  // setter- a fn that allows us to set the state value
  const [file, setFile] = useState(null);
  const handleUpload = (event) => {
    setFile(URL.createObjectURL(event.target.files[0]))
  }

  const webcamRef = useRef(null);
  
  
  const capture = useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
      console.log(imageSrc);
      setFile(imageSrc);
    },
    [webcamRef]
  );
  const handleClear = (event) => {
    setFile(null);
  }
  const processSnap = (event) => {
    props.onImageSelect(file);
    
  }
  return (
    <div>
      <input type="file" onChange={handleUpload}/>
      <button type="button" onClick={handleClear}>Clear</button>

    {file
      ? 
      <>
      <img src={file} alt="memeToBe"/>
      <button type="button" onClick={processSnap}>That's it</button>
      </>
      :
      <> 
      <Webcam
        audio={false}
        height={720}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={1280}
        videoConstraints={videoConstraints}
      />
      <button type="button" onClick={capture}>Snap</button>
      </>
    }
    </div>
  )
}

CameraPreview.propTypes = {
  onImageSelect: PropTypes.func.isRequired    }

// LEAVING FOR REFERENCE (NOT TO DO)
// class CameraPreview extends React.Component {
//     constructor(props){
//       super(props)
//       this.state = {
//         file: null
//       }
//       this.handleChange = this.handleChange.bind(this)
//       this.handleClear = this.handleClear.bind(this)
//     }
//     handleChange(event) {
//       this.setState({
//         file: URL.createObjectURL(event.target.files[0])
//       })
//     }
//     handleClear(event) {
//       this.setState({
//         file: null
//       })
//     }
//     render() {
//       return (
//         <div>
//           <input type="file" onChange={this.handleChange}/>
//           <button type="button" onClick={this.handleClear}>Clear</button>
//           <img src={this.state.file}/>
//         </div>
//       );
//     }
//   }
export default CameraPreview;