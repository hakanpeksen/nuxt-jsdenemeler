<template>
  <div>
    <div>Sayaç:{{ counter }}</div>
    <!-- <div>Tıklama:{{ stringCounter }}</div> -->
  </div>
</template>
<script>
export default {
  computed: {
    counter() {
      return this.$store.state.counter
      // return this.$store.getters.getDoubleCounter
      // return this.$store.getters.getCounter
    },
    stringCounter() {
      return this.$store.getters.stringCounter
    },
  },
}
</script>

<style scoped></style>
