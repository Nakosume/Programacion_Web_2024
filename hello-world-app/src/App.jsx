import React from "react"
import { Header } from "./components/Header/Header"
import { Body } from "./components/Body/Body"
import { Footer } from "./components/Footer/Footer"

export default function App() {
    return (

        <>
            <Header content='Landing page' color='azure' />
            <Body content='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio repellat laboriosam delectus, quam deleniti quod? Nemo, blanditiis ratione mollitia voluptatibus nihil eius quae soluta sed iusto, incidunt perferendis molestias culpa labore sint ea consequuntur, dolores recusandae vitae illum vero eligendi sapiente. Neque quia porro veritatis repellat error quasi voluptatem minima.' color='azure' />
            <Footer content='Bottom Text' color='azure' />
        </>
    )
}