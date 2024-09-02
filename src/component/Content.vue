<template>
  <div class=" h-screen">
    <div
      v-for="filterfood in filterfoods"
      :key="filterfood"
      class="grid grid-cols-3 pb-5 bg-black rounded-b-xl"
    >
      <div class="px-6 py-5">
        <img
          :src="filterfood.src"
          alt=""
          :width="filterfood.width"
          :height="filterfood.height"
        />
      </div>
      <div class="pt-7 pl-8">
        <div class="flex gap-40 pb-2">
          <p class="text-sm" v-html="formatName(filterfood.name)"></p>
        </div>
        <p class="text-xs pb-2 text-gray-400">{{ filterfood.Weight }}</p>
        <div class="">
          <div class="flex gap-5">
            <button
              class="border rounded-full text- m-0 py-0 px-3"
              @click="decrementCount(filterfood)"
            >
              -
            </button>
            <p class="text-2xl">{{ filterfood.count }}</p>
            <button
              class="border rounded-full text- m-0 py-0 px-2.5"
              @click="incrementCount(filterfood)"
            >
              +
            </button>
          </div>
          <div class="text-center pt-2">
            <button
              @click="addBill(filterfood)"
              class="bg-gray-400 py-1 px-2 rounded-full text-black"
            >
              {{ filterfood.order }}
            </button>
          </div>
        </div>
      </div>
      <div class="pt-5 pl-16 leading-10">
        <i
          class="icon ion-md-heart pl-14 text-2xl"
          :class="{ 'text-red-600': filterfood.liked }"
          @click="toggle(filterfood)"
        ></i>
        <p class="pt-5">Price : {{ filterfood.price }}₹</p>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { useOrderStore } from "../store";
import Pizza from "../../public/img/pizza.jpg";
import Chicken_Box from "../../public/img/chicken_box.jpg";
import Burger from "../../public/img/burger.jpg";
import Classic_Burger from "../../public/img/classic_burger.jpg";
export default {
  props: {
    search: String,
  },

  data() {
    return {
      foods: [
        {
          src: Pizza,
          width: 100,
          height: 100,
          name: 'Pizza "Celentano"',
          Weight: "Weight:600 g",
          count: 0,
          price: 600,
          liked: false,
          order: "Order",
          bill: 0,
        },
        {
          src: Chicken_Box,
          width: 100,
          height: 100,
          name: "Chicken Box",
          Weight: "Weight:850 g",
          count: 0,
          price: 600,
          liked: false,
          order: "Order",
          bill: 0,
        },
        {
          src: Burger,
          width: 100,
          height: 100,
          name: 'Burgur "Black"',
          Weight: "Weight:600 g",
          count: 0,
          price: 450,
          liked: false,
          order: "Order",
          bill: 0,
        },
        {
          src: Classic_Burger,
          width: 100,
          height: 100,
          name: 'Hamburger "Classic"',
          Weight: "Weight:250 g",
          count: 0,
          price: 600,
          liked: false,
          order: "Order",
          bill: 0,
        },
      ],
    };
  },
  methods: {
    formatName(name) {
      return name.replace(/\n/g, "<br>");
    },
    toggle(filterfood) {
      filterfood.liked = !filterfood.liked;
    },
    addBill(filterfood) {
      if (filterfood.count > 0){
        const orderStore = useOrderStore();
        orderStore.addOrder({
          name: filterfood.name,
          price: filterfood.price,
          count: filterfood.count,
          bill: filterfood.bill,
      });
      }else {
        alert("Please add the quantity");
      }
      
    },
    decrementCount(filterfood) {
      if (filterfood.count > 0) {
        filterfood.count--;
      }
    },
    incrementCount(filterfood) {
      filterfood.count++;
    },
    
  },
  computed: {
    filterfoods() {
      const lowercaseQuery = this.search.toLowerCase();
      return this.foods.filter((food) => {
        return food.name.toLowerCase().includes(lowercaseQuery);
      });
    },
  },
};
</script>
