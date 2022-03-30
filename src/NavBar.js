import * as React from 'react';
import './Style.css';
//Page Sections
import Itinerary from './Itinerary';
import Registry from './Registry';
import Hotel from './Hotel';
import ImageGallery from "./ImageGallery";
import Contact from "./Contact";
import RSVP from "./RSVP";

import Typography from '@mui/material/Typography';
import { Box, Tab, Tabs } from '@mui/material';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
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

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function NavBar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box>
      <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons allowScrollButtonsMobile aria-label="basic tabs example">
        <Tab label="Itinerary" {...a11yProps(0)} />
        <Tab label="Lodging" {...a11yProps(1)} />
        <Tab label="Registry" {...a11yProps(2)} />
        <Tab label="Photos" {...a11yProps(3)} />
        <Tab label="RSVP" {...a11yProps(4)} />
        <Tab label="Contact Info" {...a11yProps(5)} />
      </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Itinerary />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Hotel />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Registry />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <ImageGallery />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <RSVP />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Contact />
      </TabPanel>
    </div>
  );
}