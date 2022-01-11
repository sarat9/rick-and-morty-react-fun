import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, ListItem } from '@mui/material';


export default function EpisodeCard(props) {
  const { name, imageSrc, airDate, episode, created } = props
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
                <h2>Episode : {episode}</h2>
                <h4>Aired On: {airDate}</h4>
                <h4>Created : {created}</h4>
                </div>
            </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

EpisodeCard.defaultProps = {
    imageSrc: 'https://flxt.tmsimg.com/assets/p13993000_b_v13_aa.jpg'
}