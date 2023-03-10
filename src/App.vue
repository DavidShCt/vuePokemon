<template>
  <div>
    <v-app-bar color="deep-purple accent-4"
      dense
      dark>
      <v-toolbar-title>PokeApp</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-switch
        v-model="switch1"
      ></v-switch>
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