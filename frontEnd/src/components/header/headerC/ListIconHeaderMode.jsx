import { useEffect, useState } from "react";
import {
  IconButton,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import { ExpandMore, Facebook, Instagram, Twitter } from "@mui/icons-material";
import ModeIcon from "./ModeIcon";
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const options=["EN", "FR", "AR", "CHI", "RUS"];

const ListIconHeaderMode = () => {

  const changeEN = () => {
    i18n.changeLanguage("EN");
    document.documentElement.lang = "en";
    localStorage.setItem("langaugeSite", "EN");
  };
  const changeFR = () => {
    i18n.changeLanguage("FR");
    document.documentElement.lang = "fr";
    localStorage.setItem("langaugeSite", "FR");
  };
  const changeAR = () => {
    i18n.changeLanguage("AR");
    document.documentElement.lang = "ar";
    localStorage.setItem("langaugeSite", "AR");
  };
  const changeCHI = () => {
    i18n.changeLanguage("CHI");
    document.documentElement.lang = "zh";
    localStorage.setItem("langaugeSite", "CHI");
  };
  const changeRU = () => {
    i18n.changeLanguage("RUS");
    document.documentElement.lang = "ru";
    localStorage.setItem("langaugeSite", "RUS");
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    if(localStorage.getItem('langaugeSite') != null) {
      i18n
      .use(initReactI18next)
      .init({
        fallbackLng: localStorage.getItem('langaugeSite'), 
      })
      document.documentElement.lang = localStorage.getItem('langaugeSite').toLowerCase();
      setSelectedIndex(options.indexOf(localStorage.getItem('langaugeSite')))
    }
  },[])

  return (
    <>
      <ModeIcon />

      <Tooltip title='Transilation Lang'>
        <List component="nav" aria-label="Device settings" sx={{ p: 0, m: 0 }}>
          <ListItem
            id="lock-button"
            aria-haspopup="listbox"
            aria-controls="lock-menu"
            aria-label="when device is locked"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClickListItem}
            sx={{ "&:hover": { cursor: "pointer" }, px: 1 }}
          >
            <ListItemText
              sx={{
                ".MuiTypography-root": { fontSize: "11px", color: "#fff" },
              }}
              secondary={options[selectedIndex]}
            />
            <ExpandMore sx={{ fontSize: "16px", color: "#fff" }} />
          </ListItem>
        </List>
      </Tooltip>

      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "lock-button",
          role: "listbox",
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            sx={{ fontSize: "11px", p: "3px 10px", minHeight: "10px" }}
            key={option}
            selected={index === selectedIndex}
            onClick={(event) => {
              handleMenuItemClick(event, index);
              option == "AR"
                ? changeAR()
                : option == "FR"
                ? changeFR()
                : option == "RUS"
                ? changeRU()
                : option == "CHI"
                ? changeCHI()
                : changeEN();
            }}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>

      <Tooltip title="Twitter">
        <IconButton href="https://www.twitter.com/">
          <Twitter
            sx={{
              fontSize: "16px",
              color: "#fff",
            }}
          />
        </IconButton>
      </Tooltip>
      <Tooltip title="Facebook">
        <IconButton href="https://www.facebook.com/">
          <Facebook
            sx={{
              fontSize: "16px",
              color: "#fff",
            }}
          />
        </IconButton>
      </Tooltip>
      <Tooltip title="Instagram">
        <IconButton href="https://www.instagram.com/">
          <Instagram
            sx={{
              fontSize: "16px",
              color: "#fff",
            }}
          />
        </IconButton>
      </Tooltip>
    </>
  );
};

export default ListIconHeaderMode;
