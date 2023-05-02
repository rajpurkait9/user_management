import {
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

function CreateUserPage() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
        padding={10}
      >
        <Typography align="center" variant="h4">
          <b>Create User</b>{" "}
        </Typography>
        <Box
          height={350}
          width={400}
          component={Paper}
          elevation={2}
          sx={{
            padding: 3,
            borderRadius: 5,
          }}
        >
          <Stack spacing={2}>
            <TextField label="name" />
            <TextField label="email" />
            <TextField label="age" />
            <TextField label="status" />
            <Button variant="contained">submit</Button>
          </Stack>
        </Box>
      </Box>
    </>
  );
}

export default CreateUserPage;
