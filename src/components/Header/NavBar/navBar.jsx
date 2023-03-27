
import './navBar.css'
import Logo from "../Logo/Logo";
import Input from "../Input/Input";
import NavItems from "../NavItems/NavItems";
import photo from "../Images/basket.svg";
import photo1 from "../Images/oval.svg";
import photo2 from "../Images/loop.svg";
import man from "../Images/man.svg";
// import SelectMenu from '../SelectMenu/SelectMenu';
import "../NavBar/navBar.css";

import { useState } from 'react';
import ClickMod from './MenuClick/ClickModal';



export default function NavBar() {
  const [modalActive, setModalActive]=useState(false)
  return (
    <>
     <div className='MenuNav'>
    <div className="navBar">
      <div className="navWidth">
        <Logo />
        <Input />
        <img src={photo2} alt="" className="loop" />
        <NavItems />
        <button className="btn" onClick={()=>setModalActive(true)}>Вход</button>
        <img src={photo} alt="" />
        <img src={photo1} alt="" />
        <div>
          <select className="select" >
            <option value="">RU</option>
            <option value="">AM</option>
            <option value="">US</option>
          </select>
        </div>
      <div className='group'>
        <div><img className='man' src={man} alt="" /></div>
      <div className="burger">
        <span className='span'></span>
      </div>
      </div>
      </div>
    </div>
    </div>
    <ClickMod active={modalActive} setActive={setModalActive}/>
    </>


  )
}
