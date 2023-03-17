import React from 'react'
import './FooterFinish.css'
import logos from './img/logos.svg';
import phone from './img/phone.svg';
import Group from './img/Group.svg';


export default function FooterFinish() {
  return (
    <div className='Foot'>
      <div className="container">
        <div className="list">
          <div className="item-1">
            <img className='logos' src={logos} alt="" />
            <a className='link' href='##' style={{textIndent: "-100px"}}>Политика конфиденциальности</a>
            <a className='link' href='##' style={{textIndent: "-110px"}}>Пользовательское соглашение</a>
            <a className='link' href='##'>Согласие на обработку персональных данных</a>
          </div>
          <div className="item">
            <a href="##">Контакты</a>
            <a href="##">Оплата</a>
            <a href="##">Доставка</a>
            <a href="##">Поддержка</a>
          </div>
          <div className="item">
            <a href="##">Гарантийные обязательства</a>
            <a href="##">Обслуживание</a>
            <a href="##">О нас</a>
            <a href="##">Обучение</a>
          </div>
          <div className="item">
            <img src={phone} alt=""/>
            <div className='item-tell'><a href="tel:+74951252300">+7 495 125-23-00</a></div>
            <img src={Group} alt=""/>
            <p>г. Москва, МКАД 32й км, строение 4</p>
          </div>
          </div>
          <div className='copyRight'>Brannor.ru © 2023 • Официальный представитель BRANNOR в России
          </div>
      </div>
    </div>
  )
}
