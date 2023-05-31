import React from "react";
import { Box,Button,Container,Grid,Paper,TextField,Typography,} from "@mui/material";
import { NavLink } from "react-router-dom";



export const LoginPage  = () => {

  return (
    <Container maxWidth="sm">
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "100vh" }}
      >
        <Grid item>
          <Paper sx={{ padding: "1.2em", borderRadius: "1.5em" }}>
            <Typography sx={{ mt: 1, mb: 1 }} variant="h4">
              Iniciar sesion
            </Typography>
            <Box component="form">
              <TextField
                name="username"
                margin="normal"
                type="text"
                fullWidth
                label="Email"
                sx={{ mt: 2, mb: 1.5 }}
                required
              />
              <TextField
                name="password"
                margin="normal"
                type="password"
                fullWidth
                label="Password"
                sx={{ mt: 1.5, mb: 1.5 }}
                required
              />
            <NavLink to='/Informacion'> 
              <Button
                fullWidth
                type="submit"
                variant="contained"
                sx={{ mt: 1.5, mb: 3 }}
              >
                Iniciar sesion {/* <NavLink to={'InformacionPage'}> Iniciar Sesión </NavLink>  */}
              </Button>
              </NavLink> 
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
