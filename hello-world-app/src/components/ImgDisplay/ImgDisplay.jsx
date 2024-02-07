import React from "react";

export function ImgDisplay() {
    return (
        <div style={{
            height: '40vh',
            overflowX: 'scroll',
            overflowY: 'hidden',
        }}>
            <img src={'https://www.bumped.org/phantasy/wp-content/uploads/2021/06/NGS-Headline.jpg'} style={{
                height: '100%',
                width: 'auto',
                paddingLeft: '3vh',
                paddingRight: '3vh',
            }}></img>
            <img src={'https://www.bumped.org/phantasy/wp-content/uploads/2023/06/PSO2-NGS-Ver-2-visual.jpg'} style={{
                height: '100%',
                width: 'auto',
                paddingLeft: '3vh',
                paddingRight: '3vh',
            }}></img>
            <img src={'https://www.bumped.org/phantasy/wp-content/uploads/2023/07/PSO2-11th-Anniversary.jpg'} style={{
                height: '100%',
                width: 'auto',
                paddingLeft: '3vh',
                paddingRight: '3vh',
            }}></img>
        </div>
    )
}