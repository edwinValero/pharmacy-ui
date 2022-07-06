import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ProductRow from "./productRow";

export default function ProductTable(props) {
  const { products, stocks } = props;

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Nombre producto</TableCell>
            <TableCell align="right">IVA</TableCell>
            <TableCell align="right">Codigo de barras</TableCell>
            <TableCell align="right">Existencias por unidad</TableCell>
            <TableCell align="right">Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((row) => (
            <ProductRow key={row.name} row={row} stock={stocks.get(row.id)} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
