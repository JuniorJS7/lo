import React from 'react';
import './ClickModal.css'



const ClickMod = ({active,setActive})=>{

    return (
        <div className={active ? "Modal active" : "Modal"}  onClick={()=>setActive(false)}>
            <div className={active ?"Modal__content active":"Modal__content"} onClick={e=>e.stopPropagation()}>
             <p className='btn__X' onClick={()=>setActive(false)}>X</p>
             <p className='p__reg'>Войти или зарегистрироватьтся</p>
             <div className='input_Num'>
                <p className='Input_t'>По номеру телефона*</p>
                <input type='number' className='My__input' ></input>
             </div>
             <div className='sms__butt'>
                <button className='kode__butt'>Получить код в SMS</button>
                <p className='p__sms'>Нажимая кнопку, я подтверждаю своё согласие на обработку персональных данных</p>
                <button className='butt_psw'>Войти с помощью пароля</button>
             </div>
            </div>
        </div>


    );


}
export default ClickMod