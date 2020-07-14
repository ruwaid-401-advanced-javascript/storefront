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
      console.log(state.cartItem2);
      return { cartItem2: state.cartItem2 };

    case 'ADD':
      // console.log(payload,'iiiiiiiii');
      // console.log(payload.body.results,'iiiiiiiii');
      // state.cartItem2 = [...payload.results];

      return { results: state.cartItem2 };

    default:
      return state;
  }
}

let api = 'https://rowaid-server.herokuapp.com/api/v1/cart';

export const getRemoteDataAPI = () => dispatch => {
  return superagent.get(api)
    .then(data => {
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
  let sendData = {
    userName: data.name,
    userID: data._id,
    cart: data
  }

  let response = await superagent.post(`${api}`).send(sendData);
  dispatch(addAction(response))
}


export const getAction2 = payload => {
  return {
    type: 'GETCart',
    payload: payload
  }
}

export const addAction = payload => {
  return {
    type: 'ADD',
    payload: payload
  }
}