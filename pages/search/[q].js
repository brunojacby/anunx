import React from 'react'
import Link from 'next/link';

import { Container, CardMedia, Button, Grid, IconButton, InputBase, Paper, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

//import slugify from 'slugify'
import TemplateDefault from '../../src/templates/Default'
import { formatCurrency } from '../../src/utils/currency'
import ProductsModel from '../../src/models/products'

import Card from '../../src/components/Card'

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
    
}

const List = ({products}) => {

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
                    <IconButton type="submit" aria-label="search">
                        <SearchIcon />                                      
                    </IconButton>
                </Paper>
            </Container>

            <Container maxWidth="lg" sx={cardGrid}>
                <Typography component="h2" variant='h4' align='center' color='textPrimary'>
                    Anúncios
                </Typography>
                <Typography component="span" variant="subtitle2">
                    ENCONTRADOS {products.length} ANÚNCIOS 
                </Typography>
                <br /><br />
                <Grid container spacing={5}>
                {
                    products.map(product => {
                    //const category = slugify(product.category).toLocaleLowerCase()
                    //const title = slugify(product.title).toLocaleLowerCase()

                    return (                
                        <Grid key={product._id} item xs={12} sm={6} md={4}>
                            <Link href={`/category/title/${product._id}`}>                                
                                <Card
                                    image={`/uploads/${product.files[0].name}`}
                                    title={product.title}
                                    subtitle={formatCurrency(product.price)}
                                />                                
                            </Link>
                        </Grid>                        
                    )
                })
                }                 
                </Grid>   
            </Container>    
        </TemplateDefault>
    )   
}

export async function getServerSideProps({ query }) {
    const { q } = query
  
    const products = await ProductsModel.find({
      $or: [
        { 
          title: { 
            $regex: q,
            $options: 'i'
          } 
        },
        { 
          description: { 
            $regex: q,
            $options: 'i'
          } 
        },
      ]
    })
  
    return {
      props: {
        products: JSON.parse(JSON.stringify(products))
      }
    }
  }

export default List