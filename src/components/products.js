import React from 'react';
import { connect } from 'react-redux';

const Status = props => {
  return (
    <section >
      <ul>
        {props.categories.products.map(element => {
          if (element.category === props.categories.activeCategory) {
            return (
              <React.Fragment key={element.name + 'd'}>
                <li key={element.name} >
                  {element.name}
                </li>
              </React.Fragment>
            )
          }
          return null
        })}

      </ul>
    </section>
  );
}

// we only care about the totalVotes to be displayed
const mapStateToProps = state => ({
  categories: state.categories
});

// connecting my component with the mapState to props to be able to use the store.
export default connect(mapStateToProps)(Status);