import React from 'react'
import './FooterFinish.css'
import logos from './img/logos.svg';
import phone from './img/phone.svg';
import group from './img/group.svg';


export default function FooterFinish() {
  return (
    <div className='footer'>
      <div className="footer__container">
        <div className="footer__list">
          <div className="footer__item">
            <div>
              <img className='footer__logo' src={logos} alt="img" />
            </div>
           <div className='footer__item'>
              <a className="footer__item-link" href='javascript:void(0);'>Политика конфиденциальности</a>
              <a className="footer__item-link" href='javascript:void(0);'>Пользовательское соглашение</a>
              <a className="footer__item-link"  href='javascript:void(0);'>Согласие на обработку персональных данных</a>
           </div>
          </div>
          <div className="footer__item">
            <a className="footer__item-link" href="javascript:void(0);">Контакты</a>
            <a className="footer__item-link" href="javascript:void(0);">Оплата</a>
            <a className="footer__item-link" href="javascript:void(0);">Доставка</a>
            <a className="footer__item-link" href="javascript:void(0);">Поддержка</a>
          </div>
          <div className="footer__item">
              <a className="footer__item-link" href="javascript:void(0);">Гарантийные обязательства</a>
            <a className="footer__item-link" href="javascript:void(0);">Обслуживание</a>
            <a className="footer__item-link" href="javascript:void(0);">О нас</a>
            <a className="footer__item-link" href="javascript:void(0);">Обучение</a>
          </div>
          <div className="footer__item">
            <div className='footer__item-block'>
              <div className='footer__item-box'>
                <img className='footer__item-img' src={phone} alt="img"/>
                <a className='footer__item-tell' href="tel:+74951252300">+7495125-23-00</a>
              </div>
              <div className='footer__item-box'>
                <img className='footer__item-img' src={group} alt="img"/>
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


