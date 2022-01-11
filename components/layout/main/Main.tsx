import React from "react";
import Box from "@mui/material/Box";
import styles from "./styles";

interface MainProps {
  children: React.ReactElement;
}

const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <Box component="main" sx={styles.main}>
      {children}
    </Box>
  );
};

export default Main;
