import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import style from './NavigationLeft.module.css'
import ItemLeft from '../ItemLeft/ItemLeft'

const NavigationLeft = (...props) => {
  const [menu, setMenu] = useState()
  const location = useLocation()
  // const pathname = window.location.pathname
  useEffect(() => {
    if (location.pathname === '/') {
      setMenu(1)
    } else if (location.pathname === '/profile') {
      setMenu(3)
    } else if (location.pathname === '/course') {
      setMenu(2)
    } else {
      setMenu(0)
    }
  }, [location.pathname])
  return (
    <div className={style.border}>
      <Row>
        <Col className='ml-3'>
          <ItemLeft home to='/' active={menu === 1 ? 'active' : ''}>
            home
          </ItemLeft>
        </Col>
        <Col className='ml-3'>
          <ItemLeft my to='/course' active={menu === 2 ? 'active' : ''}>
            My Courses
          </ItemLeft>
        </Col>
        <Col className='ml-3'>
          <ItemLeft prof to='/profile' active={menu === 3 ? 'active' : ''}>
            Profile
          </ItemLeft>
        </Col>
      </Row>
    </div>
  )
}

export default NavigationLeft
