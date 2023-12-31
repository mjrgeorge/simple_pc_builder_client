import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import GitHubIcon from '@mui/icons-material/GitHub';
import { signOut } from "next-auth/react"
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
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
import { useSession } from "next-auth/react";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function MenuAppBar() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  const { data: session } = useSession();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    handleCloseSmall();
  };

  const [anchorElSmall, setAnchorElSmall] = React.useState(null);

  const handleMenuSmall = (event) => {
    setAnchorElSmall(event.currentTarget);
  };

  const handleCloseSmall = () => {
    setAnchorElSmall(null);
  };

  return (
    <div>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          {
            matches &&
            <Link href='/' style={{ color: 'inherit', textDecoration: 'none' }}>
              <IconButton
                edge="start"
                sx={{ mr: 2 }}
                size="large"
                color="inherit"
              >
                <HomeIcon />
              </IconButton>
            </Link>
          }
          {
            !matches &&
            <IconButton
              edge="start"
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenuSmall}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          }
          <Menu
            id="menu-appbar"
            anchorEl={anchorElSmall}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left"
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left"
            }}
            open={Boolean(anchorElSmall)}
            onClose={handleCloseSmall}
          >
            <MenuItem>
              <Link href={`/pc_builder`} style={{ color: 'inherit', textDecoration: 'none' }}>
                <Button color="inherit" variant="outlined" sx={{ mr: 2 }}>
                  Pc Builder
                </Button>
              </Link>
            </MenuItem>
            <MenuItem>
              {
                !session?.user &&
                <Link href={`/login`} style={{ color: 'inherit', textDecoration: 'none' }}>
                  <Button color="inherit" variant="outlined" startIcon={<GitHubIcon />} >
                    Login
                  </Button>
                </Link>
              }
              {
                session?.user &&
                <Button color="inherit" variant="outlined" onClick={() => signOut()} >
                  Logout
                </Button>
              }
            </MenuItem>
          </Menu>
          <Box component="div" sx={{ flexGrow: 1 }}>
            <Link href='/' style={{ color: 'inherit', textDecoration: 'none' }}>
              <Typography variant="h6">
                mjrgeorge
              </Typography>
            </Link>
          </Box>
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
          {
            matches &&
            <div>
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
                <Button color="inherit" variant="outlined" sx={{ mr: 2 }}>
                  Pc Builder
                </Button>
              </Link>
              {
                !session?.user &&
                <Link href={`/login`} style={{ color: 'inherit', textDecoration: 'none' }}>
                  <Button color="inherit" variant="outlined" startIcon={<GitHubIcon />} >
                    Login
                  </Button>
                </Link>
              }
              {
                session?.user &&
                <Button color="inherit" variant="outlined" onClick={() => signOut()} >
                  Logout
                </Button>
              }
            </div>
          }
        </Toolbar>
      </AppBar>
    </div >
  );
}
