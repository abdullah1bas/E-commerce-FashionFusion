/* eslint-disable react/prop-types */

import { Container } from "@mui/material";
import AccordionMenu from "./headerC/AccordionMenu";
import CategoriesMenu from "./headerC/CategoriesMenu";

const HeaderCategories = ({
  setmyDate,
  menCategoryAPI,
  womenCategoryAPI,
  jeweleryCategoryAPI,
  electronicCategoryAPI,
}) => {
  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        mt: 3,
      }}
    >
      <CategoriesMenu
        {...{
          setmyDate,
          menCategoryAPI,
          womenCategoryAPI,
          jeweleryCategoryAPI,
          electronicCategoryAPI,
        }}
      />

      <AccordionMenu />
    </Container>
  );
};

export default HeaderCategories;
