/* eslint-disable react/prop-types */

import { Container } from "@mui/material";
import AccordionMenu from "./headerC/AccordionMenu";
import CategoriesMenu from "./headerC/CategoriesMenu";

const HeaderCategories = () => {
  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        mt: 3,
      }}
    >
      <CategoriesMenu />

      <AccordionMenu />
    </Container>
  );
};

export default HeaderCategories;
