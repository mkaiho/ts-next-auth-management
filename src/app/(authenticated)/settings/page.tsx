"use client";

import { Box, Paper, Typography } from "@mui/material";

export default function Settings() {
  return (
    <Box sx={{ my: 2 }}>
      <Typography>
        {[...new Array(120)]
          .map(
            () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
          )
          .join("\n")}
      </Typography>
    </Box>
  );
}
