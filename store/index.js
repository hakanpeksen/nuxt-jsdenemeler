export const state = () => ({
  fetchedPosts: [],
})

export const getters = {
  getPosts(state) {
    return state.fetchedPosts
  },
}

export const actions = {
  setPosts({ commit }, payload) {
    commit('setPosts', payload)
  },
}

export const mutations = {
  setPosts(state, posts) {
    state.fetchedPosts = posts
  },
}
