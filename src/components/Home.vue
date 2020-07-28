<template>
  <div>
    <v-container>
      <v-row justify="center">
        <v-col cols="12">
          <v-img src="../assets/street-figther.jpg" alt="" />
        </v-col>
        <v-col cols="6">
          <h1>Esta pagina tratara de temas actuales.</h1>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid>
      <v-row>
        <v-col>
          <v-card
          min-height="150"
          >
            <v-list-item>
            <v-list-item-avatar
            tile
            size="100"
            color="blue"
            >
            <v-img src="../assets/musica.jpg" alt="" />
            </v-list-item-avatar>
            <v-list-item-content>
              {{ Music }}
              <router-link class="link my-2" to="/music">Music</router-link>
            </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid>
      <v-row>
        <v-col>
          <v-card
          min-height="150"
          >
            <v-list-item>
            <v-list-item-avatar
            tile
            size="100"
            color="red"
            >
            <v-img src="../assets/films.jpg" alt="" />
            </v-list-item-avatar>
            <v-list-item-content>
              {{ Films }}
              <router-link class="link" to="/movies">Movies</router-link>
            </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid>
      <v-row>
        <v-col>
          <v-card
          min-height="150"
          >
            <v-list-item>
            <v-list-item-avatar
            tile
            size="100"
            color="green"
            ></v-list-item-avatar>
            <v-list-item-content>
              {{ Games }}
              <router-link class="link" to="/videogames">Videogames</router-link>
            </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid>
      <v-row>
        <v-col>
          <v-card
          min-height="150"
          >
            <v-list-item id="app1">
            <v-list-item-avatar
            tile
            size="100"
            color="purple"
            ></v-list-item-avatar>
            <v-list-item-content id="app">
              {{ Anime }}
              <router-link class="link" to="/anime">Anime</router-link>
            </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  data:() => {
     return {
      Anime: 'Aqui encontraras las series mas actuales',
      Games: 'Que nos traera la siguiente generacion de consolas?',
      Films: 'Se retrasan los nuevos estrenos en cartelera',
      Music: 'Has escuchado el ultimo tema del verano?'
  }
}
}
</script>
<style>
img {
  width: 100%;
}
.card {
  margin-top: 5%;
  margin-bottom: 5%;
}
</style>
