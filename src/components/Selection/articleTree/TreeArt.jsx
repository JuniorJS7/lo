import React from 'react';
import './artTree.css';


export default function TreeArt() {
   return (
      <div className='artTree'>
         <div className='artTree__container'>
            <h3 className='artTree__subtitle'>колодки</h3>
            <h2 className='artTree__title'>
               Колодки Brannor это комфортное и безопасное вождение
            </h2>
            <button className='artTree__button'>Подробнее</button>
            <div className='artTree__list'>
               <div className='artTree__list-box'>
                  <div className='artTree__item'>
                     <div className='artTree__img'></div>
                     <div className='artTree__text'>
                        увеличенный срок службы тормозных дисков и колодок
                     </div>
                  </div>
                  <div className='artTree__item'>
                  <div className='artTree__img'></div>
                     <div className='artTree__text'>
                        Увеличенная эффективность работы тормозных колодок
                     </div>
                  </div>
               </div>
               <div className='artTree__list-box'>
                  <div className='artTree__item'>
                  <div className='artTree__img'></div>
                     <div className='artTree__text'>
                        Увеличение плавности торможения без потери эффективности
                     </div>
                  </div>
                  <div className='artTree__item'>
                  <div className='artTree__img'></div>
                     <div className='artTree__text'>
                        Стабильные характеристики в широком диапазоне температур
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
