import React, {useRef, useEffect} from 'react'



const Canvas = props => {
    const canvasRef = useRef(null);
    useEffect(()=>{
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        const topText = 'Oh no!';
        const bottomText = 'Anyway..';
        context.fillStyle = 'lime'
        context.strokeStyle = 'black';
        context.font = '48px impact';
        context.textBaseline = 'top';
        context.textAlign = 'center';
        context.fillText(topText, canvas.width / 2, 0);
        context.strokeText(topText, canvas.width / 2, 0);


        context.fillStyle = 'tomato';
        context.strokeStyle = 'black';
        context.font = '48px impact';
        context.textBaseline = 'bottom';
        context.fillText(bottomText, canvas.width / 2, canvas.height);
        context.strokeText(bottomText, canvas.width / 2, canvas.height);

        
        // context.fillRect(0, 0, context.canvas.width, context.canvas.height)
    }, []);
    
    return(
        <canvas ref={canvasRef} {...props}/>
    )
}

export default Canvas