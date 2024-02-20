import React from 'react'

import { Header } from './components/Header/Header'
import { Body } from './components/Body/Body'
import { Footer } from './components/Footer/Footer'
import { ImgDisplay } from './components/ImgDisplay/ImgDisplay'

export default function App () {
  return (

    <div className='app-container'>
      <Header content='Landing page' color='azure' />

      <ImgDisplay />

      <div style={{
        backgroundColor: 'azure',
        padding: '2rem',
        marginTop: '2vh',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
      }}
      >
        <Body color='black' content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo numquam nobis iure eum expedita explicabo quidem! Modi itaque obcaecati id dolor, porro, voluptates minus ab quo, recusandae earum magnam. Voluptatibus maiores pariatur itaque ipsa fugiat culpa soluta debitis commodi repellendus quam rem voluptate corrupti, excepturi aperiam dolore eligendi quaerat cupiditate vitae doloribus, perspiciatis libero quidem ab optio illum. Tenetur aliquam hic maiores veritatis quod sint voluptatum, incidunt tempora? Alias delectus veniam, nisi eius iusto maxime. Quos fugit provident, deleniti fuga omnis ex officiis reprehenderit neque, nam modi quo, earum veritatis maiores iste sapiente dolore necessitatibus vel doloribus laudantium! Id, rerum blanditiis hic nihil dolore quas pariatur. Ex voluptate beatae cumque animi quia maxime consequatur molestias ullam facere voluptates doloremque necessitatibus dolorum explicabo error, perspiciatis itaque reiciendis culpa suscipit?' />

        <Body color='black' content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo numquam nobis iure eum expedita explicabo quidem! Modi itaque obcaecati id dolor, porro, voluptates minus ab quo, recusandae earum magnam. Voluptatibus maiores pariatur itaque ipsa fugiat culpa soluta debitis commodi repellendus quam rem voluptate corrupti, excepturi aperiam dolore eligendi quaerat cupiditate vitae doloribus, perspiciatis libero quidem ab optio illum. Tenetur aliquam hic maiores veritatis quod sint voluptatum, incidunt tempora? Alias delectus veniam, nisi eius iusto maxime. Quos fugit provident, deleniti fuga omnis ex officiis reprehenderit neque, nam modi quo, earum veritatis maiores iste sapiente dolore necessitatibus vel doloribus laudantium! Id, rerum blanditiis hic nihil dolore quas pariatur. Ex voluptate beatae cumque animi quia maxime consequatur molestias ullam facere voluptates doloremque necessitatibus dolorum explicabo error, perspiciatis itaque reiciendis culpa suscipit?' />
      </div>

      <div style={{
        padding: '2rem',
        marginTop: '2vh',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
      }}
      >
        <Body bgColor='#2e4362d0' color='azure' border='1px solid #132032' content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo numquam nobis iure eum expedita explicabo quidem! Modi itaque obcaecati id dolor, porro, voluptates minus ab quo, recusandae earum magnam. Voluptatibus maiores pariatur itaque ipsa fugiat culpa soluta debitis commodi repellendus quam rem voluptate corrupti, excepturi aperiam dolore eligendi quaerat cupiditate vitae doloribus, perspiciatis libero quidem ab optio illum. Tenetur aliquam hic maiores veritatis quod sint voluptatum, incidunt tempora? Alias delectus veniam, nisi eius iusto maxime. Quos fugit provident, deleniti fuga omnis ex officiis reprehenderit neque, nam modi quo, earum veritatis maiores iste sapiente dolore necessitatibus vel doloribus laudantium! Id, rerum blanditiis hic nihil dolore quas pariatur. Ex voluptate beatae cumque animi quia maxime consequatur molestias ullam facere voluptates doloremque necessitatibus dolorum explicabo error, perspiciatis itaque reiciendis culpa suscipit?' />
      </div>

      <div style={{
        backgroundColor: 'azure',
        padding: '2rem',
        marginTop: '2vh',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
      }}
      >
        <Body color='black' content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo numquam nobis iure eum expedita explicabo quidem! Modi itaque obcaecati id dolor, porro, voluptates minus ab quo, recusandae earum magnam. Voluptatibus maiores pariatur itaque ipsa fugiat culpa soluta debitis commodi repellendus quam rem voluptate corrupti, excepturi aperiam dolore eligendi quaerat cupiditate vitae doloribus, perspiciatis libero quidem ab optio illum. Tenetur aliquam hic maiores veritatis quod sint voluptatum, incidunt tempora? Alias delectus veniam, nisi eius iusto maxime. Quos fugit provident, deleniti fuga omnis ex officiis reprehenderit neque, nam modi quo, earum veritatis maiores iste sapiente dolore necessitatibus vel doloribus laudantium! Id, rerum blanditiis hic nihil dolore quas pariatur. Ex voluptate beatae cumque animi quia maxime consequatur molestias ullam facere voluptates doloremque necessitatibus dolorum explicabo error, perspiciatis itaque reiciendis culpa suscipit?' />
      </div>
      <Footer content='Bottom Text' color='azure' />
    </div>
  )
}
