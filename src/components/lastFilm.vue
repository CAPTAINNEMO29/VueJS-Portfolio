<template>
<v-card
    max-width="800"
    class="mx-auto"
  >
    <v-app-bar
      dark
      color="blue lightnen-2"
    >
      <v-toolbar-title>Music</v-toolbar-title>
    </v-app-bar>
    <v-container>
      <v-row dense>
        <v-col cols="12">
          <v-card
          class = "my-4"
            color= "yellow darken-4"
            dark
          >
            <v-card-title class="headline">Watch the last film now</v-card-title>
            <v-card-subtitle>Listen to your favorite artists and albums whenever and wherever, online and offline.</v-card-subtitle>
            <v-card-actions>
              <router-link class="link my-2 white--text" to="/lastFilm">Watch Now</router-link>
            </v-card-actions>
          </v-card>
          <v-card
            color= "yellow darken-4"
            dark
          >
            <v-card-title class="headline">Watch the last film now</v-card-title>
            <v-card-subtitle>Listen to your favorite artists and albums whenever and wherever, online and offline.</v-card-subtitle>
            <v-card-actions>
                <router-link class="link my-2 white--text" to="/lastFilms">Watch Now</router-link>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
<script>
export default {
    name: 'lastFilm',
}
</script>