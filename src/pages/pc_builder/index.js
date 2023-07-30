import RootLayout from "@/components/layouts/RootLayout"
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { Button, Container, ListItemText, Paper, Stack } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { useRouter } from "next/router";
import CardItem from "./CardItem";
import { useDispatch, useSelector } from 'react-redux';
import { setAlertMessageContent } from "@/redux/cart/cartSlice";
import AlertDialogMessage from "@/components/AlertDialogMessage";

const PcBuilderPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { products } = useSelector((state) => state.cart);

  const handleNavigate = (route) => {
    router.push(route);
  };

  const isProcessor = products.filter(product => product.category === 'Processor')?.length > 0;
  const isMotherboard = products.filter(product => product.category === 'Motherboard')?.length > 0;
  const isRAM = products.filter(product => product.category === 'RAM')?.length > 0;
  const isPowerSupplyUnit = products.filter(product => product.category === 'Power Supply Unit')?.length > 0;
  const isStorageDevice = products.filter(product => product.category === 'Storage Device')?.length > 0;
  const isMonitor = products.filter(product => product.category === 'Monitor')?.length > 0;

  // ALERT MESSAGE ACTION START
  const [alertOpen, setAlertOpen] = React.useState(false);

  const handleAlertClick = () => {
    setAlertOpen(true);
  };
  const handleAlertClose = () => {
    setAlertOpen(false);
  };
  // ALERT MESSAGE ACTION END

  const handlePcBuilder = () => {
    dispatch(setAlertMessageContent('Successfully Completed'));
    handleAlertClick();
  }

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
          <Button variant="contained" color="error" disabled={!(isProcessor === true && isMotherboard === true && isRAM === true && isPowerSupplyUnit === true && isStorageDevice === true && isMonitor === true)} onClick={handlePcBuilder}>Add To Builder</Button>
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
          <Divider component="li" variant="inset" />
          {!products?.filter(product => product.category === 'Processor')?.length && <Typography color="red" align="center" py={3}>Empty</Typography>}
          {
            products
              ?.filter(product => product.category === 'Processor')
              ?.map(product => (
                <CardItem key={product?._id} product={product} />
              ))
          }
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
          <Divider component="li" variant="inset" />
          {!products?.filter(product => product.category === 'Motherboard')?.length && <Typography color="red" align="center" py={3}>Empty</Typography>}
          {
            products
              ?.filter(product => product.category === 'Motherboard')
              ?.map(product => (
                <CardItem key={product?._id} product={product} />
              ))
          }
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
          <Divider component="li" variant="inset" />
          {!products?.filter(product => product.category === 'RAM')?.length && <Typography color="red" align="center" py={3}>Empty</Typography>}
          {
            products
              ?.filter(product => product.category === 'RAM')
              ?.map(product => (
                <CardItem key={product?._id} product={product} />
              ))
          }
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
          <Divider component="li" variant="inset" />
          {!products?.filter(product => product.category === 'Power Supply Unit')?.length && <Typography color="red" align="center" py={3}>Empty</Typography>}
          {
            products
              ?.filter(product => product.category === 'Power Supply Unit')
              ?.map(product => (
                <CardItem key={product?._id} product={product} />
              ))
          }
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
          <Divider component="li" variant="inset" />
          {!products?.filter(product => product.category === 'Storage Device')?.length && <Typography color="red" align="center" py={3}>Empty</Typography>}
          {
            products
              ?.filter(product => product.category === 'Storage Device')
              ?.map(product => (
                <CardItem key={product?._id} product={product} />
              ))
          }
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
          <Divider component="li" variant="inset" />
          {!products?.filter(product => product.category === 'Monitor')?.length && <Typography color="red" align="center" py={3}>Empty</Typography>}
          {
            products
              ?.filter(product => product.category === 'Monitor')
              ?.map(product => (
                <CardItem key={product?._id} product={product} />
              ))
          }
          <Divider />
        </List>
      </Paper>
      {/* ALERT MESSAGE SHOW */}
      <AlertDialogMessage handleAlertClose={handleAlertClose} alertOpen={alertOpen} />
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

