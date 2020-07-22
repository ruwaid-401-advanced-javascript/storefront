import superagent from 'superagent';


let initialState = {
  categories: [],
  activeCategory: 'electronics',
};

// reducer : switch case
export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {

    case 'CHANGEACTIVECATEGORY':
      state.activeCategory = `${payload}`;
      return { ...state };


    case 'GETCATEGORIES':
      state.categories = [...payload.results];
      return { ...state };

    default:
      return state;
  }
}


export const getRemoteCategories = () => dispatch => {
  let api = 'https://rowaid-server.herokuapp.com/api/v1/categories';
  return superagent.get(api)
    .then(data => {
      dispatch(getCatrgoriesAction(data.body))
    });
}

export const changeActiveCategory = (name) => {
  return {
    type: 'CHANGEACTIVECATEGORY',
    payload: name
  }
}

export const getCatrgoriesAction = dataFromApi => {
  return {
    type: 'GETCATEGORIES',
    payload: dataFromApi
  }
}

