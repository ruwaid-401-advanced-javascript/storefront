import superagent from 'superagent';


let initialState = { cartItem2: [] };

export default (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case 'GETCart':
      console.log(payload.results, 'zzzz');
      payload.results.forEach(element => {
        state.cartItem2.push(element.userName)
      });
      // state.cartItem2 = [...payload.results];
      console.log(state.cartItem2);
      return { cartItem2: state.cartItem2 };

    case 'ADD':
      // console.log(payload,'iiiiiiiii');
      // console.log(payload.body.results,'iiiiiiiii');
      // state.cartItem2 = [...payload.results];

      return { results: state.cartItem2 };



    // case 'TOCART':
    //   state.cartItem.push(payload);
    //   return {
    //     categories: state.categories,
    //     products: state.products,
    //     activeCategory: state.activeCategory,
    //     cartItem: state.cartItem
    //   };


    default:
      return state;
  }
}

let api = 'https://rowaid-server.herokuapp.com/api/v1/cart';

// this dispatch is not the "dispatch" from redux
export const getRemoteDataAPI = () => dispatch => {
  // console.log('hiiiiiiiii');
  return superagent.get(api)
    .then(data => {
      // console.log(data.body,'ooooooooo');
      dispatch(getAction2(data.body))
    });
}

export const putRemoteData = (id, data) => async dispatch => {
  // let response = await (await superagent.put(`${api}/${id}`)).send(data);
  // dispatch action for the update
  // dispatch(putAction(response))
  // console.log(response)
}

export const addRemoteDataAPI = (data) => async dispatch => {
  // console.log(data);
  let sendData = {
    userName: data.name,
    userID: data._id,
    cart: data
  }

  let response = await superagent.post(`${api}`).send(sendData);
  // dispatch action for the update
  dispatch(addAction(response))
  // console.log(response)
}

// we are not dispatching the obj
// dispatch({
//     type: 'GET',
//     payload: payload
// })

// we are dispatching the function of the action
// dispatch(getAction())

export const getAction2 = payload => {
  // console.log(payload,'yyyyy');
  return {
    type: 'GETCart',
    payload: payload
  }
}

export const addAction = payload => {
  // console.log(payload,'yyyyy');
  return {
    type: 'ADD',
    payload: payload
  }
}