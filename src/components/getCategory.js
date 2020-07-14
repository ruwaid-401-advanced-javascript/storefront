import React from 'react';
import { connect } from 'react-redux';
// import { getRemoteData } from '../store/actions.js';
import * as actions from '../store/actions.js'


const simpleCart = props => {
  return (
    <section key='section'>

      <div >
        {props.hi.results.map((element, i) => {

          return (

            <div key={i}>
              {element.name}
              {element.category}
              {element.discription}
              {element.price}
              {element.inStock}

              <img src={`${element.img}`} alt={element.name} className='imgPro'></img>

            </div>
          )


        })}
      </div>
    </section>
  );
}

const mapStateToProps = state => ({
  hi: state.actions
});


const mapDispatchToProps = (dispatch, getState) => ({
  get: () => dispatch(actions.getRemoteData()),
  put: (id, data) => dispatch(actions.putRemoteData(id, data))
});


// const mapDispatchToProps = { getRemoteData };


export default connect(mapStateToProps, mapDispatchToProps)(simpleCart);