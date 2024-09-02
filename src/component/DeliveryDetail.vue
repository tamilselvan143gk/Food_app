<template>
  <div class="text-center h-screen bg-gray-200 rounded-xl">
    <p class="p-5 text-2xl text-black">Delivery Details</p>
    <div class="bg-gray-200 pb-3">
        <div v-for="(order, index) in orders" :key="index" class="bg-white text-black m-8 p-5 rounded-xl shadow-lg font-bold">
          <p class="pb-3 underline decoration-gray-600">Your Bill</p>
          <div class="flex justify-between pb-2">
            <p>Food Item</p>
            <p>{{order.name}}</p>
          </div>
          <div class="flex justify-between pb-2">
            <p>Qty</p>
            <p>{{order.count}}</p>
          </div>
          <div class="flex justify-between pb-2">
            <p>Price</p>
            <p>{{order.price}}₹</p>
          </div>
          <div class="flex justify-between">
            <p>Bill</p>
            <p>{{ calculateBill(order) }}₹</p>
          </div>
          <p class="pt-3">Your Order will be delvered in <span class="text-red-500">20 minutes</span></p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orders: [],
    };
  },
  created() {
    const ordersParam = this.$route.query.orders;
    if (ordersParam) {
      this.orders = JSON.parse(ordersParam);
    }
  },
   methods: {
    calculateBill(order) {
      return order.count * order.price;
    }
  }
};
</script>
