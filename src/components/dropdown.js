import React, { useState } from "react";

import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import ArrowDropDownCircleIcon from "@material-ui/icons/ArrowDropDownCircle";
import CallIcon from "@material-ui/icons/Call";
import EmailIcon from "@material-ui/icons/Email";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import { IconButton } from "@material-ui/core";

function Dropdown() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div style={{ flex: 1, width: "100%" }}>
        <span style={{ color: "blue", fontSize: 16 }}>ansarimam@gmail.com</span>
        <IconButton
          variant="text"
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
          color="secondary"
        >
          <ArrowRightIcon />
        </IconButton>{" "}
      </div>

      <p></p>

      <Button
        variant="text"
        aria-controls="simple-menu"
        aria-haspopup="true"
        onMouseOver={handleClick}
        color="secondary"
      >
        <ArrowRightIcon />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <ArrowDropDownCircleIcon color="primary" />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <CallIcon style={{ padding: 0, color: "blue" }} />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <EmailIcon />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ChatBubbleIcon />
        </MenuItem>
      </Menu>
    </div>
  );
}

export default Dropdown;
