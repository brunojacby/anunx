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

const Signup = () => {
    const router = useRouter()
    const {setToasty} = useToasty()

    const handleFormSubmit = async values => {
        const response = await axios.post('/api/users', values)

        if (response.data.success) {
            setToasty({
              open: true,
              severity: 'success',
              text: 'Cadastro realidado com sucesso!'  
            })

            router.push('/auth/signin')
        }
    }

    return (
        <TemplateDefault>
            <Container maxWidth="sm">
                <Typography component='h2' variant='h3' marginTop={3} marginBottom={2} align='center'>
                    Criei sua conta
                </Typography>
                <Typography component='h3' variant='h4' marginTop={3} marginBottom={2} align='center'>
                    E anuncie por todo Portugal
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
                                   <FormControl sx={FormControlCSS} error={errors.name && touched.name} fullWidth> 
                                        <InputLabel>Nome</InputLabel>                          
                                        <Input
                                            name='name'
                                            value={values.name}
                                            onChange={handleChange}                              
                                        />
                                        <FormHelperText>
                                            { errors.name && touched.name ? errors.name : null }
                                        </FormHelperText>
                                    </FormControl> 

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

                                    <FormControl sx={FormControlCSS} error={errors.passwordConf && touched.passwordConf } fullWidth> 
                                        <InputLabel>Confirmação de senha</InputLabel>                          
                                        <Input
                                            name='passwordConf'
                                            type="password"
                                            value={values.passwordConf}
                                            onChange={handleChange}                                          
                                        />
                                        <FormHelperText>
                                            { errors.passwordConf && touched.passwordConf ? errors.passwordConf : null }
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
                                            Cadastrar
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

export default Signup