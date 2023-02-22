// import { Router } from "express";
import React from "react";
import Box from './Box'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
// import libicon from '../images/libicon.png'
// import { useState } from 'react'
// import props from 'prop-types'

export default function c() {

  // let Top=['https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png']
  // let Fiction=['https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png','https://www.amazon.in/Diary-Wimpy-Kid-Third-Wheel/dp/0141348569/ref=sr_1_2?crid=2ALMJGX457YKF&keywords=diary+of+wimpy+kid+all+book&qid=1667496454&sprefix=diary+of+wimpy+kid+all+books+%2Caps%2C371&sr=8-2']
  let Fiction =['https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg/330px-The_Great_Gatsby_Cover_1925_Retouched.jpg','https://www.amazon.in/Great-Gatsby-F-Scott-Fitzgerald/dp/8172344562/ref=sr_1_3?crid=KRTHG9Z3IOYO&keywords=great+gatsby&qid=1668070051&qu=eyJxc2MiOiIzLjI3IiwicXNhIjoiMi42OSIsInFzcCI6IjIuMjMifQ%3D%3D&s=books&sprefix=great+gatsby%2Cstripbooks%2C700&sr=1-3',
'https://m.media-amazon.com/images/I/51bu58-DHXL.jpg','https://www.amazon.in/One-Hundred-Years-of-Solitude/dp/B079P88ZT6/ref=sr_1_3?crid=19OSRP746XJS&keywords=One+Hundred+Years+of+Solitude&qid=1668070242&qu=eyJxc2MiOiIxLjk2IiwicXNhIjoiMC45MyIsInFzcCI6IjAuNTEifQ%3D%3D&sprefix=one+hundred+years+of+solitude+%2Caps%2C633&sr=8-3',
'https://m.media-amazon.com/images/I/41BP68Lj0EL.jpg','https://www.amazon.in/Pride-and-Prejudice-Penguin-Classics/dp/B0842RDKS7/ref=sr_1_1?keywords=pride+and+prejudice+by+jane+austen+penguin+classics&qid=1668070445&qu=eyJxc2MiOiIyLjYwIiwicXNhIjoiMS42NiIsInFzcCI6IjEuMTAifQ%3D%3D&s=audible&sprefix=pride+a%2Caudible%2C589&sr=1-1',

'https://m.media-amazon.com/images/I/81gepf1eMqL._AC_UY327_QL65_.jpg','https://www.amazon.in/Kill-Mockingbird-Harper-Lee/dp/0099549484/ref=sr_1_1?crid=13JN44HPD7ACO&keywords=To+Kill+a+Mockingbird&qid=1668070569&qu=eyJxc2MiOiIyLjM2IiwicXNhIjoiMS4zNCIsInFzcCI6IjEuMzEifQ%3D%3D&sprefix=to+kill+a+mockingbird%2Caps%2C302&sr=8-1']






  let Top=['https://st.depositphotos.com/1006899/2590/i/600/depositphotos_25909751-stock-photo-action-metaphor.jpg']
  let Horror=['https://st.depositphotos.com/1006899/2590/i/600/depositphotos_25909751-stock-photo-action-metaphor.jpg']
  let Love=['https://images.pexels.com/photos/6788862/pexels-photo-6788862.jpeg?cs=srgb&dl=pexels-how-far-from-home-6788862.jpg&fm=jpg']
  let Action=['https://images.pexels.com/photos/6788862/pexels-photo-6788862.jpeg?cs=srgb&dl=pexels-how-far-from-home-6788862.jpg&fm=jpg']
  return (
    // <Router>
    <div className="maincontainer">
      <div className="grid-container">
        <button className="grid-item" id="1st"><Link  to="/rec/fiction">Fiction</Link></button>
        <button className="grid-item"><Link  to="/rec/horror">Horror</Link></button>
        <button className="grid-item"><Link  to="/rec/action">Action</Link></button>
        <button className="grid-item"><Link  to="/rec/love">Love</Link></button>
        <button className="grid-item">Fantasy</button>
        <button className="grid-item">Thriller</button>
        <button className="grid-item" id="nst">
          Other
        </button>
      </div>
      <Routes>
          <Route path="/" element={<Box abc={Top}/>}/>
          <Route path="/fiction" element={<Box abc={Fiction}/>}/>
          <Route path="/horror" element={<Box abc={Horror}/>}/>
          <Route path="/action" element={<Box abc={Action}/>}/>
          <Route path="/love" element={<Box abc={Love}/>}/>
          {/* <Route path="/hor" element={<Box abc={y}/>}/>
          <Route path="/act" element={<Box abc={x}/>}/> */}
          
        </Routes>
      {/* <Box abc={x} /> */}
    </div>
    // </Router>
  );
}
