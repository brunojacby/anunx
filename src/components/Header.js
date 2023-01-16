import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, Menu, MenuItem } from '@mui/material';
import Link from 'next/link'
import { AccountCircle } from '@mui/icons-material';
import { Container } from '@mui/system';
import { useSession, signOut } from 'next-auth/react';

const navBar = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItens: 'center',  
}

export default function ButtonAppBar({ user }) {

  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { data: session, status } = useSession()

  return (    
    <>
      <AppBar position="static" elevation={3}>
        <Container maxWidth="lg">
          <Toolbar sx={navBar}>
            <Link href="/" style={{textDecoration: 'none', color: 'white'}}>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              My.com
            </Typography>
            </Link>
            <Link href={session ? '/user/publish' : '/auth/signin' } style={{textDecoration: 'none', color: 'white'}}>
                <Button color="inherit" variant="outlined">
                  Anunciar e Vender
                </Button>
            </Link>
                      
            <Button 
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              color='inherit'
              style={{color: 'white'}}
            >
              {
                true === false
              ? <Avatar />
              : <AccountCircle />
              }
              <Typography variant="h7" style={{marginLeft: 5}}>
                Criar Conta / Login
              </Typography>
            </Button>
          

            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              
              <Link href="/user/dashboard" style={{textDecoration: 'none', color: 'black'}}>
                  <MenuItem>Meus anúncios</MenuItem>
              </Link>
              <Link href="/user/publish" style={{textDecoration: 'none', color: 'black'}}>
                  <MenuItem>Publicar novo anúncio</MenuItem>
              </Link>              
              <MenuItem
              onClick={() => signOut({ 
                callbackUrl: '/'
              })}>Sair</MenuItem>                           
            </Menu>
          </Toolbar>
        </Container>
      </AppBar>        
    </>    
  );
}