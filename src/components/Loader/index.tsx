import React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";

interface LoaderProps {
  show?: boolean;
  fullScreen?: boolean;
  handleClose?: React.MouseEventHandler<HTMLElement>;
}

const Loader = React.forwardRef(
  (
    { show = true, fullScreen = false, handleClose }: LoaderProps,
    ref: React.ForwardedRef<HTMLElement>
  ) => {
    if (!fullScreen) {
      return (
        <Box
          ref={ref}
          display="flex"
          justifyContent="center"
          marginTop={10}
          marginBottom={10}
        >
          {show && <CircularProgress color="primary" />}
        </Box>
      );
    }
    return (
      <Backdrop
        ref={ref}
        sx={{ color: "blue", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={show}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }
);

export default Loader;
