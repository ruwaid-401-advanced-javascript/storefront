import superagent from 'superagent';
let initialState = {
  categories: [
    // { name: 'electronics', displayName: 'Elecronics', discription: 'here is the discription for electronnics' },
    // { name: 'food', displayName: 'Food', discription: 'here is the discription for food' },
    // { name: 'clothing', displayName: 'Clothing', discription: 'here is the discription for clothing' },
  ],
  products: [
    // { name: 'TV', category: 'electronics', price: 699.00, inStock: 5 },
    // { name: 'Radio', category: 'electronics', price: 99.00, inStock: 15 },
    // { name: 'Shirt', category: 'clothing', price: 9.00, inStock: 25 },
    // { name: 'Socks', category: 'clothing', price: 12.00, inStock: 10 },
    // { name: 'Apples', category: 'food', price: .99, inStock: 500 },
    // { name: 'Eggs', category: 'food', price: 1.99, inStock: 12 },
    // { name: 'Bread', category: 'food', price: 2.39, inStock: 90 },
  ],
  activeCategory: 'electronics',
  cartItem: [],
  results: []
};

// reducer : switch case
export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {

    case 'SHOW':
      state.activeCategory = `${payload}`;
      return {
        categories: state.categories,
        products: state.products,
        activeCategory: state.activeCategory,
        cartItem: state.cartItem
      };

    case 'TOCART':
      state.cartItem.push(payload);
      return {
        categories: state.categories,
        products: state.products,
        activeCategory: state.activeCategory,
        cartItem: state.cartItem
      };

    case 'UPDATESTOCK':
    case 'ADDSTOCK':

      return {
        categories: state.categories,
        products: state.products,
        activeCategory: state.activeCategory,
        cartItem: state.cartItem
      };


    case 'DELETEITEM':
      state.cartItem.splice(payload, 1);
      return {
        categories: state.categories,
        products: state.products,
        activeCategory: state.activeCategory,
        cartItem: state.cartItem
      };


    case 'GET':
      state.products = [...payload.results];
      return {
        categories: state.categories,
        products: state.products,
        activeCategory: state.activeCategory,
        cartItem: state.cartItem,
        results: state.results
      };


    case 'GETCATEGORY':
      state.categories = [...payload.results];
      return {
        categories: state.categories,
        products: state.products,
        activeCategory: state.activeCategory,
        cartItem: state.cartItem,
        results: state.results
      };

    default:
      return state;
  }
}

export const getRemoteData = () => dispatch => {
  let api = 'https://rowaid-server.herokuapp.com/api/v1/products';
  return superagent.get(api)
    .then(data => {
      dispatch(getAction(data.body))
    });
}

export const getRemoteCategories = () => dispatch => {
  let api = 'https://rowaid-server.herokuapp.com/api/v1/categories';
  return superagent.get(api)
    .then(data => {
      dispatch(getActionCategory(data.body))
    });
}

export const putRemoteData = (id, data) => async dispatch => {
  let api = 'https://rowaid-server.herokuapp.com/api/v1/products';
  let response = await superagent.put(`${api}/${id}`).send(data);
  dispatch(putAction(response))
}

export const deleteItemData = (id, data) => async dispatch => {
  let api = 'https://rowaid-server.herokuapp.com/api/v1/products';
  let response = await superagent.put(`${api}/${id}`).send(data);
  dispatch(putAction(response))
}


export const show = (name) => {
  return {
    type: 'SHOW',
    payload: name
  }
}


export const toCart = (name) => {
  return {
    type: 'TOCART',
    payload: name
  }
}


export const deleteItem = (idx) => {
  return {
    type: 'DELETEITEM',
    payload: idx
  }
}


export const getAction = payload => {
  return {
    type: 'GET',
    payload: payload
  }
}

export const getActionCategory = payload => {
  return {
    type: 'GETCATEGORY',
    payload: payload
  }
}


export const putAction = payload => {
  return {
    type: 'UPDATESTOCK',
    payload: payload
  }
}


export const deleteAction = payload => {
  return {
    type: 'ADDSTOCK',
    payload: payload
  }
}