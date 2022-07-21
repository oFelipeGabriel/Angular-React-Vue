<template>
  <div class="rodape">
    {{texto}}
    <Button 
      label="Clique aqui"
      class="p-button-secondary p-button-sm"
      @click="clicaBotao"/>
  </div>
</template>

<script>
import Button from 'primevue/button';
export default {
  name: 'RodapeComponent',
  components:{
    Button
  },
  props: {
    texto: {
      type: String,
      default() {
        return 'Ver Dialog'
      }
    },
    clicaBotao:{
      type: Function,
      required: true
    }
  }
}
</script>

<style scoped>
.rodape{
  display: block;
  width: 100%;
  text-align: center;
  padding: .5rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 1rem;
  color: #2c3e50;
  background-color: #41B883;
}
</style>