import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import ProductTable from '../components/product/productTable';
import {
  IconButton,
  InputAdornment,
  LinearProgress,
  Pagination,
  TextField,
} from '@mui/material';
import { useQuery } from 'react-query';
import { useState } from 'react';
import { Products } from '../models/products';

export default function ProductTableNavigate() {
  const [pageNumber, setPageNumber] = useState(1);
  const { isLoading, isError, error, data } = useQuery<Products, Error>(
    ['products', pageNumber],
    () =>
      fetch(`http://localhost:3010/api/products?page=${pageNumber}`).then(
        (res) => res.json(),
      ),
  );

  const products = data?.items || [];
  const handlePagination = (
    event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    setPageNumber(value);
  };
  const totalPages = data?.meta?.totalPages || 0;

  const stocks = new Map();

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
        ) : isError ? (
          <h2>{error?.message}</h2>
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
        <Pagination
          count={totalPages}
          page={pageNumber}
          onChange={handlePagination}
          color="primary"
        />
      </Box>
    </Box>
  );
}
