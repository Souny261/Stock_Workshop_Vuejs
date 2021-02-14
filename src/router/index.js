import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Report from "../views/Report.vue";
import Stock from "../views/Stock.vue";
import StockCreate from "../views/StockCreate.vue";
import StockEdit from "../views/StockEdit.vue";
import NotFound from "../views/NotFound.vue";
import About from '../views/About.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/report",
    name: "Report",
    component: Report,
  },
  {
    path: "/stock",
    name: "Stock",
    component: Stock,
  },
  {
    path: "/stockCreate",
    name: "StockCreate",
    component: StockCreate,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/stockEdit/:id",
    name: "StockEdit",
    component: StockEdit,
  },
  {
    path: "/not-found",
    component: NotFound,
  },
  {
    path: "/",
    redirect: "/login", // ເອີ້ນໃຊ້ທຸກເທື່ອເມື່ອເຂົ້າໜ້າຫຼັກ
  },
  {
    path: "*",
    redirect: "/not-found",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
