import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ListItemIcon from "@mui/material/ListItemIcon";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useProducts } from "../context/ProductContext";

import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

function DrawerAppBar(props) {
  const navigate = useNavigate();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const { cartNumber } = useProducts();

  const handleDrawerToggle = (e) => {
    if (e.target.innerHTML === "Shop") return;
    setMobileOpen(!mobileOpen);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    navigate("/home");
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Shoppy
      </Typography>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton
            sx={{ textAlign: "center" }}
            onClick={() => {
              navigate("/home");
            }}
          >
            <ListItemText primary={"Home"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            name="shop"
            onClick={handleMenuOpen}
            sx={{ textAlign: "center" }}
          >
            <ListItemText sx={{ mr: -7 }} primary={"Shop"} />
            <ListItemIcon>
              <ArrowDropDownIcon />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const MenuDropDown = (
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>All Products</MenuItem>
      <Divider />
      <MenuItem onClick={handleMenuClose}>Popular Items</MenuItem>
      <MenuItem onClick={handleMenuClose}>New Launches</MenuItem>
    </Menu>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h5"
            component="h5"
            sx={{ mr: 3, flexGrow: { xs: 1, sm: 0 } }}
          >
            Shoppy
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" }, flexGrow: 1 }}>
            <Button
              sx={{ color: "#fff" }}
              onClick={() => {
                navigate("/home");
              }}
            >
              Home
            </Button>
            <Button
              onClick={handleMenuOpen}
              sx={{ color: "#fff" }}
              endIcon={<ArrowDropDownIcon />}
            >
              Shop
            </Button>
          </Box>
          <Button
            variant="contained"
            startIcon={<ShoppingCartIcon />}
            endIcon={
              <Typography variant="p" sx={{ fontWeight: "bold", fontSize: 18 }}>
                {cartNumber}
              </Typography>
            }
            size="small"
            sx={{
              color: "black",
              background: "whitesmoke",
              "&:hover": { color: "white", background: "black" },
            }}
            onClick={() => {
              navigate("/cart");
            }}
          >
            Cart
          </Button>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      {MenuDropDown}
    </Box>
  );
}

export default DrawerAppBar;
