import propTypes from "prop-types";
import React from "react";
import images from "./images";

const TemplatePicker = (props) => {



    return(
        <>
        {images.map((image) => {
            return(
                <button key={image} onClick={() => props.onImageSelect(`/memes/${image}`)}>
                <img src={`/memes/${image}`} alt={image} />
                </button>
            )
        })}
        </>
        
    )
}

export default TemplatePicker;