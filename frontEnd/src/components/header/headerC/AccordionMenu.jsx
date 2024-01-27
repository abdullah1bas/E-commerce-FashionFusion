
import { Box, Drawer, IconButton, Stack, useMediaQuery } from '@mui/material';
import { Close, Menu } from "@mui/icons-material";
import { useState } from "react";
import Links from './Links';
import AccordionList from './AccordionList';

const AccordionMenu = () => {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  return (
    <>
    {useMediaQuery("(min-width:992px)") && (
        <Stack mb={'10px'} gap={2} direction={"row"} alignItems={"center"}>
          <Links title={"Home"} />
          <Links title={"Mega Menu"} />
          <Links title={"Full Screen Menu"} />
          <Links title={"pages"} />
          <Links title={"User Account"} />
          <Links title={"Vendor Account"} />
        </Stack>
      )}
    {useMediaQuery("(max-width:991px)") && (
        <IconButton onClick={toggleDrawer("top", true)}>
          <Menu />
        </IconButton>
      )}
      
      <Drawer
          anchor={"top"}
          open={state["top"]}
          onClose={toggleDrawer("top", false)}
          sx={{
            ".MuiPaper-root.css-1sozasi-MuiPaper-root-MuiDrawer-paper": {
              height: "100%",
            },
          }}
        >
          <Box
            sx={{ width: 444, mx: "auto", mt: 6, position: "relative", pt: 10 }}
          >
      
            <IconButton
              sx={{
                ":hover": { color: "red", rotate: "180deg", transition: "0.3s" },
                position: "absolute",
                top: 0,
                right: 10,
              }}
              onClick={toggleDrawer("top", false)}
            >
              <Close />
            </IconButton>
      
            <AccordionList />
      
          </Box>
        </Drawer>
    </>
  );
}

export default AccordionMenu;
