import './App.css'
import { EnterpriseList } from './store/features/enterprise/enterpriseList';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button';
import { EnterpriseDetails } from './store/features/enterprise/enterpriseDetails';

function App() {

  return (
    <Box height="100vh" display="flex" flexDirection="column" width="100vw" >
      <Grid container spacing={2}>
        <Grid xs={12} height="5vh" bgcolor="yellow">
          Admin tool for skip_it
        </Grid>
        <Grid xs={4} height="95vh">
          <EnterpriseList></EnterpriseList>
        </Grid>
        <Grid xs={4} height="95vh">
          <EnterpriseDetails></EnterpriseDetails>
        </Grid>
        <Grid xs={4} height="95vh" bgcolor="black">
          <div>log</div>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App
