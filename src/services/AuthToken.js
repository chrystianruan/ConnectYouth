import Vue from 'vue'
import VueCookies from 'vue-cookies'

Vue.use(VueCookies)

const AuthToken = {

  setToken(token){
    Vue.$cookies.set('tokenCookie', token)
  },

  getToken(){
    return Vue.$cookies.get('tokenCookie')
  },

  removeToken(){
    Vue.$cookies.remove(tokenCookie)
  }
}

export default AuthToken