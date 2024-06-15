export const state = () => ({
  loginStatus: false
})

export const getters = {
  getLogin(state) {
    return state.loginStatus
  }
}

export const mutations = {
  setLogin(state, data) {
    state.loginStatus = data;
  }
}
