const initialState = {
  projects: [],
  project: {},
};

const ProjectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PROJECT_DATA":
      return { ...state, projects: action.payload.projects };
    case "SET_PROJECT":
      return { ...state, project: action.payload.project };
    case "SET_LIST":
      return {
        ...state,
        project: {
          ...state.project,
          project_items: [
            ...state.project.project_items,
            action.payload.list,
          ],
        },
      };
    case "UPDATE_LIST":
      return {
        ...state,
        project: {
          ...state.project,
          project_items: action.payload.project_items,
        },
      };
    case "DELETE_LIST":
      return {
        ...state,
        project: {
          ...state.project,
          project_items: state.project.project_items.filter(
            (list, index) => index !== action.payload.listIndex
          ),
        },
      };
    case "SET_CARD":
      const newCard = {
        id: Date.now(),
        activities: [],
        checklist: [],
        title: action.payload.card.input,
        labels: [],
        description: "",
        delivery_date: "",
        delivery_time: "",
        delivered: false,
      };

      return {
        ...state,
        project: {
          ...state.project,
          project_items: state.project.project_items.map((item, index) => {
            if (index === action.payload.card.index) {
              item.cards.push(newCard);
            }

            return item;
          }),
        },
      };
    case "SET_PARTICIPANT":
      return {
        ...state,
        project: {
          ...state.project,
          project_items: state.project.project_items.map((list, index) => {
            if (index === action.payload.participant.listIndex) {
              list.cards.forEach((card, index) => {
                if (index === action.payload.participant.cardIndex) {
                  card.labels.push(action.payload.participant.label);
                }
              });
            }
            return list;
          }),
        },
      };
    case "DELETE_PARTICIPANT":
      return {
        ...state,
        project: {
          ...state.project,
          project_items: state.project.project_items.map((list, index) => {
            if (index === action.payload.deleteParticipant.listIndex) {
              list.cards.forEach((card, index) => {
                if (index === action.payload.deleteParticipant.cardIndex) {
                  card.labels.splice(
                    action.payload.deleteParticipant.labelIndex,
                    1
                  );
                }
              });
            }
            return list;
          }),
        },
      };
    default:
      return state;
  }
};

export default ProjectsReducer;