/* eslint-disable react/jsx-key */
import CategorySection from '@/components/CategorySection';
import RootLayout from '@/components/layouts/RootLayout';
import { Box, Button, CardActionArea, CardActions, Grid, Rating } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

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
                      <Link href={`/product/${product?._id}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            height="140"
                            image={product?.image}
                            alt={product?.product_name}
                          />
                          <CardContent>
                            <Typography variant="h5" gutterBottom>
                              {product?.product_name}
                            </Typography>
                            <Typography gutterBottom variant="h6">
                              Category:{product?.category}
                            </Typography>
                            <Typography gutterBottom>
                              Status: {product?.status}
                            </Typography>
                            <Typography gutterBottom>
                              Price: {product?.price}
                              ৳
                            </Typography>
                            <Rating name="read-only" value={product?.average_rating} readOnly />
                            <Typography variant="body2" color="text.secondary">
                              {product?.description}
                              {product?.description?.length > 0 ? product?.description?.slice(0, 100).concat('...') : product?.description?.slice(0, 35).concat('...')}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Link>
                      <CardActions>
                        <Link href={`/product/${product?._id}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                          <Button color="primary">
                            Details
                          </Button>
                        </Link>
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
            <Typography variant="h2" color="red" align='center' p={6}>
              Something went wrong!
            </Typography>
          )
      }
      <CategorySection />
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