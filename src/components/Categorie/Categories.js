import React from 'react'
import { Row, Col } from 'react-bootstrap'

import style from './Categories.module.css'
import Notification from '../notif/Notification'

const Categories = ({ ...props }) => {
  let color = ''
  let fon = ''

  if (props.activ) {
    color = '#52c3ff'
    fon = '600'
  }
  return (
    <Row>
      <Col md={2}>
        <div className={style.border} style={{ borderColor: `${color}` }}>
          <div className={style.bor}>
            <Notification color={color} {...props} />
            <h6 className={style.cat} style={{ fontWeight: `${fon}` }}>
              {props.children}
            </h6>
          </div>
        </div>
      </Col>
    </Row>
  )
}

export default Categories
