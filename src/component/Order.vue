<template>
  <div class="text-center h-screen">
    <p class="p-5 text-2xl">Selected Orders</p>
    <router-link :to="{name: 'DeliveryDetail', query: { orders: JSON.stringify(order) }}">
      <button>Delivery Page</button>
    </router-link>
    <div class="p-5 bg-black rounded-b-xl">
      <table class="w-full">
        <tr>
          <th class="border px-3 py-1">Food Item</th>
          <th class="border px-3 py-1">Qty</th>
          <th class="border px-3 py-1">Price</th>
          <th class="border px-3 py-1">Total</th>
        </tr>
        <tr v-for="(orders, index) in order" :key="index">
          <td class="border px-3 py-1">{{ orders.name }}</td>
          <td class="border px-3 py-1">
            <span class="border rounded-full py-0 px-2 mr-1 cursor-pointer" @click="decrementCount(orderId)">-</span>
              {{ orders.count }}
            <span class="border rounded-full py-0 px-1.5 ml-1 cursor-pointer" @click="incrementCount(orderId)">+</span>
          </td>
          <td class="border px-3 py-1">{{ orders.price }}₹</td>
          <td class="border px-3 py-1">{{ orders.bill }}₹</td>
        </tr>
      </table>
    </div>
      <button class="border-2 border-white bg-lime-500 text-white font-bold px-2 py-1" @click="confirmOrders">
        confirm
      </button>
  </div>
</template>

<script>
import { computed } from "vue";
import { useOrderStore } from "../store";
import { useRouter } from "vue-router";
export default {
  setup() {
    const orderStore = useOrderStore();
    const router = useRouter();

    const order = computed(() => {
      return orderStore.orders.map((order) => {
        return {
          ...order,
          bill: order.count * order.price,
        };
      });
    });
    
    const incrementCount = (orderId) => {
      orderStore.incrementOrderCount(orderId);
    };
    
    const decrementCount = (orderId) => {
      orderStore.decrementOrderCount(orderId);
    };

    const confirmOrders = () => {
      router.push({ name: "DeliveryDetail", query: { orders: JSON.stringify(orderStore.orders) } });
    };

    return {
      order,
      incrementCount,
      decrementCount,
      confirmOrders
    };
  },
  data() {
    return {};
  },
  methods: {
    
  },
};
</script>
