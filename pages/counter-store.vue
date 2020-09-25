<template>
  <div>
    <Counter @counterEvent="counter += $event"></Counter>
    <Result :counter="counter"></Result>
  </div>
</template>

<script>
import Counter from '@/components/Counter'
import Result from '@/components/Result'
export default {
  components: {
    Counter,
    Result
  },
  data() {
    return {
      counter: 0
    }
  }
}
</script>

<style scoped></style>
