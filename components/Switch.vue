<template>
  <div>
    <div id="on" :class="{ active: value }" @click="switched(true)">Açık</div>
    <div id="off" :class="{ active: !value }" @click="switched(false)">
      Kapalı
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['value'],
  methods: {
    switched(isOn) {
      this.$emit('input', isOn)
    }
  }
}
</script>

<style scoped>
#on,
#off {
  width: 50px;
  height: 20px;
  background-color: #eee;
  padding: 2px;
  display: inline-block;
  margin: 10px -2px;
  box-sizing: content-box;
  cursor: pointer;
  text-align: center;
}
#on:hover,
#on.active {
  background-color: lightgreen;
}
#off:hover,
#off.active {
  background-color: red;
}
</style>
