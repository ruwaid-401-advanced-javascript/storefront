import React from 'react';
import { connect } from 'react-redux';
import { show } from '../store/categories.js';

const categories = props => {
    return (
        <section key='section' className="categories">
            <div key='div'>Browse OUR categories</div>
            <ul key='ul'>
                {props.categories.categories.map(element => {
                    return (
                        <React.Fragment key={element.displayName+'d'}>
                            <li key={element.displayName} onClick={() => props.show(element.name)}>
                                {element.displayName}
                            </li>
                            <p key={element.name + 'p'}>|</p>
                        </React.Fragment>

                    )
                })}

            </ul>

        </section>
    );
}

// we only care about the totalVotes to be displayed
const mapStateToProps = state => ({
    categories: state.categories
});

const mapDispatchToProps = { show };


// connecting my component with the mapState to props to be able to use the store.
export default connect(mapStateToProps, mapDispatchToProps)(categories);