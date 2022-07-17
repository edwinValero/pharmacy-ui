import { styled } from "@mui/material/styles";
import { tableCellClasses } from "@mui/material/TableCell";
import { TableCell as MaterialTableCell } from "@mui/material";

const TableCell = styled(MaterialTableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export default TableCell;
