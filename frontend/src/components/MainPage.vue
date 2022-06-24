<template>
  <div class="container">
    <header class="header fixed-top">
      <nav class="navbar navbar-expand-md">
        <button type="button" to="/admin" class="btn btn-outline-light" @click="$router.push({ path: '/admin' })">
          Панель администрирования
        </button>
      </nav>
    </header>
    <div class="my-card">
      <h1 class="container-name display-4">Меню</h1>
      <div class="row">
      <my-card
        class="col-auto mx-auto"
        v-for="(food, index) in foodArray"
        :key="index"
        :food="food"
      ></my-card>
      </div>
    </div>
  </div>
</template>

<script>
import Card from './UI/Card.vue'
import { mapState } from 'vuex'

export default {
  name: "MainPage",
  components: {
    'my-card':Card,
  },
  computed: {
    ...mapState([
      'foodArray'
    ])
  },
  mounted() {
    this.$store.dispatch("loadFoodFromDB")
  }
}

</script>

<style scoped>
.container {
    max-width: 1400px;
    position: relative;
    margin-left: auto;
    margin-right: auto;
}

.container-name {
  margin-top: 64px;
  text-align: center;
}

.date {
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

a.text:active,
a.text:hover,
a.text {
  text-decoration: none;
  color: #000000;
}
</style>