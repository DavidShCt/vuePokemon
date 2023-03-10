<template>
  <v-container>
    <v-list two-line>
      <v-list-item-group v-model="selectedPokemon">
        <template v-for="pokemon in pokemons">
          <v-list-item :key="pokemon.id">
            <template v-slot:default>
              <v-list-item-content @click="$emit( 'selection-pokemon', pokemon.id )">
                <v-list-item-title>{{ pokemon.name }}</v-list-item-title>
              </v-list-item-content>
            </template>
          </v-list-item>
        </template>
      </v-list-item-group>
    </v-list>
  </v-container>
</template>

<script>
export default {
  name: 'PokemonOptions',
  props:{
    pokemons:{
      type: Array,
      required: true
    }
  },
  data(){
    return{
      selectedPokemon: "",
    }
  },
  methods:{
    selection(){
      
    }
  }
}
</script>

<style scoped>
.container{
    display: flex;
    justify-content: center;

}
</style>