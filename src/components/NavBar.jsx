import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Outlet, NavLink } from "react-router-dom";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" {...other}>
      <Box sx={{ p: 3 }}>
        <Typography>{children}</Typography>
      </Box>
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ flexGrow: 1, bgcolor: "background.paper", display: "flex" }}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <NavLink to="/home">
          <Tab label="Home" />
        </NavLink>
        <NavLink to="/books">
          <Tab label="Books" />
        </NavLink>
        <NavLink to="/authors">
          <Tab label="Authors" />
        </NavLink>
      </Tabs>
      <TabPanel value={value} index={0}>
        <Outlet />
      </TabPanel>
    </Box>
  );
}
