import * as React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import { styled, alpha } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import ProductTable from "./productTable";
import { IconButton, InputAdornment, TextField } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "80%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function createProduct(name, taxes, barCode, presentations) {
  return {
    name,
    taxes,
    barCode,
    presentations,
  };
}
function createPresentations(price1, price2, price3) {
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
  let rows = [
    createProduct("producto1", 19, 1234, createPresentations(100, 900, 4500)),
    createProduct("producto2", 19, 1235, createPresentations(100, 900, 4500)),
    createProduct("producto3", 19, 1236, createPresentations(100, 900, 4500)),
  ];

  return (
    <Box>
      <Box sx={{ "& > :not(style)": { m: 1 } }}>
        <TextField
          sx={{ width: "90%" }}
          label="With normal TextField"
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
        <ProductTable rows={rows}></ProductTable>
      </Box>
    </Box>
  );
}
