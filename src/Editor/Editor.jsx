import React from "react";
import CameraPreview from "../CameraPreview/CameraPreview";
import Landing from "../Landing/Landing";

const Editor = (props) => {
    return(
        <div>
            <img src={props.image} alt="memeToBe" />
        </div>
    )
}

export default Editor;
