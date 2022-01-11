import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { withRouter } from 'react-router-dom'


const NavBar = (props) => {

  function navigateToPage(page) {
    props.history.push(page)
  }

  return (
    <AppBar position="static" style={{background:"#20c325"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img 
            style={{width:'70px', height:'60px'}} 
            onClick={()=>navigateToPage("/")}
            src="https://i.pinimg.com/originals/36/60/b1/3660b1fbf2ecd990202c611b6a9942df.png" />
          <Typography
            variant="h3"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            onClick={()=>navigateToPage("/")}
          >
            Rick and Morty
          </Typography>

        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default withRouter(NavBar);