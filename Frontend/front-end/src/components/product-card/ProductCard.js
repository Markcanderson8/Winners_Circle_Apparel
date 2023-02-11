import React, { useState } from 'react';
import style from './ProductCard.module.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Add } from '@material-ui/icons';
import { useCart } from '../checkout-page/CartContext';
import ProductModal from '../product-modal/ProductModal';
import Toast from '../toast/Toast';

/**
 * @name useStyles
 * @description Material-ui styling for ProductCard component
 * @return styling
 */
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: '56.25%'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

/**
 * @name ProductCard
 * @description displays single product card component
 * @param {*} props product
 * @return component
 */
const ProductCard = ({ product }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const onOpen = () => {
    setOpen(!open);
  }

  const { dispatch } = useCart();

  const onAdd = () => {
    dispatch(
      {
        type: 'add',
        product: {
          id: product.id,
          title: product.name,
          price: product.price,
          description: product.description,
          quantity: 1        }
      }
    );
  };

  let toastTypes = null;

  const [list, setList] = useState([]);
  
  const showToast = (type) => {
    switch (type) {
      case "add":
        toastTypes = {
          id: list.length + 1,
          title: "Added to cart",
          description: "Successfully added to cart",
          backgroundColor: "#ff0000",
        };
        break;
      default:
        toastProperties = [];
    }

    setList([...list, toastTypes]);
  };

  return (
    <>
    <div>
    <Toast toastlist={list} position="top-left" setList={setList} />
  </div>
    <Card className={`${classes.root} ${style.card}`}>
      {open ? <ProductModal product={product} closeM={() => setOpen(false)} /> : <div />}
      <div className={style.uniform}>
        <CardHeader
          avatar={(
            <Avatar aria-label="demographics" className={classes.avatar}>
              {product.demographic.charAt(0)}
            </Avatar>
          )}
          action={(
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          )}
          title={product.name}
          subheader={`${product.demographic} ${product.category} ${product.type}`}
          />
      </div>
      <div className={style.imgUniform}>
        <CardMedia
          className={classes.media}
          image={product.imageSrc}
          title={product.name}
          />
      </div>
      <CardContent>
        <div className={style.description}>
          <Typography variant="body2" color="textSecondary" component="p">
            {product.description}
          </Typography>
        </div>
        <br/>
        <Typography variant="body2" color="textSecondary" component="p">
          Price: $
          {product.price}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton aria-label="add to shopping cart" onClick={() => {onAdd(); showToast("add"); }}>
          <AddShoppingCartIcon />
        </IconButton>
        <IconButton onClick={onOpen}>
          <Add />
        </IconButton>
      </CardActions>
    </Card>
    </>
  );
};

export default ProductCard;
