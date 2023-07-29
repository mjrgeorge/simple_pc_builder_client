import { Avatar, Divider, IconButton, ListItem, ListItemAvatar, ListItemText } from '@mui/material'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';

const CardItem = () => {
    return (
        <div>
            <Divider component="li" variant="inset" />
            <ListItem
                secondaryAction={
                    <IconButton edge="end" >
                        <CloseIcon />
                    </IconButton>
                }
            >
                <ListItemAvatar>
                    <Avatar
                        alt="Remy Sharp"
                        src="https://www.startech.com.bd/image/cache/catalog/cpu-cooler/nzxt/t120-white/t120-white-01-228x228.webp"
                        sx={{ width: 56, height: 56 }}
                    />
                </ListItemAvatar>
                <ListItemText primary="Vacation" secondary="July 20, 2014" />
            </ListItem>
        </div>
    )
}

export default CardItem