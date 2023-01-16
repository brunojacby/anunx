import { Button, Grid, Typography } from '@mui/material'
import { Container, Box } from '@mui/system'
import TemplateDefault from '../../src/templates/Default'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

import Card from '../../src/components/Card'

import ProductsModel from '../../src/models/products'
import { getSession } from "next-auth/react"
import dbConnect from '../../src/utils/dbConnect';

import {formatCurrency} from '../../src/utils/currency'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Home = ({products}) => {
  
  console.log(products)

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
          {
            products.map(product => (
              <Grid key={product._id} item xs={12} sm={6} md={4}> 
                <Card            
                image={`/uploads/${product.files[0].name}`}
                title={product.title}
                subtitle={formatCurrency(product.price)}
                actions={
                  <>
                  <Button size="small" color='primary'>Editar</Button>
                  <Button size="small" color='error'>Remover</Button>
                  </>
                }
                />
              </Grid>
            ))
          }          
        </Grid>
      </Container>    
    </TemplateDefault>
  )
}

export async function getServerSideProps({req}) {
  const session = await getSession({req})
  await dbConnect()
  const products = await ProductsModel.find({  })
  
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    }
  }
}

export default Home

