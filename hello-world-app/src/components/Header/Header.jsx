import React from "react"
import background from './title_top.png'
import logo from './logo_ngs_ver2.png'

export function Header(props) {
    const { content, color } = props
    const options =["News","Overview","Game Guide","Community","Support"]

    return (
        <header style={{
            color: color,
            width: '100%',
            height:'auto',
            /*backgroundImage: `url(${background})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "fill",
            backgroundPosition: 'left',*/
            background: 'linear-gradient(90deg, rgba(48,46,73,1) 18%, rgba(50,50,130,1) 60%, rgba(96,123,184,1) 100%)',
            marginBottom: '2vh',
            fontSize:'0.8rem',
            /* borderTopLeftRadius: '2vh',
            borderTopRightRadius: '2vh', */
            display: 'flex',
            flexDirection:'row',
            alignItems:'center',
            flexWrap:'wrap'
        }}>
            <img src={logo} style={{
                height:'9vh',
                width: 'auto'
            }}></img>

            {
                options.map((option)=>
                <h3 key={{option}} style={{
                    margin: '0',
                    width: 'fit-content',
                    height: 'auto',
                    paddingLeft: '1vh',
                    paddingRight: '1vh',
                    paddingTop: '1.5vh',
                    paddingBottom: '1.5vh'
                }}>{option}</h3>
                )
            }

            
        </header>
    )
}