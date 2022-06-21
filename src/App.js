import "./App.css";
import Box from "@mui/material/Box";
import TabPanel from "./pages/menu";

function App() {
  return (
    <div className="App">
      <Box m={2} pt={3}>
        <TabPanel></TabPanel>
      </Box>
    </div>
  );
}

export default App;
