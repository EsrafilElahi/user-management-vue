import { createMemoryHistory, createRouter } from "vue-router";

export const routes = [
  {
    path: "/",
    name: "Users",
    component: <span>home view</span>,
  },
  {
    path: "/add",
    name: "AddUser",
    component: <span>add user view</span>,
  },
  {
    path: "/:userId/details",
    name: "UserDetails",
    component: <span>user details view</span>,
  },
];
