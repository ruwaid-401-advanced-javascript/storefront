let initialState = {
  categories: [
    { name: 'electronics', displayName: 'Elecronics', discription: 'here is the discription for electronnics' },
    { name: 'food', displayName: 'Food', discription: 'here is the discription for food' },
    { name: 'clothing', displayName: 'Clothing', discription: 'here is the discription for clothing' },
  ],
  products: [
    { name: 'TV', category: 'electronics', price: 699.00, inStock: 5 },
    { name: 'Radio', category: 'electronics', price: 99.00, inStock: 15 },
    { name: 'Shirt', category: 'clothing', price: 9.00, inStock: 25 },
    { name: 'Socks', category: 'clothing', price: 12.00, inStock: 10 },
    { name: 'Apples', category: 'food', price: .99, inStock: 500 },
    { name: 'Eggs', category: 'food', price: 1.99, inStock: 12 },
    { name: 'Bread', category: 'food', price: 2.39, inStock: 90 },
  ],
  activeCategory: 'electronics',
  cartItem: [],
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

        case 'DELETEITEM':
          state.cartItem.splice(payload,1);
          return {
            categories: state.categories,
            products: state.products,
            activeCategory: state.activeCategory,
            cartItem: state.cartItem
          };
    default:
      return state;
  }
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