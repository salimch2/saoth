import React from 'react'
import { Row, Col } from 'react-bootstrap'
import RightBar from '../components/RightBar'
import ProfileCom from '../components/ProfileCom/ProfileCom'

const ProfileScreen = () => {
  return (
    <>
      <Row>
        <Col md={8}>
          <ProfileCom />
        </Col>
        <Col md={4}>
          <RightBar />
        </Col>
      </Row>
    </>
  )
}

export default ProfileScreen
