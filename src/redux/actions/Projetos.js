export const newProjects = (projects) => (dispatch) => {
  try {
    dispatch(setProjectData(projects));
  } catch (err) {
    console.error(err.message);
  }
};

export const setProjectData = (projects) => ({
  type: "SET_PROJECT_DATA",
  payload: {
    projects,
  },
});

export const setProject = (project) => ({
  type: "SET_PROJECT",
  payload: {
    project,
  },
});

export const setList = (list) => ({
  type: "SET_LIST",
  payload: {
    list,
  },
});

export const updateList = (project_items) => ({
  type: "UPDATE_LIST",
  payload: {
    project_items,
  },
});

export const deleteList = (listIndex) => ({
  type: "DELETE_LIST",
  payload: {
    listIndex,
  },
});

export const setCard = (card) => ({
  type: "SET_CARD",
  payload: {
    card,
  },
});

export const setParticipant = (participant) => ({
  type: "SET_PARTICIPANT",
  payload: {
    participant,
  },
});

export const deleteParticipant = (deleteParticipant) => ({
  type: "DELETE_PARTICIPANT",
  payload: {
    deleteParticipant,
  },
});


export const downloadProjects  = (data) => () => {
  try {
    
  } catch (err) {
    console.error(err.message);
  }
}

export const deleteProjects  = (data) => (dispatch) => {
  try {
    
    dispatch(removeProjects )
  } catch (err) {
    console.error(err.message);
  }
}

const removeProjects  = (projects) => ({
  type: "DELETE_PROJECTS",
  payload: {
    projects
  }
})