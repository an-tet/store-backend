import { Grid } from '@mui/material';
import { Typography } from '@mui/material';
import { RootLayout } from '../../RootLayout';

export const ListProductPage = () => {
  return (
    <RootLayout>
      <Grid
        container
        sx={{
          display: 'flex',
          mt: 5,
        }}
      >
        <Grid item>
          <Typography variant='h1'>List Product Page</Typography>
        </Grid>
      </Grid>
    </RootLayout>
  );
};