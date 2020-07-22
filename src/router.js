import Vue from "vue";
import VueRouter from 'vue-router'
import Home from './components/Home';
import ContentMusic from './components/ContentMusic';
import ContentFilms from './components/ContentFilms';
import ContentGames from './components/ContentGames';
import ContentAnime from './components/ContentAnime';
import lastMusic from './components/lastMusic';
import lastFilm from './components/lastFilm';
    
Vue.use(VueRouter)
const routes = [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
        path: "/music",
        name: "music",
        component: ContentMusic
      },
      {
        path: "/movies",
        name: "movies",
        component: ContentFilms
      },
      {
        path: "/videogames",
        name: "videogames",
        component: ContentGames
      },
      {
        path: "/anime",
        name: "anime",
        component: ContentAnime
      },
      {
        path: "/lastMusic",
        name: "lastMusic",
        component: lastMusic
      },
      {
        path: "/lastFilm",
        name: "lastFilm",
        component: lastFilm
      },
      {
        path: "/home",
        name: "home",
        component: Home
      }
  ];
  const router = new VueRouter({
    mode: "history",
    routes
  });

  export default router;