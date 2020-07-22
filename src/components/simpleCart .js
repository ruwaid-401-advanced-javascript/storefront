import React from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { deleteItem } from '../store/categories.js';


const simpleCart = props => {
  return (
    <section key='section' className="simpleCart">
        {props.categories.cartItem.map((element,i) => {
          return (
            <div key={element} className='divSimpleCart'>
              <span>{element}</span>
              <Button onClick={(e) => props.deleteItem(i)}>
                X
              </Button>
            </div>
          )

        })}
    </section>
  );
}

const mapStateToProps = state => ({
  categories: state.categories
});

const mapDispatchToProps = { deleteItem };


export default connect(mapStateToProps,mapDispatchToProps)(simpleCart);