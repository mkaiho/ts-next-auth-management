"use client";

import React, { useMemo } from "react";

import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  IconButton,
  SxProps,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@mui/material";

export interface AppbarProps {
  title: string;
  sx?: SxProps;
  onOpenMenu?(): void;
}

export default function Appbar(props: AppbarProps) {
  const { title, sx, onOpenMenu } = props;

  const scrollTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  const elevetion = useMemo(() => (scrollTrigger ? 4 : 0), [scrollTrigger]);

  return (
    <>
      <AppBar sx={sx} elevation={elevetion}>
        <Toolbar>
          {onOpenMenu && (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={onOpenMenu}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" component="div">
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
}
