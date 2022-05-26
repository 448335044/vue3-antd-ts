

const home = () => import("../pages/Home.vue")
const login = () => import("../pages/Login.vue")

const routes = [
  { path: "/", redirect: "/home" },
  {
    path: "/home",
    name: "home",
    component: home
  },
  {
    path: "/login",
    name: "login",
    component: login
  }
]

export default routes