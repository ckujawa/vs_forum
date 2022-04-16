import { createStore } from 'vuex'
import dataSource from '@/data.json'

export default createStore({
  state: dataSource,
  actions: {
    createPost(context, post) {
      post.id = 'cmk' + Math.random()
      context.commit('setPost', { post })
      context.commit('appendPostToThread', { postId: post.id, threadId: post.threadId })
    }
  },
  mutations: {
    setPost(state, post) {
      state.posts.push(post)
    },
    appendPostToThread(state, { postId, threadId }) {
      const thread = state.threads.find(thread => thread.id === threadId)
      thread.posts.push(postId)
    }
  }
})
