import React from 'react'
import './FooterFinish.css'
import logos from './img/logos.svg';
import phone from './img/phone.svg';
import Group from './img/Group.svg';


export default function FooterFinish() {
  return (
    <div className='footer'>
      <div className="footer__container">
        <div className="footer__list">
          <div className="footer__item">
            <div>
              <img className='logos' src={logos} alt="" />
            </div>
           <div className='footer__item'>
              <a className="footer__item-link" href='##'>Политика конфиденциальности</a>
              <a className="footer__item-link" href='##'>Пользовательское соглашение</a>
              <a className="footer__item-link"  href='##'>Согласие на обработку персональных данных</a>
           </div>
          </div>
          <div className="footer__item">
            <a className="footer__item-link" href="##">Контакты</a>
            <a className="footer__item-link" href="##">Оплата</a>
            <a className="footer__item-link" href="##">Доставка</a>
            <a className="footer__item-link" href="##">Поддержка</a>
          </div>
          <div className="footer__item">
              <a className="footer__item-link" href="##">Гарантийные обязательства</a>
            <a className="footer__item-link" href="##">Обслуживание</a>
            <a className="footer__item-link" href="##">О нас</a>
            <a className="footer__item-link" href="##">Обучение</a>
          </div>
          <div className="footer__item">
            <div className='footer__item-block'>
              <div className='footer__item-box'>
                <img className='footer__item-img' src={phone} alt=""/>
                <a className='footer__item-tell' href="tel:+74951252300">+7495125-23-00</a>
              </div>
              <div className='footer__item-box'>
                <img className='footer__item-img' src={Group} alt=""/>
                <p className='footer__item-text'>г.Москва, МКАД 32й км, строение 4</p>
              </div>
            </div>
          </div>
          </div>
          <div className='footer__copyRight'>Brannor.ru © 2023 • Официальный представитель BRANNOR в России
          </div>
      </div>
    </div>
  )
}


