<template>
  <div>
    <!-- parametresiz çalışır -->
    <!-- <button class="button" @click="increaseCounter">+ Arttır</button>
    <button class="button" @click="decreaseCounter">- Azalt</button> -->
    <!-- parametreli çalışır -->
    <button class="button" @click="increaseCounter(4)">+4 Arttır</button>
    <button class="button" @click="increment(5)">+5 Arttır</button>
    <!-- 2 sn sonra sayaç 10 artar -->
    <button class="button" @click="incAsync({ time: 2000 })">
      + Async Arttır
    </button>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
export default {
  methods: {
    // helper fonksiyonları
    ...mapMutations(['increaseCounter', 'decreaseCounter']),
    ...mapActions(['increment', 'decrement', 'incAsync']),

    // increment(){
    //   this.$store.dispatch("increment");
    // },
    // decrement(){
    //   this.$store.dispatch("decrement");
    // },
    // incrementAsync(){
    //   this.$store.dispatch("incAsync");
    // },
    // incrementCounter() {
    //   this.$emit('counterEvent', 1)
    //   this.$store.state.counter++
    //   this.$store.commit('increaseCounter')
    // },
    // decrementCounter(){
    //   //this.$emit("counterEvent", -1);
    //   // this.$store.state.counter--;
    //   this.$store.commit("decreaseCounter");
    // }
  },
}
</script>

<style scoped></style>
