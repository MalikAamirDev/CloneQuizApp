import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


export default function NavMenu() {
  return (
    <Box sx={{ flexGrow: 1 }}>
   
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5"  sx={{ flexGrow: 1 , fontWeight: 600}}>
            Quiz App
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}