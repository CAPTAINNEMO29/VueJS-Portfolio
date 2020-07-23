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
    <v-card
    class = "my-4"
    color = "indigo darken-4"
    dark
     v-if="favorita">
            <v-card-title class="headline">{{ favorita.title }}</v-card-title>
            <v-card-subtitle> {{ favorita.year }}</v-card-subtitle>
    </v-card>
    <div>
    <film v-bind:peliculas="peliculas" @favorita="llegadaFavorita" ></film>
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
        favorita: null,
        peliculas: [
          {title: "aquaman", year: "2019"},
          {title: "endgame", year: "2019"}
        ]
      }
    },
    methods: {
      llegadaFavorita(favorita){
        console.log(favorita);
        alert('se ha agregado a favoritas');
        this.favorita = favorita;
      }
    }
}
</script>