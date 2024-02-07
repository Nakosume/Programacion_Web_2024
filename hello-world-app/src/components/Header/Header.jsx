import React from "react"

export function Header(props) {
    const { content, color } = props
    const options =["News","Overview","Game Guide","Community","Support"]

    return (
        <header style={{
            color: color,
            width: 'auto',
            height:'auto',
            /*backgroundImage: `url(${background})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "fill",
            backgroundPosition: 'left',*/
            background: 'linear-gradient(90deg, rgba(48,46,73,1) 18%, rgba(50,50,130,1) 60%, rgba(96,123,184,1) 100%)',
            marginBottom: '2vh',
            fontSize:'1rem',
            /* borderTopLeftRadius: '2vh',
            borderTopRightRadius: '2vh', */
            display: 'flex',
            flexDirection:'row',
            alignItems:'center',
            flexWrap:'wrap'
        }}>
            <img src={'https://pso2.com/players/update/ver2/img/logo_ngs_ver2.png'} style={{
                height:'9vh',
                width: 'auto'
            }}></img>

            <div style={{
                display: 'flex',
                flexDirection:'row',
                paddingLeft: '2rem',
                paddingRight: '2rem',
            }}>
            {
                options.map((option)=>
                <h3 key={{option}} style={{
                    margin: '0',
                    width: 'fit-content',
                    height: 'auto',
                    paddingLeft: '1vh',
                    paddingRight: '1vh',
                    paddingTop: '1.5vh',
                    paddingBottom: '1.5vh',
                    display:'flex',
                    alignItems:'center'
                }}>{option}</h3>
                )
            }
            </div>

            
        </header>
    )
}