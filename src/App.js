import { useState } from 'react';
import './App.css';
import Header from './Header/Header';
import Landing from './Landing/Landing';
import Modal from './Modal/Modal';
import Editor from "./Editor/Editor";
import CameraPreview from "./CameraPreview/CameraPreview";
import TemplatePicker from "./TemplatePicker/TemplatePicker";


function App() {
  const [show, setShow] = useState(false);
  const [image, setImage] = useState(false);
  return (
    <div className="App">
      <Header/>
      <div className="main-container">
        { image 
        ?
        <Editor image={image}/>
        :
        <>
        <Landing  onImageSelect = {setImage} onOpenModal={setShow}/>
        <Modal show={show} >
          { show === 'camera'?
          <CameraPreview onImageSelect = {setImage}/>
          :
          <TemplatePicker onImageSelect = {setImage}/>
          }
        </Modal>
        </>
        }
      </div>
      
    </div>
  );
}

export default App;
