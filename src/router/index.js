import { createMemoryHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "UsersRoute",
    component: import("../views/UsersListView.vue"),
  },
  {
    path: "/users/add",
    name: "AddUser",
    component: import("../views/AddUserView.vue"),
  },
  {
    path: "/users/edit",
    name: "EditUser",
    component: import("../views/EditUserView.vue"),
  },
  {
    path: "/users/:userId/details",
    name: "UserDetails",
    component: import("../views/UserDetailsView.vue"),
  },
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
