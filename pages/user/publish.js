import { DeleteForever, ErrorSharp } from '@mui/icons-material'
import { 
    Button, 
    FormControl, 
    InputLabel,     
    InputAdornment, 
    IconButton, 
    Select, 
    Typography, 
    MenuItem, 
    FormHelperText, 
    Input} from '@mui/material'
import { useDropzone } from 'react-dropzone'
import { Box, Container, flexbox } from '@mui/system'
import TemplateDefault from '../../src/templates/Default'
import { useState } from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'


const boxContainer = {
    backgroundColor: 'white',
}

const BoxTema = {
    backgroundColor: 'white',
    marginBottom: 3,
}

const thumbsContainer = {
    display: 'flex',
    flexWrap: 'wrap',         
};

const dropzone = {
    display: 'flex', 
    alignItems: 'center', 
    textAlign: 'center', 
    justifyContent: 'center', 
    width: 200, 
    height: 150, 
    border: '2px dashed black', 
    backgroundColor: 'grey', 
    margin: '0 10px 10px 0',
}

const thumb = {
    width: 200, 
    height: 150, 
    border: '1px solid black', 
    margin: '0 10px 10px 0',      
    backgroundSize: 'cover', 
    backgroundPosition: 'center center',
    position: 'relative',
}

const mask = {
    display: 'flex',
    width: '100%', 
    height: '100%', 
    textAlign: 'center', 
    justifyContent: 'center', 
    alignItems: 'center',
    
    "&:hover": {
        backgroundColor: 'rgba(0,0,0,0.7)',
    },
    
}

const trash = {
    color: 'transparent',
    "&:hover": {
        display: 'flex',
        color: 'white',
    },   
}

const mainImage = {
    padding: '6px 10px',
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: 'blue',
    color: 'white',
}

const Publish = () => {
        
    const validationSchema = yup.object().shape({
        title: yup.string()
        .min(6, 'Escreva um título maior')
        .max(100, 'Título muito grande')
        .required('Campo obrigatório'),

        category: yup.string().required('Campo obrigatório'),

        description: yup.string()
        .min(50, 'Escreva uma descrição com pelo menos 50 caracteres.')
        .required('Campo obrigatório'),    

        price: yup.number().required('Campo obrigatório'),

        email: yup.string().email('Digite um email válido').required('Campo obrigatório'),

        name:  yup.string().required('Campo obrigatório'),

        phone: yup.number().required('Campo obrigatório'),

        files: yup.array().min(1, 'Envie pelo menos uma foto').required('Campo obrigatório'),
    })

    return (
    <TemplateDefault>        
        <Formik
        initialValues={{
            title: '',
            category: '',
            description: '',
            price: '',
            email: '',
            name: '',
            phone: '',
            files: [],
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {console.log('ok, enviado', values)}}
        
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
                    const { getRootProps, getInputProps} = useDropzone({
                        accept: 'image/*',
                        onDrop: (acceptedFile) => {
                            const newFiles = acceptedFile.map(file => {
                                return Object.assign(file, {
                                    preview: URL.createObjectURL(file)
                                })
                            })
                            setFieldValue('files',
                                [...values.files, ...newFiles])
                        }
                    })
                
                    const handleRemoveFile = fileName => {
                        const newFileState = values.files.filter(file => file.name !== fileName)
                        setFieldValue('files', newFileState)
                    }

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

                    <Container maxWidth="md">
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

                    <Container maxWidth="md">
                        <Box sx={BoxTema}>                            
                            <Typography component="h6" variant="h6" color={errors.files && touched.files ? 'error' : 'textPrimary'} marginBottom={1}>
                                Imagens
                            </Typography>
                            <Typography component="h8" variant="h8" color={errors.files && touched.files ? 'error' : 'textPrimary'} marginBottom={1}>
                                A primeira imagem é a foto principal do seu anúncio.
                            </Typography>
                            {
                                errors.files && touched.files
                                ?   <Typography variant='body2' color='error' gutterBottom>{errors.files}</Typography>
                                : null
                            }                            
                            <Box className={'thumbsContainer'} sx={thumbsContainer}>
                                <Box  className={'dropzone'} sx={dropzone}> 
                                    <input name="files" {...getInputProps()} />                                   
                                    <Typography variant='body2' color={errors.files && touched.files ? 'error' : 'textPrimary'} className={dropzone} {...getRootProps()}>
                                        Clique para adicionar ou arraste a imagem para aqui.
                                    </Typography>
                                </Box>
                                {
                                    values.files.map((file, index) => (
                                        <Box 
                                        key={file.name}
                                        className={'thumb'} style={{ backgroundImage: `url(${file.preview})`}} sx={thumb}
                                        >
                                            {
                                                index === 0 ?
                                                <Box sx={mainImage}>
                                                <Typography variant='body2'>Principal</Typography>
                                                </Box>
                                                : null
                                            }                                    
                                            <Box className={'mask'} sx={mask}>
                                                <IconButton sx={trash} onClick={() => handleRemoveFile(file.name)}>
                                                    <DeleteForever fontSize='large'/>
                                                </IconButton>
                                            </Box>
                                        </Box>
                                    ))
                                }
                            
                            </Box>
                        </Box>
                    </Container>

                    <Container maxWidth="md">
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

                    <Container maxWidth="md" className={boxContainer}>
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

                    <Container maxWidth="md">
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