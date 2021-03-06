import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { CreateProduct } from './product/createProduct';
import { CreatePresentation } from './createPresentation';
import { CreateReception } from './reception/createReception';
import ProductTableNavigate from '../pages/products';
import ReceptionTableNavigate from './receptionTableNavigate';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Productos" {...a11yProps(0)} />
          <Tab label="Crear Producto" {...a11yProps(1)} />
          <Tab label="Crear Presentacion" {...a11yProps(2)} />
          <Tab label="Recepciones" {...a11yProps(3)} />
          <Tab label="Recepcionar producto" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <ProductTableNavigate></ProductTableNavigate>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CreateProduct></CreateProduct>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <CreatePresentation></CreatePresentation>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <ReceptionTableNavigate></ReceptionTableNavigate>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <CreateReception></CreateReception>
      </TabPanel>
    </Box>
  );
}
