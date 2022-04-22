import React, {useState, useRef, useEffect} from "react";


const Editor = (props) => {
    const [topText, setTopText] = useState('');
    const [bottomText, setBottomText] = useState('');
    // const [canvasElement, setCanvasElement] = useState(null);

    const canvasRef = useRef(null);
    useEffect(()=>{
        if(!props.image) {
            return
        }
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        const image = new Image();

        image.onload = function() {
            canvas.width = image.width;
            canvas.height = image.height;
            context.drawImage(image, 0, 0);
            context.fillStyle = 'lime'
            context.strokeStyle = 'black';
            context.font = '48px impact';
            context.textBaseline = 'top';
            context.textAlign = 'center';
            context.lineWidth = 5;
            context.lineJoin = 'round';
            context.strokeText(topText, canvas.width / 2, 0);
            context.fillText(topText, canvas.width / 2, 0);

            context.fillStyle = 'tomato';
            context.strokeStyle = 'black';
            context.font = '48px impact';
            context.textBaseline = 'bottom';
            context.strokeText(bottomText, canvas.width / 2, canvas.height);
            context.fillText(bottomText, canvas.width / 2, canvas.height);

            
        }

        image.src = props.image;
    
    }, [topText, bottomText, props.image, props]);
    
   

    return(
        <div>
            <input type="text" name="topText" placeholder="Top text" onChange={(event) => {setTopText(event.target.value)}}/>
            <input type="text" name="bottomText" placeholder="Bottom text" onChange={(event) => {setBottomText(event.target.value)}}/>
            {/* <Canvas image={props.image} topText={topText} bottomText={bottomText} onCanvasUpdate={setCanvasElement}/> */}
            {/* {canvasElement ?  */}
            {/* <a href={canvasElement.toDataURL()} download={`${topText||'meme'}.jpg`}>Download!</a> :
            null
            } */}
            <canvas ref={canvasRef}/>


        </div>
    )
}

export default Editor;
