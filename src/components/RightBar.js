import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import InputIcon from './inputIcon/InputIcon'
import Notification from './notif/Notification'
import ItemRight from './itemRight/ItemRight'
import NotifDropdown from './NotifDropdown/NotifDropdown'
const RightBar = () => {
  const [hidden, setHidden] = useState(true)
  const [menu, setMenu] = useState()
  const location = useLocation()
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
    <div>
      <Row>
        <Col md={9}>
          <InputIcon />
        </Col>
        <Col md={3}>
          <span
            onClick={() => {
              setHidden(!hidden)
              console.log(hidden)
            }}
          >
            <Notification />
            {hidden ? null : <NotifDropdown />}
          </span>
        </Col>
      </Row>
      {menu === 1 || menu === 2 ? (
        <div>
          <h3
            style={{ textTransform: 'none', letterSpacing: 0, marginTop: 48 }}
          >
            Lessons 📖
          </h3>
          <Row>
            <Col>
              <ItemRight
                now={30}
                Title='JavaScripte fondamentals'
                desq='we will be learning JavaScripte from the start to end'
                variant='success'
                document
                color='#FFCB57'
                titlee='12 h 30 min'
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <ItemRight
                Title='Pyton begeners'
                desq='start python with fast and easy projects'
                now={50}
                variant='info'
                search
                color='#8FC252'
                titlee='3 h 50 min'
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <ItemRight
                now={80}
                Title='Algorithmiques'
                desq='you will be learning the fondamentals of all programing you will need me all your life if you want to be a software ingenieur'
                variant='danger'
                chart
                color='red'
                titlee='22 h 30 min'
              />
            </Col>
          </Row>
        </div>
      ) : menu === 3 ? (
        <div>
          <h3
            style={{ textTransform: 'none', letterSpacing: 0, marginTop: 48 }}
          >
            Achievements 🏆
          </h3>
          <Row>
            <Col>
              <ItemRight
                now={100}
                variant='success'
                popul
                color='#FFDFD6'
                Title='Quick Learner'
                desq='You have finished 10 courses within the last 7 days.'
              />
            </Col>
            <Col>
              <ItemRight
                now={30}
                variant='success'
                popul
                color='#52C3FF'
                Title='Skill Master'
                desq='You have completed 3 out of 12 skill assessments so far. '
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <ItemRight
                now={48}
                variant='info'
                popul
                color='#FFCB57'
                Title='Focus Keeper'
                desq='You have been keeping the focus for the past 3 days.'
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <ItemRight
                now={80}
                variant='danger'
                popul
                color='#FC77A0'
                Title='hi there'
                desq='you have been a pro user since early games'
              />
            </Col>
          </Row>
        </div>
      ) : null}
    </div>
  )
}

export default RightBar
