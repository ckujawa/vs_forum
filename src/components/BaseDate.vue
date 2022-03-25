<template>
  <span :title="humanFriendlyDate">
    {{diffForHumans}}
  </span>
</template>

<script>
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import localizedFormat from 'dayjs/plugin/localizedFormat'

dayjs.extend(relativeTime)
dayjs.extend(localizedFormat)

export default {
  name: 'BaseDate',
  props: {
    timestamp: {
      required: true,
      type: Number
    }
  },
  computed: {
    humanFriendlyDate() {
      return dayjs.unix(this.timestamp).format('llll')
    },
    diffForHumans() {
      return dayjs.unix(this.timestamp).fromNow()
    }
  }
}
</script>

<style scoped>

</style>
