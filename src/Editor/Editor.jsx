import React, {useState} from "react";
import Canvas from "../Canvas/Canvas";


const Editor = (props) => {
    const [topText, setTopText] = useState('');
    const [bottomText, setBottomText] = useState('');
    const [canvasElement, setCanvasElement] = useState(null);
   

    return(
        <div>
            <input type="text" name="topText" placeholder="Top text" onChange={(event) => {setTopText(event.target.value)}}/>
            <input type="text" name="bottomText" placeholder="Bottom text" onChange={(event) => {setBottomText(event.target.value)}}/>
            <Canvas image={props.image} topText={topText} bottomText={bottomText} onCanvasUpdate={setCanvasElement}/>
            {canvasElement ? 
            <a href={canvasElement.toDataURL()} download={`${topText||'meme'}.jpg`}>Download!</a> :
            null
            }

        </div>
    )
}

export default Editor;
