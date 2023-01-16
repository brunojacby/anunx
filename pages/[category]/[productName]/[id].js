import { Avatar, Button, Card, CardHeader, CardMedia, Chip, Grid, Paper, Typography } from "@mui/material"
import { Box, Container } from "@mui/system"
import React from "react"

import TemplateDefault from '../../../src/templates/Default'
import Carousel from 'react-material-ui-carousel'
import dbConnect from "../../../src/utils/dbConnect"
import ProductsModel from '../../../src/models/products'
import { formatCurrency } from "../../../src/utils/currency"


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


const Product = ({product}) => {

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
                                {
                                    product.files.map(file => (
                                        <Card key={file.name} sx={card}>
                                            <CardMedia 
                                            sx={cardMedia}
                                            image={`/uploads/${file.name}`}
                                            title={product.title}
                                            />
                                        </Card>
                                    ))
                                }                                                                                         
                            </Carousel>
                        </Box>

                        <Box sx={box} textAlign="left">
                            <Typography component="h6" variant="h6" sx={titles}>Publicado 15 de Janeiro de 2023</Typography>
                            <Typography component="h4" variant="h4" sx={productName}>{product.title}</Typography>
                            <Typography component="h4" variant="h4" sx={price}>{formatCurrency(product.price)}</Typography>
                            <Chip sx={chip} label="Categoria" />
                        </Box>

                        <Box sx={box}>                           
                            <Typography component="h6" variant="h6" >Descrição</Typography>
                            <Typography component="p" variant="body2" >{product.description}
                            </Typography>                            
                        </Box>
                    </Grid>

                    <Grid item xs={4}>
                        <Card elevation={0} sx={box}>
                            <CardHeader 
                                avatar={
                                    <Avatar src={product.user.image}>
                                        { product.user.image || product.user.name[0] }
                                    </Avatar>
                                }
                                title={product.user.name}
                                subheader={product.user.email}
                            />
                            <CardMedia
                                image={product.user.image}
                                title={product.user.name}
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

export async function getServerSideProps({ query }) {
    const { id } = query
  
    await dbConnect()
    
    const product = await ProductsModel.findOne({ _id: id })
  
    return {
      props: {
        product: JSON.parse(JSON.stringify(product))
      }    
    }
  }

export default Product