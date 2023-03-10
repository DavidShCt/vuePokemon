<template>
  <v-container class="contenedor">
    <GeneralLoader v-if="!pokemon" :text="'Espere por favor...'"/>

    <div v-else>
      <h1 class="mt-5">¿Quíen es ese pokémon?</h1>

      <PokemonPicture class="mt-5" :pokemon-id="pokemon.id" :show-pokemon="showPokemon" />

      <PokemonOptions class="mt-5" :pokemons="pokemonArr" @selection-pokemon="checkAnswer" />

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
import GeneralLoader from '../components/GeneralLoader.vue';
import getPokemonOptions from "@/helpers/getPokemonOptions";
export default {
  name: "PokemonView",
  components: { PokemonOptions, PokemonPicture, GeneralLoader },
  data() {
    return {
      pokemonArr: [],
      pokemon: false,
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
      this.mixPokemonsArray();
    },
  },
  mounted(){
    this.mixPokemonsArray()
  }
};
</script>
<style scoped>
.contenedor {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-in{
  animation: fadeIn 0.3s;
  -webkit-animation: fadeIn 0.3s;
  -moz-animation: fadeIn 0.3s;
  -o-animation: fadeIn 0.3s;
  -ms-animation: fadeIn 0.3s;
}

@keyframes fadeIn {
  0% {opacity: 0;}
  100% {opacity: 1;}
}
@-moz-keyframes fadeIn {
  0% {opacity: 0;}
  100% {opacity: 1;}
}
@-o-keyframes fadeIn {
  0% {opacity: 0;}
  100% {opacity: 1;}
}
@-webkit-keyframes fadeIn {
  0% {opacity: 0;}
  100% {opacity: 1;}
}
@-ms-keyframes fadeIn {
  0% {opacity: 0;}
  100% {opacity: 1;}
}
</style>
