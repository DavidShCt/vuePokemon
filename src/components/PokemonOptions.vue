<template>
  <v-container>
    <v-list two-line>
      <v-list-item-group v-model="selectedPokemon">
        <template v-for="(pokemon, index) in pokemons">
          <v-list-item :key="pokemon.id" @click="$emit( 'selectionPokemon', pokemon.id )">>
            <template v-slot:default>
              <v-list-item-content>
                <v-list-item-title>{{ pokemon.name }}</v-list-item-title>
              </v-list-item-content>
            </template>
          </v-list-item>
          <v-divider
            v-if="index < pokemons.length - 1"
            :key="index"
          ></v-divider>
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
  methods:{
    
  }
}
</script>

<style scoped>
.container{
    display: flex;
    justify-content: center;

}
</style>