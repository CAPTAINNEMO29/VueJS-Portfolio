<template>
<v-card>
    <v-container>
      <v-row dense>
        <v-col cols="12">
          <v-card
          class = "my-4"
            color= "deep-purple darken-3"
            dark
            v-for="pelicula in peliculas" :key="pelicula"
          >
            <v-card-title class="headline">{{ pelicula.title }}</v-card-title>
            <v-img
            max-height="80%"
            max-width="60%"
            position="center"
            class="logo mb-4 pb-4" :src="require(`../assets/${pelicula.image}`)" alt="imagen">
            <template v-slot:placeholder>
        <v-row
          class="fill-height ma-0"
          align="center"
          justify="center"
        >
          <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
        </v-row>
      </template>
            </v-img>
            <v-card-subtitle>{{ pelicula.year }}</v-card-subtitle>
            <v-card-actions>
              <router-link class="link my-2 white--text" to="/lastFilm">Watch Now</router-link>
            </v-card-actions>
            <input class="press" type="button" value="favorita"
            @click="pasarFavorita(pelicula)"
             />
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</v-card>
</template>

<script>
export default {
    name: 'film',
    props: {
        peliculas: {
            type: Array
        }
    },
    methods: {
      pasarFavorita(pelicula){
        this.$emit('favorita', pelicula);
      }
    }
}
</script>

<style>
.press{
  background-color: #4f8a8b;
  margin-left: 6px;
  margin-bottom: 8px;
  padding: 4px;
}
</style>