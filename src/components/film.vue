<template>
<v-card>
    <v-container>
      <v-row dense>
        <v-col cols="12">
          <v-card
          class = "my-4"
            color= "yellow darken-4"
            dark
            v-for="pelicula in peliculas" :key="pelicula"
          >
            <v-card-title class="headline">{{ pelicula.title }}</v-card-title>
            <v-card-subtitle>{{ pelicula.year }}</v-card-subtitle>
            <v-card-actions>
              <router-link class="link my-2 white--text" to="/lastFilm">Watch Now</router-link>
            </v-card-actions>
            <input type="button" value="favorita"
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

</style>