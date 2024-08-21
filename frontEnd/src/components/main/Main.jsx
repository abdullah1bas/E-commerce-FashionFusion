/* eslint-disable react/prop-types */
import { Box, CircularProgress, Container, Dialog, IconButton, Typography, useTheme } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { Close } from "@mui/icons-material";
import ProductDetails from "./ProductDetails";
import MainHeader from "./MainHeader";
import MainProducts from "./MainProducts";
import { useSelector } from "react-redux";
import { useGetproductsByNameQuery } from "../../redux/product";

const Main = () => {
  // @ts-ignore
  const state = useSelector((state) => state.dataAPI);

  const [open, setOpen] = useState(false);

  const handleClickOpen = useCallback(() => {
    setOpen(true);
  },[open]);

  const handleClose = useCallback(() => {
    setOpen(false);
  },[open]);

  const { data, error, isLoading } = useGetproductsByNameQuery(state.myData);
  const [clickedProduct, setClickedProduct] = useState({});
  const theme = useTheme();
  
  useEffect(() => {
    // console.log(data);
    // if(data) console.log(data);
  }, []);

  if (isLoading) {
    return (
      <Box sx={{ py: 11, textAlign: "center" }}>
        <CircularProgress />
      </Box>
    );
  } else if (error) {
    return (
      <Container
        sx={{
          py: 11,
          textAlign: "center",
        }}
      >
        <Typography variant="h6">
          {
            // @ts-ignore
            error.error
          }
        </Typography>

        <Typography variant="h6">Please try again later</Typography>
      </Container>
    );
  } else {
    return (
      <Container sx={{ py: 9 }}>
        <MainHeader />

        <MainProducts {...{ data, setClickedProduct, handleClickOpen }} />

        <Dialog
          sx={{
            ".MuiPaper-root": {
              minWidth: { xs: "100%", md: 900 },
              [theme.breakpoints.down("sm")]: { height: "60%" },
            },
          }}
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <IconButton
            sx={{
              ":hover": { color: "red", rotate: "180deg", transition: "0.3s" },
              position: "absolute",
              top: 0,
              right: 10,
            }}
            onClick={handleClose}
          >
            <Close />
          </IconButton>

          <ProductDetails {...{ clickedProduct }} />
        </Dialog>
      </Container>
    );
  }
};

export default Main;
