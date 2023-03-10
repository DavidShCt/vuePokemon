<template>
  <div class="pokemon-container">
    <img
      v-if="showPokemon"
      src="https://raw.githubusercontent.com/PokeApi/sprites/master/sprites/pokemon/other/dream-world/1.svg" 
      alt="pokemon"
      class="hidden-pokemon"
    />
    <img 
      v-if="!showPokemon" 
      src="https://raw.githubusercontent.com/PokeApi/sprites/master/sprites/pokemon/other/dream-world/1.svg" 
      alt="pokemon"
      class="fade-in"
    />
  </div>
</template>
s
<script>
export default {
  name: "PokemonPicture",
  data(){
    return{
      showPokemon: false
    }
  },
  created(){
    setTimeout(() => {
      this.showPokemon = true
    }, 1000);
  }
}
</script>

<style scoped>
.pokemon-container {
    height: 200px;
}
img {
    height: 200px;
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
}
.hidden-pokemon {
    filter: brightness(0);
}
</style>