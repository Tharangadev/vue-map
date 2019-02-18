export default {
  async get({ commit }) {
    commit('loader_status', true)
    await this.$axios.get('/api/search').then((res) => {

      if (res.status == 200) {
        commit('set', res.data)
      }
      commit('loader_status', false)
    })
  },
  async make_search({ commit }, data) {
    commit('loader_status', true)

    await this.$axios.get('/api/filter', { params: data }).then(res => {
      commit('set', res.data)
      commit('loader_status', false)

    })
  }
}
