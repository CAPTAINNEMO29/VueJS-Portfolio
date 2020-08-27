<template>
  <v-card max-width="800" class="mx-auto">
    <v-app-bar dark color="blue lightnen-2">
      <v-toolbar-title>VideoGames</v-toolbar-title>
    </v-app-bar>
    <v-container>
      <v-row justify-md="center" dense>
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
        <v-col cols="6" md="10">
          <v-card
            shaped="6"
            max-width="100%"
            max-height="100%"
            class="mx-auto"
            color="amber"
            elevation="10"
          >
            <v-card-title class="headline">Ghost of Tushima</v-card-title>
            <v-img class="img" aspect-ratio="3" contain="2" src="../assets/ghostOfTushima.jpg"   alt="" />
            <v-card-subtitle :class="['p-2','font-weight-bold', 'text-center', fondo ]">
              este maravilloso juego.
            </v-card-subtitle>
            <div class="alineacion justify-center">
            <input class="model" type="text"   v-model="fondo"/>
            </div>
            <p class="font-weight-medium text-center">lista de colores que puedes usar para cambiar el fondo: blue, grey, red, indigo ,lime, green </p>
          </v-card>
        </v-col>
        <v-col cols="6" md="10">
          <v-card
            max-width="100%"
            max-height="100%"
            class="mx-auto"
            color="amber"
            elevation="10"
          >
            <v-card-title class="headline">The Last of Us 2</v-card-title>
            <v-img class="img" aspect-ratio="4" contain="2" src="../assets/last.jpg"   alt="" />
            <v-card-subtitle :class="['p-2','font-weight-bold', 'text-center', fondo1 ]">
              este maravilloso juego.
            </v-card-subtitle>
            <div class="alineacion justify-center">
            <input class="model" type="text"   v-model="fondo1"/>
            </div>
            <p class="font-weight-medium text-center">lista de colores que puedes usar para cambiar el fondo: blue, grey, red, indigo ,lime, green </p>
          </v-card>
        </v-col>
        <v-col cols="6" md="10">
          <v-card
            rounded="true"
            max-width="800"
            max-height="400"
            class="mx-auto"
            color="amber"
            elevation="10"
          >
            <v-card-title class="headline">tambien estos.</v-card-title>
          </v-card>
        </v-col>
        <v-col cols="6" md="10">
          <v-card
            shaped="6"
            max-width="800"
            max-height="400"
            class="mx-auto"
            color="amber"
            elevation="10"
          >
            <v-card-title class="headline">cambiando de rama.</v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: "ContentGames",
  data: () => {
    return {
      fondo: '',
      fondo1: ''
    }
  }
};
</script>

<style>
.img{
  margin: 20px;
  padding: 40px;
  height: 80%;
}
.alineacion{
  display: flex;
}
.model{
  padding: 8px;
  background-color: white;
  margin-top: 8px;
  margin-bottom: 8px;
}
</style>
