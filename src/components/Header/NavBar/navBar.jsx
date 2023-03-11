import React from 'react'
import './navBar.css'
import Logo from "../Logo/Logo";
import Input from "../Input/Input";
import NavItems from "../NavItems/NavItems";
import photo from "../Images/cart_icon-icons.com_48341.ico";
import photo1 from "../Images/earth_icon_155458.ico";
import photo2 from "../Images/1486349556-loupe_80493.ico";
// import SelectMenu from '../SelectMenu/SelectMenu';
import "../NavBar/navBar.css";

export default function NavBar() {
  return (
    <div className='MenuNav'>
    <div className="navBar">
      <div className="navWidth">
        <Logo />
        <Input />
        <img src={photo2} alt="" className="loop" />
        <NavItems />
        <button className="btn">Вход</button>
        <img src={photo} alt="" />
        <img src={photo1} alt="" />
        <div>
          <select className="select">
            <option value="">RU</option>
            <option value="">AM</option>
            <option value="">US</option>
          </select>
        </div>
      </div>
    </div>
    </div>
  )
}
