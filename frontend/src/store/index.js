import { createStore } from "vuex";
import axios from "axios";

const SERVER_URL = 'http://localhost:8000'

const store = createStore({
  state: {
    foodArray: [],
    newFoodModal: false,
    newFood: {}
  },
  getters: {
    getFoodArray: (state) => {
      return state.foodArray;
    },
  },
  actions: {
    async loadFoodFromDB({ commit }) {
      try {
        axios.get(SERVER_URL + "/food").then(
          (res) => {
            if (res.data.success) {
              commit("SET_FOOD_ARRAY", res.data.data);
              console.log("foodArray", res.data.data)
            }
          },
          (error) => {
            console.log("error", error);
          }
        );
      } catch (e) {
        console.log(e);
      }
    },
    async addFoodToDB({ commit }, food) {
      try {
        axios.post(SERVER_URL + "/food", food).then(
          (res) => {
            if (res.data.success) {
              commit("ADD_FOOD_ARRAY", res.data.data);
              console.log("new Food", res.data.data);
            }
          },
          (error) => {
            console.log("error", error);
          }
        );
      } catch (e) {
        console.log(e);
      }
    },
    async deleteFoodFromDB({ commit }, id) {
        return axios.post(SERVER_URL + "/food/delete", {id: id}).then(
            (res) => {
                if (res.data.success) {
                    commit("DELETE_FOOD_ARRAY", id);
                    return res.data
                } else console.log("deleteFoodFromDB error");
            },
            (error) => { console.log("error", error); }
        );
    },
  },
  mutations: {
    setFoodModal(state, v) {
        state.newFoodModal = v
    },
    setFoodData(state, data) {
        state.newFood = data
    },
    SET_FOOD_ARRAY(state, array) {
      state.foodArray = array;
    },
    ADD_FOOD_ARRAY(state, food) {
        const index = state.foodArray.findIndex(f => f.id == food.id)
        if (index > -1) {
            state.foodArray[index] = food
        } else state.foodArray.push(food)
      
    },
    DELETE_FOOD_ARRAY(state, id) {
      state.foodArray.slice(
        state.foodArray.findIndex((f) => f.id == id),
        1
      );
    },
  },
});

export default store;
