import { styled } from "@mui/material/styles";
import { TableRow as MaterialTableRow } from "@mui/material";

const TableRow = styled(MaterialTableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default TableRow;
