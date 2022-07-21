<template>
    <div>
      <ProgressSpinner v-if="loading" />
      <Card v-for="noticia in noticias" :key="noticia.id" class="card-noticia">
        <template #header>
            <img alt="user header" :src="noticia.imageUrl">
        </template>
        <template #title>
            {{noticia.title}}
        </template>
        <template #content>
            {{noticia.summary}}
        </template>
        <template #footer>
            <a :href="noticia.url" target="_blank">Ver mais</a>
        </template>
    </Card>
  </div>
</template>

<script>
import {getNews} from '../services/api.js'
import Card from 'primevue/card';
import ProgressSpinner from 'primevue/progressspinner';
import {ref} from 'vue';
export default {
  name: 'NoticiaPage',
  components: {
    Card,
    ProgressSpinner
  },
  data(){
    return{
      noticias: ref([]),
      loading: ref(false)
    }
  },
  mounted(){
    this.loading = true
    getNews().then(res=>{
      this.noticias = res.data
      this.loading = false
    })
  }
}
</script>

<style>
.card-noticia{
  min-width: 25rem;
  width: 40%;
  margin: 2rem auto;
}
</style>