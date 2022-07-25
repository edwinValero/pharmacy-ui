import * as React from 'react';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import {
  IconButton,
  InputAdornment,
  Pagination,
  TextField,
} from '@mui/material';
import ReceptionTable from './reception/receptionTable';

function createReception(id, ticket, provider, product, price) {
  return {
    id,
    ticket,
    provider,
    product,
    price,
  };
}

export default function ReceptionTableNavigate() {
  const receptions = [
    createReception(1, 'ticket 1', 'JC la 41', 'producto 1', 1000),
    createReception(2, 'ticket 2', 'Roma', 'producto 1', 1000),
    createReception(3, 'ticket 3', 'Physer', 'producto 2', 1000),
  ];

  return (
    <Box>
      <Box sx={{ '& > :not(style)': { m: 1 } }}>
        <TextField
          label="Buscar por factura"
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          label="Buscar por proveedor"
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          label="Buscar por producto"
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Box>
        <ReceptionTable receptions={receptions}></ReceptionTable>
      </Box>
      <Box
        sx={{
          p: 2,
          alignItems: 'center',
          justify: 'center',
          display: 'flex',
          'justify-content': 'center',
        }}
      >
        <Pagination count={10} color="primary" />
      </Box>
    </Box>
  );
}
