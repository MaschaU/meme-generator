import './ImagePreview.css';
import React, { useState, useRef, useCallback } from 'react';// import ReactFileReader from 'react-file-reader';
import Webcam from "react-webcam";

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user"
};

const ImagePreview = () => {
  // useState always returns an array with value and setter
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
  return (
    <div>
      <input type="file" onChange={handleUpload}/>
      <button type="button" onClick={capture}>Upload</button>
      <button type="button" onClick={handleClear}>Clear</button>
      
      <img src={file}/>
      <Webcam
        audio={false}
        height={720}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={1280}
        videoConstraints={videoConstraints}
      />
    </div>
  )
}

// LEAVING FOR REFERENCE (NOT TO DO)
// class ImagePreview extends React.Component {
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
export default ImagePreview;