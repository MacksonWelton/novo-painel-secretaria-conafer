const ProjetosData = [
  {
    id: "0",
    start_date: "20/01/2020",
    start_time: "",
    delivery_date: "20/01/2020",
    delivery_time: "",
    status: "Em andamento",
    name: "Desenvolver um site",
    description: "Projeto",
    project_items: [
      {
        title: "Demanda",
        creatable: true,
        cards: [
          {
            id: "1",
            title: "Estudar módulo 01 de NodeJS",
            description: "Módulo 01 de NodeJS",
            labels: ["Mackson", "Anny"],
            delivery_date: "21/01/2021",
            delivery_time: "18:00",
            delivered: true,
            checklist: [],
            activities: [
              {
                user_name: "Mackson",
                date_time: "02/08/20 às 08:00",
                status_message: "Adicionou um novo cartão",
                comment: ""
              },
              {
                user_name: "Mackson",
                date_time: "02/08/20 às 08:00",
                status_message: "",
                comment: "Comecei a atividade",
              },
              {
                user_name: "Anny",
                date_time: "02/08/20 às 17:00",
                status_message: "",
                comment: "Hoje estudei o módulo 1",
              },
            ],
          },
          {
            id: "2",
            title:
              "Criar vídeo para o Youtube ensinando a recriar a interface do Pipefy",
            description: "",
              labels: ["Mackson"],
            delivery_date: "21/01/2021",
            delivery_time: "18:00",
            delivered: false,
            checklist: [],
            activities: [
              {
                user_name: "Mackson",
                date_time: "02/08/20 às 08:00",
                status_message: "Adicionou um novo cartão",
                comment: ""
              },
              {
                user_name: "Mackson",
                date_time: "02/08/20 às 08:00",
                status_message: "",
                comment: "Comecei a atividade",
              },
            ],
          },
          {
            id: "3",
            title: "Estudar módulo 03 de React Native",
            description: "",
            labels: ["Mackson"],
            delivery_date: "21/01/2021",
            delivery_time: "18:00",
            delivered: false,
            checklist: [],
            activities: [
              {
                user_name: "Mackson",
                date_time: "02/08/20 às 08:00",
                status_message: "Adicionou um novo cartão",
                comment: ""
              },
              {
                user_name: "Mackson",
                date_time: "02/08/20 às 08:00",
                status_message: "",
                comment: "Comecei a atividade",
              },
            ],
          },
          {
            id: "4",
            title:
              'Gravar Aula "NextJS: Utilizando server-side rendering com ReactJS"',
            description: "",
              labels: ["Silva"],
            delivery_date: "21/01/2021",
            delivery_time: "18:00",
            delivered: false,
            checklist: [],
            activities: [
              {
                user_name: "Mackson",
                date_time: "02/08/20 às 08:00",
                status_message: "Adicionou um novo cartão",
                comment: ""
              },
              {
                user_name: "Mackson",
                date_time: "02/08/20 às 08:00",
                status_message: "",
                comment: "Comecei a atividade",
              },
            ],
          },
          {
            id: "5",
            title: "Gravar testes e deploy ReactJS",
            description: "",
            labels: ["Silva"],
            delivery_date: "21/01/2021",
            delivery_time: "18:00",
            delivered: false,
            checklist: [],
            activities: [
              {
                user_name: "Mackson",
                date_time: "02/08/20 às 08:00",
                status_message: "Adicionou um novo cartão",
                comment: ""
              },
              {
                user_name: "Mackson",
                date_time: "02/08/20 às 08:00",
                status_message: "",
                comment: "Comecei a atividade",
              },
            ],
          },
        ],
      },
      {
        title: "Em andamento",
        creatable: false,
        cards: [
          {
            id: "6",
            title: "Recriando clone do Pipefy",
            description: "",
            labels: ["José"],
            delivery_date: "21/01/2021",
            delivery_time: "18:00",
            delivered: false,
            checklist: [],
            activities: [
              {
                user_name: "Mackson",
                date_time: "02/08/20 às 08:00",
                status_message: "Adicionou um novo cartão",
                comment: ""
              },
              {
                user_name: "Mackson",
                date_time: "02/08/20 às 08:00",
                status_message: "",
                comment: "Comecei a atividade",
              },
            ],
          },
        ],
      },
      {
        title: "Aguardando Resposta",
        creatable: false,
        cards: [
          {
            id: "7",
            title: "Gravar sobre Geolocalização e mapas com React Native",
            description: "",
            labels: ["Mackson"],
            delivery_date: "21/01/2021",
            delivery_time: "18:00",
            delivered: false,
            checklist: [],
            activities: [
              {
                user_name: "Mackson",
                date_time: "02/08/20 às 08:00",
                status_message: "Adicionou um novo cartão",
                comment: ""
              },
              {
                user_name: "Mackson",
                date_time: "02/08/20 às 08:00",
                status_message: "",
                comment: "Comecei a atividade",
              },
            ],
          },
          {
            id: "8",
            title: "Gravar testes e deploy ReactJS",
            description: "",
            labels: ["Silva"],
            delivery_date: "21/01/2021",
            delivery_time: "18:00",
            delivered: false,
            checklist: [],
            activities: [
              {
                user_name: "Mackson",
                date_time: "02/08/20 às 08:00",
                status_message: "Adicionou um novo cartão",
                comment: ""
              },
              {
                user_name: "Mackson",
                date_time: "02/08/20 às 08:00",
                status_message: "",
                comment: "Comecei a atividade",
              },
            ],
          },
          {
            id: "9",
            title: "Ajustes na biblioteca unform",
            description: "",
            labels: ["José"],
            delivery_date: "21/01/2021",
            delivery_time: "18:00",
            delivered: false,
            checklist: [],
            activities: [
              {
                user_name: "Mackson",
                date_time: "02/08/20 às 08:00",
                status_message: "Adicionou um novo cartão",
                comment: ""
              },
              {
                user_name: "Mackson",
                date_time: "02/08/20 às 08:00",
                status_message: "",
                comment: "Comecei a atividade",
              },
            ],
          },
        ],
      },
      {
        title: "Concluído",
        creatable: false,
        done: true,
        cards: [
          {
            id: "10",
            title: "Gravar aula sobre deploy e CI com React Native",
            description: "",
            labels: ["José"],
            delivery_date: "21/01/2021",
            delivery_time: "18:00",
            delivered: false,
            checklist: [],
            activities: [
              {
                user_name: "Mackson",
                date_time: "02/08/20 às 08:00",
                status_message: "Adicionou um novo cartão",
                comment: ""
              },
              {
                user_name: "Mackson",
                date_time: "02/08/20 às 08:00",
                status_message: "",
                comment: "Comecei a atividade",
              },
            ],
          },
          {
            id: "12",
            title: "Gravar testes e deploy ReactJS",
            description: "",
            labels: ["Silva"],
            delivery_date: "21/01/2021",
            delivery_time: "18:00",
            delivered: false,
            checklist: [],
            activities: [
              {
                user_name: "Mackson",
                date_time: "02/08/20 às 08:00",
                status_message: "Adicionou um novo cartão",
                comment: ""
              },
              {
                user_name: "Mackson",
                date_time: "02/08/20 às 08:00",
                status_message: "",
                comment: "Comecei a atividade",
              },
            ],
          },
          {
            id: "13",
            title:
              'Gravar Aula "Internacionalização de aplicações Node.js, ReactJS e React Native"',
            description: "",
              labels: ["Mackson"],
            delivery_date: "21/01/2021",
            delivery_time: "18:00",
            delivered: false,
            checklist: [],
            activities: [
              {
                user_name: "Mackson",
                date_time: "02/08/20 às 08:00",
                status_message: "Adicionou um novo cartão",
                comment: ""
              },
              {
                user_name: "Mackson",
                date_time: "02/08/20 às 08:00",
                status_message: "",
                comment: "Comecei a atividade",
              },
            ],
          },
        ],
      },
    ],
  },
];

export default ProjetosData;