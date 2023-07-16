import Image from "next/image";
import {
  Box,
  Button,
  Container,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import HomeIcon from "@mui/icons-material/Home";
export default function Home() {
  return (
    <>
      <Box>
        <Container>
          <Paper
            sx={{
              px: 2,
              py: 4,
            }}
          >
            <Stack>
              <Typography variant="h1">hell world</Typography>
              <HomeIcon />
            </Stack>
            <Button>Button</Button>
          </Paper>
        </Container>
      </Box>
    </>
  );
}
