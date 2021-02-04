import { USER_Left_MENU } from '../constants/userConstants'

export const userMenu = () => async (dispatch) => {
  dispatch({ type: USER_Left_MENU })
}
