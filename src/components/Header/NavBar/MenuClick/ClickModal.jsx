import React from 'react';
import './ClickModal.css'



const ClickMod = ({active,setActive})=>{

    return (
        <div className={active ? "modal active" : "modal"}  onClick={()=>setActive(false)}>
            <div className={active ?"modal__content active":"modal__content"} onClick={e=>e.stopPropagation()}>
             <p className='btn__x' onClick={()=>setActive(false)}>X</p>
             <p className='p__reg'>Войти или зарегистрироватьтся</p>
             <div className='input_num'>
                <p className='input_t'>По номеру телефона*</p>
                <input type='number' className='my__input' ></input>
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
