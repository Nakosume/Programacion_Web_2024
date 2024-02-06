import React from "react";
import img1 from './PSO2-NGS-Ver-2-visual.jpg'

export function ImgDisplay (){
    return(
        <div style={{
            height:'40vh',
            paddingLeft:'4vh',
            paddingRight:'4vh',
        }}>
            <img src={img1} style={{
                height:'100%',
                width:'auto',
            }}></img>
        </div>
    )
}