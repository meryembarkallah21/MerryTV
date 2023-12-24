/* import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import { SearchBar } from "./";

const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ position:  "sticky", background: '#000', top: 0, justifyContent: "space-between" }}>
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
    </Link>  <h1>MerryTV</h1>
    <SearchBar />
  </Stack>
);

export default Navbar;
 */


import React from "react";
import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import { SearchBar } from "./";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: '#000',
      top: 0,
      justifyContent: "space-between",
      padding: '10px 20px', // Add padding for a more spaced appearance
      boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)', // Add a subtle box shadow
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={60} style={{ marginRight: 10 }} /> {/* Increase the logo size and add some margin */}
      <Typography variant="h4" color="white">MerryTV</Typography> {/* Use Typography for the heading */}
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
