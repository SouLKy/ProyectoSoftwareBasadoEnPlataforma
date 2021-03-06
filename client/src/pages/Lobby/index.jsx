import React, {useState, useEffect} from "react";
import AccountBank from "../../services/AccountBank";
import balance from "../../services/balance";
import transaction from "../../services/transaction";
import { Title,Subtitle, Content} from "./styles";
import { bottomNavigationActionClasses, Box, Button, Card} from "@mui/material";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from "@mui/material/TablePagination";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#06283D",
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
//DEFINICION DE LAS COLUMNAS FIJAS
const columns = [
    { id: 'Detalle', label: 'Detalle', minWidth: 170 },
    { id: 'Fecha', label: 'Fecha', minWidth: 100 },
    
    {
      id: 'Dinero',
      label: 'Monto',
      minWidth: 170,
      align: 'left',
    },
  ];
  function createData(Detalles,fecha,monto){
    return {Detalles,fecha,monto}
  }

  
  

const banks = [];

  
export default function Transferencias(){
  const [rows, setRows] = useState([]);
  const [bank, setBank] = useState('');
  const handleChange = (event) =>{
    setBank(event.target.value);
  }

  //Select de cuenta del banco
  const [idCuenta, setIdC] = useState();
 
  const cambio = (event) =>{
    setIdC(event.target.value);
    
  }
  //ObtenerCookie entrega el token del usuario activo
  const ObtenerCookie = ()=>{
    const cookies = document.cookie.split(';').map(cookie =>
      cookie.split('=')).reduce((accumulator, [key, value]) =>
          ({...accumulator, [key.trim()]: decodeURIComponent(value)}),
          {}
      )
  return cookies.token
  }
  
  const [cookie, setCookie] = useState(()=>ObtenerCookie());
  const [banco, setBanco] = useState()
  const [id,setId] = useState([])
  const [abonos,setAbonos] = useState()
  const [cargos,setCargos] = useState()
  const [total,setTotal] = useState()
  const [descripciones,setDescripciones] = useState()
  const [fechas,setFechas] = useState()
  const [montos,setMontos] = useState()
  const [numeroCuenta, setNumeroCuenta] = useState([])
  
  useEffect(() => {
    //el parametro cookie es el rut del usuario activa
    //entrega los bancos vinculados al usuario y el id correspondiente
    AccountBank(cookie).then( res => {
        const {bancos,id,numeroCuenta} = res
        setBanco(bancos)
        setId(id)
        setNumeroCuenta(numeroCuenta)
        
        for(const i in bancos){
          banks.push(bancos[i])
        }     
    }).catch(err=>{
        console.log(err);
    })
    
    //el parametro corresponde al numero de cuenta
    //entrega abonos, cargos y total de una cuenta bancaria
    balance(idCuenta).then( res => {
        const {abonos,cargos,total} = res
        setAbonos(abonos)
        setCargos(cargos)
        setTotal(abonos+cargos)
    }).catch(err=>{
        console.log(err);
    })
    //el primer parametro corresponde al numero de cuenta y el segundo a la cantidad de transacciones a mostrar, 0=todas las transacciones de la cuenta
    //entrega las descripciones, fechas y monto de los movimientos bancarios correspondiente a una cuenta
    
    transaction(idCuenta,0).then( res => {
        const {descripciones,fechas,montos} = res
        setDescripciones(descripciones)
        setFechas(fechas)
        setMontos(montos)
        const rows2 = [];
        for(const i in descripciones){
          rows2.push(createData(descripciones[i],fechas[i],montos[i])) 
        }
        setRows(rows2)
    }).catch(err=>{
        console.log(err);
    })
  }, [idCuenta]); 
     
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
      //Creacion de las tablas, cards, dropdowns.
        <Content>
            <Title> </Title>
            <Grid container justifyContent = "space-evenly" style={{ gap: 15 }}>
            <Box alignItems = "center" sx={{ minWidth: 120 }}>
              <Card elevation = {6}>
                <Title >Banco</Title>
                <Subtitle>{banks[0]}</Subtitle>
              </Card>
            </Box>
            
            <Box alignItems = "center" sx={{ minWidth: 160 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Numero De Cuenta</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={idCuenta}
                  label="ID"
                  onChange={cambio}
                >
                {id.map((idx) => {
                return(
                  <MenuItem value ={idx} onChange={() => setIdC(idx)}>{numeroCuenta[id.indexOf(idx)]}</MenuItem>
                )})}
                
                
                
                </Select>
              </FormControl>
              
            </Box>
            </Grid>
            
            <Title> </Title>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                <StyledTableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>
                                {column.label}
                                </StyledTableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                return (
                    <StyledTableRow key ={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                    <StyledTableCell align = "left">{row.Detalles}</StyledTableCell>
                    <StyledTableCell align = "left">{row.fecha}</StyledTableCell>
                    <StyledTableCell align = "left">{new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'CLP' }).format(row.monto)}</StyledTableCell>
                    </StyledTableRow>
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
            <Grid container padding = {5} sx={{ mx: "auto" }} justifyContent = "space-evenly" style={{ gap: 15 }}>
              <Grid>
                <Card padding = {10} elevation = {6}>
                  <Title >Abonos</Title>
                  <Subtitle>{new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'CLP' }).format(abonos)}</Subtitle>
                
                </Card>
              </Grid>
              <Grid>
                <Card padding = {10} elevation = {6}>
                  <Title>Cargos</Title>
                  <Subtitle>{new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'CLP' }).format(cargos)}</Subtitle>
                </Card>
              </Grid>
              
              <Card padding = {10} elevation = {6} margin-top ={5}>
                <Title>Total</Title>
                <Subtitle>{new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'CLP' }).format(total)}</Subtitle>
              </Card>
            </Grid>
            <Box textAlign = 'center'>
                <Button variant = "contained" href = "..\Upload">Insertar Cartola</Button>
            </Box>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            
        </Content>

        
    )
}