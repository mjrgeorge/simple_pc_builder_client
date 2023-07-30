import RootLayout from '@/components/layouts/RootLayout';
import { addToCart } from '@/redux/cart/cartSlice';
import { Box, Button, CardActionArea, CardActions, Grid, Rating } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

const ProductByCategoryPage = ({ productsByCategory }) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
        router.push('/pc_builder');
    }
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
                                                    </CardContent>
                                                </CardActionArea>
                                            </Link>
                                            <CardActions>
                                                <Button variant='contained' color="error" fullWidth onClick={() => handleAddToCart(product)}>
                                                    Select
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

export const getServerSideProps = async (context) => {
    const { params } = context;
    const res = await fetch(`https://simple-pc-builder-server.vercel.app/products/${params?.categoryName}`);
    const data = await res.json();
    return {
        props: {
            productsByCategory: data
        }
    }
}