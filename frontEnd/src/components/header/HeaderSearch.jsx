/* eslint-disable react/prop-types */
import { ShoppingCartOutlined } from "@mui/icons-material";
import { Container, Stack, Typography, useMediaQuery } from "@mui/material";
import SearchSelect from "./headerC/SearchSelect";
import CartButtonIcon from "./headerC/CartButtonIcon";
import AccountSettings from "./headerC/AccountSettings";
import { useTranslation } from "react-i18next";
import React from "react";

const HeaderSearch = () => {
  const { t } = useTranslation();
  return (
    <Container sx={{ my: 3, display: "flex", justifyContent: "space-between" }}>
      <Stack alignItems={"center"}>
        <ShoppingCartOutlined />
        <Typography variant="body2">{t("E-commerce")}</Typography>
      </Stack>

      {useMediaQuery("(min-width:500px)") && (
        <SearchSelect />
      )}

      <Stack direction={"row"} alignItems={"center"} gap={1}>
        <CartButtonIcon />

        <AccountSettings />
      </Stack>
    </Container>
  );
};

export default React.memo(HeaderSearch);
