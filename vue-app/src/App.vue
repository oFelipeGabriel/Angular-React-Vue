<template>
<div>
  <CabecalhoComponent />
  <div class="main">
    <TabMenu :model="items" />
    <router-view></router-view>
  </div>
  <RodapeComponent texto="Ver mensagem" :clicaBotao="clicar"/>
  <Dialog
    header="Dialog" 
    :visible="verDialog" 
    :style="{width: '50vw'}" 
    position="topright" 
    :modal="true">
      <p class="m-0">
        Aqui tem o Dialog
      </p>
      <template #footer>
          <Button label="OK" icon="pi pi-check" @click="fechaModal" autofocus />
      </template>
  </Dialog>
</div>
</template>

<script>
import CabecalhoComponent from './components/CabecalhoComponent.vue'
import RodapeComponent from './components/RodapeComponent.vue'
import Dialog from 'primevue/dialog'
import Button from 'primevue/button'
import TabMenu from 'primevue/tabmenu';
// import {ref} from 'vue'
export default {
  name: 'App',
  components:{
    CabecalhoComponent,
    RodapeComponent,
    Dialog,
    Button,
    TabMenu
  },
  data(){
    const items = [
        {label: 'Home', icon: 'pi pi-fw pi-home', to:'/'},
        {label: 'Blog', icon: 'pi pi-fw pi-file', to: '/blog'},
    ]
    return{
      verDialog: false,
      items
    }
  },
  methods:{
    clicar(){
      this.verDialog = true
    },
    fechaModal(){
      this.verDialog = false
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.main{
    margin-top: 3.5rem;
    min-height: 30vh;
}
</style>
