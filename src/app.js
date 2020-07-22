import React from 'react';

import Categories from './components/categories.js';
import Header from './components/header.js';
import Footer from './components/footer.js';
import './style.scss';
import Products from './components/products.js';
import ActiveCategory from './components/activeCategory.js';

export default props => {
    return (
        <>
            <Header/>
            <Categories/>
            <ActiveCategory/>
            <Products/>
            <Footer/>
        </>
    )
};