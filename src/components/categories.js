import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import * as actions from '../store/categories.js'

function Categories(props) {
    useEffect(() => {
        props.get();
        props.getCat();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
    categories: state.categories,
});


const mapDispatchToProps = (dispatch, getState) => ({
    get: () => dispatch(actions.getRemoteData()),
    getCat: () => dispatch(actions.getRemoteCategories()),
    show: (name) => dispatch(actions.show(name)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Categories);