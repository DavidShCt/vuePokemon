<template>
  <div>
    <v-app-bar 
      color="deep-purple accent-4"
      dense
      dark
    >
      <v-toolbar-title>PokeApp</v-toolbar-title>
    </v-app-bar>
    <PokemonView/>
  </div>
</template>

<script>
import PokemonView from './views/PokemonView.vue'
export default {
  name: 'App',
  components: {PokemonView},
  data () {
      return {
        switch1: false,
      }
    },
}
</script>