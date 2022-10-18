import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import useResponsive from "src/hooks/useResponsive";
import Logo from "src/components/Logo";

import React from "react";
import { useTheme } from "@emotion/react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.palette.primary.main,
  textAlign: "center",
  color: theme.palette.text.secondary
}));

const Header = () => {
  const { isMobile, isDesktop, isTablet } = useResponsive();
  const theme = useTheme();
  const mobileComponent = (
    <Grid
      container
      spacing={3}
      columns={{ xs: 6 }}
      flexGrow={1}
      //   style={{ backgroundColor: theme?.palette?.primary }}
    >
      <Grid item xs={3}>
        <Logo />
      </Grid>
      <Grid item xs={3}>
        <Item>2</Item>
      </Grid>
    </Grid>
  );

  const desktopComponent = (
    <Grid container spacing={3} columns={{ sm: 10 }} flexGrow={1}>
      <Grid item sm={4}>
        <Item>4</Item>
      </Grid>
      <Grid item sm={2}>
        <Item>2</Item>
      </Grid>
      <Grid item sm={4}>
        <Item>4</Item>
      </Grid>
    </Grid>
  );

  return (
    <React.Fragment>
      {isDesktop && desktopComponent}
      {isTablet && desktopComponent}
      {isMobile && mobileComponent}
    </React.Fragment>
  );
};

export default Header;
