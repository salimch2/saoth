import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image } from 'react-bootstrap'
import style from './UserInfoS.module.css'
import img from '../../images/salim.png'
const UserInfoS = () => {
  return (
    <div className={style.border}>
      <Row className='p-3'>
        {/* <Col className='mt-2 ml-1 mr-0 pr-0' md={3}> */}
        <Col className={style.img} md={2}>
          <Image className={style.img} src={img} roundedCircle />
        </Col>
        <Col className={style.text} md={7}>
          <h5 className={style.title}>Chemlal salim</h5>
          <h6 className={style.mail}>Salimchemlal@gmail.com</h6>
        </Col>
        <Col className='pt-3'>
          <Link to='/profile'>
            <i className='fas fa-chevron-right fa-2x'></i>
          </Link>
        </Col>
      </Row>
    </div>
  )
}

export default UserInfoS
