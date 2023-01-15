import { useDropzone } from 'react-dropzone'
import { DeleteForever } from '@mui/icons-material'

import { 
    IconButton,      
    Typography, 
    Box,      
    } from '@mui/material'

import {     
    thumbsContainer,
    dropzone,    
    thumb,   
    mask,    
    trash,    
    mainImage,
} from './styles'

const FileUpload = ({ files, errors, touched, setFieldValue }) => {

    const { getRootProps, getInputProps} = useDropzone({
        accept: 'image/*',
        onDrop: (acceptedFile) => {
            const newFiles = acceptedFile.map(file => Object.assign (file, {
                 preview: URL.createObjectURL(file)
                }))
        
            setFieldValue('files',
                [...files, ...newFiles])
        }
    })

    const handleRemoveFile = fileName => {
        const newFileState = files.filter(file => file.path !== fileName)
        setFieldValue('files', newFileState)
    }

    return ( 
        <>       
            <Typography component="h6" variant="h6" color={errors && touched ? 'error' : 'textPrimary'} marginBottom={1}>
                Imagens
            </Typography>
            <Typography component="h8" variant="h8" color={errors && touched ? 'error' : 'textPrimary'} marginBottom={1}>
                A primeira imagem é a foto principal do seu anúncio.
            </Typography>
            {
                errors && touched
                ?   <Typography variant='body2' color='error' gutterBottom>{errors}</Typography>
                : null
            }                            
            <Box className={'thumbsContainer'} sx={thumbsContainer}>
                <Box  className={'dropzone'} sx={dropzone}> 
                    <input name="files" {...getInputProps()} />                                   
                    <Typography variant='body2' color={errors && touched ? 'error' : 'textPrimary'} className={dropzone} {...getRootProps()}>
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
                            <IconButton sx={trash} onClick={() => handleRemoveFile(file.path)}>
                                <DeleteForever fontSize='large'/>
                            </IconButton>
                        </Box>
                    </Box>
                    ))
                }
            </Box>
        </>        
    )
}

export default FileUpload