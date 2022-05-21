// @mui
// import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';

// ----------------------------------------------------------------------

export default function DashboardHome() {
  // const theme = useTheme();

  return (
    <Page title="Dashboard">
      {/* <Container maxWidth="xl"> */}
      <Typography variant="h4" sx={{ mb: 5 }}>
        Home
      </Typography>

      <Grid container spacing={3}>
        <br />
      </Grid>
      {/* </Container> */}
    </Page>
  );
}
