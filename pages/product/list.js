import React from "react"
import { Card, CardContent, CardMedia, Grid, IconButton, InputBase, Paper, Typography } from "@mui/material"
import { Box, Container } from "@mui/system"
import TemplateDefault from '../../src/templates/Default'
import SearchIcon from '@mui/icons-material/Search';


const searchContainer = {
    padding: 10,       
}

const searchBox = theme => ({
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(0, 2),
    marginTop: 2,
})

const gridBox = theme => ({
    background: 'white',
    padding: 3, 
})

const List = () => {
    return (        
        <TemplateDefault>
            <Container maxWidth="lg" sx={searchContainer}>                
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={12}>
                        <Paper component="form" sx={searchBox}>
                            <InputBase
                            placeholder='Ex.: iPhone 14 com garantia'
                            fullWidth
                            />                    
                            <IconButton type="submit" aria-label="search">
                                <SearchIcon  />                                 
                            </IconButton>
                        </Paper>
                    </Grid>
                </Grid> 
                <br /><br />

                <Grid sx={gridBox}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Box>
                            <Typography component="h6" variant="h6">
                                Anúncios
                            </Typography>
                            <Typography component="span" variant="subtitle2">
                                ENCONTRADOS 200 ANÚNCIOS
                            </Typography>
                            <br /><br />
                            <Grid container spacing={3}>
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
                        </Box>
                    </Grid>
                </Grid>
                
            </Container>
        </TemplateDefault>
    )
}

export default List