/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import * as actions from '../store/productsReducer'
import * as actionsCart from '../store/cartReducer'

// Meterial UI Components
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const Status = props => {
  const classes = useStyles();


  useEffect(()=>{
    props.getProd();

  },[]);

  const updateFunctions = element => {
    props.addToCart(element)
    props.decrementInStock(element)
    props.updateRemoteCart(props.cartState.cartItem)
  }

  return (
    <section className='products' >
      {props.productState.products.map(element => {
        if (element.category === props.categoryState.activeCategory) {
          return (
            <Card key={element.name} className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={element.img}
                  title={element.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {element.name}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="p">
                    {element.description}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="p">
                    {element.inStock}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button onClick={() => updateFunctions(element)} size="small" color="primary">
                  ADD To Cart
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>

          )
        }
        return null
      })}

    </section>
  );
}


const mapStateToProps = state => ({
  productState: state.products,
  categoryState: state.categories,
  cartState: state.cart,
});


const mapDispatchToProps = (dispatch, getState) => ({
  getProd: () => dispatch(actions.getRemoteProducts()),
  decrementInStock: (product) => dispatch(actions.decrementInStock(product)),
  addToCart: (product) => dispatch(actionsCart.addAction(product)),
  updateRemoteCart: (product) => dispatch(actionsCart.updateRemoteCart(product)),

});


// connecting my component with the mapState to props to be able to use the store.
export default connect(mapStateToProps, mapDispatchToProps)(Status);