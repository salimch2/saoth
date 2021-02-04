import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen'
import LeftBar from './components/LeftBar'
import ProfileScreen from './screens/ProfileScreen'
import MyCourseScreen from './screens/MyCourseScreen'
const App = () => {
  return (
    <Router>
      <main className='py-3 mt-3'>
        <Container fluid>
          <Row>
            <Col md={3}>
              <LeftBar />
            </Col>
            <Col md={9}>
              <Route path='/' component={HomeScreen} exact />
              <Route path='/profile' component={ProfileScreen} />
              <Route path='/course' component={MyCourseScreen} />
            </Col>
          </Row>
        </Container>
      </main>
    </Router>
  )
}

export default App
