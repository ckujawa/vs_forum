<template>
    <div class="col-full push-top">
      <h1>{{category.name}}</h1>
      <CategoryList :category="category"/>
    </div>
</template>

<script>
import CategoryList from '@/components/CategoryList'

export default {
  name: 'Category',
  components: { CategoryList },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    category() {
      return this.$store.state.categories.find((cat) => cat.id === this.id)
    }
  }
}
</script>

<style scoped>

</style>
