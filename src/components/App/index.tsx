import * as React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";
import Router from "pages/Router";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
};

export default App;
