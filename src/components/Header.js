import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu";
import { CssBaseline } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";

export default function MenuAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
        <CssBaseline />
        <AppBar position="static">
        <Toolbar>
            <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            >
            <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            mjrgeorge
            </Typography>
            <div>
            <Button
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                variant="outlined"
                endIcon={<ArrowDropDownIcon />}
                sx={{ mr: 2 }}
            >
                Category
            </Button>
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                vertical: "bottom",
                horizontal: "left"
                }}
                keepMounted
                transformOrigin={{
                vertical: "top",
                horizontal: "left"
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Processor</MenuItem>
                <MenuItem onClick={handleClose}>Motherboard</MenuItem>
                <MenuItem onClick={handleClose}>RAM</MenuItem>
                <MenuItem onClick={handleClose}>Power Supply Unit</MenuItem>
                <MenuItem onClick={handleClose}>Storage Device</MenuItem>
                <MenuItem onClick={handleClose}>Monitor</MenuItem>
                <MenuItem onClick={handleClose}>Others</MenuItem>
            </Menu>
            <Button color="inherit" variant="outlined">
                Pc Builder
            </Button>
            </div>
        </Toolbar>
        </AppBar>
    </div>
  );
}
