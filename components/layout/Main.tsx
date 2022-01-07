import React from "react";
import { Box } from "@mui/system";

interface MainProps {
  children: React.ReactElement;
}

const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <Box component="main" sx={{ height: "100%", px: 4, py: 1 }}>
      {children}
    </Box>
  );
};

export default Main;
