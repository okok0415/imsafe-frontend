import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, ContainerCount, BlackCount, DaemonProcessCount, NormalTaskProcessCount, CreationDate, LastExecutionDate, Execute, Delete) {
  return { name, ContainerCount, BlackCount, DaemonProcessCount, NormalTaskProcessCount, CreationDate, LastExecutionDate, Execute, Delete };
}

const rows = [
  createData('Dummy1', 3, 4, 2, 6, '20-08-18', '20-08-08', 1, 1),
  createData('Dummy2', 8, 10, 2, 6, '19-08-18', '20-01-21', 1, 1),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Program Name</StyledTableCell>
            <StyledTableCell align="right">Container Count</StyledTableCell>
            <StyledTableCell align="right">Block Count</StyledTableCell>
            <StyledTableCell align="right">Daemon Process Count</StyledTableCell>
            <StyledTableCell align="right">Normal Task Process Count</StyledTableCell>
            <StyledTableCell align="right">Creation Date</StyledTableCell>
            <StyledTableCell align="right">Last Execution Date</StyledTableCell>
            <StyledTableCell align="right">Execute</StyledTableCell>
            <StyledTableCell align="right">Delete</StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.ContainerCount}</StyledTableCell>
              <StyledTableCell align="right">{row.BlackCount}</StyledTableCell>
              <StyledTableCell align="right">{row.DaemonProcessCount}</StyledTableCell>
              <StyledTableCell align="right">{row.NormalTaskProcessCount}</StyledTableCell>
              <StyledTableCell align="right">{row.CreationDate}</StyledTableCell>
              <StyledTableCell align="right">{row.LastExecutionDate}</StyledTableCell>
              <StyledTableCell align="right">{row.Execute}</StyledTableCell>
              <StyledTableCell align="right">{row.Delete}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}