<template>
  <v-card max-width="800" class="mx-auto">
    <v-app-bar dark color="blue lightnen-2">
      <v-toolbar-title>Anime Series</v-toolbar-title>
    </v-app-bar>
    <v-container>
      <v-row dense>
        <v-col cols="12">
          <v-card class="mb-2" color="blue darken-2" dark>
            <v-card-title class="headline">Unlimited Series</v-card-title>
            <v-img
              class="logo mb-4"
              src="../assets/Hina.jpg"
              alt=""
              gradient=""
            />
            <v-card-subtitle>mira las series actuales.</v-card-subtitle>
            <v-card-actions>
              <router-link class="link my-2 white--text" to="/lastMusic"
                >prueba ahora</router-link
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row dense>
        <v-col cols="12">
          <v-card
            class="mb-2"
            color="blue darken-2"
            dark
            v-for="anime in animeSeries"
            v-bind:key="anime"
          >
            <v-card-title>
              {{ anime.title }}
              <v-card-actions>
                <router-link></router-link>
              </v-card-actions>
            </v-card-title>
            <v-img
              max-height="80%"
              max-width="60%"
              position="center"
              class="logo mb-4 pb-4"
              :src="require(`../assets/${anime.image}`)"
              alt="imagen"
            >
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
            <v-card-subtitle>{{ anime.content }}</v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
<script>
export default {
  name: "lastAnime",
  data: () => ({
    animeSeries: [
      {
        title: "Dragon Ball Super",
        image: "ultraInstict.png",
        content: "sigue las aventuras de goku y sus amigos",
      },
      {
        title: "One Punch Man",
        image: "saitama.jpg",
        content: "Las aventuras de un calvo con capa",
      },
      {
        title: "High Score Girl",
        image: "highScoreGirl.jpg",
        content: "Unidos por los videojuegos",
      },
    ],
  }),
};
</script>
<style></style>
