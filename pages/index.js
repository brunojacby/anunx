import React from 'react'
import { CardActions, CardContent, Container, Card, CardMedia, Button,Grid, IconButton, InputBase, Paper, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { Box } from '@mui/system'
import TemplateDefault from '../src/templates/Default'

const searchContainer = {
    padding: 10,
    color: 'blue',
}

const searchBox = theme => ({
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(0, 2),
    marginTop: 2,
})

const cardGrid = {
    backgroundColor: 'blue',
}

const Home = () => {
    return (
        <TemplateDefault>
            <Container maxWidth="md" sx={searchContainer}>
                <Typography component="h1" variant='h3' align='center' color='textPrimary'>
                    O que deseja encontrar?
                </Typography>
                <Paper sx={searchBox}>
                    <InputBase
                    placeholder='Ex.: iPhone 14 com garantia'
                    fullWidth
                    />                    
                    <IconButton>
                        <SearchIcon />                                      
                    </IconButton>
                </Paper>
            </Container>

            <Container maxWidth="md" sx={cardGrid}>
                <Typography component="h2" variant='h4' align='center' color='textPrimary'>
                    Destaques
                </Typography>
                <br />
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
                    </CardContent>
                    </Card>
                </Grid>                
                </Grid>
            </Container>    
        </TemplateDefault>
    )   
}

export default Home