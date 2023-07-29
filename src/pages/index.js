/* eslint-disable react/jsx-key */
import RootLayout from '@/components/layouts/RootLayout';
import { Box, Button, CardActionArea, CardActions, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const HomePage = ({ allProducts }) => {
  return (
    <Box>
      {
        allProducts?.data?.length > 0 ?
          (

            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={3}
            >
              {
                allProducts?.data?.map(product => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={product?._id}>
                    <Card sx={{ maxWidth: 345 }}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="140"
                          image={product?.image}
                          alt={product?.product_name}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h6" component="div">
                            {product?.product_name}
                          </Typography>
                          <Typography gutterBottom variant="h5" component="div">
                            {product?.category}
                          </Typography>
                          <Typography gutterBottom variant="h6" component="div">
                            {product?.status}
                          </Typography>
                          <Typography gutterBottom variant="h4" component="div">
                            {product?.price}
                          </Typography>
                          <Typography gutterBottom component="div">
                            {product?.average_rating}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {product?.description}
                            {product?.description?.length > 0 ? product?.description?.slice(0, 100).concat('...') : product?.description?.slice(0, 35).concat('...')}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <Button size="small" color="primary">
                          Details
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                )
                )
              }

            </Grid>
          )
          :
          (
            <Typography variant="body2" color="red">
              Something went wrong!
            </Typography>
          )
      }

    </Box>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      {page}
    </RootLayout>
  )
}

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:5000/products');
  const data = await res.json();
  return {
    props: {
      allProducts: data
    }
  }
}