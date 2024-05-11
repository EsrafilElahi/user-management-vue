import { createMemoryHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "UsersRoute",
    component: import("../views/UsersRoute.vue"),
  },
  {
    path: "/users/add",
    name: "AddUser",
    component: import("../views/AddUser.vue"),
  },
  {
    path: "/users/:userId/details",
    name: "UserDetails",
    component: import("../views/UserDetails.vue"),
  },
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
