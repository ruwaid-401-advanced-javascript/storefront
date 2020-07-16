import superagent from 'superagent';



let initialState = {
  products: [],
};

// reducer : switch case
export default (state = initialState, action) => {

  let { type, payload } = action;

  switch (type) {

    case 'GETPRODUCTS':
      state.products = payload.results;
      return { ...state };

    case 'DEC-CART':
      state.products.forEach((element) => {
        if (element.name === payload.name) element.inStock--;
      });
      return { ...state };

    case 'INC-CART':
      state.products.forEach((element) => {
        if (element.name === payload.name) element.inStock++;
      });
      return { ...state };

    default:
      return state;
  }
}

export const getRemoteProducts = () => dispatch => {
  let api = 'https://rowaid-server.herokuapp.com/api/v1/products';
  return superagent.get(api)
    .then(data => {
      dispatch(getProductsAction(data.body))
    });
}



export const getProductsAction = dataFromApi => {
  return {
    type: 'GETPRODUCTS',
    payload: dataFromApi
  }
}

export const decrementInStock = (name) => {
  return {
    type: 'DEC-CART',
    payload: name
  }
}


export const incrementInStock = (name) => {
  return {
    type: 'INC-CART',
    payload: name
  }
}
