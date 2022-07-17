import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import ProductTable from '../components/productTable';
import {
  IconButton,
  InputAdornment,
  LinearProgress,
  Pagination,
  TextField,
} from '@mui/material';
import { useQuery } from 'react-query';

export default function ProductTableNavigate() {
  const { isLoading, error, data } = useQuery(['products'], () =>
    fetch('http://localhost:3010/api/products').then((res) => res.json()),
  );
  const products = data.items;

  if (error) {
    return <div>{JSON.stringify(error)}</div>;
  }

  const stocks = new Map();
  stocks.set(1, 10);
  stocks.set(2, 20);
  stocks.set(3, 30);

  return (
    <Box>
      <Box sx={{ '& > :not(style)': { m: 1 } }}>
        <TextField
          sx={{ width: '90%' }}
          label="Buscar por Nombre o Codigo de barras"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Box>
      <Box>
        {isLoading ? (
          <LinearProgress />
        ) : (
          <ProductTable products={products} stocks={stocks}></ProductTable>
        )}
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
