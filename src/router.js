import { createRouter, createWebHashHistory } from "vue-router";

import Header from './component/Header.vue';
import Order from './component/Order.vue';
import DeliveryDetail from './component/DeliveryDetail.vue'

const router = createRouter({
    history: createWebHashHistory(),

    routes: [
        {path:'/', name:"Header", component:Header },
        {path:'/order', name:"Order", component:Order },
        {path:'/deliverydetail', name:"DeliveryDetail", component:DeliveryDetail},
    ]
});

export default router;
