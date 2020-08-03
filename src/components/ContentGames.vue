<template>
  <v-card max-width="800" class="mx-auto">
    <v-app-bar dark color="blue lightnen-2">
      <v-toolbar-title>VideoGames</v-toolbar-title>
    </v-app-bar>
    <v-container>
      <v-row dense>
        <v-col cols="12">
          <v-card color="cyan" dark>
            <v-card-title class="headline"
              >These are the last videogames curently.</v-card-title
            >
            <v-card-subtitle>Be ready for some fun?</v-card-subtitle>
            <v-card-actions>
              <v-btn text>Watch Now</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card max-width="800" max-height="400" class="mx-auto" color="yellow">
            <v-card-title class="headline"
              >puedes jugar a estos.</v-card-title
            >
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card max-width="800" max-height="400" class="mx-auto" color="yellow">
            <v-card-title class="headline"
              >o mirar estos.</v-card-title
            >
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card max-width="800" max-height="400" class="mx-auto" color="yellow">
            <v-card-title class="headline"
              >tambien estos.</v-card-title
            >
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card max-width="800" max-height="400" class="mx-auto" color="yellow">
            <v-card-title class="headline"
              >o aquellos.</v-card-title
            >
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: "ContentGames",
};
</script>
