import React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";

interface LoaderProps {
  show?: boolean;
  fullScreen?: boolean;
  handleClose?: React.MouseEventHandler<HTMLElement>;
}

const Loader = ({
  show = true,
  fullScreen = false,
  handleClose,
}: LoaderProps) => {
  if (!fullScreen) {
    return show ? (
      <Box
        display="flex"
        justifyContent="center"
        marginTop={10}
        marginBottom={10}
      >
        <CircularProgress color="primary" />
      </Box>
    ) : (
      <></>
    );
  }
  return (
    <Backdrop
      sx={{ color: "blue", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={show}
      onClick={handleClose}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};
export default Loader;
