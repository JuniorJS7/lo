import React from 'react'
import style from "./Product_card_main.module.scss"
import vektor from "./imgs/av.png"
import mainImg from "./imgs/asd445.png"
export default function Product_card_main() {
  return (
    <div className={style.main}>
       <div className={style.prev}>
            <img src={vektor} alt="prev" title='prev' />
            <span className={style.prevSpan}>Назад</span>
       </div>
       <div className={style.main_parent}>
            <div className={style.img_block}>
              <div className={style.img_block_main_div}>
                    <img src={mainImg} alt="img" title='image' />
              </div>
            <div className={style.img_block_small_div}>
                <div>
                  <img src="./imgs/img a.png" alt="" />
                </div>
                <div>
                  <img src="./imgs/img b.png" alt="" />
                </div>
                <div>
                  <img src="./imgs/img c.png" alt="" />
                </div>
                <div>
                  <img src="./imgs/img e.png" alt="" />
                </div>
            </div>
            </div>
            <div className={style.text_block}>
                  <h2 className={style.title}>Передние тормозные диски для BMW G20</h2>
                  <p>BR9.0364</p>
                  <span>В наличии <img src="./imgs/Vector (3).png" alt="" /></span>
                  
                  <br/> <br/>
                  <h3>21 500 ₽</h3>
                  <del>21 500 ₽</del>
            </div>
       </div>


    </div>
  )
}
