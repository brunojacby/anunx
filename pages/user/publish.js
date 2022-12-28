import { Button, Select, TextField, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import TemplateDefault from '../../src/templates/Default'

const BoxTema = {
    backgroundColor: 'white',
    marginBottom: 3,
}


const Publish = () => {
    return (
    <TemplateDefault>
        <Container>     
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
                        variant="standard"
                        placeholder="ex.: Bicicleta Aro 18 com garantia"
                        size='small'
                        fullWidth
                    ></TextField>
                    <br /><br />
                    <Typography component="h6" variant="h6" color="textPrimary" marginBottom={1}>
                        Categoria
                    </Typography>
                    <Select
                    variant="standard"
                    native
                    value=""
                    fullWidth
                    /*onChange={handleChangeCategory}*/
                    inputProps={{
                        name: 'age',
                    }}
                    >
                        <option value={0}>Selecione</option>
                        <option value={1}>Lazer</option>
                        <option value={2}>Telemóveis e Tablets</option>
                        <option value={3}>Agricultura</option>
                        <option value={4}>Animais</option>
                        <option value={5}>Desporto</option>

                    </Select>
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
                    <Button variant='contained' color='primary'>Publicar anúncio</Button>
                </Box>
            </Container>
        </Container>       
    </TemplateDefault>
    )
}

export default Publish