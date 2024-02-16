/* eslint-disable react/prop-types */
import { Add, Remove, ShoppingCart } from "@mui/icons-material";
import { Badge, Button, IconButton, Stack, styled } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decreaseQuantity,
  increaseQuantity,
} from "../../redux/cartSlice";
import Swal from "sweetalert2";
import "./Main.css";
import { useTranslation } from "react-i18next";
import React, { useCallback } from "react";

// eslint-disable-next-line no-unused-vars
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {},
}));

const AddToCartButton = ({ clickedProduct }) => {
  const {t} = useTranslation();
  const dispatch = useDispatch();

  // @ts-ignore
  const { selectedProducts, selectedProductsID } = useSelector((state) => state.cart);
  const productQuantity = useCallback((clickProduct) => {
    const myProduct = selectedProducts.find((itemUser) => {
      return itemUser.id === clickProduct.id;
    });
    return myProduct.quantity;
  },[selectedProducts]);
  return (
    <>
      {selectedProductsID.includes(clickedProduct.id) ? (
        <Stack
          direction={"row"}
          gap={2}
          sx={{ display: "flex", alignItems: "center", justifyContent:{xs: 'center', sm: 'start'} }}
        >
          <IconButton
            color="primary"
            onClick={() => {
              productQuantity(clickedProduct) <= 1
                ? Swal.fire({
                    title: t("Are you sure?"),
                    text: `${t('You won\'t Delete')} ${clickedProduct.attributes.productTitle}!`,
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: t(`Yes, delete it!`),
                    cancelButtonText: t("Cancel"),
                  }).then((result) => {
                    if (result.isConfirmed) {
                      dispatch(decreaseQuantity(clickedProduct));
                    }
                  })
                : dispatch(decreaseQuantity(clickedProduct));
            }}
          >
            <Remove fontSize="small" />
          </IconButton>

          <StyledBadge
            badgeContent={productQuantity(clickedProduct)}
            color="primary"
          />

          <IconButton
            color="primary"
            onClick={() => {
              dispatch(increaseQuantity(clickedProduct));
            }}
          >
            <Add fontSize="small" />
          </IconButton>
        </Stack>
      ) : (
        <Button
          sx={{ textTransform: "capitalize", p: 1, lineHeight: 1.1 }}
          variant="contained"
          color="primary"
          onClick={() => {
            Swal.fire({
              title: t("Are you sure?"),
              text: t("You won't be able to Buy this!"),
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: t("Yes, Buy it!"),
              cancelButtonText: t("Cancel"),
            }).then((result) => {
              if (result.isConfirmed) {
                dispatch(addToCart(clickedProduct));
              }
            });
          }}
        >
          <ShoppingCart sx={{ fontSize: "18px", mr: 1 }} /> {t('Add to cart')}
        </Button>
      )}
    </>
  );
};

export default React.memo(AddToCartButton);
