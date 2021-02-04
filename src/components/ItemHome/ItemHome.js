import React from 'react'
import { Card } from 'react-bootstrap'
import style from './ItemHome.module.css'
import img from '../../images/Image.jpg'
import img1 from '../../images/Image1.jpg'
import img2 from '../../images/Image2.jpg'
import img3 from '../../images/Image3.jpg'
import img4 from '../../images/Image4.jpg'
import img5 from '../../images/Image5.jpg'
import img6 from '../../images/Image6.jpg'
import img7 from '../../images/Image7.jpg'
const ItemHome = ({ ...props }) => {
  let image = null
  switch (props.img) {
    case 1:
      image = img1
      break
    case 2:
      image = img2
      break
    case 3:
      image = img3
      break
    case 4:
      image = img4
      break
    case 5:
      image = img5
      break
    case 6:
      image = img6
      break
    case 7:
      image = img7
      break

    default:
      image = img
      break
  }
  return (
    <div className={style.border}>
      <Card style={{ width: '18rem', borderRadius: '38px' }}>
        <Card.Img
          variant='top'
          style={{
            borderTopLeftRadius: '38px',
            borderTopRightRadius: '38px',
            height: '210px',
          }}
          src={image}
        />
        <Card.Body>
          <Card.Text>{props.time}</Card.Text>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.desq}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default ItemHome
