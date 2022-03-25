<template>
  <div className="col-full push-top">
    <div className="forum-header">
      <div className="forum-details">
        <h1>{{ forum.name }}</h1>
        <p className="text-lead">{{ forum.description }}</p>
      </div>
      <a href="new-thread.html" className="btn-green btn-small">Start a thread</a>
    </div>
  </div>

  <div className="col-full push-top">
    <ThreadList :threads="threads"/>
  </div>
</template>

<script>
import ThreadList from '@/components/ThreadsList'
import sourceData from '@/data.json'

export default {
  components: { ThreadList },
  props: {
    id: {
      required: true,
      type: String
    }
  },
  computed: {
    forum() {
      return sourceData.forums.find(forum => forum.id === this.id)
    },
    threads() {
      return sourceData.threads.filter(thread => thread.forumId === this.id)
    }
  }
}
</script>

<style scoped>
</style>
