import { useState } from 'react';
import './App.css';
import Header from './Header/Header';
import Landing from './Landing/Landing';
import Modal from './Modal/Modal';
import Editor from "./Editor/Editor";


function App() {
  const [ show, setShow ] = useState(false);
  const [ image, setImage ] = useState(false);
  return (
    <div className="App">
      <Header/>
      <div className="main-container">
        { image 
        ?
        <Editor image={image}/>
        :
        <>
        <Landing onOpenModal = { () => {setShow(true)}}/>
        <Modal show={ show } onImageSelect = { setImage }/>
        </>
        }
      </div>
      
    </div>
  );
}

export default App;
