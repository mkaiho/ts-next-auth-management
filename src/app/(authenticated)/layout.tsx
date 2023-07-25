"use client";

import React, { useEffect, useMemo } from "react";

import MailIcon from "@mui/icons-material/Mail";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Theme,
  Toolbar,
  useMediaQuery,
} from "@mui/material";

import Appbar from "@/components/Appbar";
import Sidebar, { SidebarProps } from "@/components/Sidebar";
import { useSidebar } from "@/components/Sidebar/hooks";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isMobileSize = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  const sidebarProps = useSidebar();
  const isSidebarOpen = useMemo(() => {
    return !isMobileSize || sidebarProps.isOpen;
  }, [isMobileSize, sidebarProps.isOpen]);
  const sidebarVariant = useMemo<SidebarProps["variant"]>(() => {
    return isMobileSize ? "temporary" : "persistent";
  }, [isMobileSize]);

  const handleOpenSidebar = () => {
    sidebarProps.open();
  };

  const handleCloseSidebar = () => {
    sidebarProps.close();
  };

  useEffect(() => {
    if (!isMobileSize) {
      handleCloseSidebar();
    }
  }, [isMobileSize]);

  return (
    <>
      <Appbar
        title="MyApp"
        onOpenMenu={isMobileSize ? handleOpenSidebar : undefined}
        sx={{
          width: { sm: `calc(100% - ${240}px)` },
          ml: { sm: `${240}px` },
        }}
      />
      <Sidebar
        variant={sidebarVariant}
        open={isSidebarOpen}
        onClose={handleCloseSidebar}
      >
        <>
          <Toolbar />
          <Divider />
          <List>
            {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {["All mail", "Trash", "Spam"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </>
      </Sidebar>
      <Box
        sx={{
          width: { sm: `calc(100% - ${240}px)` },
          ml: { sm: `${240}px` },
        }}
      >
        {children}
      </Box>
    </>
  );
}
