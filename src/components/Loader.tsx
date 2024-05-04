import React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

interface LoaderProps {
  show: boolean;
  handleClose?: React.MouseEventHandler<HTMLElement>;
}

const Loader = ({ show, handleClose }: LoaderProps) => {
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
