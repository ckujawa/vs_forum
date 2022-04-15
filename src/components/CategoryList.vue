<template>

  <div class="forum-list">

    <h2 class="list-title">
      <router-link :to="{name: 'Category', params: {id: category.id}}">{{ category.name }}</router-link>
    </h2>

    <ForumList :forums="categoryForums" />

  </div>

</template>

<script>

import ForumList from './ForumList'

export default {
  name: 'CategoryList',
  components: { ForumList },
  props: { category: { type: Object, required: true } },
  data() {
    return {
      forums: this.$store.state.forums
    }
  },
  computed: {
    categoryForums() {
      return this.$store.state.forums.filter(forum => forum.categoryId === this.category.id)
    }
  }
}
</script>

<style scoped>

</style>
