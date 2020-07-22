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
              <v-btn text>Read Now</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col
          v-for="(item, i) in items"
          :key="i"
          cols="12"
        >
          <v-card
            :color="item.color"
            dark
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  class="headline"
                  v-text="item.title"
                ></v-card-title>
                <v-card-subtitle v-text="item.artist"></v-card-subtitle>
              </div>
              <v-avatar
                class="ma-3"
                size="125"
                tile
              >
                <v-img :src="item.src"></v-img>
              </v-avatar>
            </div>
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