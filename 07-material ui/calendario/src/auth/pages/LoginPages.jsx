import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Google } from '@mui/icons-material';

function Login() {
  return (
   
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '100vh'}}
    > 
      <Grid item xs={10} sm={6} md={4}>
      <Typography variant='h5' sx={{ mb: 1 }}>Login</Typography>

        <TextField
          label="Correo"
          type="email"
          placeholder="correo@google.com"
          fullWidth
          sx={{ mb: 2 , }}
        />

        <TextField
          label="Contraseña"
          type="password"
          placeholder="Contraseña"
          fullWidth
          sx={{ mb: 2 }}
        />

        <Grid container spacing={2} sx={{ mb: 2 }}>
          <Grid item xs={12} sm={6}>
            <Button variant="contained" fullWidth>
              Login
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button variant="contained" fullWidth>
              <Google />
              <Typography sx={{ ml: 1 }}>Google</Typography>
            </Button>
          </Grid>
        </Grid>

        <Grid container justifyContent="flex-end">
          <Link component={RouterLink} color="inherit" to="/auth/registro">
            Crear una cuenta
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Login;