import React from "react";
import "./App.css";
import AppRouter from "./config/Router/router";
import { Box } from "@mui/system";

function App() {
  
  return (
    <>
      <Box sx={{ textAlign: "center",}}>
        <AppRouter />
      </Box>
    </>
  );
}

export default App;

