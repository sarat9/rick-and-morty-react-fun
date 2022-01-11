import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea, ListItem } from '@mui/material';
import Chip from '@mui/material/Chip';
import { GiPerson } from 'react-icons/gi';
import { RiAliensFill, RiRadioButtonLine } from 'react-icons/ri';

export default function CharacterCard(props) {
  const { name, imageSrc, species, status } = props
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
            component="img"
            height="400"
            image={imageSrc}
            alt="green iguana"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {name}
            </Typography>
            <p style={{borderRadius: '15px', background:"black", textAlign:'center', 
                    padding:"10px", fontSize:'16px', color:(status=='Alive')?'green':'red'}}>
                  <RiRadioButtonLine/> {status} - 
                  {species&&species == 'Human'&&<> {species} <GiPerson/></>}
                  {species&&species != 'Human'&&<> {species} <RiAliensFill/></>}
            </p>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

CharacterCard.defaultProps = {

}