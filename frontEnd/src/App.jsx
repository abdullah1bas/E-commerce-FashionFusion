import { Box, Stack } from "@mui/material";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { Outlet } from "react-router-dom";
import HeaderMode from "./components/header/HeaderMode";
import HeaderSearch from "./components/header/HeaderSearch";
import HeaderCategories from "./components/header/HeaderCategories";
import Hero from "./components/hero/Hero";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/scroll/ScrollToTop";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { useState } from "react";

function App() {
  const [theme, colorMode] = useMode();

  const handleAlignment = (event, newValue) => {
    if (newValue !== null) {
      setmyDate(newValue);
    }
  };
  const allProductsAPI = "products?populate=*";
  // &(And), filters[category][$eq]=men rg3le
  // [obj.key(category)][$eq(== equal)]=value(men)
  const menCategoryAPI = "products?populate=*&filters[category][$eq]=men";
  const womenCategoryAPI = "products?populate=*&filters[category][$eq]=women";
  const jeweleryCategoryAPI =
    "products?populate=*&filters[category][$eq]=jewelery";
  const electronicCategoryAPI =
    "products?populate=*&filters[category][$eq]=electronics";

  const [myDate, setmyDate] = useState(allProductsAPI);

  return (
    <Provider store={store}>
      <ColorModeContext.Provider
        // @ts-ignore
        value={colorMode}
      >
        <ThemeProvider
          // @ts-ignore
          theme={theme}
        >
          <CssBaseline />
          <Stack direction={"column"}>
          <div id="google_translate_element"></div>
            <HeaderMode />
            <HeaderSearch
              {...{
                setmyDate,
                allProductsAPI,
                menCategoryAPI,
                womenCategoryAPI,
                jeweleryCategoryAPI,
                electronicCategoryAPI,
              }}
            />
            <HeaderCategories
              {...{
                setmyDate,
                menCategoryAPI,
                womenCategoryAPI,
                jeweleryCategoryAPI,
                electronicCategoryAPI,
              }}
            />

            <Box
              bgcolor={
                // @ts-ignore
                theme.palette.bg.main
              }
            >
              <Hero />
              <Main
                {...{
                  handleAlignment,
                  allProductsAPI,
                  menCategoryAPI,
                  womenCategoryAPI,
                  jeweleryCategoryAPI,
                  electronicCategoryAPI,
                  myDate,
                }}
              />
            </Box>

            <Footer />

            <ScrollToTop />
            <Outlet />
          </Stack>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </Provider>
  );
}

export default App;
