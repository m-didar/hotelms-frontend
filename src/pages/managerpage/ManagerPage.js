import React, {useState} from 'react'
import './ManagerPage.css'
import { styled } from '@mui/material/styles'
import Divider from "@mui/material/Divider";
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TimePicker from '@mui/lab/TimePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'

import { TextField,Button, Typography,Select,FormControl,MenuItem,InputLabel,Box,Paper} from '@mui/material'

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
const fieldStyle = {
    width:'200px',
    marginLeft:'10px'
}
const fieldStyle1 = {
    width:'100px',
    marginLeft:'10px'
}

function createData(empid, rnumber, hotelid, start, end) {
    return { empid, rnumber, hotelid, start, end};
}

const rows = [
    createData(1, 201, 1,'10:00','10:45'),
];

function ManagerPage() {
    const [empid, setEmpid] = useState('')
    const [hotelid, setHotelid] = useState('')
    const [rnumber, setRnumber] = useState('')
    const [hoursworked, setHoursWorked] = useState('')
    const handleEmpidChange = (event) => {
        setEmpid(event.target.value)
    }
    const handleRnumberChange = (event) => {
        setRnumber(event.target.value)
    }
    const handleHotelidChange = (event) => {
        setHotelid(event.target.value)
    }
    const handleHoursWorkedChange = (event) => {
        setHoursWorked(event.target.value)
    }
    const handleEdit = () => {

    }
    const handleDelete = () => {

    }
    const handleAdd = () => {

    }
    const handleSave = () => {

    }
    const [value, setValue] = React.useState(null);
    return (
        <div className="manager">
            <div className="manager">
                <Typography sx={{ mb: 5, mt: 20 }} variant="h4" component="h1" align="center">Manager Page</Typography>
                <TableContainer component={Paper}>
                    <Table sx={{ width: '100%' }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Employee ID</StyledTableCell>
                                <StyledTableCell align="right">Room Number</StyledTableCell>
                                <StyledTableCell align="right">Hotel ID</StyledTableCell>
                                <StyledTableCell align="right">Start Time</StyledTableCell>
                                <StyledTableCell align="right">End Time</StyledTableCell>
                                <StyledTableCell align="right">Action</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <StyledTableRow key={row.name}>
                                    <StyledTableCell component="th" scope="row">
                                        {row.empid}
                                    </StyledTableCell>
                                    <StyledTableCell align="right">{row.rnumber}</StyledTableCell>
                                    <StyledTableCell align="right">{row.hotelid}</StyledTableCell>
                                    <StyledTableCell align="right">{row.start}</StyledTableCell>
                                    <StyledTableCell align="right">{row.end}</StyledTableCell>
                                    <StyledTableCell align="right"><Button onClick={handleEdit}
                                                                           sx={{

                                                                               mt: 2,
                                                                               p: 1.2,
                                                                               bgcolor: '#DD7564',
                                                                               '&:hover': {
                                                                                   bgcolor: '#e2462c'
                                                                               }
                                                                           }}
                                                                           variant="contained"

                                    >
                                        Edit
                                    </Button><Button onClick={handleDelete}

                                                     sx={{

                                                         mt: 2,
                                                         p: 1.2,
                                                         bgcolor: '#DD7564',
                                                         '&:hover': {
                                                             bgcolor: '#e2462c'
                                                         }
                                                     }}
                                                     variant="contained"

                                    >
                                        Delete
                                    </Button></StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <Divider sx={{ color: "#000", width: '100%', mb: 3 }} />
            <div className="manager_div">
                <Typography sx={{ mb: 2 }} variant="h4" component="h1" align="center">Add New Task</Typography>
                <TextField
                    sx={fieldStyle}
                    id="empid-field"
                    label="Employee ID"
                    variant="outlined"
                    value={empid}
                    onChange={handleEmpidChange}
                />
                <TextField
                    sx={fieldStyle}
                    id="rnumber-field"
                    label="Room Number"
                    variant="outlined"
                    value={rnumber}
                    onChange={handleRnumberChange}
                />
                <TextField
                    sx={fieldStyle}
                    id="hotelid-field"
                    label="Hotel ID"
                    variant="outlined"
                    value={hotelid}
                    onChange={handleHotelidChange}
                />
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <TimePicker
                        label="Start Time"
                        value={value}
                        onChange={(newValue) => {
                            setValue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <TimePicker
                        label="End Time"
                        value={value}
                        onChange={(newValue) => {
                            setValue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}

                    />
                </LocalizationProvider>
                <Button onClick={handleAdd}
                        sx={{
                            height: 'auto',
                            p: 1.2,
                            bgcolor: '#DD7564',
                            '&:hover': {
                                bgcolor: '#e2462c'
                            }
                        }}
                        variant="contained"
                >Add</Button>
            </div>
            <Divider sx={{ color: "#000", width: '100%', mb: 5, mt: 5 }} />
            <div>
                <Typography variant="h4" component="h1" align="center">Employee Salary Estimation</Typography>
                <div >
                    <TableContainer sx={{ width:'100%' }} component={Paper}>
                        <Table sx={{ width:'100%' }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>Employee ID</StyledTableCell>
                                    <StyledTableCell align="right">Hours Worked</StyledTableCell>
                                    <StyledTableCell align="right">Paying Rate</StyledTableCell>
                                    <StyledTableCell align="right">Salary</StyledTableCell>
                                    <StyledTableCell align="right">Save</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <StyledTableRow key={row.name}>
                                        <StyledTableCell component="th" scope="row">
                                            1
                                        </StyledTableCell>
                                        <StyledTableCell align="right"><TextField
                                            sx={fieldStyle1}
                                            id="hoursworked-field"
                                            label="Hour Worked"
                                            variant="outlined"
                                            value={hoursworked}
                                            onChange={handleHoursWorkedChange}
                                            type="number"
                                        /></StyledTableCell>
                                        <StyledTableCell align="right">7000 tg</StyledTableCell>
                                        <StyledTableCell align="right">...</StyledTableCell>
                                        <StyledTableCell align="right"><Button onClick={handleSave}
                                                                               sx={{
                                                                                   mt: 1,
                                                                                   p: 1.2,
                                                                                   bgcolor: '#DD7564',
                                                                                   '&:hover': {
                                                                                       bgcolor: '#e2462c'
                                                                                   }
                                                                               }}
                                                                               variant="contained"
                                        >Save</Button></StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                </div>

            </div>
        </div>
    )
}

export default ManagerPage
