import React from 'react';
import './artTree.css';

export default function TreeArt() {
   return (
      <div className='artTree'>
         <div className='artTree__container'>
            <div className='top-left'></div>
            <div className='bottom-left'></div>
            <div className='top-right'></div>
            <div className='bottom-right'></div>
            <div className='artTreeImg'></div>
            <div className='artTree__title'>диски</div>
            <div className='artTree__list'>
               <div className='artTree__item artTree__item_1'>
                  <div className='artTree__subtitle'>
                     Высокая термостойкость
                  </div>
                  <div className='artTree__descr'>
                     Высокоуглеродистый чугун обладает более высокой
                     теплоёмкостью и прочностью, что позволяет ему эффективнее
                     справляться с нагревом и избегать температурной деформации.
                  </div>
               </div>
               <div className='artTree__item artTree__item_2'>
                  <div className='artTree__subtitle'>Улучшенный теплообмен</div>
                  <div className='artTree__descr'>
                     Несквозная перфорация сложной формы обеспечивает увеличение
                     коэффициента трения и создаёт аэродинамические потоки
                     воздуха для лучшего охлаждения, не жертвуя при этом
                     прочностью материала и снижением термальной массы.
                  </div>
               </div>
               <div className='artTree__item artTree__item_3'>
                  <div className='artTree__subtitle'>
                     Высочайшая защита от коррозии
                  </div>
                  <div className='artTree__descr'>
                     Цинконаполненное полимерное покрытие обеспечивает
                     выдающиеся характеристики в течение всего срока
                     использования и позволяет защитить нерабочие элементы
                     тормозного диска от коррозии и воздействия агрессивной
                     среды.
                  </div>
               </div>
               <div className='artTree__item artTree__item_4'>
                  <div className='artTree__subtitle'>Стойкость к износу</div>
                  <div className='artTree__descr'>
                     Все тормозные диски Brannor имеют обязательную
                     износоустойчивую маркировку, на которой указан максимально
                     допустимый износ, что позволяет упростить процесс оценки
                     износа тормозного диска.
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
