import React, { useEffect, useState } from 'react'
import './FiveArticle.css'
import imageSilede from './data'
import Group from './images/Group.svg'

const FiveArticle =()=> {
    const [current,setCureent]=useState(0)
    useEffect(()=>{
        const timer = setTimeout(()=>{
          if(current===6){
            setCureent(0)
          }else{
            setCureent(current+1)
          }


        },3000)
        return ()=>clearTimeout(timer)
         },[current])

    const getoNext=(current)=>{
        setCureent(current)
    }
  return (
    <div className='blockSlide'>
        <div className='list'>
        <div className='imgFile'>
         <img className='imgFile' src={Group} alt="" />
        </div>
        <div className='listfile'>
            <h2 className='bodyText'>{imageSilede[current].title}</h2>
            <p className='titleHtext'>{imageSilede[current].titleh}</p>
            <p className='Fintext'>{imageSilede[current].body}</p>
            <div className='carousel-boultt'>
            {
                imageSilede.map((imageSilede,current)=>(
                    <span key={current} onClick={()=>getoNext(current)}></span>
                ))
            }
        </div>
        </div>

        </div>

    </div>
  )
}
export default FiveArticle
