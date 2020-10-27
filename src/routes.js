/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Index from "views/Index.js";
import Profile from "views/Perfil/Perfil.js";
import Maps from "views/examples/Maps.js";
import Register from "views/examples/Register.js";
import Login from "views/Login/Login.js";
import Tables from "views/examples/Tables.js";

import Contratos from "views/Contratos/Contratos";
import Colaboradores from "views/Colaboradores/Colaboradores";
import Orcamentos from "views/Orcamentos/Orcamentos";
import Projetos from "views/Projetos/Projetos";
import Projeto from "views/Projetos/Projeto/Projeto";

var routes = [
  {
    show: true,
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
  },
  {
    show: true,
    path: "/contratos",
    name: "Contratos",
    icon: "ni ni-single-copy-04 text-green",
    component: Contratos,
    layout: "/admin",
  },
  {
    show: true,
    path: "/colaboradores",
    name: "Colaboradores",
    icon: "fas fa-users text-black",
    component: Colaboradores,
    layout: "/admin",
  },
  {
    show: true,
    path: "/orcamentos",
    name: "Orçamentos",
    icon: "fas fa-coins text-yellow",
    component: Orcamentos,
    layout: "/admin",
  },
  {
    show: true,
    path: "/projetos",
    name: "Projetos",
    icon: "fas fa-project-diagram text-info",
    component: Projetos,
    layout: "/admin",
  },
  {
    show: false,
    path: "/projeto",
    name: "Projeto",
    icon: "fas fa-project-diagram text-info",
    component: Projeto,
    layout: "/admin",
  },
  {
    show: true,
    path: "/maps",
    name: "Maps",
    icon: "ni ni-pin-3 text-orange",
    component: Maps,
    layout: "/admin",
  },
  {
    show: true,
    path: "/user-profile",
    name: "Meu Perfil",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin",
  },
  {
    show: true,
    path: "/tables",
    name: "Tables",
    icon: "ni ni-bullet-list-67 text-red",
    component: Tables,
    layout: "/admin",
  },
  {
    show: true,
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
  },
  {
    show: true,
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth",
  },
];
export default routes;