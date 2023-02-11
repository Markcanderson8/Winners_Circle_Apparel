import { CardActions, CardMedia, IconButton, makeStyles } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import { CancelRounded } from '@material-ui/icons';
import React from 'react';
import './ReviewOrderModal.Module.css';


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
  

const ReviewOrderModal = ({ setOpenModal, proceed, cancel }) => {

    const classes = useStyles();


  

  return ( 

    <div className="modal" >
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="modal-title">
           This is about to be removed from your cart!
          </h2>
          <div className='closeButton'>
            <IconButton onClick={()=>{setOpenModal(false)}} className='modalClose' aria-label="exit product view" >
              <CancelRounded />
            </IconButton>
          </div>
        </div>

        <div className="modal-body">
          
          <div className='info-category'>
            <IconButton variant="contained" onClick={proceed}> Proceed</IconButton> <IconButton onClick={cancel}>Cancel</IconButton>
          </div>
          
          </div>
          
          <div className='info-description'>
           
          </div>
          <div className='info-description'>
        
          </div>
          <div>
            <div className='info-price'>
          
            </div>
          </div>
          <div className='modal-cart-input'>

           
           
          </div>
        </div>
        <div className="modal-footer">
          
        </div>
      </div>
  )
}
export default ReviewOrderModal;
