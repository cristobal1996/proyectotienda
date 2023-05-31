import { Grid,Box,TextField, Button, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material'
import React, { useEffect, useState } from 'react'
import IRatones from '../interfaces/IRatones';
import { borrarRatones, getRatones, newRatones, subirRatones } from '../firebase/FBratones';
import { useForm } from 'react-hook-form';


export const InformacionPage = () => {
  const [ratones, setRatones] = useState<IRatones[]>([]);
    
  useEffect(()=>{
      getRatones()
      .then (res =>{
          console.log(...res)
          setRatones([...res])
      })
  }, [])

const { register, handleSubmit} = useForm<IRatones>();
const onAddRatones = async (dataRatones: IRatones) => {
  console.log(dataRatones)
  await newRatones(dataRatones)
}


  return (
    <Grid container>
      <TableContainer component={Paper} style={{display: "flex", justifyContent: "center", padding: "1rem"}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ratones</TableCell>
            <TableCell align="right">descripcion</TableCell>
            <TableCell align="right">precio</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ratones.map((raton) => (
            <TableRow
              key={raton.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {raton.name}
              </TableCell>
              <TableCell align="right">{raton.descripcion}</TableCell>
              <TableCell align="right">{raton.precio}</TableCell>
              <TableCell align="right">
              <button onClick={() => raton.codigo && borrarRatones(raton.codigo)}>Eliminar</button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Grid item xs={12} sx={{ margin: '10px', padding: '10px',width: '80%', height: 'max-content', borderRadius: '20px' }}>
    <h2 id='ns'>añadir ratones</h2>
    <form onSubmit={handleSubmit(onAddRatones)} noValidate >
      <TextField
        {...register('name')}
        id='nombre'
        label='Nombre'
        type='text'
        sx={{ width: '100%' }}
      >
      </TextField>

      <TextField
        {...register('descripcion')}
        label='descripcion'
        type='string'
        sx={{ width: '100%' }}
      >
      </TextField>
      
      <TextField
        {...register('img')}
        label='img'
        type='string'
        sx={{ width: '100%' }}
      >
      </TextField>
      <Button type='submit' variant="contained" sx={{ width: '50%'  }}>Añadir Ratones</Button>
      <Button type='submit' variant="contained" onClick={subirRatones} sx={{ width: '50%'  }}>cargar Ratones</Button>
    </form>
  </Grid>
  </Grid>
  )
}
