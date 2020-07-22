import React from 'react';
import { connect } from 'react-redux';
import { show } from '../store/categories.js';
import { Button } from '@material-ui/core';


const categories = props => {
    return (
        <section key='section' className="categories">
            <div key='div'>Browse OUR categories</div>
            <span key='ul'>
                {props.categories.categories.map(element => {
                    return (
                        <React.Fragment key={element.displayName}>
                            <Button onClick={() => props.show(element.name)}>
                                {element.displayName}
                            </Button>
                            <p>|</p>
                        </React.Fragment>

                    )
                })}

            </span>

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