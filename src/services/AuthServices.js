import { reactive } from 'vue';
import VueCookie from 'vue-cookie';
// save token in cookie
const AuthService = {
  state: reactive({
    token: null,
  }),

  setToken(token) {
    this.state.token = token;
    VueCookie.set('cookieToken', token, {
      secure: true,
      httpOnly: true,
      sameSite: 'strict', 
    });
  },

  getToken() {
    if (!this.state.token) {
      this.state.token = VueCookie.get('cookieToken');
    }
    return this.state.token;
  },

  existToken(){
    if (this.state.token) {
      return true;
    }
    return false;
    
  },

  removeToken() {
    this.state.token = null;
    VueCookie.delete('cookieToken');
  },
};

export default AuthService;
