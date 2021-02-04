import { USER_Left_MENU } from '../constants/userConstants'
export const userNavigationReducer = (state = { menu: 1 }, action) => {
  switch (action.type) {
    case USER_Left_MENU:
      return { userNavigation: action.payload }

    default:
      return state
  }
}
