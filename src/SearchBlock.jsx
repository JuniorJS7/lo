import React from 'react'
import style from "./SearchBlock.module.scss"

export default function SearchBlock() {
  return (
    <div className={style.Search_block} >
       <select className={style.mark}>
          <option>Марка</option>
      </select>
      <select className={style.model}>
          <option>Модель</option>
      </select>
      <select className={style.model}>
          <option>Год</option>
      </select>
      <div className={style.btn}>Поиск по каталогу</div>
    </div>
  )
}
