import React from 'react'
import { Row, Col } from 'react-bootstrap'
import RightBar from '../components/RightBar'
import CourseCom from '../components/course/CourseCom'

const MyCourseScreen = () => {
  return (
    <>
      <Row>
        <Col md={8}>
          <CourseCom />
        </Col>
        <Col md={4}>
          <RightBar />
        </Col>
      </Row>
    </>
  )
}

export default MyCourseScreen
