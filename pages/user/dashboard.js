import { Button, Grid, Typography } from '@mui/material'
import { Container, Box } from '@mui/system'
import TemplateDefault from '../../src/templates/Default'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Card from '../../src/components/Card'
import ProductsModel from '../../src/models/products'
import { getSession } from "next-auth/react"
import dbConnect from '../../src/utils/dbConnect';
import { useToasty } from '../../src/contexts/Toasty';
import {formatCurrency} from '../../src/utils/currency'
import { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Home = ({products}) => {

  const [productId, setproductId] = useState()
  const [removedProducts, setRemovedProducts] = useState([])
  const [openConfirmModal, setOpenConfirmModal] = useState(false)
  
  const { setToasty }= useToasty()

  const handleCloseModal = () => {
    setOpenConfirmModal(false);
  }
 
  const handleClickRemove = (productId) => {
    setproductId(productId)
    setOpenConfirmModal(true)
  }

  const handleConfirmRemove = () => {
    axios.delete('/api/products/delete', {
      data: {
        id: productId
      }
    })
    .then(handleSuccess)
    .catch(handleError)
  }

  const handleSuccess = () => {
    setOpenConfirmModal(false)
    setRemovedProducts([...removedProducts, productId])
    setToasty({
      open: true,
      severity: 'success',
      text: 'Anúncio removido com sucesso!'
    })
  }

  const handleError = () => {    
    setOpenConfirmModal(false)
    setToasty({
      open: true,
      severity: 'error',
      text: 'Ops, ocorreu um erro!'
    })
  }


  return (
    <TemplateDefault>
      <Dialog
        open={openConfirmModal}
        onClose={handleCloseModal}        
      >
        <DialogTitle>
          Deseja realmente remover este anúncio?
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Ao confirmar a operação, não poderá voltar atrás.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal}>Cancelar</Button>
          <Button onClick={handleConfirmRemove} autoFocus>
            Remover
          </Button>
        </DialogActions>
      </Dialog>

      <Container maxWidth="sm" textAlign="center">
        <Typography component='h1' variant='h2' marginTop={3} marginBottom={2} align='center'>
          Meus Anúncios
        </Typography>
        <Box textAlign="center">
          <Link href={'/user/publish'} style={{textDecoration: 'none', color: 'white'}}>
            <Button variant='contained' sx={{marginBottom: 3}}>
            Publicar novo anúncio
            </Button>
          </Link>
        </Box>        
      </Container>
      <Container maxWidth="md">
        {
          products.lenght === 0 &&
          <Typography component='div' variant='body1' marginTop={3} marginBottom={2} align='center' color="textPrimary">
            Nenhum anúncio publicado
          </Typography>
        }
        <Grid container spacing={4}>
          {
            products.map(product => {
              if (removedProducts.includes(product._id)) return null

            return (
              <Grid key={product._id} item xs={12} sm={6} md={4}> 
                <Card            
                image={`/uploads/${product.files[0].name}`}
                title={product.title}
                subtitle={formatCurrency(product.price)}
                actions={
                  <>
                  <Button size="small" color='primary'>Editar</Button>
                  <Button size="small" color='error' onClick={() => handleClickRemove(product._id)}>Remover</Button>
                  </>
                }
                />
              </Grid>
            )
          })
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

