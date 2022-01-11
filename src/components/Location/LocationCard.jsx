import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, ListItem } from '@mui/material';


export default function LocationCard(props) {
  const { name, type, dimension, imageSrc } = props
  return (
    <Card sx={{ maxWidth: 700 }} style={{color:"white", background: '#6fb862'}}>
      <CardActionArea>
        <CardContent>
            <div style={{width:'100%', display: 'flex'}}>
                <div style={{width:'40%'}}>
                    <img style={{width:'100%'}} src={imageSrc} />
                </div>
                <div style={{width:'60%', padding: '15px'}}>
                <Typography gutterBottom variant="h5" component="div" 
                    style={{fontFamily:"cursive", fontSize: '32px', fontWeight: 800}}>
                    {name}
                </Typography>
                <h3>Type : {type}</h3>
                <h3>Dimension: {dimension}</h3>
                </div>
            </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

LocationCard.defaultProps = {
    imageSrc: 'https://repository-images.githubusercontent.com/273195371/232cd780-b25f-11ea-9d76-552e8e4182f8'
}