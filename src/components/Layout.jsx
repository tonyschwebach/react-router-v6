import { Outlet } from "react-router-dom";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Navbar from "./NavBar";

const Layout = () => {
  return (
    <Box>
      <Typography>Layout</Typography>
      <Navbar />
      {/* <Outlet /> */}
    </Box>
  );
};

export default Layout;
