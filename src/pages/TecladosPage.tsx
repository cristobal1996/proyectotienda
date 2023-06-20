import React from 'react'
import { useEffect, useState } from 'react';
import { ITeclados } from '../interfaces/ITeclados';
import { getTeclados } from '../firebase/FBteclados';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';

export const TecladosPage = () => {
  const [ teclados, setTeclados] = useState<ITeclados[]>([]);
 
  useEffect(() => {
      getTeclados()
      .then (answer =>{
          console.log(...answer)
          setTeclados([...answer ])
      })
  }, [])

  return (
    <Grid container style={{display: "flex", justifyContent: "center", padding: "1rem"}}>
    {teclados.map((teclados) => {
    return(
    <Card sx={{ maxWidth: 345, margin: "20px" }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image= {teclados.img}
        alt=""
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {teclados.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {teclados.descripcion}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" color="primary">
        comprar
      </Button>
    </CardActions>
  </Card>
    )
   })}
   </Grid>
  )
}

