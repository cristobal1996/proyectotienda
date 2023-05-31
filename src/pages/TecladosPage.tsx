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
    <Grid container sx={{ display: 'flex', justifyContent: 'space-around' }}>
    <Grid item xs={5} sx={{ backgroundColor: 'lightgray', margin: '10px', padding: '12px', height: 'max-content', borderRadius: '20px' }}>
      <h2 id='NewCat'>Listado de Categorias</h2>
      {
        teclados.slice(0, 100).map((teclados) => (
          <>
          <li key={teclados.name}>{teclados.name}</li>
          </>
        ))
      }
    </Grid>
    </Grid>
  )
}

