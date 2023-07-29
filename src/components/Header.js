import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, CssBaseline } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";
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
          <Box component="div" sx={{ flexGrow: 1 }}>
            <Link href='/' style={{ color: 'inherit', textDecoration: 'none' }}>
              <Typography variant="h6">
                mjrgeorge
              </Typography>
            </Link>
          </Box>
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
              <MenuItem onClick={handleClose}>
                <Link href={`/product_by_category/Processor`} style={{ color: 'inherit', textDecoration: 'none' }}>
                  Processor
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link href={`/product_by_category/Motherboard`} style={{ color: 'inherit', textDecoration: 'none' }}>
                  Motherboard
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link href={`/product_by_category/RAM`} style={{ color: 'inherit', textDecoration: 'none' }}>
                  RAM
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link href={`/product_by_category/Power Supply Unit`} style={{ color: 'inherit', textDecoration: 'none' }}>
                  Power Supply Unit
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link href={`/product_by_category/Storage Device`} style={{ color: 'inherit', textDecoration: 'none' }}>
                  Storage Device
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link href={`/product_by_category/Monitor`} style={{ color: 'inherit', textDecoration: 'none' }}>
                  Monitor
                </Link>
              </MenuItem>
            </Menu>
            <Link href={`/pc_builder`} style={{ color: 'inherit', textDecoration: 'none' }}>
              <Button color="inherit" variant="outlined">
                Pc Builder
              </Button>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div >
  );
}
