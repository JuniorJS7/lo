import React from 'react';
import './OneArt.css';
import union from './img/union.png';

export default function OneArt() {
   return (
      <div className='OneArt'>
       <div className='OneArt__container'>
           <div className='OneArt__content'>
              <h1 className='OneArt__title'>
                 <span>BRANNOR - </span> ПОДУКТ <br /> НОВЫЙ ЭПОХИ
              </h1>
                 <p className='OneArt__descr'>
                    Лучшие фрикционные материалы для тормозных колодок и дисков,
                    основанные на самых передовых стандартах современной
                    автомобильной промышленности
                 </p>
                 <button className='OneArt__button'>Узнать больше о компании</button>
           </div>
           <div className='OneArt__img'>
            <img src={union} alt="" />
           </div>
       </div>
      </div>
   );
}
