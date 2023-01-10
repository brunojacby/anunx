import React from "react"
import { 
    Button, 
    Card as CardMUI, 
    CardActions, 
    CardContent, 
    CardMedia, 
    Typography 
} from '@mui/material'


const Card = ({ image, title, subtitle, actions }) => {
    return (
        <CardMUI>
            <CardMedia
            sx={{ height: 200 }}
            image={image}
            title={title}
            />
            <CardContent>
            <Typography variant="h5" component="h2">
                {title}
            </Typography>
            <Typography variant="h5" component="h2">
                {subtitle}
            </Typography>
            {
                actions
                ? (
                <CardActions>
                    {actions}
                </CardActions>
                ) :null
            }
            
            </CardContent>
        </CardMUI>
    )
}

export default Card