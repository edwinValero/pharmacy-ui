import "./App.css";
import Box from "@mui/material/Box";
import BasicTabs from "./pages/menu";

function App() {
  return (
    <div className="App">
      <Box m={2} pt={3}>
        <BasicTabs></BasicTabs>
      </Box>
    </div>
  );
}

export default App;
