import * as React from "react";

import { SxProps } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";

const defaultWidth = 240;

export interface SidebarProps {
  open: boolean;
  children: React.ReactElement;
  variant?: "temporary" | "permanent" | "persistent";
  sx?: SxProps;
  onClose?(): void;
}

export default function Sidebar({
  open,
  children,
  variant = "temporary",
  sx,
  onClose,
}: SidebarProps) {
  const handleClose = () => {
    onClose && onClose();
  };

  return (
    <Drawer
      variant={variant}
      open={open}
      onClose={handleClose}
      ModalProps={
        variant === "temporary"
          ? {
              keepMounted: true,
            }
          : undefined
      }
      sx={{
        width: { sm: defaultWidth },
        flexShrink: { sm: 0 },
        display: { sm: "block" },
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: defaultWidth,
        },
        ...sx,
      }}
    >
      {children}
    </Drawer>
  );
}
