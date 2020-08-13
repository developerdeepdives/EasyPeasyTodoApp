import React, { FC, useEffect } from "react";
import { Snackbar, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { useStoreState } from "./store";

const Notifications: FC = () => {
  const [open, setOpen] = React.useState(false);

  const currentNotification = useStoreState(
    state => state.notificationsModel.currentNotification
  );

  useEffect(() => {
    setOpen(true);
  }, [currentNotification]);

  const handleClick = () => {
    setOpen(false);
  };

  const handleClose = (
    event: React.SyntheticEvent | React.MouseEvent,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Snackbar
      open={open}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      onClose={handleClose}
      message={currentNotification}
      autoHideDuration={6000}
      action={
        <React.Fragment>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={() => handleClick()}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </React.Fragment>
      }
    />
  );
};

export default Notifications;
