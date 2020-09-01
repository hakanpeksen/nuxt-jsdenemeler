<template>
  <div>
    <counter @counterEvent="counter += $event"></counter>
    <result :counter="counter"></result>
  </div>
</template>

<script>
import Counter from '@/components/Counter'
import Result from '@/components/Result'
export default {
  components: {
    Counter,
    Result,
  },
  data() {
    return {
      counter: 0,
    }
  },
}
</script>

<style scoped></style>
