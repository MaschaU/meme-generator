import './App.css';
import Header from './header/Header';
import ImagePreview from './ImagePreview/ImagePreview';
function App() {
  return (
    <div className="App">
      <Header/>
      <div class="main-container">
        <ImagePreview />
      </div>
    </div>
  );
}

export default App;
