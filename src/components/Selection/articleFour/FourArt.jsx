import React from 'react'
import './FourArt.css'

export default function FourArt() {
  return (
    <div className='artFour'>
       <div className='artFour__container'>
          <h3 className='artFour__subtitle'>колодки</h3>
          <h2 className='artFour__title'>
             Колодки Brannor это комфортное и безопасное вождение
          </h2>
          <button className='artFour__button'>Подробнее</button>
          <div className='artFour__list'>
             <div className='artFour__list-box'>
                <div className='artFour__item'>
                   <div className='artFour__img'></div>
                   <div className='artFour__text'>
                      увеличенный срок службы тормозных дисков и колодок
                   </div>
                </div>
                <div className='artFour__item'>
                <div className='artFour__img'></div>
                   <div className='artFour__text'>
                      Увеличенная эффективность работы тормозных колодок
                   </div>
                </div>
             </div>
             <div className='artFour__list-box'>
                <div className='artFour__item'>
                <div className='artFour__img'></div>
                   <div className='artFour__text'>
                      Увеличение плавности торможения без потери эффективности
                   </div>
                </div>
                <div className='artFour__item'>
                <div className='artFour__img'></div>
                   <div className='artFour__text'>
                      Стабильные характеристики в широком диапазоне температур
                   </div>
                </div>
             </div>
          </div>
       </div>
    </div>
 );
}
