import React, { useContext } from "react";
import { ColorModeContext } from "../../../theme";
import { IconButton, Tooltip, useTheme } from "@mui/material";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import { useTranslation } from "react-i18next";

const ModeIcon = () => {
  const { t } = useTranslation();
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  return (
    <div>
      {theme.palette.mode === "light" ? (
        <Tooltip title={t('Light Mode')}>
          <IconButton
            onClick={() => {
              localStorage.setItem(
                "mode",
                theme.palette.mode === "dark" ? "light" : "dark"
              );
              colorMode.toggleColorMode();
            }}
            color="inherit"
          >
            <LightModeOutlined sx={{ fontSize: "16px", color: "#fff" }} />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title={t('Dark Mode')}>
          <IconButton
            onClick={() => {
              localStorage.setItem(
                "mode",
                theme.palette.mode === "dark" ? "light" : "dark"
              );
              colorMode.toggleColorMode();
            }}
            color="inherit"
          >
            <DarkModeOutlined sx={{ fontSize: "16px" }} />
          </IconButton>
        </Tooltip>
      )}
    </div>
  );
};

export default React.memo(ModeIcon);
