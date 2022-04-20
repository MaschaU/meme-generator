import React, {useRef, useEffect} from 'react'

const Canvas = props => {
    const canvasRef = useRef(null);
    useEffect(()=>{
        if(!props.image) {
            return
        }
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        const topText = props.topText;
        const bottomText = props.bottomText;
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

            props.onCanvasUpdate(canvas);
        }

        image.src = props.image;
    
    }, [props.image, props.topText, props.bottomText, props.onCanvasUpdate, props]);
    
    return(
        <canvas ref={canvasRef}/>
    )
}

export default Canvas