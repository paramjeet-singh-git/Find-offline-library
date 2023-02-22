import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


export default function Box(props) {
  return (
    <div className="top-recomm">
        {/* <h2>
          Top recommendations from us</h2> */}
        <div className="grid-photos">
          <button className="grid-item2"><a target={'_blank'} href={props.abc[1]}><img src={props.abc[0]} alt='ss' className='photo_grid' /></a></button>
          <button className="grid-item2"><a target={'_blank'} href={props.abc[3]}><img src={props.abc[2]} alt='ss' className='photo_grid' /></a></button>
          <button className="grid-item2"><a target={'_blank'} href={props.abc[5]}><img src={props.abc[4]} alt='ss' className='photo_grid' /></a></button>
          <button className="grid-item2"><a target={'_blank'} href={props.abc[7]}><img src={props.abc[6]} alt='ss' className='photo_grid' /></a></button>
          {/* <button className="grid-item2">c</button> */}
          {/* <button className="grid-item2">d</button> */}
        </div>
        <div className="grid-photos">
          <button className="grid-item2">a</button>
          <button className="grid-item2">b</button>
          <button className="grid-item2">c</button>
          <button className="grid-item2">d</button>
        </div>
        
      </div>
  );
}
