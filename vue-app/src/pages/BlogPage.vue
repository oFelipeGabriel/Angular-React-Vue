<template>
  <div>
    <ProgressSpinner v-if="loading" />
    <Card v-for="post in posts" :key="post.id" class="card-post">
      <template #header>
          <img alt="user header" :src="post.imageUrl">
      </template>
      <template #title>
          {{post.title}}
      </template>
      <template #content>
          {{post.summary}}
      </template>
      <template #footer>
          <a :href="post.url" target="_blank">Ver mais</a>
      </template>
    </Card>
  </div>
</template>

<script>
import {ref} from 'vue';
import Card from 'primevue/card';
import ProgressSpinner from 'primevue/progressspinner';
import {getBlogPosts} from '../services/api.js'
export default {
  name: 'NoticiaPage',
  components: {
    Card,
    ProgressSpinner
  },
  data(){
    return{
      posts: ref([]),
      loading: ref(false)
    }
  },
  mounted(){
    this.loading = true
    getBlogPosts().then(res=>{
      this.posts = res.data
      this.loading = false
    })
  }
}
</script>

<style scoped>
.card-post{
  min-width: 25rem;
  width: 40%;
  margin: 2rem auto;
}
</style>