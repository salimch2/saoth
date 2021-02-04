import React from 'react'
import style from './Notification.module.css'
import icons from './icons'
const Notification = ({ ...props }) => {
  let icon = ''
  if (props.notif) {
    icon = icons.notif
  } else if (props.popul) {
    icon = icons.popul
  } else if (props.free) {
    icon = icons.free
  } else if (props.Categ) {
    icon = icons.Categ
  } else if (props.pro) {
    icon = icons.pro
  } else if (props.email) {
    icon = icons.email
  } else if (props.lock) {
    icon = icons.lock
  } else if (props.search) {
    icon = icons.search
  } else if (props.document) {
    icon = icons.document
  } else if (props.lock) {
    icon = icons.lock
  } else if (props.setting) {
    icon = icons.setting
  } else if (props.wallet) {
    icon = icons.wallet
  } else if (props.message) {
    icon = icons.message
  } else if (props.chart) {
    icon = icons.chart
  } else {
    icon = icons.notif
  }

  return (
    <div
      style={{
        borderRadius: '50px',
        height: 'fit-content',
        width: 'fit-content',
        backgroundColor: `${props.color}`,
      }}
    >
      <div className={style.border}>
        <i className={style.icon}>{icon}</i>
      </div>
    </div>
  )
}

export default Notification
