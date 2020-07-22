<template>
  <v-app>
    <Navbar />
    <v-container class="contenido">
    <router-view></router-view>
    </v-container>
    <Footer />
  </v-app>
</template>
<script>
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
  data: () => ({}),
};
</script>
<style>
.contenido {
  margin-top: 20px;
  padding: 20px;
}
</style>
