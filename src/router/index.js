import { createMemoryHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "UsersRoute",
    component: import("../views/UsersRoute.vue"),
  },
  {
    path: "/add",
    name: "AddUser",
    component: import("../views/AddUser.vue"),
  },
  {
    path: "/:userId/details",
    name: "UserDetails",
    component: import("../views/UserDetails.vue"),
  },
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
