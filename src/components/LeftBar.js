import React from 'react'
import UserInfoS from './UserInfo/UserInfoS'
import NavigationLeft from './navigation/NavigationLeft'
import Promo from './promo/Promo'
import Logout from './acount/Logout'

const LeftBar = () => {
  return (
    <>
      <UserInfoS />
      <NavigationLeft />
      <Promo />
      <Logout />
    </>
  )
}

export default LeftBar
