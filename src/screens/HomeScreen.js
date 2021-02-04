import React from 'react'
import { Row, Col } from 'react-bootstrap'

import RightBar from '../components/RightBar'
import HomeCom from '../components/Home/HomeCom'

const HomeScreen = () => {
  return (
    <>
      <Row>
        <Col md={8}>
          <HomeCom />
        </Col>
        <Col md={4}>
          <RightBar></RightBar>
        </Col>
      </Row>
    </>
  )
}

export default HomeScreen
