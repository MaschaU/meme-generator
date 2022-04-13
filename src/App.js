import { useState } from 'react';
import './App.css';
import Header from './Header/Header';
import Landing from './Landing/Landing';
import Modal from './Modal/Modal';

function App() {
  const [ show, setShow ] = useState(false);
  return (
    <div className="App">
      <Header/>
      <div className="main-container">
        <Landing />
      </div>
      <button onClick={ () => setShow(true)}> Show modal</button>
      <Modal show={show}/>
    </div>
  );
}

export default App;
