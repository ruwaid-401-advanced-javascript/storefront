/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import * as actions from '../store/categoriesReducer.js'

// Meterial UI Components
import { Button } from '@material-ui/core';

function Categories(props) {
    useEffect(() => {
        props.getCat();
    }, []);

    return (
        <section key='section' className="categories">
            <div key='div'>Browse OUR categories</div>
            <span key='ul'>
                {props.categories.categories.map(element => {
                    return (
                        <React.Fragment key={element.displayName}>
                            <Button onClick={() => props.changeActiveCategory(element.name)}>
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
    categories: state.categories,
});


const mapDispatchToProps = (dispatch, getState) => ({
    getCat: () => dispatch(actions.getRemoteCategories()),
    changeActiveCategory: (name) => dispatch(actions.changeActiveCategory(name)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Categories);