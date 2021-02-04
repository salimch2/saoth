import React from 'react'
import style from './ItemLeft.module.css'
import { Link } from 'react-router-dom'
import { GoHome } from 'react-icons/go'
import { GrBookmark } from 'react-icons/gr'
import { BiUser } from 'react-icons/bi'
const ItemLeft = ({ ...props }) => {
  const home = <GoHome size={26} />
  const my = <GrBookmark size={26} />
  const prof = <BiUser size={26} />
  return (
    <div
      className={`${style.border}  ${
        props.active === 'active' ? style.active : ''
      }`}
    >
      <Link to={props.to} onClick={props.onClick}>
        <div className='mt-3 pl-3'>
          <h4 className={style.text}>
            <span className='ml-2'>
              {props.home ? home : props.my ? my : props.prof ? prof : ''}
            </span>
            <span className='ml-4'>{props.children}</span>
          </h4>
        </div>
      </Link>
    </div>
  )
}

export default ItemLeft
