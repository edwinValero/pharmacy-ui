import * as React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import ProductTable from "./productTable";
import {
  IconButton,
  InputAdornment,
  Pagination,
  TextField,
} from "@mui/material";

function createProduct(id, name, taxes, barCode, presentations) {
  return {
    id,
    name,
    taxes,
    barCode,
    presentations,
  };
}
function createPresentations(product, price1, price2, price3) {
  return [
    {
      name: "Unidad",
      amount: 1,
      price: price1,
    },
    {
      name: "Sobre",
      amount: 10,
      price: price2,
    },
    {
      name: "Caja",
      amount: 50,
      price: price3,
    },
  ];
}

export default function ProductTableNavigate() {
  const products = [
    createProduct(
      1,
      "producto1",
      19,
      1234,
      createPresentations(100, 900, 4500)
    ),
    createProduct(
      2,
      "producto2",
      19,
      1235,
      createPresentations(100, 900, 4500)
    ),
    createProduct(
      3,
      "producto3",
      19,
      1236,
      createPresentations(100, 900, 4500)
    ),
  ];
  const stocks = new Map();
  stocks.set(1, 10);
  stocks.set(2, 20);
  stocks.set(3, 30);

  return (
    <Box>
      <Box sx={{ "& > :not(style)": { m: 1 } }}>
        <TextField
          sx={{ width: "90%" }}
          label="Buscar por Nombre o Codigo de barras"
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

        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Box>
      <Box>
        <ProductTable products={products} stocks={stocks}></ProductTable>
      </Box>
      <Box
        sx={{
          p: 2,
          alignItems: "center",
          justify: "center",
          display: "flex",
          "justify-content": "center",
        }}
      >
        <Pagination count={10} color="primary" />
      </Box>
    </Box>
  );
}
