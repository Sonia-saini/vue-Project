// 1. Define route components.

import { createRouter, createWebHistory } from "vue-router";
import SingleProduct from "../src/views/SingleProduct.vue"
// These can be imported from other files
import Homepage from "../src/views/Homepage.vue"
import Admin from "../src/views/Admin.vue"
import Orders from "../src/views/Orders.vue"

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: '/', component: Homepage },
  { path: '/admin', component: Admin },
  { path:"/productdetail/:id",component:SingleProduct},
  {path:"/orders",component:Orders}
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
})

// 5. Create and mount the root instance.
export default router;