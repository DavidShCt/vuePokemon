<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12">
        <div>¿Quíen es ese pokémon?</div>
      </v-col>
      <v-col cols="12">
        <pokemon-picture/>
      </v-col>
      <v-col cols="12">
        <pokemon-options/>
      </v-col>
    </v-row>
  </v-container>

</template>

<script>
import PokemonOptions from '../components/PokemonOptions.vue'
import PokemonPicture from '../components/PokemonPicture.vue'
export default {
  name: 'PokemonView',
  components:{PokemonOptions, PokemonPicture}
}
</script>
<style scoped>
.container{
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
