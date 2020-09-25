<template>
  <div>
    <h3 class="text-4xl text-center border-solid border-b-2 mb-6 text-gray-700">
      Results For {{ $route.params.id }}
    </h3>
    <client-only>
      <div v-if="albumExists">
        <div v-for="(album, index) in albumData" :key="index">
          <postList
            :title="album.collectionCensoredName"
            :image="album.artworkUrl100"
            :artis-name="album.artistName"
            :url="album.collectionViewUrl"
            :artis-url="album.artisViewUrl"
            :summary="album.copyright"
          />
        </div>
      </div>
      <div v-else>
        <h2>Could Not Find Album</h2>
      </div>
    </client-only>
  </div>
</template>
<script>
import axios from 'axios'
import postList from '~/components/postList'

export default {
  components: {
    postList
  },
  asyncData({ params }) {
    return axios
      .get(
        `https://itunes.apple.com/search?term=${params.id}&entity=album&limit=10`
      )
      .then((response) => {
        return { albumData: response.data.results }
      })
  },
  middleware: 'search',
  computed: {
    albumExists() {
      return this.albumData.length > 0
    }
  }
}
</script>
