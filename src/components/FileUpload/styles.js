
const boxContainer = {
    backgroundColor: 'white',
}

const BoxTema = {
    backgroundColor: 'white',
    marginBottom: 3,
    padding: 3,
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

export {
    boxContainer,
    BoxTema,  
    thumbsContainer,
    dropzone,    
    thumb,   
    mask,    
    trash,    
    mainImage,
}