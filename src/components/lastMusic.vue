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
            color= "teal"
            dark
          >
            <v-card-title class="headline">Unlimited music now</v-card-title>
            <v-card-subtitle>Listen to your favorite artists and albums whenever and wherever, online and offline.</v-card-subtitle>
            <v-card-actions>
              <router-link class="link my-2 white--text" to="/lastMusic">Listen Now</router-link>
            </v-card-actions>
          </v-card>
          <v-card
            color= "teal"
            dark
          >
            <v-card-title class="headline">Unlimited music now</v-card-title>
            <v-card-subtitle>Listen to your favorite artists and albums whenever and wherever, online and offline.</v-card-subtitle>
            <v-card-actions>
              <router-link class="link my-2 white--text" to="/lastMusic">Listen Now</router-link>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
<script>
export default {
    name: 'lastMusic',
}
</script>