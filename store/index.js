export const state = () => ({ page: null })

export const mutations = {
  updatePage(state, pageData) {
    state.page = pageData
  },
}

export const actions = {
  async nuxtServerInit({ commit }, { $content }) {
    const page = await $content('home').fetch()

    commit('updatePage', page)
  },
}
