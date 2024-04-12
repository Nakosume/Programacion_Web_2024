import { CAT_ACTIONS } from '../const/CatActions'

export const reducerCat = (fact, action) => {
  switch (action.type) {
    case CAT_ACTIONS.SET_CAT:{
      return action.payload }
    default:
      // eslint-disable-next-line no-undef
      return fact
  }
}
