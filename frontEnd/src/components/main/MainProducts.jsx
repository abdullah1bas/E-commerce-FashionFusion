/* eslint-disable react/prop-types */
import { Box, Button, Rating, Stack, Tooltip, Typography } from "@mui/material";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { AnimatePresence, motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import React from "react";

// eslint-disable-next-line react/prop-types
const MainProducts = ({ data, setClickedProduct, handleClickOpen }) => {
  const {t} = useTranslation();
  // @ts-ignore
  const { selectedProductsID } = useSelector((state) => state.cart);
  return (
    <Stack
      direction={"row"}
      flexWrap={"wrap"}
      justifyContent={{ xs: "center", sm: "space-between" }}
    >
      {/* AnimatePresence da 3hsan lw 7bat delete 3nasr yfdl sh8al */}
      <AnimatePresence>
        {data.data.map((item) => {
          return (
            // example {framer motion filter animation website}
            <Card
              component={motion.section}
              layout
              // first State
              initial={{ transform: "scale(0)" }}
              // Last State
              animate={{ transform: "scale(1)" }}
              transition={{ duration: 1.6, type: "spring", stiffness: 60 }}
              exit={{ transform: "scale(0)" }}
              key={item.id}
              sx={{
                maxWidth: 333,
                mt: 6,
                ":hover .MuiCardMedia-root ": {
                  rotate: "1deg",
                  scale: "1.1",
                  transition: "0.35s",
                },
              }}
            >
              <Box sx={{ overflow: "hidden" }}>
                <CardMedia
                  sx={{ height: 277, backgroundSize: "contain" }}
                  // @ts-ignore
                  image={item.attributes.productImg.data[0].attributes.url}
                  title={item.attributes.productTitle}
                />
              </Box>

              <CardContent>
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="h3"
                    sx={{ textTransform: "capitalize !important" }}
                  >
                    {item.attributes.productTitle}
                  </Typography>

                  <Typography variant="subtitle1" component="p">
                    ${item.attributes.productPrice}
                  </Typography>
                </Stack>

                <Typography
                  sx={{ height: "100px", overflow: "auto" }}
                  variant="body2"
                  color="text.secondary"
                >
                  {item.attributes.productDescription}
                </Typography>
              </CardContent>

              <CardActions sx={{ justifyContent: "space-between" }}>
                <Tooltip title={t("Details Product")}>
                  <Button
                    onClick={() => {
                      handleClickOpen();
                      setClickedProduct(item);
                    }}
                    sx={{ textTransform: "capitalize" }}
                    size="large"
                  >
                    {selectedProductsID.some((id) => id == item.id) && (
                      <AddShoppingCartOutlinedIcon
                        sx={{ mr: 1 }}
                        fontSize="small"
                      />
                    )}
                    {t('Show Details')}
                  </Button>
                </Tooltip>
                <Rating
                  // da y3ne b2olo an y7ot al value lw kan 3ashre
                  precision={0.1}
                  name="read-only"
                  value={item.attributes.productRating}
                  readOnly
                />
              </CardActions>
            </Card>
          );
        })}
      </AnimatePresence>
    </Stack>
  );
};

export default React.memo(MainProducts);
