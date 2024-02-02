import React from "react"
import { Header } from "./components/Header/Header"
import { Body } from "./components/Body/Body"
import {Footer} from "./components/Footer/Footer"

export default function App() {
    return (

        <>
            <Header content='me' color='yellow' />
            <Body content='pican' color='blue' />
            <Footer content='los cocos' color='red' />
        </>

    )
}