import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Routes,
  Outlet,
  NavLink,
  useParams,
} from "react-router-dom";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { TabPanel } from "../components/NavBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Layout/>} errorElement={<ErrorPage />}>
//       <Route index path="/" element={<Home />} />
//       <Route index path="home" element={<Home />} />
//       <Route path="books" element={<Books />} />
//       <Route path="authors" element={<Authors />} />
//     </Route>
//   )
// );

const GenresTab = () => {
  const [value, setValue] = React.useState(0);

  let { genre, title } = useParams();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const titlesMap = {
    fiction: ["harry potter", "narnia", "hobbit"],
    nonfiction: ["win friends and influence people", "biography"],
  };

  React.useEffect(() => {
    // const tabIndex = Object.keys(titlesMap).findIndex(
    //   (el) => el === genre
    // );
    const tabIndex = titlesMap[genre]?.findIndex((el) => el === title);


    // setValue(tabIndex > -1 ? tabIndex : 0);
    setValue(tabIndex );

  }, [genre, title]);

  return (
    <Box>
      <Typography>Genres component</Typography>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
      >
        {(genre in titlesMap || genre === undefined) &&
          titlesMap[genre ?? "fiction"].map((genre) => {
            return (
              <NavLink to={genre} style={{ textDecoration: "none" }}>
                <Tab label={genre} />
              </NavLink>
            );
          })}
      </Tabs>
      <TabPanel value={value} index={0}>
        <Outlet />
      </TabPanel>
    </Box>
  );
};

export default GenresTab;
