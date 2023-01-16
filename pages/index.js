import React, { useState } from 'react'
import { Container, Grid, IconButton, InputBase, Paper, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import TemplateDefault from '../src/templates/Default'
import { useRouter } from 'next/router';
import dbConnect from '../src/utils/dbConnect';
import ProductsModel from '../src/models/products'
import { formatCurrency } from '../src/utils/currency'
import Link from 'next/link';
import Card from '../src/components/Card'

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

const Home = ({ products }) => {

    const [search, setSearch] = useState()
    const router = useRouter()

    const handleSubmitSearch = () => {
        router.push({
            pathname: `/search/${search}`,
        })
    }

    return (
        <TemplateDefault>
            <Container maxWidth="md" sx={searchContainer}>
                <Typography component="h1" variant='h3' align='center' color='textPrimary'>
                    O que deseja encontrar?
                </Typography>
                <Paper sx={searchBox}>
                    <InputBase
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder='Ex.: iPhone 14 com garantia'
                    fullWidth                    
                    />                    
                    <IconButton onClick={handleSubmitSearch}>
                        <SearchIcon />                                      
                    </IconButton>
                </Paper>
            </Container>

            <Container maxWidth="lg" sx={cardGrid}>
                <Typography component="h2" variant='h4' align='center' color='textPrimary'>
                    Destaques
                </Typography>
                <br />
                <Grid container spacing={4}>
                    {
                    products.map(product => {
                    //const category = slugify(product.category).toLocaleLowerCase()
                    //const title = slugify(product.title).toLocaleLowerCase()

                    return (                
                    <Grid key={product._id} item xs={12} sm={6} md={4}>
                    <Link href={`/categoria/nome/${product._id}`}>                        
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

export async function getServerSideProps() {
    await dbConnect()
  
    const products = await ProductsModel.aggregate([{
      $sample: { size: 6 }
    }])
  
    return {
      props: {
        products: JSON.parse(JSON.stringify(products))
      }
    }
}

export default Home

