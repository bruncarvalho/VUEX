<template>
  {{$store.getters.total}}
  <AppProducts/>
  <br><br>
  <br><br>
 
  <pre>
    {{ $store.state.cart}}
  </pre>

 

  <br><br>
  {{ $store.state.user.first_name }} {{ $store.state.user.last_name }} <br>
  {{ $store.state.user.email }}
  
  <br><br>
  <button @click="updateUser">
    Atualizar perfil
  </button>

  
</template>

<script>
import AppProducts from './components/Products/AppProducts.vue'

export default {
  name: 'App',
  components: {
    AppProducts
},
  data(){
    return {

    }
  },

  methods: {
    updateUser() {
      const newUser = {
      first_name: 'João',
      last_name: 'Fernandes',
      email: 'joao@gmail.com'
    }
    // this.$store.commit('storeUser', newUser)
    this.$store.dispatch('storeUser', newUser).then(() => {

    })
  },


    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
