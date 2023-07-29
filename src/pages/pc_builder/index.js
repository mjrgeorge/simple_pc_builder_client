import RootLayout from "@/components/layouts/RootLayout"
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { Button, Container, IconButton, Paper, Stack } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import { useRouter } from "next/router";
import CardItem from "./CardItem";

const PcBuilderPage = () => {
  const router = useRouter();

  const handleNavigate = (route) => {
    router.push(route);
  };

  return (
    <Container maxWidth="md">
      <Paper variant="outlined" sx={{ p: 3 }} >
        <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={3}>
          <Typography
            variant="h5"
            align="center"
          >
            PC Builder
          </Typography>
          <Button variant="contained" color="error">Add To Builder</Button>
        </Stack>
        <List
          sx={{
            width: "100%",
            bgcolor: "background.paper"
          }}
        >
          <Divider />
          <ListItem secondaryAction={
            <Button variant="outlined" startIcon={<AddIcon />} onClick={() => handleNavigate('/product_by_category_pc_builder/Processor')}>
              Choose
            </Button>

          }>
            <ListItemText primary="Processor" secondary="Required" />
          </ListItem>
          <CardItem />
          <Divider />
        </List >
        <List
          sx={{
            width: "100%",
            bgcolor: "background.paper"
          }}
        >
          <Divider />
          <ListItem secondaryAction={
            <Button variant="outlined" startIcon={<AddIcon />} onClick={() => handleNavigate('/product_by_category_pc_builder/Motherboard')}>
              Choose
            </Button>

          }>
            <ListItemText primary="Motherboard" secondary="Required" />
          </ListItem>
          <CardItem />
          <Divider />
        </List>
        <List
          sx={{
            width: "100%",
            bgcolor: "background.paper"
          }}
        >
          <Divider />
          <ListItem secondaryAction={
            <Button variant="outlined" startIcon={<AddIcon />} onClick={() => handleNavigate('/product_by_category_pc_builder/RAM')}>
              Choose
            </Button>

          }>
            <ListItemText primary="RAM" secondary="Required" />
          </ListItem>
          <CardItem />
          <Divider />
        </List>
        <List
          sx={{
            width: "100%",
            bgcolor: "background.paper"
          }}
        >
          <Divider />
          <ListItem secondaryAction={
            <Button variant="outlined" startIcon={<AddIcon />} onClick={() => handleNavigate('/product_by_category_pc_builder/Power Supply Unit')}>
              Choose
            </Button>

          }>
            <ListItemText primary="Power Supply Unit" secondary="Required" />
          </ListItem>
          <CardItem />
          <Divider />
        </List>
        <List
          sx={{
            width: "100%",
            bgcolor: "background.paper"
          }}
        >
          <Divider />
          <ListItem secondaryAction={
            <Button variant="outlined" startIcon={<AddIcon />} onClick={() => handleNavigate('/product_by_category_pc_builder/Storage Device')}>
              Choose
            </Button>

          }>
            <ListItemText primary="Storage Device" secondary="Required" />
          </ListItem>
          <CardItem />
          <Divider />
        </List>
        <List
          sx={{
            width: "100%",
            bgcolor: "background.paper"
          }}
        >
          <Divider />
          <ListItem secondaryAction={
            <Button variant="outlined" startIcon={<AddIcon />} onClick={() => handleNavigate('/product_by_category_pc_builder/Monitor')}>
              Choose
            </Button>

          }>
            <ListItemText primary="Monitor" secondary="Required" />
          </ListItem>
          <CardItem />
          <Divider />
        </List>
      </Paper>
    </Container >
  )
}

export default PcBuilderPage


PcBuilderPage.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      {page}
    </RootLayout>
  )
}

