import React from 'react'
import './FooterFinish.css'
import logos from './img/logos.svg';
import phone from './img/phone.svg';
import Group from './img/Group.svg';


export default function FooterFinish() {
  return (
    <div className='Footer'>
      <div className="container">
        <div className="list">
          <div className="item">
            <div>
              <img className='logos' src={logos} alt="" />
            </div>
           <div className='item'>
              <a  href='##'>Политика конфиденциальности</a>
              <a  href='##'>Пользовательское соглашение</a>
              <a  href='##'>Согласие на обработку персональных данных</a>
           </div>
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
            <div className='item-block'>
              <div className='item-box'>
                <img src={phone} alt=""/>
                <a className='item-tell' href="tel:+74951252300">+7 495 125-23-00</a>
              </div>
              <div className='item-box'>
                <img src={Group} alt=""/>
                <p>г. Москва, МКАД 32й км, строение 4</p>
              </div>
            </div>
          </div>
          </div>
          <div className='copyRight'>Brannor.ru © 2023 • Официальный представитель BRANNOR в России
          </div>
      </div>
    </div>
  )
}
