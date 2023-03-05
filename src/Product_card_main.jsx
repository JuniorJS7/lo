import React from 'react'
import style from "./Product_card_main.module.scss"
import src from "./imgs/av.png"
export default function Product_card_main() {
  return (
    <div className={style.main}>
       <div className={style.prev}>
            <img src={src} alt="prev" title='prev' />
            <span className={style.prevSpan}>Назад</span>
       </div>


    </div>
  )
}
