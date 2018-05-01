const initialState = {
  isLogin: false
}

export default function auth(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_ISLOGIN':
      return {...state, isLogin: !action.isLogin}
    default:
      return state
  }
}
