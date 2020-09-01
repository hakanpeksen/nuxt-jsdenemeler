<template>
  <div class="container">
    <Tags v-model="tags" color="success" />
    <Tags v-model="tags2" color="danger" />
    <Tags v-model="tags2" color="info" />
    <Tags v-model="tags2" color="primary" />
    <Tags v-model="tags2" color="warning" />
    <Tags v-model="tags2" color="secondary" />
  </div>
</template>
<script>
import Tags from '@/components/Tags'
export default {
  components: {
    Tags,
  },
  data() {
    return {
      tags: 'deneme,test,gkandemir',
      tags2: 'deneme,test,gkandemir,klavye,telsiz',
    }
  },
}
</script>

<style scoped></style>
