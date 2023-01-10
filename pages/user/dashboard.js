import { Button, Grid, Typography } from '@mui/material'
import { Container, Box } from '@mui/system'
import TemplateDefault from '../../src/templates/Default'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

import Card from '../../src/components/Card'



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Home() {
  
  return (
    <TemplateDefault>
      <Container maxWidth="sm">
        <Typography component='h1' variant='h2' marginTop={3} marginBottom={2} align='center'>
          Meus Anúncios
        </Typography>
        <Box textAlign="center">
          <Button variant='contained' sx={{marginBottom: 3}}>
            Publicar novo anúncio</Button>
        </Box>        
      </Container>
      <Container maxWidth="md">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}> 
            <Card            
            image={'https://source.unsplash.com/random'}
            title='Produto X'
            subtitle='R$ 50,00'
            actions={
              <>
              <Button size="small" color='secondary'>Editar</Button>
              <Button size="small" color='error'>Remover</Button>
              </>
            }
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}> 
            <Card            
            image={'https://source.unsplash.com/random'}
            title='Produto X'
            subtitle='R$ 50,00'
            actions={
              <>
              <Button size="small" color='secondary'>Editar</Button>
              <Button size="small" color='error'>Remover</Button>
              </>
            }
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}> 
            <Card            
            image={'https://source.unsplash.com/random'}
            title='Produto X'
            subtitle='R$ 50,00'
            actions={
              <>
              <Button size="small" color='secondary'>Editar</Button>
              <Button size="small" color='error'>Remover</Button>
              </>
            }
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}> 
            <Card            
            image={'https://source.unsplash.com/random'}
            title='Produto X'
            subtitle='R$ 50,00'
            actions={
              <>
              <Button size="small" color='secondary'>Editar</Button>
              <Button size="small" color='error'>Remover</Button>
              </>
            }
            />
          </Grid>
        </Grid>
      </Container>    
    </TemplateDefault>
  )
}