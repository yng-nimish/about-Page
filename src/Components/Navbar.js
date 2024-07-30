import React, { useState } from "react";
import { BsCart2 } from "react-icons/bs";
import { FaRegCircleUser } from "react-icons/fa6";
import { HiOutlineBars3 } from "react-icons/hi2";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import HandshakeIcon from "@mui/icons-material/Handshake";
import AppsIcon from "@mui/icons-material/Apps";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

import { LogoDev } from "@mui/icons-material";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "About us",
      icon: <InfoIcon />,
    },
    {
      text: "Partners",
      icon: <HandshakeIcon />,
    },
    {
      text: "Technical Papers",
      icon: <LibraryBooksIcon />,
    },
    {
      text: "Applications",
      icon: <AppsIcon />,
    },
    {
      text: "Book",
      icon: <MenuBookIcon />,
    },
    {
      text: "Contact Us",
      icon: <PhoneRoundedIcon />,
    },
    {
      text: "Login/Register",
      icon: <PermIdentityIcon />,
    },
    {
      text: "Buy a Token",
      icon: <ShoppingCartRoundedIcon />,
    },
  ];

  return (
    <nav>
      <div className="nav-logo-containter">
        <img src={LogoDev} alt="" />
      </div>
      <div className="navbar-links-container ">
        <a href="">About Us</a>
        <a href="">Partners</a>
        <a href="">Technical Papers</a>
        <a href="">Applications</a>
        <a href="">Book</a>
        <a href=""> {""} Contact Us </a>
        <a href="">
          <FaRegCircleUser /> Login/Register
        </a>
        <a href="">
          <button className="primary-button">
            {"  "}
            <BsCart2 className="navbar-cart-icon" /> Buy a Token
          </button>
        </a>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon> {item.icon} </ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
