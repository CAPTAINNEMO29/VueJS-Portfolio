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
    <v-container>
      <v-row dense>
        <v-col cols="12">
          <v-card
            color= "deep-purple darken-3"
            dark
          >
            <v-card-title class="headline">The last premieres.</v-card-title>
            <v-img class= "logo mb-4" src="../assets/films.jpg" alt=""
            gradient=""
             />
            <v-card-subtitle>Take a look at the latest premieres.</v-card-subtitle>
          <v-card-actions>
              <router-link class="link my-2 white--text" to="/lastFilm">Watch Now</router-link>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
    name: 'ContentFilms',
}
</script>