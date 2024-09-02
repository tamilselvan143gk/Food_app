import { defineStore } from 'pinia';

export const useOrderStore = defineStore({
  id: 'order',
  state: () => ({
    orders: [],
    counter: 0,
  }),
  actions: {
    addOrder(order) {
      this.orders.push(order);
      this.counter++;
    },
    cartZero(){
      this.counter = 0;
    },
    incrementOrderCount(orderId) {
      const order = this.orders.find(order => order.id === orderId);
      if (order) {
        order.count++;
        order.bill = order.count * order.price;
      }
    },
    decrementOrderCount(orderId) {
      const order = this.orders.find(order => order.id === orderId);
      if (order && order.count > 1) {
        order.count--;
        order.bill = order.count * order.price;
      }
    }
  },
});
