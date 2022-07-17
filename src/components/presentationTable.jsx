import * as React from "react";
import PropTypes from "prop-types";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableRow from "./TableRow";
import TableCell from "./TableCell";

PresentationTable.propTypes = {
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default function PresentationTable(props) {
  const { rows } = props;
  return (
    <Table size="small" aria-label="purchases">
      <TableHead>
        <TableRow>
          <TableCell>Nombre</TableCell>
          <TableCell align="right">Cantidad</TableCell>
          <TableCell align="right">Total price ($)</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((presRow) => (
          <TableRow key={presRow.name}>
            <TableCell component="th" scope="row">
              {presRow.name}
            </TableCell>
            <TableCell align="right">{presRow.amount}</TableCell>
            <TableCell align="right">{presRow.price}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
