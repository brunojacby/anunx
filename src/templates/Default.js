import Header from '../components/Header'
import Footer from '../components/Footer'
import { Box } from '@mui/system'

const container = (theme) => {
    padding: theme.spacing(6, 0, 6)
}

const Default = ({ children }) => {
   return (
        <>
        <Header />
        <Box sx={container}>
            {children}
        </Box>
        <Footer />
        </>
    )
}

export default Default