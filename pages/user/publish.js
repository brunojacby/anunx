import { DeleteForever } from '@mui/icons-material'
import { 
    Button, 
    FormControl, 
    InputLabel, 
    OutlinedInput, 
    InputAdornment, 
    IconButton, 
    Select, 
    TextField, 
    Typography, 
    MenuItem, 
    FormHelperText } from '@mui/material'
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
    const [files, setFiles] = useState([])
    const { getRootProps, getInputProps} = useDropzone({
        accept: 'image/*',
        onDrop: (acceptedFile) => {
            const newFiles = acceptedFile.map(file => {
                return Object.assign(file, {
                    preview: URL.createObjectURL(file)
                })
            })
        setFiles([...files, ...newFiles])
        }
    })

    const handleRemoveFile = fileName => {
        const newFileState = files.filter(file => file.name !== fileName)
        setFiles(newFileState)
    }

    const validationSchema = yup.object().shape({
        title: yup.string()
        .min(6, 'Escreva um título maior')
        .max(100, 'Título muito grande')
        .required('Campo obrigatório'),

        category: yup.string().required('Campo obrigatório')
    })

    return (
    <TemplateDefault>
        <Container>
        <Formik
        initialValues={{
            title: '',
            category: ''
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {}}
        
        >
            {
                ({
                    values,
                    errors,
                    handleChange,
                    handleSubmit,
                }) => {
                return (                   
                    
                    <form>     
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
                            <Typography component="h6" variant="h6" color="textPrimary" marginBottom={1}>
                                Título do Anúncio
                            </Typography>
                            <TextField
                                name='title'
                                value={values.title}
                                onChange={handleChange}
                                variant="standard"
                                placeholder="ex.: Bicicleta Aro 18 com garantia"
                                size='small'
                                fullWidth
                                error={errors.title}
                                helperText={errors.title}
                            ></TextField>
                            <br /><br />
                            <Typography component="h6" variant="h6" color="textPrimary" marginBottom={1}>
                                Categoria
                            </Typography>
                            <FormControl error={errors.category} fullWidth>
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
                                    { errors.category }
                                </FormHelperText>
                            </FormControl>
                        </Box>
                    </Container>

                    <Container maxWidth="md">
                        <Box sx={BoxTema}>
                            <Typography component="h6" variant="h6" color="textPrimary" marginBottom={1}>
                                Imagens
                            </Typography>
                            <Typography component="h8" variant="h8" color="textPrimary" marginBottom={1}>
                                A primeira imagem é a foto principal do seu anúncio.
                            </Typography>
                            <Box className={'thumbsContainer'} sx={thumbsContainer}>
                                <Box  className={'dropzone'} sx={dropzone}>
                                <Typography variant='body2' color={'textPrimary'} className={dropzone} {...getRootProps()}>
                                    <input {...getInputProps()} />
                                    Clique para adicionar ou arraste a imagem para aqui.
                                </Typography>
                                </Box>
                                {
                                    files.map((file, index) => (
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
                            <Typography component="h6" variant="h6" color="textPrimary" marginBottom={1}>
                                Descriçao
                            </Typography>
                            <Typography component="h8" variant="h8" color="textPrimary" marginBottom={1}>
                                Escreva os detalhes do que está vendendo.
                            </Typography>
                            <TextField
                            multiline
                            rows={6}
                            variant="outlined"
                            fullWidth
                            >
                            </TextField>
                        </Box>
                    </Container> 

                    <Container maxWidth="md" className={boxContainer}>
                        <Box sx={BoxTema}>
                        <Typography component="h6" variant="h6" color="textPrimary">
                            Preço
                        </Typography>
                        <br />
                        <FormControl fullWidth variant='outlined'>
                            <InputLabel style={{ backgroundColor: 'white'}}>Valor</InputLabel>
                            <OutlinedInput
                            onChange={() => {}}
                            startAdornment={<InputAdornment position='start'>€</InputAdornment>}
                            labelWidth={40}
                            /> 
                        </FormControl>                        
                        </Box>
                    </Container>

                    <Container maxWidth="md">
                        <Box sx={BoxTema}>
                            <Typography component="h6" variant="h6" color="textPrimary" gutterBottom>
                                Dados de Contato
                            </Typography>
                            <TextField
                            label="Nome"
                            variant="outlined"
                            size='small'
                            fullWidth
                            />
                            <br /><br />
                            <TextField
                            label="E-mail"
                            variant="outlined"
                            size='small'
                            fullWidth
                            />
                            <br /><br />
                            <TextField
                            label="Telefone"
                            variant="outlined"
                            size='small'
                            fullWidth
                            />
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
        </Container>      
    </TemplateDefault>
    )
}

export default Publish