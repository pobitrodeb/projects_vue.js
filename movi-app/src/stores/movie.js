import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'


export const useMovieStore = defineStore('movie', {
    state: () => ({
      search: ref( null), 
      movies: ref([]),

    }), 
    getters: {}, 
    actions: {
     async searchMovies(){
          if(this.search !=null){
          const value = await axios.get(`http://www.omdbapi.com/?apikey=a5e84d36&s=${this.search}`)};
        console.log(value);
      }

    }
})
