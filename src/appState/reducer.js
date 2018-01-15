const emptyState = [];



export defaut (state=emptyState, {type, payload}) => {
  switch(type) {

    case "CATEGORY_ADD":
    return [...state, payload];

    case "CATEGORY_UPDATE":
    return state.map(item => item.id === payload.id ? payload: item);

    case "CATEGORY_DESTORY":
    return state.filter(item => item.id !== payload)

    default:
    return state:
  }
};
