import React from 'react';
import './OneArt.css';
import union from './img/union.png';

export default function OneArt() {
   return (
      <div className='oneArt'>
       <div className='oneArt__container'>
           <div className='oneArt__content'>
              <h1 className='oneArt__title'>
                 <span>BRANNOR - </span> ПОДУКТ <br /> НОВЫЙ ЭПОХИ
              </h1>
                 <p className='oneArt__descr'>
                    Лучшие фрикционные материалы для тормозных колодок и дисков,
                    основанные на самых передовых стандартах современной
                    автомобильной промышленности
                 </p>
                 <button className='oneArt__button'>Узнать больше о компании</button>
           </div>
           <div className='oneArt__img'>
            <img src={union} alt="" />
           </div>
       </div>
      </div>
   );
}
