<template>
  <div class="container">
    <div v-if="newFoodModal">
      <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title"> {{ newFood.id ? "Изменить" : "Добавить" }} блюдо </h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true" @click="closeFoodModal()">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <label for="nameInput"> Название блюда </label>
                  <input type="text" class="form-control" id="nameInput" placeholder="Введите название блюда"
                    v-model="newFoodName">

                  <label for="descriptionInput" class="label-name"> Описание </label>
                  <input type="text" class="form-control" id="descriptionInput" placeholder="Введите описание блюда"
                    v-model="newFoodDescription">
                  <label for="countryInput" class="label-name"> Страна </label>
                  <input type="text" class="form-control" id="countryInput"
                    placeholder="Введите страну происхождения блюда" v-model="newFoodCountry">
                  <label for="priceInput" class="label-name"> Цена </label>
                  <input type="number" class="form-control" id="priceInput" v-model="newFoodPrice">
                  <label for="categoryInput" class="label-name"> Категория </label>
                  <input type="text" class="form-control" id="categoryInput" placeholder="Введите категорию блюда"
                    v-model="newFoodCategory">

                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-danger" @click="closeFoodModal()"> Отмена </button>
                  <button type="button" class="btn btn-success" @click="createFoodSubmit()"> {{ newFood.id ? "Изменить"
                      : "Добавить"
                  }} </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>

    <header class="header fixed-top">
      <nav class="navbar navbar-expand-md">
        <button type="button" class="btn btn-outline-light" @click="$router.push({ path: '/' })">
          Назад
        </button>
        <button type="button" class="btn btn-outline-light" @click="onCreateFood();">
          Создать Блюдо
        </button>
        <button type="button" class="btn btn-outline-light" @click="createTestFood()">
          Создать тестовое Блюдо
        </button>
      </nav>
    </header>
    <div class="my-table">
      <div>
        <div class="header__text">
          <p class="display-4 mt-5">Таблица с блюдами</p>
        </div>
        <div class="col">
        </div>
        <div class="col-auto">
          <button type="button" class="btn btn-success d-none" @click="updateFoodTable">Обновить таблицу</button>
        </div>
      </div>
      <my-table></my-table>
    </div>
  </div>
</template>

<script>
import Table from './UI/Table.vue'
import { mapState, mapMutations } from 'vuex'

export default {
  name: "FoodPage",
  components: {
    'my-table': Table
  },
  data() {
    return {
      //
    }
  },
  mounted() {
    this.updateFoodTable()
  },
  computed: {
    ...mapState([
      'foodArray',
      'newFoodModal',
      'newFood'
    ]),
    newFoodName: {
      get() { return this.newFood.name },
      set(value) {
        const nf = this.newFood; nf.name = value
        this.$store.commit('setFoodData', nf)
      }
    },
    newFoodPrice: {
      get() { return this.newFood.price },
      set(value) {
        const nf = this.newFood; nf.price = value
        this.$store.commit('setFoodData', nf)
      }
    },
    newFoodCountry: {
      get() { return this.newFood.country },
      set(value) {
        const nf = this.newFood; nf.country = value
        this.$store.commit('setFoodData', nf)
      }
    },
    newFoodCategory: {
      get() { return this.newFood.category },
      set(value) {
        const nf = this.newFood; nf.category = value
        this.$store.commit('setFoodData', nf)
      }
    },
    newFoodDescription: {
      get() { return this.newFood.description },
      set(value) {
        const nf = this.newFood; nf.description = value
        this.$store.commit('setFoodData', nf)
      }
    },
  },
  methods: {
    ...mapMutations([
      'setFoodModal',
      'setFoodData',
    ]),
    closeFoodModal() {
      this.$store.commit('setFoodModal', false)
    },
    updateFoodTable() {
      this.$store.dispatch("loadFoodFromDB")
    },
    onCreateFood() {
      //this.newFoodModal = true
      this.$store.commit('setFoodModal', true)
      //this.setFoodModal(true)

      this.$store.commit('setFoodData', {
        name: '',
        price: 0,
        country: '',
        category: '',
        description: ''
      })
      //this.editFood = this.newFood
    },
    createFoodSubmit() {
      // this.newFoodModal = false
      this.$store.commit('setFoodModal', false)

      console.log("submit", this.newFood)
      this.$store.dispatch("addFoodToDB", this.newFood)
    },
    createTestFood() {
      const food = {
        name: 'Test' + String(Math.floor(Math.random() * 1024)),
        price: 11110,
        country: 'Test',
        category: 'Test',
        description: 'Test'
      }
      this.$store.dispatch("addFoodToDB", food)
    },
  }
}

</script>

<style scoped>

.display-4 {
  margin-left: 32%;
  margin-right: auto;
}

.container {
  max-width: 1400px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding-right: 15px;
  padding-left: 15px;
}

.my-table {
  margin-top: 64px;
}

.label-name {
  margin-top: 15px;
}

a.text:active,
a.text:hover,
a.text {
  text-decoration: none;
  color: #000000;
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
</style>