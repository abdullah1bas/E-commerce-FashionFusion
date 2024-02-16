import { Box, Container, Stack, Typography } from "@mui/material";
import ListIconHeaderMode from "./headerC/ListIconHeaderMode";
import { useTranslation } from 'react-i18next';
import React from "react";


const HeaderMode = () => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        bgcolor: "#2B3445",
        py: "4px",
        borderBottomRightRadius: 4,
        borderBottomLeftRadius: 4,
      }}
    >
      <Container>
        <Stack direction={"row"} alignItems={"center"}>
          <Typography
            sx={{
              mr: 2,
              p: "4px 10px",
              bgcolor: "#D23F57",
              borderRadius: "12px",
              fontSize: "12px",
              fontWeight: "bold",
              color: "#fff",
            }}
            variant="body2"
          >
          {t('HOT')}
          </Typography>

          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: 300,
              color: "#fff",
            }}
            variant="body2"
          >
            {t('Free Express Shipping')}
          </Typography>

          <Box flexGrow={1} />

          <ListIconHeaderMode />
        </Stack>
      </Container>
    </Box>
  );
};

export default React.memo(HeaderMode);
