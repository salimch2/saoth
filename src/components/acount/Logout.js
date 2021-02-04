import React from 'react'
import { Link } from 'react-router-dom'
import style from './logout.module.css'

const Logout = () => {
  return (
    <Link to='/logout'>
      <div className={style.border}>Log Out</div>
    </Link>
  )
}

export default Logout
