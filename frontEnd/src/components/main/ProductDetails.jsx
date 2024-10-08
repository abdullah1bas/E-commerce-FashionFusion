/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
// import { Box, Stack, Typography, ToggleButton, ToggleButtonGroup } from "@mui/material";
// import { useMemo, useState } from "react";
import { Box, Typography } from "@mui/material";
import AddToCartButton from "./AddToCartButton";

const ProductDetails = ({ clickedProduct }) => {
  // const [selectedImg, setselectedImg] = useState(0);
  // const selectMemo = useMemo(() => selectedImg,[selectedImg])

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2.5,
        flexDirection: { xs: "column", sm: "row" },
        height: "400px",
      }}
    >
      <Box sx={{ display: "flex", height: "100%" }}>
        <img
          width={360}
          src={clickedProduct.image}
          alt={clickedProduct.title}
        />
      </Box>

      <Box sx={{ py: 2, textAlign: { xs: "center", sm: "left" } }}>
        <Typography variant="h5" sx={{ textTransform: "capitalize !important" }}>
          {clickedProduct.title}
        </Typography>
        <Typography my={0.4} fontSize={"22px"} color={"crimson"} variant="h6">
          ${clickedProduct.price}
        </Typography>
        <Typography variant="body1" px={'4px'}>
          {clickedProduct.description}
        </Typography>

        {/* <Stack
          sx={{ justifyContent: { xs: "center", sm: "left" } }}
          direction={"row"}
          gap={1}
          my={2}
        >
          <ToggleButtonGroup
            value={selectMemo}
            exclusive
            sx={{
              ".Mui-selected": {
                border: "1px solid royalblue !important",
                borderRadius: "5px !important",
                opacity: "1",
                backgroundColor: "initial",
              },
            }}
          >
            {clickedProduct.attributes.productImg.data.map((item, index) => {
              return (
                <ToggleButton
                  key={item.id}
                  value={index}
                  sx={{
                    width: "110px",
                    height: "110px",
                    mx: 1,
                    p: "0",
                    opacity: "0.5",
                  }}
                >
                  <img
                    onClick={() => {
                      setselectedImg(index);
                    }}
                    style={{ borderRadius: 3 }}
                    height={"100%"}
                    width={"100%"}
                    src={item.image}
                    alt={clickedProduct.title}
                  />
                </ToggleButton>
              );
            })}
          </ToggleButtonGroup>
        </Stack> */}

        <AddToCartButton clickedProduct={clickedProduct} />
      </Box>
    </Box>
  );
};

export default ProductDetails;
