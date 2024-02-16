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

function App() {
  const [theme, colorMode] = useMode();  

  return (
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
            <HeaderMode />
            <HeaderSearch/>
            <HeaderCategories />

            <Box
              bgcolor={
                // @ts-ignore
                theme.palette.bg.main
              }
            >
              <Hero />
              <Main />
            </Box>

            <Footer />

            <ScrollToTop />
            <Outlet />
          </Stack>
        </ThemeProvider>
      </ColorModeContext.Provider>
    
  );
}

export default App;
