import axios from 'axios'

const CSRF_COOKIE_NAME = 'csrftoken'
const CSRF_HEADER_NAME = 'X-CSRFToken'

const session = axios.create({
  xsrfCookieName: CSRF_COOKIE_NAME,
  xsrfHeaderName: CSRF_HEADER_NAME
})

export default session

// /**
//  * Mocking client-server processing
//  */
// const _loginSuccess = {
//   authenticated: true,
//   token: Math.random().toString(36).substring(7)
// }
// const _loginFailed = { authenticated: false }

// export default {
//   login (auth, cb) {
//     if (auth.user === 'test' && auth.pass === 'pass') {
//       setTimeout(() => cb(_loginSuccess), 100)
//     } else {
//       setTimeout(() => cb(_loginFailed), 100)
//     }
//   }
// }
