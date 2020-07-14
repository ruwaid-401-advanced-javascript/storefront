import React from 'react';

import Categories from './components/categories.js';
import Header from './components/header.js';
import Footer from './components/footer.js';
import './style.scss';
import Products from './components/products.js';
import ActiveCategory from './components/activeCategory.js';
import SimpleCart from './components/simpleCart .js';
// import GetCategory from './components/getCategory.js';

export default props => {
    return (
        <>
            <Header/>
            <SimpleCart/>
            <Categories/>
            <ActiveCategory/>
            <Products/>
            <Footer/>
            {/* <GetCategory/> */}
        </>
    )
};