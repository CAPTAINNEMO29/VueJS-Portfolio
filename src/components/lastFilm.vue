<template>
<v-card
    max-width="800"
    class="mx-auto"
  >
    <v-app-bar
      dark
      color="blue lightnen-2"
    >
      <v-toolbar-title>Movies</v-toolbar-title>
    </v-app-bar>
    <div>
    <film v-bind:peliculas="peliculas"></film>
    </div>
  </v-card>
</template>
<script>
import film from "./film";
export default {
    name: 'lastFilm',
    components: {
      film
    },
    data(){
      return{
        peliculas: [
          {title: "aquaman", year: "2019"},
          {title: "endgame", year: "2019"}
        ]
      }
    }
}
</script>