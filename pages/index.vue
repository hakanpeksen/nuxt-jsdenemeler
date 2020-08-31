<template>
  <div class="container">
    <div>
      <ul v-for="post in fetchedPosts" :key="post.id">
        <li>{{ post.title }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  async fetch({ store, $axios }) {
    const res = await $axios.get('https://jsonplaceholder.typicode.com/posts')
    const data = res.data.slice(0, 6)
    store.commit('setPosts', data)
  },
  computed: {
    fetchedPosts() {
      return this.$store.getters.getPosts
    },
  },
}

// asyncData  örneği
// async asyncData({ $axios }) {
//   const res = await $axios.get('https://jsonplaceholder.typicode.com/posts')
//   const data = res.data.slice(0, 5)
//   return { fetchedPosts: data }
// },
// data() {
//   return {
//     fetchedPosts: [],
//   }
// },
// created() {
//   this.$store.dispatch('setPosts', this.fetchedPosts)
// },

// fetch  örneği
// async fetch({ store, $axios }) {
//   const res = await $axios.get('https://jsonplaceholder.typicode.com/posts')
//   const data = res.data.slice(0, 6)
//   store.commit('setPosts', data)
// },
// computed: {
//   fetchedPosts() {
//     return this.$store.getters.getPosts
//   },
// },
</script>
