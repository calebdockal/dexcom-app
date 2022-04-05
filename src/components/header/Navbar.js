import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import DexcomLogin from "./DexcomLogin";
import { useGradientBtnStyles } from "@mui-treasury/styles/button/gradient";
import { NavMenu, NavItem } from "@mui-treasury/components/menu/navigation";
function Navbar() {
  const styles = useGradientBtnStyles();

  return (
    <AppBar position="sticky" color="primary">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            Flow
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          ></Box>
          <DexcomLogin />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
