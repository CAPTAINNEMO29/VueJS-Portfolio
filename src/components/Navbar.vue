<template>
  <div>
    <v-toolbar
      app
      dark
      prominent
      src=""
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Pananga</v-toolbar-title>
      <v-spacer></v-spacer>
      <div>
      <ul>
        <li>
          <router-link class="link" to="/home">Home</router-link>
        </li>
        <li>
          <router-link class="link" to="/music">Music</router-link>
        </li>
        <li>
          <router-link class="link" to="/movies">Movies</router-link>
        </li>
        <li>
          <router-link class="link" to="/videogames">Videogames</router-link>
        </li>
        <li>
          <router-link class="link" to="/anime">Anime</router-link>
        </li>
      </ul>
      </div>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" temporary app>
      <v-row mt-5 column align-center>
        <v-col>
          <v-avatar>
            <img src="" alt="imagen" />
          </v-avatar>
        </v-col>
        <v-col>
          <p mt-5 headline text-white>
            Menu
          </p>
        </v-col>
      </v-row>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  name: "Navbar",
  data() {
    return {
      drawer: false
    };
  }
};
</script>
<style>
ul {
  display: flex;
  list-style: none;
}
li{
  margin: 5px;
}
a{
  text-decoration: none;
}
a.link.router-link-exact-active.router-link-active{
border-radius: 5px;
color: #eeeee7;
font-variant: italic;
}
</style>