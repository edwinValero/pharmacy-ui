import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import TableRow from "./TableRow";
import TableCell from "./TableCell";
export default function ReceptionTable(props) {
  const { receptions } = props;

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell>Numero de factura</TableCell>
            <TableCell align="right">Proveedor</TableCell>
            <TableCell align="right">producto</TableCell>
            <TableCell align="right">precio</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {receptions.map((row) => (
            <React.Fragment>
              <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
                <TableCell component="th" scope="row">
                  {row.ticket}
                </TableCell>
                <TableCell align="right">{row.provider}</TableCell>
                <TableCell align="right">{row.product}</TableCell>
                <TableCell align="right">{row.price}</TableCell>
              </TableRow>
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
