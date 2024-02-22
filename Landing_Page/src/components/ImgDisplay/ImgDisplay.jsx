// import React from "react";
import './ImgDisplay.css'

export function ImgDisplay () {
  const imags = ['https://www.bumped.org/phantasy/wp-content/uploads/2023/06/PSO2-NGS-Ver-2-visual.jpg', 'https://www.bumped.org/phantasy/wp-content/uploads/2021/06/NGS-Headline.jpg', 'https://www.bumped.org/phantasy/wp-content/uploads/2023/07/PSO2-11th-Anniversary.jpg']
  return (
    <div
      className='imgContainer'
    >
      {
                imags.map((imgs) =>
                  <img className='banner-img' src={imgs} key={imgs.id} />
                )
            }
    </div>
  )
}
