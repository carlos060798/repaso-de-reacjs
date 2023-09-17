import { Toolbar } from '@mui/material';
import { Box } from '@mui/system'
import NavBar from '../component/Navbar';
import SideBar from '../component/Saibar';


const drawerWidth = 280;

function  JournalLayout ({ children })  {
  return (
    <Box sx={{ display: 'flex' }}>

        <NavBar drawerWidth={ drawerWidth } />

        <SideBar drawerWidth={ drawerWidth } />

        <Box 
            component='main'
            sx={{ flexGrow: 1, p: 3 }}
        >
            <Toolbar />

            { children }
            
        </Box>
    </Box>
  )
}


export default JournalLayout;