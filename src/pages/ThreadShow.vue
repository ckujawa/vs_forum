<template>
  <div class="col-large push-top">
    <h1>{{thread.title}}</h1>

    <post-list :posts="threadPosts"/>

    <post-editor @post-submit="addPost"/>
  </div>
</template>

<script>
import PostList from '@/components/PostList'
import PostEditor from '@/components/PostEditor'

export default {
  name: 'ThreadShow',
  components: { PostList, PostEditor },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    thread () {
      return this.$store.state.threads.find(thread => thread.id === this.id) // also available under this.$route.params.id
    },
    threadPosts() {
      return this.$store.state.posts.filter(post => post.threadId === this.id)
    }
  },
  methods: {
    addPost(eventData) {
      const post = {
        ...eventData.post,
        threadId: this.id
      }
      this.$store.dispatch('createPost', post)
    }
  }
}
</script>

<style scoped>

</style>
