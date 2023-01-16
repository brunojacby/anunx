
import axios from 'axios'
import { useRouter } from 'next/router'
import { Formik } from 'formik'

import { 
    Button, 
    FormControl, 
    InputLabel,     
    InputAdornment,      
    Select, 
    Typography, 
    MenuItem, 
    FormHelperText, 
    Input} from '@mui/material'
import { Box, Container } from '@mui/system'

import {
    boxContainer,
    BoxTema,    
} from './styles'

import TemplateDefault from '../../../src/templates/Default'
import FileUpload from '../../../src/components/FileUpload'
import { useToasty } from '../../../src/contexts/Toasty'
import { initialValues, validationSchema } from './formValues'

const Publish = ({ userId, image }) => {  
    
    const { setToasty } = useToasty()
    const router = useRouter()

    const formValues = {
        ...initialValues,
    }

    formValues.userId = userId
    formValues.image = image

    const handleSuccess = () => {
        setToasty({
            open:true,
            text: 'Anúncio cadastrado com sucesso',
            severity: 'success',
        })

       router.push('/user/dashboard')
    }

    const handleError = () => {
        setToasty({
            open: true,
            text: 'Ops, ocorreu um erro, tente novamente',
            severity: 'error',
        })        
    }

    const handleSubmit = async (values) => {
       const formData = new FormData()

       for (let field in values) {
        if (field === 'files') {
            values.files.forEach(file => {
                formData.append('files', file)
            });
        } else {
            formData.append(field, values[field])
        }
       }

       await axios.post('/api/products', formData)
        .then(handleSuccess)
        .catch(handleError)
    }    

    return (
    <TemplateDefault>        
        <Formik
        initialValues={formValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}       
        >
            {
                ({
                    touched,
                    values,
                    errors,
                    handleChange,
                    handleSubmit,
                    setFieldValue,
                }) => {
                    

                return (                   
                    
                    <form onSubmit={handleSubmit}>     
                    <Container maxWidth="sm">
                        <Typography component="h1" variant="h2" align='center' color="textPrimary" marginTop={3}>
                            Publicar Anúncio
                        </Typography>
                        <Typography component="h5" variant="h5" align='center' color="textPrimary" marginBottom={2}>
                            Quanto mais detalhado melhor!
                        </Typography>                
                    </Container>

                    <Container maxWidth="lg">
                        <Box sx={BoxTema}>                       
                            <FormControl error={errors.title && touched.title} fullWidth> 
                            <InputLabel>Título do Anúncio</InputLabel>                          
                            <Input
                                name='title'
                                value={values.title}
                                onChange={handleChange}
                                variant="standard"
                                placeholder="ex.: Bicicleta Aro 18 com garantia"            
                            />
                            <FormHelperText>
                                { errors.title && touched.title ? errors.title : null }
                            </FormHelperText>
                            </FormControl>
                            <br /><br />
                            
                            
                            <FormControl error={errors.category && touched.category} fullWidth>
                                <InputLabel>Categoria</InputLabel> 
                                <Select
                                name="category"
                                variant="standard"                                
                                value={values.category}
                                fullWidth                            
                                onChange={handleChange}                            
                                >                                                                    
                                <MenuItem value={"Lazer"}>Lazer</MenuItem>
                                <MenuItem value={"Telemóveis  e Tablets"}>Telemóveis e Tablets</MenuItem>
                                <MenuItem value={"Agricultura"}>Agricultura</MenuItem>
                                <MenuItem value={"Animais"}>Animais</MenuItem>
                                <MenuItem value={"Desporto"}>Desporto</MenuItem>
                                </Select>
                                <FormHelperText>
                                    { errors.category && touched.category ? errors.category : null }
                                </FormHelperText>
                            </FormControl>
                        </Box>
                    </Container>

                    <Container maxWidth="lg">
                        <Box sx={BoxTema}>                            
                            <FileUpload 
                            files={values.files}
                            errors={errors.files}
                            touched={touched.files}
                            setFieldValue={setFieldValue}
                            />
                        </Box>
                    </Container>

                    <Container maxWidth="lg">
                        <Box sx={BoxTema}>                            
                            <FormControl error={errors.description && touched.description} fullWidth>                                                        
                                <InputLabel>Escreva os detalhes do que está vendendo.</InputLabel> 
                                <Input
                                name="description"
                                multiline
                                rows={6}
                                variant="outlined"
                                onChange={handleChange}                                
                                >
                                </Input>
                                <FormHelperText>
                                    { errors.description && touched.description ? errors.description : null }
                                </FormHelperText>
                            </FormControl>
                        </Box>
                    </Container> 

                    <Container maxWidth="lg" className={boxContainer}>
                        <Box sx={BoxTema}>
                            <FormControl error={errors.price && touched.price} fullWidth>                                                        
                                <InputLabel>Preço de venda</InputLabel> 
                                <Input
                                name="price"                                
                                variant="outlined"
                                startAdornment={<InputAdornment position='start'>€</InputAdornment>}  
                                onChange={handleChange}                            
                                >
                                </Input>
                                <FormHelperText>
                                    { errors.price && touched.price ? errors.price : null }
                                </FormHelperText>
                            </FormControl>                                                
                        </Box>
                    </Container>

                    <Container maxWidth="lg">
                        <Box sx={BoxTema}>
                            <Typography component="h6" variant="h6" color="textPrimary" gutterBottom>
                                Dados de Contato
                            </Typography>

                            <FormControl error={errors.name && touched.name } fullWidth> 
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
                            <br /><br />

                            <FormControl error={errors.email && touched.email } fullWidth> 
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
                            <br /><br />

                            <FormControl error={errors.phone && touched.phone } fullWidth> 
                                <InputLabel>Telemóvel</InputLabel>                          
                                <Input
                                    name='phone'
                                    value={values.phone}
                                    onChange={handleChange}                                          
                                />
                                <FormHelperText>
                                    { errors.phone && touched.phone ? errors.phone : null }
                                </FormHelperText>
                            </FormControl>
                            <br /><br />                            
                           
                        </Box>
                    </Container>

                    <Container>
                        <Box textAlign="center">
                            <Button variant='contained' type='submit' color='primary'>Publicar anúncio</Button>
                        </Box>
                    </Container>
                    </form>                    
                    )
                }
            }
        </Formik>              
    </TemplateDefault>
    )
}

export default Publish