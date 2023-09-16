import { Box } from "@mui/material";
import Navbar from "../component/Navbar";

// varible de with 

const drawerWith= 240;

function LayautJournal({children}) {
    return ( <> 
     <Box sx={{ display: 'flex' }}>
        <Navbar  drawerWith={drawerWith}/>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            {/*nabar */} 
            {children}
        </Box>
    </Box>
    
    </> );
}

export default LayautJournal;