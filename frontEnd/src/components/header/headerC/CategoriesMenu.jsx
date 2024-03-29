/* eslint-disable react/prop-types */
import { useCallback, useState } from "react";
import {
  Box,
  ListItemIcon,
  ListItemText,
  Tooltip,
  Typography,
  useTheme,
  Button,
  Menu,
  MenuItem,
  Fade,
} from "@mui/material";
import {
  LaptopChromebookOutlined,
  Female,
  Male,
  Diamond,
  Window,
  KeyboardArrowRightOutlined,
} from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { changeAPI } from "../../../redux/changeAPISlice";

const CategoriesMenu = () => {
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = useCallback(
    (event) => {
      setAnchorEl(event.currentTarget);
    },
    [anchorEl]
  );
  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, [anchorEl]);

  const theme = useTheme();
  // @ts-ignore
  const state = useSelector((state) => state.dataAPI);
  const dispatch = useDispatch();

  return (
    <Box>
      <Tooltip
        TransitionComponent={Fade}
        TransitionProps={{ timeout: 600 }}
        title={t("Categories Menu")}
      >
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{
            width: 222,
            // @ts-ignore
            bgcolor: theme.palette.myColor.main,

            color: theme.palette.text.secondary,
          }}
        >
          <Window />
          <Typography
            sx={{
              padding: "0",
              textTransform: "capitalize",
              mx: 1,
            }}
          >
            {t("Categories")}
          </Typography>
          <Box flexGrow={1} />

          <KeyboardArrowRightOutlined />
        </Button>
      </Tooltip>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{
          ".MuiPaper-root": {
            width: 220,
            // @ts-ignore
            bgcolor: theme.palette.myColor.main,
          },
        }}
      >
        {[
          { text: "Men", icon: <Male fontSize="small" /> },
          {
            text: "Women",
            icon: <Female fontSize="small" />,
          },
          {
            text: "Electronics",
            icon: <LaptopChromebookOutlined fontSize="small" />,
          },
          { text: "Jewelery", icon: <Diamond fontSize="small" /> },
        ].map((item) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <MenuItem
              key={item.text}
              onClick={() => {
                handleClose();
                item.text == "Women"
                  ? dispatch(changeAPI(state.womenCategoryAPI))
                  : item.text == "Electronics"
                  ? dispatch(changeAPI(state.electronicCategoryAPI))
                  : item.text == "Jewelery"
                  ? dispatch(changeAPI(state.jeweleryCategoryAPI))
                  : dispatch(changeAPI(state.menCategoryAPI));
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>

              <ListItemText>{t(item.text)}</ListItemText>
            </MenuItem>
          );
        })}
      </Menu>
    </Box>
  );
};

export default CategoriesMenu;
