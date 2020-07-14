import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import * as actions from '../store/categories.js'
import * as actionsCart from '../store/actions.js'
// import * as actionsCart from '../store/actions.js'



function SimpleCart(props) {

  useEffect(() => {
    props.fromCartAPI()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const deleteProductsfromCart = (element) => {
    props.deleteItem(element)
    element.inStock++;
    props.deleteItemData(element._id, element)
  }
  // console.log(props,'qqqqqqqqqqqqqqqqqqqq');
  // console.log(props.cart.cartItem2,'qqqqqqqqqqqqqqqqqqqq');
  

  return (
    <section key='section' className="simpleCart">
      {/* {console.log(props.categories,'ooooooooooooooooooo')} */}
      {/* {console.log(props.cart.cartItem2,'vvvvvvvvvvvvvvvvvv')} */}
      {props.categories.cartItem.map((element, i) => {
        return (
          <div key={i} className='divSimpleCart'>
            <span key={i}>{element.name}</span>
            <Button key={i + 'b'} onClick={(e) => deleteProductsfromCart(element)}>
              X
              </Button>
          </div>
        )

      })}
    </section>
  );
}

const mapStateToProps = state => ({
  categories: state.categories,
  // cart: state.actions,
});



const mapDispatchToProps = (dispatch, getState) => ({
  deleteItemData: (id, data) => dispatch(actions.deleteItemData(id, data)),
  deleteItem: (idx) => dispatch(actions.deleteItem(idx)),
  fromCartAPI: () => dispatch(actionsCart.getRemoteDataAPI())

});

export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart);