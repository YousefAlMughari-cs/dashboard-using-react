const sidebarReducer = (state, active) => {
  if (active.type === "TOGGLE_SIDEBAR") {
    return {
      ...state,
      isSidebarOpen: !state.isSidebarOpen,
    };
  }
  throw new Error(`No matching" ${active.type}"active type`);
};

export default sidebarReducer;
