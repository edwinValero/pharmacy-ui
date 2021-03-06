import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircle from '@mui/icons-material/AddCircle';
import PresentationTable from '../presentationTable';
import TableRow from '../TableRow';
import TableCell from '../TableCell';

ProductRow.propTypes = {
  row: PropTypes.shape({
    name: PropTypes.string.isRequired,
    tax: PropTypes.number.isRequired,
    barCode: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired,
    presentations: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};

export default function ProductRow(props) {
  const { row, stock } = props;
  const [open, setOpen] = React.useState(false);

  const deleteIcon = (
    <IconButton onClick={() => console.log('delete')}>
      <DeleteIcon color="secondary" />
    </IconButton>
  );

  const editIcon = (
    <IconButton onClick={() => console.log('edit')}>
      <EditIcon color="primary" />
    </IconButton>
  );

  const addIcon = (
    <IconButton onClick={() => console.log('add')}>
      <AddCircle color="primary" />
    </IconButton>
  );

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.tax}</TableCell>
        <TableCell align="right">{row.barCode}</TableCell>
        <TableCell align="right">{stock || 0}</TableCell>
        <TableCell align="right">
          {deleteIcon}
          {editIcon}
          {addIcon}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Presentaciones
              </Typography>
              <PresentationTable rows={row.presentations}></PresentationTable>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}
