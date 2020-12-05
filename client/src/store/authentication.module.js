import { userService } from '../services';
import router from '../config/router';

const authToken = JSON.parse(localStorage.getItem('authToken'));
const initialState = authToken
    ? { status: { loggedIn: true }, authToken }
    : { status: {}, authToken: null };

export const authentication = {
  namespaced: true,
  state: initialState,
  actions: {
    login({ dispatch, commit }, { username, password }) {
      commit('loginRequest', { username });

      userService.login(username, password)
          .then(
              authToken => {
                console.log(authToken)
                commit('loginSuccess', authToken);
                router.push('/');
              },
              error => {
                commit('loginFailure', error);
                dispatch('alert/error', error, { root: true });
              }
          );
    },
    logout({ commit }) {
      userService.logout();
      commit('logout');
    }
  },
  mutations: {
    loginRequest(state, authToken) {
      state.status = { loggingIn: true };
      state.user = authToken;
    },
    loginSuccess(state, authToken) {
      state.status = { loggedIn: true };
      state.user = authToken;
    },
    loginFailure(state) {
      state.status = {};
      state.user = null;
    },
    logout(state) {
      state.status = {};
      state.user = null;
    }
  }
}
