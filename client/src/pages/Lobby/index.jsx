import React from "react";
import { Title,Post,Subtitle, Content} from "./styles";
import { Box, Button} from "@mui/material";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from "@mui/material/TablePagination";

//DEFINICION DE LAS COLUMNAS FIJAS
const columns = [
    { id: 'idTrans', label: 'ID transaccion', minWidth: 170 },
    { id: 'fecha', label: 'FECHA', minWidth: 100 },
    {
      id: 'Remitente',
      label: 'Remitente',
      minWidth: 170,
      align: 'left',
    },
    {
      id: 'Destino',
      label: 'Destinatario',
      minWidth: 170,
      align: 'left',
    },
    {
      id: 'Dinero',
      label: 'Monto',
      minWidth: 170,
      align: 'left',
    },
  ];
  function createData(nombre,fecha,remitente,destinatario,monto){
    return {nombre,fecha,remitente,destinatario,monto}
  }
  //AQUI TENEMOS QUE PONER LOS DATOS DE LA BASE DE DATOS PARA LLAMARLOS DESPUES
  const rows =[
    createData("asljda","20/02/2002","carlos","pedro",20000),
    createData("asljda","20/02/2002","carlos","pedro",201230),
    createData("asljda","20/02/2002","carlos","pedro",123120),
    createData("asljda","20/02/2002","carlos","pedro",230),
    createData("asljda","20/02/2002","carlos","pedro",84564),
    createData("asljda","20/02/2002","carlos","pedro",1111),
    createData("asljda","20/02/2002","carlos","pedro",20000),
    createData("asljda","20/02/2002","carlos","pedro",20000),
    createData("asljda","20/02/2002","carlos","pedro",20000),
    createData("asljda","20/02/2002","carlos","pedro",20000),
    createData("asljda","20/02/2002","carlos","pedro",9999),

  ];
  
  
export default function Transferencias(){
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    return(
        <Content>
            <Post>
                <Title>Saldo Disponible</Title>
                <Subtitle>$20.000</Subtitle>
            </Post>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>
                                {column.label}
                                </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                return (
                    <TableRow key ={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                    <TableCell align = "left">{row.nombre}</TableCell>
                    <TableCell align = "left">{row.fecha}</TableCell>
                    <TableCell align = "left">{row.remitente}</TableCell>
                    <TableCell align = "left">{row.destinatario}</TableCell>
                    <TableCell align = "left">{row.monto}</TableCell>
                    </TableRow>
                );
            })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>  
            <Title> </Title>
            <Box textAlign = 'center'>
                <Button variant = "contained">Haga click aqui para RP gratis</Button>
            </Box>
            
        </Content>

        
    )
}