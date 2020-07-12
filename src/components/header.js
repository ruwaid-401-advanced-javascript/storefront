import React from 'react';
import { connect } from 'react-redux';


import './header.scss';

function Header(props) {
  return (
    <header className='mainHeader'>
      <div>
        <h1>
        Our Store
        </h1>
        <h2>Cart ({props.cart})</h2>
      </div>
    </header>

  )
}


// we only care about the totalVotes to be displayed
const mapStateToProps = state => ({
  cart: state.categories.cart
});

// connecting my component with the mapState to props to be able to use the store.
export default connect(mapStateToProps)(Header);
