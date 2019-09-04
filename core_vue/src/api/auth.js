import session from './session'

export default {
  login (username, password) {
    return session.post('https://madeatub.buffalo.edu/mltoolkit/auth/login/', { username, password })
  },
  logout () {
    return session.post('https://madeatub.buffalo.edu/mltoolkit/auth/logout/', {})
  },
  createAccount (username, password1, password2, email) {
    return session.post('https://madeatub.buffalo.edu/mltoolkit/registration/', { username, password1, password2, email })
  },
  changeAccountPassword (password1, password2) {
    return session.post('https://madeatub.buffalo.edu/mltoolkit/auth/password/change/', { password1, password2 })
  },
  sendAccountPasswordResetEmail (email) {
    return session.post('https://madeatub.buffalo.edu/mltoolkit/auth/password/reset/', { email })
  },
  resetAccountPassword (uid, token, new_password1, new_password2) { // eslint-disable-line camelcase
    return session.post('https://madeatub.buffalo.edu/mltoolkit/auth/password/reset/confirm/', { uid, token, new_password1, new_password2 })
  },
  getAccountDetails () {
    return session.get('https://madeatub.buffalo.edu/mltoolkit/auth/user/')
  },
  updateAccountDetails (data) {
    return session.patch('https://madeatub.buffalo.edu/mltoolkit/auth/user/', data)
  },
  verifyAccountEmail (key) {
    return session.post('https://madeatub.buffalo.edu/mltoolkit/registration/verify-email/', { key })
  }
}
// export default {
//   login (username, password) {
//     return session.post('/auth/login/', { username, password })
//   },
//   logout () {
//     return session.post('/auth/logout/', {})
//   },
//   createAccount (username, password1, password2, email) {
//     return session.post('/registration/', { username, password1, password2, email })
//   },
//   changeAccountPassword (password1, password2) {
//     return session.post('/auth/password/change/', { password1, password2 })
//   },
//   sendAccountPasswordResetEmail (email) {
//     return session.post('/auth/password/reset/', { email })
//   },
//   resetAccountPassword (uid, token, new_password1, new_password2) { // eslint-disable-line camelcase
//     return session.post('/auth/password/reset/confirm/', { uid, token, new_password1, new_password2 })
//   },
//   getAccountDetails () {
//     return session.get('/auth/user/')
//   },
//   updateAccountDetails (data) {
//     return session.patch('/auth/user/', data)
//   },
//   verifyAccountEmail (key) {
//     return session.post('/registration/verify-email/', { key })
//   }
// }
