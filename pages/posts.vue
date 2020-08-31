<template>
  <div v-if="posts">
    <ul class="posts">
      <li v-for="post in showPosts" :key="`post-${post.id}`">
        <div class="p-id">
          {{ post.id }}
        </div>
        <div class="title">
          <n-link :to="{ name: 'post-id', params: { id: post.id } }">
            {{ post.title }}
          </n-link>
        </div>
      </li>
    </ul>
    <ul class="pagination">
      <li v-for="(page, i) in pagination" :key="`pagination-item-${i}`">
        <n-link
          :to="{
            name: 'posts',
            query: {
              page: i + 1,
            },
          }"
        >
          {{ i + 1 }}
        </n-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ app }) {
    try {
      const response = await app.$axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      )
      const posts = response.data
      return { posts }
    } catch (error) {
      return {}
    }
  },
  data: () => ({
    postsPerPage: 15,
  }),
  computed: {
    currentPage() {
      return this.$route.query.page || 1
    },
    showPosts() {
      // ilk sayfada olan içerik adeti = postsPerPage: 15
      // currentPage  url de olan  page=2 gibi numarayı alıyor
      // start kısmını  (1-1) * 15 = 0
      // end = 1* 15 =15
      // slice  (0,15) arasını getir (ilk sayfa için)
      // 2.sayfa için  start (2-1) *15 =15
      //  2.sayfa için  end  2*15 =30
      // slice (15,30) olur
      const start = (this.currentPage - 1) * this.postsPerPage
      const end = this.currentPage * this.postsPerPage
      return this.posts.slice(start, end)
    },
    //
    pagination() {
      // kaç adet pagination olacağını gösterir (7 adet)  pagesCount=  100/15 =6.66
      const pagesCount = Math.ceil(this.posts.length / this.postsPerPage)
      return Array.from(Array(pagesCount).keys())
    },
  },
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.posts {
  list-style: none;
  margin-bottom: 30px;
  padding: 0;
}
.posts li {
  display: flex;
  border: 1px solid #3b8070;
  margin-bottom: 10px;
}
.posts li div {
  display: flex;
  align-items: center;
}
.posts li .p-id {
  flex: 1 10%;
  padding: 10px 0;
  border-right: 1px solid #3b8070;
  background: #3b8070;
  color: #fff;
  justify-content: center;
}
.posts li .title {
  flex: 1 90%;
  padding-left: 10px;
  text-transform: uppercase;
  text-align: left;
}
.posts li .title a {
  text-decoration: none;
  color: #3b8070;
}
.pagination {
  list-style: none;
  text-align: center;
  padding: 0;
}
.pagination li {
  display: inline-block;
}
.pagination li a {
  display: block;
  text-decoration: none;
  border: 1px solid #3b8070;
  border-left: none;
  padding: 5px 10px;
  color: #3b8070;
}
.pagination li:first-of-type a {
  border-left: 1px solid #3b8070;
}
</style>
