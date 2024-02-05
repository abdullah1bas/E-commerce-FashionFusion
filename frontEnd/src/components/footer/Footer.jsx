import { Box, Link, Typography, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  return (
    <Box
      sx={{
        bgcolor: "#2B3445",
        py: 1.5,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
      }}
    >
      <Typography
        justifyContent={"center"}
        display={"flex"}
        alignItems={"center"}
        color={theme.palette.common.white}
        variant="h6"
        sx={{ fontSize: { xs: 13, sm: 18 } }}
      >
        {t("Designed and developed by")}
        <Link
          underline="none"
          sx={{
            mx: 1,
            fontSize: { xs: 13, sm: 18 },
            textTransform: "capitalize",
            color: "#ff7790",
          }}
          href="https://www.facebook.com/abdullahafter.change"
          target="_blank"
        >
          ABAZZA
        </Link>
        ©2024
      </Typography>
    </Box>
  );
};

export default Footer;
