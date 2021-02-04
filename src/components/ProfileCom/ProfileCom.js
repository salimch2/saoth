import React from 'react'
import { Image } from 'react-bootstrap'
import ItemRight from '../itemRight/ItemRight'
import img from '../../images/salim.png'
import style from './ProfileCom.module.css'

const ProfileCom = () => {
  return (
    <>
      <h3>Profile ✨</h3>
      <div>
        <Image className={style.img} src={img} roundedCircle />
        <div className={style.circ}>
          <svg
            width='226'
            height='192'
            viewBox='0 0 226 192'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M192.79 189C211.513 169.248 223 142.55 223 113.166C223 52.3228 173.751 3 113 3C52.2487 3 3 52.3228 3 113.166C3 142.46 14.417 169.084 33.0379 188.818'
              stroke='#EAEAEA'
              strokeOpacity='0.48'
              strokeWidth='6'
              strokeLinecap='round'
            />
            <path
              d='M192.79 189C211.513 169.248 223 142.55 223 113.166C223 52.3228 173.751 3 113 3C52.2487 3 3 52.3228 3 113.166'
              stroke='#FC77A0'
              strokeWidth='4'
              strokeLinecap='round'
            />
          </svg>
        </div>
        <div className={style.badge}>Pro</div>
        <div className={style.title}>
          <h2 className={style.text}>Chemlal salim</h2>
          <h5 className={style.text1}>salimchemlal@gmail.com</h5>
        </div>
        <div>
          <h3 className={style.text3}>Settings ⚙️</h3>
          <div className={style.items}>
            <ItemRight
              popul
              color='#FFDFD6'
              Title='Achievements'
              desq='You have received 10 new badges this month.'
              nobar
              style={{ width: '550px' }}
              to='#'
            />
            <ItemRight
              color='#52C3FF'
              Title='Notifications'
              desq='Manage the way we send you all the notifications and alerts.'
              nobar
              style={{ width: '550px' }}
              to='#'
            />
            <ItemRight
              wallet
              color='#FFCB57'
              Title='Payment Details'
              desq='You have 1 card ending 6789 linked to your account.'
              nobar
              style={{ width: '550px' }}
              to='#'
            />
            <ItemRight
              free
              color='#FC77A0'
              Title='Preferences'
              desq='Manage all the preferences and permissions.'
              nobar
              style={{ width: '550px' }}
              to='#'
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfileCom
