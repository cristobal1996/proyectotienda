import  { useEffect, useState } from 'react'
import { getRatones } from '../firebase/FBratones';
import IRatones from '../interfaces/IRatones';
import { CardActionArea, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const RatonesPage = () => {
     const [ratones, setRatones] = useState<IRatones[]>([]);
    
     useEffect(()=>{
         getRatones()
         .then (res =>{
             console.log(...res)
             setRatones([...res])
         })
     }, [])

    return (
      <Grid container style={{display: "flex", justifyContent: "center", padding: "1rem"}}>
        {ratones.map((raton) => {
          return(
            <Card sx={{ height: "550px", width: "300px", margin: "20px" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                // height="140"
                image={raton.img}
                alt=""
                width= "140"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {raton.name} 
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {raton.descripcion}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Comprar
              </Button>
            </CardActions>
          </Card>
          )
        }
        
        )}
      </Grid>
  )
}
export default RatonesPage;

