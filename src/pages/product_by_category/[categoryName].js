import RootLayout from '@/components/layouts/RootLayout';
import { Box, Button, CardActionArea, CardActions, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

const ProductByCategoryPage = ({ productsByCategory }) => {
    return (
        <Box>
            {
                productsByCategory?.data?.length > 0 ?
                    (

                        <Grid
                            container
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            spacing={3}
                        >
                            {
                                productsByCategory?.data?.map(product => (
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
                                            </Link>
                                            <CardActions>
                                                <Link href={`/product/${product?._id}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                                                    <Button size="small" color="primary">
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
                        <Typography variant="body2" color="red">
                            Something went wrong!
                        </Typography>
                    )
            }

        </Box>
    )
}

export default ProductByCategoryPage



ProductByCategoryPage.getLayout = function getLayout(page) {
    return (
        <RootLayout>
            {page}
        </RootLayout>
    )
}

export const getStaticPaths = async () => {
    const res = await fetch(`http://localhost:5000/products`);
    const products = await res.json();

    const paths = products.data.map((product) => ({
        params: { categoryName: product.category }
    }));
    return { paths, fallback: false }
}

export const getStaticProps = async (context) => {
    const { params } = context;
    const res = await fetch(`http://localhost:5000/products/${params?.categoryName}`);
    const data = await res.json();
    return {
        props: {
            productsByCategory: data
        }
    }
}