import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Card, ProgressBar } from 'react-bootstrap'
import Notification from '../notif/Notification'
import style from './ItemRight.module.css'
const ItemRight = ({ ...props }) => {
  return (
    <>
      <div className={style.border} style={props.style}>
        <Link to='#'>
          <Row>
            <Col md={4}>
              <div className={style.notif}>
                <div>
                  <Notification {...props} />
                </div>
              </div>
            </Col>
            <Col md={8}>
              {props.titlee ? (
                <Card.Text style={{ paddingTop: 10 }}>{props.titlee}</Card.Text>
              ) : null}

              <Card.Title style={{ paddingTop: '10px' }}>
                {props.Title}
              </Card.Title>
              <Card.Text>{props.desq}</Card.Text>
              {props.nobar ? null : (
                <div className={style.prog}>
                  <ProgressBar
                    style={{
                      border: 'none',
                      borderRadius: '20px',
                      height: '0.7rem',
                    }}
                    variant={props.variant}
                    now={props.now}
                    label={props.now}
                  />
                </div>
              )}
            </Col>
          </Row>
        </Link>
      </div>
    </>
  )
}

export default ItemRight
