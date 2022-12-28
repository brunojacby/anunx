import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import { Container, width, height, Box } from '@mui/system'
import TemplateDefault from '../../src/templates/Default'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import GlobalStyles from '@mui/system';


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
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                sx={{ height: 200 }}
                image="https://source.unsplash.com/random"
                title="Nome do Produto"
              />
              <CardContent>
                <Typography variant="h5" component="h2">
                  Produto X
                </Typography>
                <Typography variant="h5" component="h2">
                  R$ 20,00
                </Typography>
                <CardActions>
                  <Button size="small" color='secondary'>Editar</Button>
                  <Button size="small" color='error'>Remover</Button>
                </CardActions>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                sx={{ height: 200 }}
                image="https://source.unsplash.com/random"
                title="Nome do Produto"
              />
              <CardContent>
                <Typography variant="h5" component="h2">
                  Produto X
                </Typography>
                <Typography variant="h5" component="h2">
                  R$ 20,00
                </Typography>
                <CardActions>
                  <Button size="small" color='secondary'>Editar</Button>
                  <Button size="small" color='error'>Remover</Button>
                </CardActions>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                sx={{ height: 200 }}
                image="https://source.unsplash.com/random"
                title="Nome do Produto"
              />
              <CardContent>
                <Typography variant="h5" component="h2">
                  Produto X
                </Typography>
                <Typography variant="h5" component="h2">
                  R$ 20,00
                </Typography>
                <CardActions>
                  <Button size="small" color='secondary'>Editar</Button>
                  <Button size="small" color='error'>Remover</Button>
                </CardActions>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                sx={{ height: 200 }}
                image="https://source.unsplash.com/random"
                title="Nome do Produto"
              />
              <CardContent>
                <Typography variant="h5" component="h2">
                  Produto X
                </Typography>
                <Typography variant="h5" component="h2">
                  R$ 20,00
                </Typography>
                <CardActions>
                  <Button size="small" color='secondary'>Editar</Button>
                  <Button size="small" color='error'>Remover</Button>
                </CardActions>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>    
    </TemplateDefault>
  )
}