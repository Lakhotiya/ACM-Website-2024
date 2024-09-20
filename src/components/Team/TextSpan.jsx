import {motion,useAnimationControls} from 'framer-motion'
import { useState } from 'react';

function TextSpan({children}){
    const controls =useAnimationControls();
    const [isPlaying, setIsPlaying] = useState(false);
    const rubberBand = ()=>{
        controls.start({
            transform:[
                "scale3d(1,1,1)",
                "scale3d(1.4,.55,1)",
                "scale3d(.75,1.25,1)",
                "scale3d(1.25,.85,1)",
                "scale3d(.9,1.05,1)",
                "scale3d(1,1,1)",
            ],
            // color: ["#000", "#f00", "#0f0", "#00f", "#0ff", "#55fee8","#fff"], 
            color: ["#82feee","#69feeb","#3dfee5", "#55fee8","#01ceb3","#fff"], 
            transition:{
                times: [0,.4,.6,.7,.8,.9]
            },
            
        })
        setIsPlaying(true)
    }
return(
    <span 
    className="rubberBand"
    style={{ display: 'inline-block' }}
    // onMouseOver={()=>{
    //     if(!isPlaying)
    //         rubberBand()
    // }}
    onMouseOver={() => (!isPlaying ? rubberBand() : null)}
    animate={controls}
    onAnimationComplete={()=>setIsPlaying(false)}
    >
        {children}
    </span>
)
}
export default TextSpan;