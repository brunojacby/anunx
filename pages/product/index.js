import { Avatar, Button, Card, CardHeader, CardMedia, Chip, Grid, Paper, Typography } from "@mui/material"
import { Box, Container } from "@mui/system"
import React from "react"
import TemplateDefault from '../../src/templates/Default'
import Carousel from 'react-material-ui-carousel'


const box = {
    backgroundColor: 'white',
    padding: 3,
    marginBottom: 3,
    display: 'flex',
    flexDirection: 'column',
}

const titles = {

}

const productName = {
    margin: '15px 0',
}

const price = {
    fontWeight: 'bold',
    marginBottom: 3,
}

const chip = {
    width: '95px',
}

const card = {
    height: '100%',
}

const cardMedia = {
    paddingTop: '56%',
}


const Product = () => {

    return (
        <TemplateDefault>
            <Container maxWidth="lg">
                <Grid container spacing={3}>
                    <Grid item xs={8}>
                        <Box sx={box}>
                            <Carousel
                            autoPlay={false}
                            animation="slide"
                            navButtonsAlwaysVisible
                            navButtonsProps={{
                                style: {
                                    
                                    color: 'white',
                                }
                            }}
                            >
                                <Card sx={card}>
                                    <CardMedia 
                                    sx={cardMedia}
                                    image="https://source.unsplash.com/random?a=1"
                                    title="Titulo da imagem"
                                    />
                                </Card>
                                <Card sx={card}>
                                    <CardMedia 
                                    sx={cardMedia}
                                    image="https://source.unsplash.com/random?a=2"
                                    title="Titulo da imagem"
                                    />
                                </Card>                            
                            </Carousel>
                        </Box>

                        <Box sx={box}>
                            <Typography component="h6" variant="h6" sx={titles}>Publicar</Typography>
                            <Typography component="h4" variant="h4" sx={productName}>Jaguar</Typography>
                            <Typography component="h4" variant="h4" sx={price}>R$ 50.000,00</Typography>
                            <Chip sx={chip} label="Categoria" />
                        </Box>

                        <Box sx={box}>                           
                            <Typography component="h6" variant="h6" >Descrição</Typography>
                            <Typography component="p" variant="body2" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque alias odio quod, consequatur blanditiis facere corrupti. Enim assumenda beatae quos repudiandae distinctio consequuntur repellendus perferendis voluptatum aliquid error! Id, voluptatum!
                            </Typography>                            
                        </Box>
                    </Grid>

                    <Grid item xs={4}>
                        <Card elevation={0} sx={box}>
                            <CardHeader 
                                avatar={
                                    <Avatar>B</Avatar>
                                }
                                title="Bruno Jacby"
                                subheader="bruno@mail.com"
                            />
                            <CardMedia
                                image="https://source.unsplash.com/random"
                                title="Bruno Jacby"
                            />
                        </Card>
                        <Box sx={box}>
                            <Typography component="h6" variant="h6" sx={titles}>Localização</Typography>
                        </Box>
                        
                    </Grid>
                </Grid>
            </Container>
        </TemplateDefault>
    )
}

export default Product