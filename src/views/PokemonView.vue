<template>
  <v-container>
    <div v-if="!pokemon">Espere por favor...</div>

    <div v-else>
      <h1>¿Quíen es ese pokémon?</h1>

      <PokemonPicture :pokemon-id="pokemon.id" :show-pokemon="showPokemon" />

      <PokemonOptions :pokemons="pokemonArr" @selection-pokemon="checkAnswer" />

      <template v-if="showAnswer">
        <h2 class="fade-in">{{ message }}</h2>
        <v-btn @click="newGame">Nuevo Juego</v-btn>
      </template>
    </div>
  </v-container>
</template>

<script>
import PokemonOptions from "../components/PokemonOptions.vue";
import PokemonPicture from "../components/PokemonPicture.vue";
import getPokemonOptions from "@/helpers/getPokemonOptions";
export default {
  name: "PokemonView",
  components: { PokemonOptions, PokemonPicture },
  data() {
    return {
      pokemonArr: [],
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      message: "",
    };
  },
  methods: {
    async mixPokemonsArray() {
      this.pokemonArr = await getPokemonOptions();
      const rndInt = Math.floor(Math.random() * 4);
      this.pokemon = this.pokemonArr[rndInt];
    },

    checkAnswer(selectedId) {
      this.showPokemon = true;
      this.showAnswer = true;

      if (selectedId === this.pokemon.id) {
        this.message = `Correcto, es ${this.pokemon.name}`;
      } else {
        this.message = `ups, era ${this.pokemon.name}`;
      }
    },

    newGame() {
      this.showPokemon = false;
      this.showAnswer = false;
      this.pokemonArr = [];
      this.pokemon = null;
      this.mixPokemonArray();
    },
  },
  mounted(){
    this.mixPokemonsArray()
  }
};
</script>
<style scoped>
.container {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
