<template>
  <section class="container">
    <div v-if="post">
      <h1>{{ post.title }}</h1>
      <p>
        {{ post.body }}
      </p>
    </div>
  </section>
</template>

<script>
export default {
  async asyncData({ app, route }) {
    try {
      const response = await app.$axios.get(
        `https://jsonplaceholder.typicode.com/posts/${route.params.id}`
      )
      const post = response.data
      return { post }
    } catch (error) {
      return {}
    }
  },
}
</script>
