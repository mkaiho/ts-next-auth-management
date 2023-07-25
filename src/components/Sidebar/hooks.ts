import { useState } from "react";

export const useSidebar = () => {
  const [isOpen, setOpen] = useState(false);
  const open = () => {
    setOpen(true);
  };
  const close = () => {
    setOpen(false);
  };

  return {
    isOpen,
    open,
    close,
  };
};
