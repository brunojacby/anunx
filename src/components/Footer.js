import React from "react"
import { Box, Container } from "@mui/system"
import { Grid } from "@mui/material"
import Link from "next/link"


const footer = {
    borderTop: '1px solid black',
    marginTop: 8,
    paddingTop: 5,
    paddingBottom: 5,
    "a": {
        textDecoration: 'none',  
        color: 'black',      
    }    
}

const Footer = () => {
    return (
        <Container maxWidth="lg" component="footer" sx={footer}>
            <Grid container spacing={3}>
                <Grid item xs={6} sm={3}>
                    <Box textAlign="center">
                        <Link href="#">Ajuda e Contato</Link>
                    </Box>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Box textAlign="center">
                        <Link href="#">Dicas de segurança</Link>
                    </Box>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Box textAlign="center">
                        <Link href="#">Política de Privacidade</Link>
                    </Box>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Box textAlign="center">
                        <Link href="#">Livro de Reclamações Online</Link>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Footer