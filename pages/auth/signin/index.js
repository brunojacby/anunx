import { Alert, Button, CircularProgress, FormControl, FormHelperText, Input, InputLabel, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import TemplateDefault from '../../../src/templates/Default'
import { Formik } from 'formik'
import { BoxTema, FormControlCSS } from './styles'
import { initialValues, validationSchema } from './FormValues'
import { useRouter } from 'next/router'
import { useToasty } from '../../../src/contexts/Toasty'
import Image from 'next/image'
import { useSession, signIn, signOut } from "next-auth/react"


const Signin = ({ APP_URL }) => {

    const router = useRouter()
    const setToasty = useToasty() 
    const { data: session, status } = useSession()
    const loading = status === "loading"

    const handleFormSubmit = async (values) => {
        await signIn('credentials', {            
            email: values.email,
            password: values.password,            
            callbackUrl: `${APP_URL}/user/dashboard`,
        })
        console.log('ok, logado', values)
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

                    <Box display="flex" justifyContent="center">
                        <Button
                        variant='contained'
                        color='primary'
                        startIcon={
                            <Image 
                                src="/images/logoGoogle.png" width={20} height={20} alt="Google"
                            />
                        }
                        >Entar com Google
                        </Button>
                    </Box>

                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#e8e8e8',
                        width: '100%',
                        height: '1px',
                        margin: '50px 0px', 
                        
                        '& span': {
                            backgroundColor: 'white',
                            padding: '0 30px',
                        }
                    }}>
                        <span>ou</span>
                    </Box>

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
                                    {
                                        router.query.i === '1'
                                        ? (
                                            <Alert severity='error'>
                                                Usuário ou senha inválidos
                                            </Alert>
                                        )
                                        : null
                                    }                                
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