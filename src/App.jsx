import './App.css'
import { EnterpriseList } from './store/features/enterprise/enterpriseList';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button';

function App() {

  return (
    <Box height="100vh" display="flex" flexDirection="column" width="100vw" >
      <Grid container spacing={2}>
        <Grid xs={12} height="5vh" bgcolor="yellow">
          <EnterpriseList></EnterpriseList>
        </Grid>
        <Grid xs={6} height="95vh" bgcolor="red">
          
        </Grid>
        <Grid xs={6} height="95vh" bgcolor="blue">
          <div>Hello</div>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App
