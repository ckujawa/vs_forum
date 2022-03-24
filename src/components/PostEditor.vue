<template>
  <div class="col-full">
    <form @submit.prevent="save">
      <div class="form-group">
        <textarea v-model="postText" name="" id="postTextInput" cols="30" rows="10" class="form-input"/>
      </div>
      <div class="form-actions">
        <button class="btn-blue">Submit Post</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'PostEditor',
  data() {
    return {
      postText: ''
    }
  },
  methods: {
    save() {
      const postId = 'cmk' + Math.random()
      const post = {
        id: postId,
        text: this.postText,
        pulishedAt: Math.floor(Date.now() / 1000),
        userId: '38St7Q8Zi2N1SPa5ahzssq9kbyp1'
      }

      this.$emit('post-submit', { post })
      this.postText = ''
    }
  }
}
</script>

<style scoped>

</style>
