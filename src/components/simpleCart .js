/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect } from 'react';
import { connect } from 'react-redux';


import * as actions from '../store/cartReducer.js'
import * as actionsProd from '../store/productsReducer.js'

import { Button } from '@material-ui/core';


function SimpleCart(props) {

  useEffect(() => {
    props.getCartAPI();
    // props.createCart();

  }, []);


  const deleteProductsfromCart = (idx, element) => {
    props.removeFromCart(idx);
    props.incrementInStock(element);
    props.updateRemoteCart(props.cartState.cartItem)

  }



  return (
    <section key='section' className="simpleCart">
      {props.cartState.cartItem.map((element, i) => {
        return (
          <div key={i} className='divSimpleCart'>
            <span >{element.name}</span>
            <Button onClick={(e) => deleteProductsfromCart(i, element)}>
              X
            </Button>
          </div>
        )

      })}
    </section>
  );
}

const mapStateToProps = state => ({
  cartState: state.cart,
});



const mapDispatchToProps = (dispatch, getState) => ({
  getCartAPI: () => dispatch(actions.getCartAPI()),
  createCart: () => dispatch(actions.createCart()),
  updateRemoteCart: (product) => dispatch(actions.updateRemoteCart(product)),
  removeFromCart: (productidx) => dispatch(actions.removeFromCart(productidx)),
  incrementInStock: (product) => dispatch(actionsProd.incrementInStock(product))
});


export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart);