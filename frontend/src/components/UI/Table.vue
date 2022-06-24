<template>
  <div class="container">
    <input type="text" class="form-control" placeholder="Filter" v-model="search" />
    <table class="table table-bordered" style="margin-bottom: 100px;">
      <thead>
        <tr class="tr">
          <th scope="col">ID</th>
          <th scope="col">Название</th>
          <th scope="col">Цена</th>
          <th scope="col">Страна</th>
          <th scope="col">Категория</th>
          <th scope="col">Описание</th>
          <th scope="col">Действие</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in filteredFoodArray(foodArray)" :key="index" class="tr">
          <th scope="row">{{ item.id }}</th>
          <td>{{ item.name }}</td>
          <td>{{ item.price }}</td>
          <td>{{ item.country }}</td>
          <td>{{ item.category }}</td>
          <td>{{ item.description }}</td>
          <td><button id="block1" class="btn btn-danger" @click="deleteRow(index)">Удалить</button>
            <button id="block2" class="btn btn-primary" @click="editRow(item)">Изменить</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
// mapGetters, mapActions
export default {
  name: "my-table",
  data() {
    return {
      search: '',
    }
  },
  mounted() {
  },
  computed: {
    ...mapState([
      'foodArray',
      'newFoodModal'
    ]),
    getFoodArray() { return this.$store.state.foodArray }
  },
  methods: {
    ...mapMutations([
      'setFoodModal',
      'setFoodData'
    ]),
    filteredFoodArray(array) {
      return array.filter(i => (
        i.name.toLowerCase().indexOf(this.search.toLowerCase()) != -1 ||
        i.country.toLowerCase().indexOf(this.search.toLowerCase()) != -1 ||
        i.category.toLowerCase().indexOf(this.search.toLowerCase()) != -1 ||
        i.description.toLowerCase().indexOf(this.search.toLowerCase()) != -1
      ))
    },
    deleteRow(index) {
      //var idx = this.foodArray.indexOf(foodArray);
      console.log(index)
      if (index != undefined) {
        const food = this.foodArray[index]
        // console.log("food", food)
        this.$store.dispatch("deleteFoodFromDB", food.id).then(
          data => {
            if (data.success) {
              this.foodArray.splice(index, 1)
            }
          }, error => console.log("error", error)
        )
      }
    },
    editRow(item) {
      console.log("item", item)
      this.$store.commit('setFoodModal', true)
      this.$store.commit('setFoodData', {
        id: item.id,
        name: item.name,
        price: item.price,
        country: item.country,
        category: item.category,
        description: item.description
      })
    }
  }
}
</script>

<style scoped>
.container {
  padding: 1rem 0rem;
}

.table {
  margin: 0 auto;
  width: 1200px
}

.form-control {
  margin: 0 auto;
  margin-bottom: 20px;
  width: 900px
}

.tr {
  text-align: center
}

#block1 {
  float: left;
  margin-left: 10px
}

#block2 {
  float: right;
  margin-right: 10px
}
</style>