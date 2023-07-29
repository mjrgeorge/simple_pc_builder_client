import { Avatar, IconButton, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { removeFromCart } from '@/redux/cart/cartSlice';
import { useDispatch } from 'react-redux';

const CardItem = ({ product }) => {
    const dispatch = useDispatch();
    return (
        <ListItem
            secondaryAction={
                <IconButton edge="end" onClick={() => dispatch(removeFromCart(product))} >
                    <CloseIcon />
                </IconButton>
            }
        >
            <ListItemAvatar>
                <Avatar
                    alt={product?.product_name}
                    src={product?.image}
                    sx={{ width: 56, height: 56 }}
                />
            </ListItemAvatar>
            <ListItemText primary={product?.product_name}
                secondary={
                    <>
                        <Typography variant='caption'>Category: {product?.category}, </Typography>
                        <Typography variant='caption'>Status: {product?.status}, </Typography>
                        <Typography variant='caption'>Rating: {product?.average_rating}, </Typography>
                    </>
                } />
        </ListItem>

    )
}

export default CardItem