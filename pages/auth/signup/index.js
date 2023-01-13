import { Button, FormControl, FormHelperText, Input, InputLabel, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import TemplateDefault from '../../../src/templates/Default'
import { Formik } from 'formik'
import { BoxTema, FormControlCSS } from './styles'

import {
    initialValues, validationSchema } from './FormValues'

const Signup = () => {

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
                        onSubmit={(values) => {
                            console.log('ok, form enviado', values)
                        }}
                    >
                        {
                            ({
                                touched,
                                values,
                                errors,
                                handleChange,
                                handleSubmit,
                            }) => {
                                return (
                                 <form onSubmit={handleSubmit}>
                                   <FormControl sx={FormControlCSS} error={errors.name && touched.name} fullWidth> 
                                        <InputLabel>Título do Anúncio</InputLabel>                          
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
                                    <Button 
                                    fullWidth
                                    variant='contained' 
                                    type='submit' 
                                    color='primary'                                    
                                    >
                                        Cadastrar
                                    </Button>                        
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