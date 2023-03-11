import React from 'react'
import './serchBar.css'

export default function SerchBar() {
  return (
    <div className='MenuSerch'>
        <div className="selCont">
      <div className="selContCenter">
        <select className="first-select selectors">
          <option value="" disabled selected>
            Марка
          </option>
          <option value="">Acura</option>
          <option value="">Chrysler</option>
          <option value="">HAVAL</option>
          <option value="">Renault</option>
          <option value="">Volvo</option>
          <option value="">Alfa Romeo</option>
        </select>
        <select className="second-select selectors">
          <option value="" disabled selected>
            Модель
          </option>
          <option value="">Acura</option>
          <option value="">Chrysler</option>
          <option value="">HAVAL</option>
          <option value="">Renault</option>
          <option value="">Volvo</option>
          <option value="">Alfa Romeo</option>
        </select>
        <select className="three-select selectors">
          <option value="" disabled selected>
            Год
          </option>
          <option value="">Acura</option>
          <option value="">Chrysler</option>
          <option value="">HAVAL</option>
          <option value="">Renault</option>
          <option value="">Volvo</option>
          <option value="">Alfa Romeo</option>
        </select>
        <select className="four-select selectors">
          <option value="" disabled selected>
            Комплектация
          </option>
          <option value="">Acura</option>
          <option value="">Chrysler</option>
          <option value="">HAVAL</option>
          <option value="">Renault</option>
          <option value="">Volvo</option>
          <option value="">Alfa Romeo</option>
        </select>
        <button>Поиск по котологу</button>
      </div>
    </div>
    </div>
  )
}
