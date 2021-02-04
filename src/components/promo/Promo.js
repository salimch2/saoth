import React from 'react'
import { Link } from 'react-router-dom'
import style from './promo.module.css'
import { BiUser } from 'react-icons/bi'
import { FiChevronRight } from 'react-icons/fi'

const Promo = () => {
  return (
    <div className={style.border}>
      <div className={style.bod}>
        <BiUser
          style={{ marginLeft: 18, marginTop: 18 }}
          color='#ffffff'
          size={27}
        />
      </div>
      <div className={style.content}>
        <div className={style.text}>Upgrade Plan</div>
        <div className={style.body}>
          Become a <span className={style.bold}>Pro</span> member today and save
          more than <span className={style.bold}>75%</span>.
        </div>
        <Link to='/'>
          <div className={style.deal}>
            <div className='mt-3 ml-5'>
              See Deal
              <FiChevronRight style={{ marginLeft: 40 }} size={30} />
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Promo
