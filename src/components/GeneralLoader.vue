<template>
  <v-row class="my-auto mx-auto text-center" align="center" justify="center">
    <v-col class="text-subtitle-1 text-center" cols="12">
      {{text}}
    </v-col>
    <v-col class="text-subtitle-1 text-center" cols="12">
      <v-progress-circular
        :size="70"
        :width="7"
        indeterminate
        class="my-5"
      ></v-progress-circular>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props:{
    text:{
      type: String,
      default: "Procesando operación"
    }
  }
};
</script>