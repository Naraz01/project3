import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

function Row(props:any) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow onClick={() => setOpen(!open)} sx={{ '& > *': { borderBottom: 'unset' } }}>
        {
          /*
          <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
          */
        }
        <TableCell component="th" scope="row" align="left">
          {row.name}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Vendor code</TableCell>
                    <TableCell>EAN-13 CODE</TableCell>
                    <TableCell>Price purchases</TableCell>
                    <TableCell>Sale proce</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {
                  row.goods.lenght > 0 ?
                    <TableRow>
                        <TableCell>
                          тавар нету   
                        </TableCell>
                    </TableRow>
                    :
                  row.goods.map((historyRow: any) => (
                    <TableRow key={historyRow.id}>
                      <TableCell component="th" scope="row">
                        {historyRow.name}
                      </TableCell>
                      <TableCell>
                          {historyRow.vendorCode
                          }</TableCell>
                      <TableCell>
                          {historyRow.eanCode}
                        </TableCell>
                      <TableCell>
                          {historyRow.pricePurchases}
                      </TableCell>
                      <TableCell>
                          {historyRow.salePrice}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function CollapsibleTable() {
    const {groupe} = useSelector((state : RootState ) => {
        return {
            groupe: state.groupe.data
        }
    });
    return (
        <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
            <TableHead>
            <TableRow>
                <TableCell align="left">Groupe</TableCell>
                <TableCell />
            </TableRow>
            </TableHead>
            <TableBody>
            {groupe && groupe.map((row:any, i:number) => (
                <Row key={row.id} row={row} />
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    );
}
