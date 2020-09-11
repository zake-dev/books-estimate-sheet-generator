import * as React from "react";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import FileSelectionPage from "pages/FileSelectionPage";
import SearchPage from "pages/SearchPage";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={FileSelectionPage} />
        <Route path="/search" component={SearchPage} />
        <Redirect path="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
