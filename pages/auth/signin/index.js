import { Button, CircularProgress, FormControl, FormHelperText, Input, InputLabel, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import TemplateDefault from '../../../src/templates/Default'
import { Formik } from 'formik'
import { BoxTema, FormControlCSS } from './styles'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useToasty } from '../../../src/contexts/Toasty'

import {
    initialValues, validationSchema } from './FormValues'

const Signin = () => {

  const handleFormSubmit = async values => {
    }

    return (
        <TemplateDefault>
            <Container maxWidth="sm">
                <Typography component='h2' variant='h3' marginTop={3} marginBottom={2} align='center'>
                    Entre na sua conta
                </Typography>                   
            </Container>

            <Container maxWidth="md">
                <Box sx={BoxTema}>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleFormSubmit}
                    >
                        {
                            ({
                                touched,
                                values,
                                errors,
                                handleChange,
                                handleSubmit,
                                isSubmitting,
                            }) => {
                                return (
                                 <form onSubmit={handleSubmit}>                                
                                    <FormControl sx={FormControlCSS} error={errors.email && touched.email } fullWidth> 
                                        <InputLabel>E-mail</InputLabel>                          
                                        <Input
                                            name='email'
                                            type="email"
                                            value={values.email}
                                            onChange={handleChange}                                          
                                        />
                                        <FormHelperText>
                                            { errors.email && touched.email ? errors.email : null }
                                        </FormHelperText>
                                    </FormControl>
                                    
                                    <FormControl sx={FormControlCSS} error={errors.password && touched.password } fullWidth> 
                                        <InputLabel>Senha</InputLabel>                          
                                        <Input
                                            name='password'
                                            type="password"
                                            value={values.password}
                                            onChange={handleChange}                                          
                                        />
                                        <FormHelperText>
                                            { errors.password && touched.password ? errors.password : null }
                                        </FormHelperText>
                                    </FormControl>                                    
                                    <br /><br />
                                    {
                                      isSubmitting
                                      ? (
                                        <CircularProgress sx={
                                            {display: 'block', margin: '10px auto'}} />
                                      ) : (
                                        <Button 
                                        fullWidth
                                        variant='contained' 
                                        type='submit' 
                                        color='primary'                                    
                                        >
                                            Entrar
                                        </Button> 
                                      ) 
                                    }                                                           
                                 </form>   
                                )
                            }
                        }        
                    </Formik>
                </Box>
            </Container>
        </TemplateDefault>        
    )
}

export default Signin