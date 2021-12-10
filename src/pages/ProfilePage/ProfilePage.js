import React, {useState} from 'react'
import './ProfilePage.css'
import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'


import { Typography,List,ListItem,Paper, Divider} from '@mui/material'

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor:"#DD7564",
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.common.white,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
  function createData(billid,hotelid, service_type,rnumber,price,checkout) {
    return { billid,hotelid, service_type,rnumber,price,checkout};
  }
  
  const rows = [
    createData(1, "PIKA-Astana", "Cinema",201,"80000 tg",'23-8-2021'),
    createData(1, "PIKA-Astana", "SPA",201,"120000 tg",'23-8-2021'),
    createData(2, "PIKA-Almaty", "Snacks",305,"350000 tg",'12-9-2021'),
];
function ProfilePage() {
   
    const [value, setValue] = React.useState(null);
    return (
        <div className="profile">
            <div className='profile_div'>
            <Typography variant="h4" component="h1" backgroundColor="#DD7564" align="left">Profile</Typography>
            <Divider variant='middle'/>
            <List>
          <ListItem disablePadding>
          <Typography variant="h6" component="h1"  align="Left">Name: </Typography><Typography variant="h6" component="h1"  align="Left">Azamat</Typography>
          </ListItem>
          <ListItem disablePadding>
          <Typography variant="h6" component="h1"  align="Left">Surname: </Typography><Typography variant="h6" component="h1"  align="Left">Nurbek</Typography>
          </ListItem>
          <ListItem disablePadding>
          <Typography variant="h6" component="h1"  align="Left">Email: </Typography><Typography variant="h6" component="h1"  align="Left">azamat.nurbek@gmail.com</Typography>
          </ListItem>
          <ListItem disablePadding>
          <Typography variant="h6" component="h1"  align="Left">Address: </Typography><Typography variant="h6" component="h1"  align="Left">Aktay city,Kabanbay Batyr 53</Typography>
          </ListItem>
          <ListItem disablePadding>
          <Typography variant="h6" component="h1"  align="Left">Mobile Phone Number: </Typography><Typography variant="h6" component="h1"  align="Left">8(707)-578-90-12</Typography>
          </ListItem>
          <ListItem disablePadding>
          <Typography variant="h6" component="h1"  align="Left">Home Phone Number: </Typography><Typography variant="h6" component="h1"  align="Left">51-23-68</Typography>
          </ListItem>
        </List>

            </div>
            <div className="profile_div">
            <Typography variant="h4" component="h1" className={"logo"} align="center">Billing History</Typography>
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Bill No</StyledTableCell>
                        <StyledTableCell align="right">Hotel</StyledTableCell>
                        <StyledTableCell align="right">Services</StyledTableCell>
                        <StyledTableCell align="right">Room Number</StyledTableCell>
                        <StyledTableCell align="right">Total Price</StyledTableCell>
                        <StyledTableCell align="right">Check-out date</StyledTableCell>
                    </TableRow>
            </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.billid}
              </StyledTableCell>
              <StyledTableCell align="right">{row.hotelid}</StyledTableCell>
              <StyledTableCell align="right">{row.service_type}</StyledTableCell>
              <StyledTableCell align="right">{row.rnumber}</StyledTableCell>
              <StyledTableCell align="right">{row.price}</StyledTableCell>
              <StyledTableCell align="right">{row.checkout}</StyledTableCell>
            </StyledTableRow>
          ))}
            </TableBody>
        </Table>
        </TableContainer>
            
        </div>
        </div>
    )
}

export default ProfilePage
