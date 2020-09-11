import * as React from "react";
import { Typography } from "@material-ui/core";
import { RouteComponentProps, useLocation } from "react-router-dom";

export const SearchPage: React.FC = () => {
  const location = useLocation();
  const titles: string[] = location.state["titles"];

  return (
    <>
      <Typography variant="h6">{titles}</Typography>
    </>
  );
};

export default SearchPage;
