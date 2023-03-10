<template>
  <div>
    <v-app-bar 
      color="deep-purple accent-4"
      dense
      dark
    >
      <v-toolbar-title>PokeApp</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text @click="$vuetify.theme.dark = !$vuetify.theme.dark">Dark Mode</v-btn>
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