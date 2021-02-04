import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
// import style from './CourseCom.module.css'
import Categories from '../Categorie/Categories'
import ItemHome from '../ItemHome/ItemHome'

const CourseCom = () => {
  const [active, setActive] = useState(1)

  return (
    <>
      <h2>My Courses 🗄️</h2>
      <div>
        <div>
          <Row>
            <Col md={2}>
              <Link to='#' onClick={() => setActive(1)}>
                <Categories Categ activ={active === 1 ? 'activ' : ''}>
                  New
                </Categories>
              </Link>
            </Col>
            <Col md={2}>
              <Link to='#' onClick={() => setActive(2)}>
                <Categories popul activ={active === 2 ? 'activ' : ''}>
                  Popular
                </Categories>
              </Link>
            </Col>
            <Col md={2}>
              <Link to='#' onClick={() => setActive(3)}>
                <Categories free activ={active === 3 ? 'activ' : ''}>
                  Free
                </Categories>
              </Link>
            </Col>
            <Col md={2}>
              <Link to='#' onClick={() => setActive(4)}>
                <Categories pro activ={active === 4 ? 'activ' : ''}>
                  Pro
                </Categories>
              </Link>
            </Col>
          </Row>
          <div>
            {active === 1 ? (
              <Row>
                <Col md={6}>
                  <ItemHome
                    img={1}
                    time='2h 30min'
                    title='JavaScript'
                    desq='you will learn the best langage in the least time ever'
                  />
                </Col>
                <Col md={6}>
                  <ItemHome
                    img={2}
                    time='8h 24min'
                    title='Pyethon'
                    desq='you will learn the best langage in the least time ever'
                  />
                </Col>
                <Col md={6}>
                  <ItemHome
                    img={3}
                    time='22h 00min'
                    title='networking'
                    desq='you will learn the best langage in the least time ever'
                  />
                </Col>
                <Col md={6}>
                  <ItemHome
                    img={4}
                    time='2h 30min'
                    title='JavaScript'
                    desq='you will learn the best langage in the least time ever'
                  />
                </Col>
              </Row>
            ) : active === 2 ? (
              <Row>
                <Col md={6}>
                  <ItemHome
                    img={6}
                    time='2h 30min'
                    title='JavaScript'
                    desq='you will learn the best langage in the least time ever'
                  />
                </Col>
                <Col md={6}>
                  <ItemHome
                    img={5}
                    time='8h 24min'
                    title='Pyethon'
                    desq='you will learn the best langage in the least time ever'
                  />
                </Col>
                <Col md={6}>
                  <ItemHome
                    img={7}
                    time='22h 00min'
                    title='networking'
                    desq='you will learn the best langage in the least time ever'
                  />
                </Col>
                <Col md={6}>
                  <ItemHome
                    img={4}
                    time='2h 30min'
                    title='JavaScript'
                    desq='you will learn the best langage in the least time ever'
                  />
                </Col>
              </Row>
            ) : active === 3 ? (
              <Row>
                <Col md={6}>
                  <ItemHome
                    img={5}
                    time='2h 30min'
                    title='JavaScript'
                    desq='you will learn the best langage in the least time ever'
                  />
                </Col>
                <Col md={6}>
                  <ItemHome
                    img={4}
                    time='8h 24min'
                    title='Pyethon'
                    desq='you will learn the best langage in the least time ever'
                  />
                </Col>
                <Col md={6}>
                  <ItemHome
                    img={3}
                    time='22h 00min'
                    title='networking'
                    desq='you will learn the best langage in the least time ever'
                  />
                </Col>
                <Col md={6}>
                  <ItemHome
                    img={2}
                    time='2h 30min'
                    title='JavaScript'
                    desq='you will learn the best langage in the least time ever'
                  />
                </Col>
              </Row>
            ) : active === 4 ? (
              <Row>
                <Col md={6}>
                  <ItemHome
                    img={7}
                    time='2h 30min'
                    title='JavaScript'
                    desq='you will learn the best langage in the least time ever'
                  />
                </Col>
                <Col md={6}>
                  <ItemHome
                    img={6}
                    time='8h 24min'
                    title='Pyethon'
                    desq='you will learn the best langage in the least time ever'
                  />
                </Col>
                <Col md={6}>
                  <ItemHome
                    img={0}
                    time='22h 00min'
                    title='networking'
                    desq='you will learn the best langage in the least time ever'
                  />
                </Col>
                <Col md={6}>
                  <ItemHome
                    img={2}
                    time='2h 30min'
                    title='JavaScript'
                    desq='you will learn the best langage in the least time ever'
                  />
                </Col>
              </Row>
            ) : null}
          </div>
        </div>
      </div>
    </>
  )
}

export default CourseCom
