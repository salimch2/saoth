import React from 'react'

import style from './NotifDropdown.module.scss'
const NotifDropdown = () => {
  return (
    <div className={style.cartdropdown}>
      <div className={style.cartitems}>
        <span className={style.emptymessage}>
          you dont have any Notifications
        </span>
      </div>
    </div>
  )
}

export default NotifDropdown
