<template>
  <div class="flex justify-between px-5 py-5">
    <div class="pt-2 flex gap-3">
      <i
        class="icon ion-md-pin border border-white py-3 px-5 rounded-full text-2xl"
      ></i>
      <div class="">
        <p class="text-sm">Chennai</p>
        <p class="text-xl">Dharga road , Pallavaram</p>
      </div>
    </div>
    <div class="pt-4 relative">
      <div>
        <router-link :to="{name: 'Order'}"><i class="icon ion-md-cart text-3xl" @click="resetCart"></i></router-link>
      </div>
      <div class="absolute top-3 left-5">
        <p class="bg-red-500 text-xs px-[5px] py-[1px] rounded-full">{{ counter }}</p>
      </div>
    </div>
    <div class="pt-2">
      <i class="icon ion-md-contact text-5xl text-gray-300"></i>
    </div>
  </div>
  <div class="px-6 py-5 flex">
    <i class="icon ion-md-search py-2 pl-3 bg-gray-300 text-black rounded-l-xl"></i>
    <input v-model="search" class=" bg-gray-300 w-full h-10 px-5 text-black outline-none rounded-r-xl" type="search" name="" id="" placeholder="Search...">
  </div>
  <Content :search="search"></Content>
</template>

<script>
import Content from './Content.vue';
import { computed } from 'vue'; 
import { useOrderStore } from '../store';
export default {
  setup() {
    const orderStore = useOrderStore();
    const counter = computed(() => orderStore.counter);

    return { 
      counter, 
    };

  },
  components: { Content },
  data() {
    return {
      search: '',
    }
  },
  methods: {
    resetCart() {
      const orderStore = useOrderStore();
      orderStore.cartZero();
    },
  },
};
</script>
