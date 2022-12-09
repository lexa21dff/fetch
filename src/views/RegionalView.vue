<template>
  <div class="home">
    <listaRegionales></listaRegionales>
    <crearRegional></crearRegional>
  </div>
</template>

<script>
// @ is an alias to /src
import listaRegionales from '@/components/regional/ListaRegional.vue'
import crearRegional from '@/components/regional/CrearRegional.vue'


export default {
  name: 'regionalesView',
  components: {
    listaRegionales,
    crearRegional,

  }
}
</script>
