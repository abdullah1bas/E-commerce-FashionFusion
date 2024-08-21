// @ts-nocheck
import { Add, Close, Remove } from "@mui/icons-material";
import { Badge, Box, Divider, IconButton, Stack, Typography, styled, useTheme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { decreaseQuantity, deleteProduct, increaseQuantity } from "../../../redux/cartSlice";
import Swal from "sweetalert2";
import "./headerC.css";
import { useTranslation } from "react-i18next";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "inherit",
    color:
      theme.palette.mode == "light"
        ? theme.palette.common.black
        : theme.palette.common.white,
    fontSize: "18px",
  },
}));

const ProductSelectedList = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const dispatch = useDispatch();
  // eslint-disable-next-line react/prop-types
  const { selectedProducts } = useSelector((state) => state.cart);
  // console.log(selectedProducts);

  return (
    <Box
      sx={{
        // maxHeight: "600px",
        // minHeight: { xs: "520px", sm: "600px" },
        flex: '1',
        overflow: "auto",
      }}
    >
      {selectedProducts.map((item) => {
        return (
          <Box key={item.id}>
            <Stack gap={{ xs: 1, sm: 2 }} width={"100%"} direction={"row"} alignItems={"center"} py={{ xs: 1, sm: 2 }} px={1} >
              <Stack
                sx={{
                  width: 32,
                  height: "100%",
                  alignItems: "center",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: { xs: 2, sm: 3 },
                }}
              >
                <IconButton
                  size="small"
                  sx={{
                    color: theme.palette.info.main,
                  }}
                  onClick={() => {
                    dispatch(increaseQuantity(item));
                  }}
                >
                  <Add />
                </IconButton>

                <StyledBadge badgeContent={item.quantity} color="secondary" />

                <IconButton
                  size="small"
                  sx={{
                    color: theme.palette.info.main,
                  }}
                  onClick={() => {
                    dispatch(decreaseQuantity(item));
                  }}
                  disabled={item.quantity <= 1 && true}
                >
                  <Remove />
                </IconButton>
              </Stack>

              <Box
                sx={{
                  width: { xs: "86px", sm: "110px" },
                  height: { xs: "86px", sm: "110px" },
                }}
              >
                <img
                  src={item.image}
                  width={"100%"}
                  height={"100%"}
                />
              </Box>

              <Stack
                direction={"column"}
                sx={{ width: "150px", flexGrow: 1, gap: { xs: 1, sm: 2 } }}
              >
                <Typography
                  sx={{
                    color:
                      theme.palette.mode == "light"
                        ? theme.palette.common.black
                        : theme.palette.common.white,
                    fontSize: { xs: 13, sm: 16 },
                  }}
                >
                  {item.title.length <= 18
                    ? item.title
                    : `${item.title.slice(0, 18)}...`}
                </Typography>

                <Typography
                  sx={{
                    fontSize: { xs: 11, sm: 14 },
                    color:
                      theme.palette.mode == "light"
                        ? "rgb(125, 135, 156)"
                        : theme.palette.text.secondary,
                  }}
                >
                  ${item.price} X {item.quantity}
                </Typography>

                <Typography
                  sx={{
                    fontSize: { xs: 13, sm: 16 },
                    height: "100%",
                    color: theme.palette.error.main,
                  }}
                >
                  $
                  {(Number(item.price) * Number(item.quantity)).toFixed(
                    2
                  )}
                </Typography>
              </Stack>

              <Box>
                <IconButton
                  aria-label="delete"
                  size="medium"
                  onClick={() => {
                    Swal.fire({
                      title: t("Are you sure?"),
                      text: t("You won't be able to Delete this!"),
                      icon: "warning",
                      showCancelButton: true,
                      confirmButtonColor: "#3085d6",
                      cancelButtonColor: "#d33",
                      confirmButtonText: t(`Yes, delete it!`),
                      cancelButtonText: t("Cancel"),
                    }).then((result) => {
                      if (result.isConfirmed) {
                        dispatch(deleteProduct(item));
                      }
                    });
                  }}
                >
                  <Close fontSize={"small"} />
                </IconButton>
              </Box>
            </Stack>
            <Divider light />
          </Box>
        );
      })}
    </Box>
  );
};

export default ProductSelectedList;