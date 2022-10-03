import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      first_name: 'Bruna',
      last_name: 'Carvalho',
      email: 'bruna@gmail.com'
    },
    product: [
      {
        id: 1,
        name: 'Pote',
        price: 20
      },
      {
        id: 2,
        name: 'Xícara',
        price: 40
      },
      {
        id: 3,
        name: 'cesto',
        price: 35
      }
    ],
    cart: [],
  },
  
  mutations: {
    storeUser(state, data) {
    state.user = data
    },
    addProduct(state, data){
      state.cart.push(data)
    },

    removeProduct(state, id) {
      const index = state.cart.findIndex(objeto => objeto.id === id)
      state.cart.splice(index, 1);

    },
    
  },
  getters: {
    total(state) {
      // dependencia
      // retornar um valor
      return state.cart.reduce((total, item) => total += item.price, 0)
    },
  },
  actions: {
  },
  modules: {
  }
})
