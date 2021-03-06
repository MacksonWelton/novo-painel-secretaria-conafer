import Index from "views/Index.js";
import Profile from "views/Perfil/Perfil.js";
import Login from "views/Login/Login.js";
import RecuperarSenha from "views/RecuperarSenha/RecuperarSenha";

//Secretaria
import Secretaria from "views/GerenciarSecretaria/Secretaria/Secretaria";
import Colaboradores from "views/GerenciarSecretaria/Colaboradores/Colaboradores";
import ContratosSecretaria from "views/GerenciarSecretaria/Contratos/Contratos";
import Orcamentos from "views/GerenciarSecretaria/Orcamentos/Orcamentos";

//Secretário e Colaboradores
import Projetos from "views/Projetos/Projetos";
import Projeto from "views/Projetos/Projeto/Projeto";
import Suporte from "views/Suporte/Suporte";

//Afiliados
import ContratosAfiliados from "views/Afiliados/Contratos/Contratos";
import OrcamentosAfiliados from "views/Afiliados/Orcamentos/Orcamentos";
import CobrancasAfiliados from "views/Afiliados/Cobrancas/Cobrancas";
import PropostasAfiliados from "views/Afiliados/Propostas/Propostas";

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
    dropdown: true,
    title: "Gerenciar Secretaria",
    icon: "fas fa-landmark text-red",
    items: [
      {
        show: true,
        path: "/secretaria/contratos",
        name: "Contratos",
        icon: "ni ni-single-copy-04 text-green",
        component: ContratosSecretaria,
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
        path: "/colaboradores",
        name: "Colaboradores",
        icon: "fas fa-users text-black",
        component: Colaboradores,
        layout: "/admin",
      },
    ],
  },
  {
    show: false,
    path: "/secretaria",
    name: "Secretaria",
    icon: "ni ni-single-copy-04 text-green",
    component: Secretaria,
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
    dropdown: true,
    title: "Afiliados",
    icon: "fas fa-city text-purple",
    items: [
      {
        show: true,
        path: "/afiliados/contratos",
        name: "Contratos",
        icon: "ni ni-single-copy-04 text-green",
        component: ContratosAfiliados,
        layout: "/admin",
      },
      {
        show: true,
        path: "/afiliados/orcamentos",
        name: "Orçamentos",
        icon: "fas fa-coins text-yellow",
        component: OrcamentosAfiliados,
        layout: "/admin",
      },
      {
        show: true,
        path: "/afiliados/cobrancas",
        name: "Cobrança",
        icon: "fas fa-file-invoice-dollar text-red",
        component: CobrancasAfiliados,
        layout: "/admin",
      },
      {
        show: true,
        path: "/afiliados/propostas",
        name: "Propostas",
        icon: "fas fa-handshake text-blue",
        component: PropostasAfiliados,
        layout: "/admin",
      },
    ],
  },
  {
    show: false,
    path: "/user-profile",
    name: "Meu Perfil",
    icon: "ni ni-single-02 text-black",
    component: Profile,
    layout: "/admin",
  },
  {
    show: true,
    path: "/suporte",
    name: "Suporte",
    icon: "ni ni-support-16 text-red",
    component: Suporte,
    layout: "/admin",
  },
  {
    show: false,
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
  },
  {
    show: false,
    path: "/recuperar-senha",
    name: "Recuperar Senha",
    icon: "ni ni-key-25 text-info",
    component: RecuperarSenha,
    layout: "/auth",
  },
];
export default routes;
