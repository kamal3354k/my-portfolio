import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import "./NavMenu.css";
import { BsList } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";


export default function NavMenu() {

    const [Show, setShow] = useState(false)
    // const [menuSlide, setmenuSlide] = useState(initialState)

    return (
       <>
       <div className={!Show ? "menu-box slider":"menu-box"}>
        
           <ul className={!Show ? 'Link-list slider':"Link-list"}>
               <li onClick={()=>{setShow(!Show)}}><NavLink exact to="/home">Home <span></span></NavLink></li>
               <li onClick={()=>{setShow(!Show)}}><NavLink to="/about">About <span></span></NavLink></li>
               <li onClick={()=>{setShow(!Show)}}><NavLink to="/projects">Projects <span></span></NavLink></li>
               <li onClick={()=>{setShow(!Show)}}><NavLink to="/contact">Contact <span></span></NavLink></li>
               <h1 className="mobile-close-menu" onClick={()=>{setShow(!Show)}} role="button" onKeyDown={()=>{setShow(!Show)}} tabIndex={0}><FaTimes/></h1>
              
           </ul>
       </div>
       <div className={Show ? "mobile-open-menu hide-item" : "mobile-open-menu"}onClick={()=>{setShow(!Show)}} role="button"><h1><BsList/></h1></div>
       </>
       
    )
}
