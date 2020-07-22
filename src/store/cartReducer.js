import superagent from 'superagent';


let initialState = {
  cartItem: [],
};

let userID = ''
export default (state = initialState, action) => {
  let { type, payload } = action;


  switch (type) {

    case 'GET-CART':
      payload.results.forEach(element => {
        if (element.userName === 'rowaid') {
          state.cartItem = element.cart;
          userID = element._id
        }
      });
      return { ...state }

    case 'ADD':
      state.cartItem.push(payload);
      return { ...state };

    case 'REMOVE':
      state.cartItem.splice(payload, 1);
      return { ...state };

    default:
      return state;
  }
}

let api = 'https://rowaid-server.herokuapp.com/api/v1/cart';

export const getCartAPI = () => dispatch => {
  return superagent.get(api)
    .then(data => {
      dispatch(getCartAction(data.body))
    });
}


export const createCart = () => dispatch => {
  let data = {
    userName: 'rowaid',
    cart: []
  }
  return superagent.post(api).send(data).then()
}

export const updateRemoteCart = (cartData) => async dispatch => {
  let data = {
    userName: 'rowaid',
    cart: cartData
  }
  await superagent.put(`${api}/${userID}`).send(data);
}

export const getCartAction = payload => {
  return {
    type: 'GET-CART',
    payload: payload
  }
}

export const addAction = productAddedToCart => {
  return {
    type: 'ADD',
    payload: productAddedToCart
  }
}

export const removeFromCart = productRemoveFromCart => {
  return {
    type: 'REMOVE',
    payload: productRemoveFromCart
  }
}