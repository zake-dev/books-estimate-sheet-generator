import * as React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";
import FileSelectionPage from "components/FileSelectionPage";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <FileSelectionPage />
    </ThemeProvider>
  );
};

export default App;
