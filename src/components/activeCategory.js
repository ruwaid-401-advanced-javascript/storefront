import React from 'react';
import { connect } from 'react-redux';

const activeCategory = props => {
  return (
    <section className='activeCategory'>
      {props.categories.categories.map(element => {
        if (element.name === props.categories.activeCategory) {
          return (
            <div key='activeCategory' >
              {element.discription}
            </div>
          )
        }
        return null
      }
      )}
    </section>
  );
}

// we only care about the totalVotes to be displayed
const mapStateToProps = state => ({
  categories: state.categories
});

// connecting my component with the mapState to props to be able to use the store.
export default connect(mapStateToProps)(activeCategory);