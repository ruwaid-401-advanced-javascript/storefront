import React from 'react';
import { connect } from 'react-redux';
import { toCart } from '../store/categories.js';



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

  return (
    <section className='products' >
        {props.categories.products.map(element => {
          if (element.category === props.categories.activeCategory) {
            return (
              <Card key={element.name}className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={`https://source.unsplash.com/random?${element.name}`}
                  title= {element.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                  {element.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button onClick={() => props.toCart(element.name)} size="small" color="primary">
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

// we only care about the totalVotes to be displayed
const mapStateToProps = state => ({
  categories: state.categories
});
const mapDispatchToProps = { toCart };


// connecting my component with the mapState to props to be able to use the store.
export default connect(mapStateToProps,mapDispatchToProps)(Status);