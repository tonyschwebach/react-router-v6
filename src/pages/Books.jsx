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
  useMatch,
  useResolvedPath,
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

const BooksPage = () => {
  let { genre } = useParams();

  const [value, setValue] = React.useState(0);
  const [activeTab, setActiveTab] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const genres = ["fiction", "nonfiction", "encyclopedia"];

  React.useEffect(() => {
    // const tabIndex = Object.keys(titlesMap).findIndex(
    //   (el) => el === genre
    // );
    const tabIndex = genres.findIndex((el) => el === genre);
    console.log(tabIndex);
    setValue(tabIndex > -1 ? tabIndex : 0);
  }, [genre]);

  return (
    <Box>
      <Typography>Books Page</Typography>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
      >
        {genres.map((genre) => {
          return (
            // <NavLink
            //   style={({ isactive }) => {
            //     return { textDecoration: "none", color:"inherit" };
            //   }}
            //   className=".MuiTab-textColorInherit"
            //   to={genre}
            // >
            //   <Tab
            //     label={genre}
            //     className={() => {
            //       const resolved = useResolvedPath(genre);
            //       const match = useMatch({
            //         path: resolved.pathname,
            //         end: true,
            //       });
            //       return match ? ".Mui-selected " : "";
            //     }}
            //   />
            // </NavLink>
            <Tab
              // label={genre}
              label={
                <NavLink to={genre} style={{}}>
                  {genre}
                </NavLink>
              }
              //  sx={{display:"flex"}}
              sx={{
                "& a": {
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                  width: "100%",
                  color: "inherit",
                },
              }}
              component="a"
              onClick={(event) => {
                event.preventDefault();
              }}
            >
              <NavLink
                to={genre}
                style={{ height: "100%", width: "100%", background: "red" }}
              >
                {genre}
              </NavLink>
            </Tab>
          );
        })}
      </Tabs>
      <TabPanel value={value} index={0}>
        <Outlet />
      </TabPanel>
    </Box>
  );
};

export default BooksPage;
