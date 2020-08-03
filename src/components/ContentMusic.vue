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
            class="mb-2"
            color= "teal"
            dark
          >
            <v-card-title class="headline">Unlimited music now</v-card-title>
            <v-img class= "logo mb-4" src="../assets/musica.jpg" alt=""
            gradient=""
             />
            <v-card-subtitle>Listen to your favorite artists and albums whenever and wherever, online and offline.</v-card-subtitle>
            <v-card-actions>
              <router-link class="link my-2 white--text" to="/lastMusic">Listen Now</router-link>
            </v-card-actions>
          </v-card>
          <v-card
          class="mb-2"
           color= "teal"
            dark
           v-for="style in musicStyles" v-bind:key="style">
            <v-card-title>
              {{ style.name }}
              <v-card-actions>
                <router-link></router-link>
              </v-card-actions>
            </v-card-title>
            <v-img
            max-height="80%"
            max-width="60%"
            position="center"
            class="logo mb-4 pb-4" :src="require(`../assets/${style.image}`)" alt="imagen">
            <template v-slot:placeholder>
        <v-row
          class="fill-height ma-0"
          align="center"
          justify="center"
        >
          <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
        </v-row>
      </template>
            </v-img> 
            <v-card-subtitle>{{ style.content }}</v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
    name: 'ContentMusic',
    data: () => ({
      musicStyles: [
        {
        name: 'rock',
        image: 'rock.jpg',
        content: 'la mejor musica rock'
        },
        {
        name: 'pop',
        image: 'pop.jpg',
        content: 'la mejor musica pop'
        },
      ]
    }),
}
</script>

<style>
.logo{
  height: 200px;
  width:  50%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>