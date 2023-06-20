import { Grid,Box,TextField, Button, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material'
import React, { useEffect, useState } from 'react'
import IRatones from '../interfaces/IRatones';
import { borrarRatones, getRatones, newRatones, subirRatones } from '../firebase/FBratones';
import { useForm } from 'react-hook-form';
import { ITeclados } from '../interfaces/ITeclados';
import { borrarTeclados, cargarTeclados, getTeclados } from '../firebase/FBteclados';
import './estilos.css';

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

const [open, setOpen] = React.useState(false);
const handleClickOpen = () => {
    setOpen(true);
};

const handleClose = () => {
    setOpen(false);
};

  const [ teclados, setTeclados] = useState<ITeclados[]>([]);
 
  useEffect(() => {
      getTeclados()
      .then (answer =>{
          console.log(...answer)
          setTeclados([...answer ])
      })
  }, [])

const { register: registerTeclados, handleSubmit: handleSubmitOtrosTeclados } = useForm<ITeclados>();
const onAddTeclados = async (dataTeclados: ITeclados) => {
  console.log(dataTeclados)
  await newRatones(dataTeclados)
}


  return (
    <Grid container sx={{ display: 'flex', justifyContent: 'space-around' }}>
      <div id='estilo'>
      <h2>Ratones</h2>
      <div id='añadir'>
      <Button id='openform' variant="outlined" color="primary" onClick={handleClickOpen}> Añadir Producto </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Añadir Nuevo Producto</DialogTitle>
      <DialogContent>
      <form onSubmit={handleSubmit(onAddRatones)} noValidate autoComplete="off" style={{ display: "flex", gap: ".5rem", flexFlow: "row wrap" }}>
      <TextField
        {...register('name')}
        id='nombre'
        label='Nombre'
        type='text'
      >
      </TextField>

      <TextField
        {...register('descripcion')}
        label='descripcion'
        type='string'
      >
      </TextField>
      
      <TextField
        {...register('img')}
        label='img'
        type='string'
      >
      </TextField>
      </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary"> Salir </Button>
          <Button type='submit' onClick={handleSubmit(onAddRatones)} color="primary"> Añadir Producto </Button>
      </DialogActions>
      <Button type='submit' variant="contained" onClick={subirRatones}>cargar Ratones</Button>
      </Dialog>
      </div>
      </div>
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
  <Grid container sx={{ display: 'flex', justifyContent: 'space-around' }}>
  <div id='nose'>
  <h3>Teclados</h3>
      <div id='añadir'>
      <Button id='openform' variant="outlined" color="primary" onClick={handleClickOpen}> Añadir Producto </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Añadir Nuevo Producto</DialogTitle>
      <DialogContent>
      <form onSubmit={handleSubmitOtrosTeclados(onAddTeclados)} noValidate autoComplete="off" style={{ display: "flex", gap: ".5rem", flexFlow: "row wrap" }}>
      <TextField
        {...registerTeclados('name')}
        id='nombre'
        label='Nombre'
        type='text'
      >
      </TextField>

      <TextField
        {...registerTeclados('descripcion')}
        label='descripcion'
        type='string'
      >
      </TextField>
      
      <TextField
        {...registerTeclados('img')}
        label='img'
        type='string'
      >
      </TextField>
      </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary"> Salir </Button>
          <Button type='submit' onClick={handleSubmitOtrosTeclados(onAddTeclados)} color="primary"> Añadir Producto </Button>
      </DialogActions>
      <Button type='submit' variant="contained" onClick={cargarTeclados}>cargar Teclados</Button>
      </Dialog>
      </div>
      </div>
  </Grid>
  <TableContainer component={Paper}>
  <Table sx={{ minWidth: 650 }} aria-label="simple table">
    <TableHead>
      <TableRow>
        <TableCell>teclados</TableCell>
        <TableCell align="right">descripcion</TableCell>
        <TableCell align="right">precio</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {teclados.map((tec) => (
        <TableRow
          key={tec.name}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell component="th" scope="row">
            {tec.name}
          </TableCell>
          <TableCell align="right">{tec.descripcion}</TableCell>
          <TableCell align="right">{tec.precio}</TableCell>
          <TableCell align="right">
          <button onClick={() => tec.codigo && borrarTeclados(tec.codigo)}>Eliminar</button>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>
</Grid>
  )
}
