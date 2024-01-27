import { Box, Button, Typography, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";


const Footer = () => {
  const {t} = useTranslation();
  const theme = useTheme();
  return (
    <Box
      sx={{
        bgcolor: "#2B3445",
        py: 1.3,
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
        sx={{ fontSize: {xs:13, sm: 18} }}
      >
        {t('Designed and developed by')}
        <Button
          sx={{
            mx: 0.5,
            fontSize: {xs:13, sm: 18},
            textTransform: "capitalize",
            color: "#ff7790",
          }}
          variant="text"
          color="primary"
          href="https://www.facebook.com/abdullahafter.change"
          target="_blank"
        >
          ABAZZA
        </Button>
        ©2023
      </Typography>
    </Box>
  );
};

export default Footer;
