import React from 'react';
import { connect } from 'react-redux';

const activeCategory = props => {
  return (
    <section className='activeCategory'>
      {props.categoriesState.categories.map((element, i) => {
        if (element.name === props.categoriesState.activeCategory) {
          return (
            <React.Fragment key={i}>
              <h2 >{element.displayName}</h2>
              <div >
                {element.discription}
              </div>
            </React.Fragment>
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
  categoriesState: state.categories
});

// connecting my component with the mapState to props to be able to use the store.
export default connect(mapStateToProps)(activeCategory);