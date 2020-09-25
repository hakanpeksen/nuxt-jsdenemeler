export const state = () => ({
  fetchedPosts: [],
  counter: 0
})

export const getters = {
  getPosts(state) {
    return state.fetchedPosts
  },
  getDoubleCounter(state) {
    return state.counter * 3
  },
  getCounter(state) {
    return state.counter
  },
  stringCounter(state) {
    return state.counter + '.kez tıklandı'
  }
}

export const actions = {
  setPosts({ commit }, payload) {
    commit('setPosts', payload)
  },
  increment({ commit }, payload) {
    commit('increaseCounter', payload)
  },
  decrement({ commit }) {
    commit('decreaseCounter')
  },
  incAsync({ commit }, payload) {
    setTimeout(() => {
      commit('increaseCounter', 10)
    }, payload.time)
  }
}

export const mutations = {
  setPosts(state, posts) {
    state.fetchedPosts = posts
  },
  increaseCounter(state, payload) {
    state.counter += payload
  },
  // parametresiz çalışır
  // increaseCounter(state) {
  //   state.counter++
  // },
  decreaseCounter(state) {
    state.counter--
  }
}
