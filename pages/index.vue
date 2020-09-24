<template>
  <div>
    <div>
      <ul v-for="post in fetchedPosts" :key="post.id">
        <li>{{ post.title }}</li>
      </ul>
    </div>
    <button class="visibility_button">
      <font-awesome-icon
        v-if="visibility"
        :icon="['far', 'eye-slash']"
        size="2x"
        @click.prevent="visibility = false"
      />
      <font-awesome-icon
        v-else
        :icon="['far', 'eye']"
        size="2x"
        @click.prevent="visibility = true"
      />
    </button>
    <!-- <div>
      <font-awesome-icon
        :icon="['far', 'eye']"
        @click.prevent="visibility = true"
      />
      <font-awesome-icon
        :icon="['far', 'eye-slash']"
        @click.prevent="visibility = true"
      />
      <font-awesome-icon
        :icon="['far', 'bookmark']"
        @click.prevent="visibility = true"
      />
      <font-awesome-icon
        :icon="['far', 'image']"
        @click.prevent="visibility = true"
      />
      <font-awesome-icon
        :icon="['far', 'id-card']"
        size="3x"
        @click.prevent="visibility = true"
      />
      <font-awesome-icon
        :icon="['far', 'map']"
        size="2x"
        @click.prevent="visibility = true"
      />
    </div> -->
  </div>
</template>

<script>
export default {
  async fetch({ store, $axios }) {
    const res = await $axios.get('https://jsonplaceholder.typicode.com/posts')
    const data = res.data.slice(0, 6)
    store.commit('setPosts', data)
  },
  data() {
    return {
      visibility: false,
    }
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
<style>
.visibility_button {
  position: absolute;
  left: 5%;
  top: 25%;
  cursor: pointer;
  background-color: transparent;
  border: 0;
  outline: 0;
}
</style>
