import React, {useState} from "react";
import CameraPreview from "../CameraPreview/CameraPreview";
import Landing from "../Landing/Landing";
import Canvas from "../Canvas/Canvas";


const Editor = (props) => {
    const [topText, setTopText] = useState('');
    const [bottomText, setBottomText] = useState('');

    return(
        <div>
            <input type="text" name="topText" placeholder="Top text" onChange={(event) => {setTopText(event.target.value)}}/>
            <input type="text" name="bottomText" placeholder="Bottom text" onChange={(event) => {setBottomText(event.target.value)}}/>
            <Canvas image={props.image} topText={topText} bottomText={bottomText}/>
            

        </div>
    )
}

export default Editor;
