<template>
<v-card
    max-width="800"
    class="mx-auto"
  >
    <v-app-bar
      dark
      color="blue lightnen-2"
    >
      <v-toolbar-title>Anime</v-toolbar-title>
    </v-app-bar>
    <v-container>
      <v-row dense>
        <v-col cols="12">
          <v-card
            color= "indigo"
            dark
          >
            <v-card-title class="headline">Everyone is talking about this, dont be silly and watch it too.</v-card-title>
            <v-card-subtitle>Last episodes of your favorites anime series.</v-card-subtitle>
            <v-card-actions>
              <router-link class="link my-2 white--text" to="/lastAnime">Watch Now</router-link>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
    name: 'ContentAnime',
}
</script>